using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace res_api_aspnetcore.Models
{
    public class Project
    {
        public int Id { get; set; }
        public IList<Unit> Units { get; set; }
        public Company Company { get; set; }
        public string Name { get; set; }
    }
}