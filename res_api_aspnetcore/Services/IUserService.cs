using res_api_aspnetcore.Models;
using System.Threading.Tasks;

namespace res_api_aspnetcore.Services
{
    public interface IUserService
    {
        Task<ApplicationUser> Register(ApplicationUser user);
        Task<bool> UserExists(string identifier);
        Task<ApplicationUser> GetCurrentUser(string username);
        string GenerateAuthToken(ApplicationUser user);
    }
}
