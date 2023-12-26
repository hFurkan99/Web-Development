using demo.Application.Denemeler;
using demo.Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace demo.Controllers
{
    public class DenemelerController : BaseApiController
    {
        [HttpGet] //api/activities
        public async Task<IActionResult> GetDenemeler()
        {
            return HandleResult(await Mediator.Send(new DenemeList.Query())); //List sınıfında, requesti Query olan Handler sınıfını yakalar.
        }
    }
}
