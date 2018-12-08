using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace res_api_aspnetcore.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [MaxLength(50)]
        public string MiddleName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [MaxLength(2000)]
        public string Website { get; set; }
        public ICollection<Company> Companies { get; set; }
        [NotMapped]
        public string FullName
        {
            get { return $"{FirstName} {LastName}"; }
        }
        [NotMapped]
        public List<string> Errors { get; set; } = new List<string>();

    }
}
