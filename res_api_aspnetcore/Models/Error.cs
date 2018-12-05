using System.Collections.Generic;

namespace res_api_aspnetcore.Models
{
    public class Error
    {
        public List<string> Errors { get; set; } = new List<string>();
    }
}
