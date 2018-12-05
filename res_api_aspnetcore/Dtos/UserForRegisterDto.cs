using System.ComponentModel.DataAnnotations;

namespace res_api_aspnetcore.Dtos
{
    public class UserForRegisterDto
    {
        [MinLength(4)]
        public string UserName { get; set; }
        public string Password { get; set; }
        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string MiddleName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
    }
}
