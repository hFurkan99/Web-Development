using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using productsAPI.DTO;
using productsAPI.Models;

namespace productsAPI.Controllers
{

    // localhost:3000/api/users
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _configuration; //appsettingden secrettaki değeri alabilmek için

        public UsersController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        // localhost:3000/api/users/register
        [HttpPost("register")]
        public async Task<IActionResult> CreateUser(UserDTO model)
        {

            if (!ModelState.IsValid)  // userDTO.cs'deki validasyon kurallarına uyulmadıysa
            {
                return BadRequest(ModelState);
            }

            var user = new AppUser
            {
                FullName = model.FullName,
                UserName = model.UserName,
                Email = model.Email,
                DateAdded = DateTime.UtcNow // bu model üzerinden gelmedi

            };

            //Dto özelliği olan parola model üzerinden tanımlandıktan sonra appuser usermanager'ına create ile ekleniyor
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return StatusCode(201);
            }
            return BadRequest(result.Errors);

        }


        // localhost:3000/api/users/login
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);

            if (user == null)
            {
                //500lü hatalar kullanıcı hatası
                return BadRequest(new { message = "Hatalı E-mail" });
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);

            if (result.Succeeded) // başarılı bir değer dönmüşse
            {
                return Ok(new { token = GenerateJWT(user) });
            }

            return Unauthorized();
        }

        private object GenerateJWT(AppUser user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("appSettings:Secret").Value ?? "");  // değeri byte olarak almamız lazım ve null olup olmadığını kontrol ettik. Null ise boş string gönder zaten key bilgisi vardır.

            // Token'ın bölümleri üretilir
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                //Token'ın içerisine eklenecek bilgiler
                Subject = new ClaimsIdentity(
                    new Claim[] {
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()), // payload: data -> nameid
                        new Claim(ClaimTypes.Name, user.UserName ?? ""),//payload: data -> unique_name
                    }
                ),
                Expires = DateTime.UtcNow.AddDays(1),   // Bir gün sonra claimin süresi dolacak
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)   //Token'ın şifreleme aşaması
            };
            var token = tokenHandler.CreateToken(tokenDescriptor); //token oluşturma aşaması
            return tokenHandler.WriteToken(token);
        }
    }
}