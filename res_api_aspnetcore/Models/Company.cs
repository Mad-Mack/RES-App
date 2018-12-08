using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace res_api_aspnetcore.Models
{
    public class Company
    {
        public int Id { get; set; }
        [Required, MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(2056)]
        public string About { get; set; }
        [MaxLength(1000)]
        public string ImageUrl { get; set; }
        public ApplicationUser User { get; set; }
        [ForeignKey("User")]
        public string ApplicationUserId { get; set; }
        public IList<Project> Projects { get; set; }
    }
}