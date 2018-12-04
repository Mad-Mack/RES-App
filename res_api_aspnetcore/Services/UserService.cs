using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using res_api_aspnetcore.Models;

namespace res_api_aspnetcore.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public UserService(UserManager<ApplicationUser> userManager)
        {
            this._userManager = userManager;
        }
        public string GenerateAuthToken(ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        public Task<ApplicationUser> GetCurrentUser(string username)
        {
            throw new NotImplementedException();
        }

        public async Task<ApplicationUser> Register(ApplicationUser user, string password)
        {
            var result = _userManager.CreateAsync(user, password);
        }

        public Task<bool> UserExists(string identifier)
        {
            throw new NotImplementedException();
        }
    }
}
