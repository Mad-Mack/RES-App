using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using res_api_aspnetcore.Dtos;
using res_api_aspnetcore.Models;
using res_api_aspnetcore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace res_api_aspnetcore.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IErrorService _errorService;

        public UsersController(UserManager<ApplicationUser> userManager, IErrorService errorService)
        {
            _userManager = userManager;
            _errorService = errorService;
        }

        [HttpPost, Route("register")]
        public async Task<IActionResult> Register([FromBody] UserForRegisterDto requestBody)
        {
            var errors = new List<string>();
            try
            {
                if (!ModelState.IsValid) return BadRequest(_errorService.GetResponseErrors(ModelState));

                var appUser = new ApplicationUser
                {
                    UserName = requestBody.UserName,
                    Email = requestBody.Email,
                    FirstName = requestBody.FirstName,
                    LastName = requestBody.LastName,
                    MiddleName = requestBody.MiddleName
                };

                var result = await _userManager.CreateAsync(appUser, requestBody.Password);
                if (!result.Succeeded) return BadRequest(_errorService.GetResponseErrors(result));

                var createdUser = await _userManager.Users.SingleOrDefaultAsync(x => x.UserName == requestBody.UserName);
                return CreatedAtAction("GetCurrentUser", new { id = createdUser.Id, userName = createdUser.UserName, fullName = createdUser.FullName });
            }
            catch (Exception ex)
            {
                return StatusCode(500, _errorService.GetResponseErrors(ex.Message));
            }

        }

        [HttpGet, Route("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var user = await _userManager.GetUserAsync(this.User);
            return Ok(user);
        }
    }
}