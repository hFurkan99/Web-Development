using System.ComponentModel.DataAnnotations;

namespace MeetingApp.Models{


    public class UserInfo{

        public int Id { get; set; }

        [Required(ErrorMessage = "Ad alanının doldurulması zorunlu")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Telefon alanının doldurulması zorunlu")]
        public string? Phone { get; set; }
        
        [Required(ErrorMessage = "Email alanının doldurulması zorunlu")]
        [EmailAddress(ErrorMessage = "Hatalı Email")]
        public string? Email { get; set; }
        
        [Required(ErrorMessage = "Katılım durumunuzu belirtiniz")]  
        public bool? WillAttend { get; set; }

    }
}