using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using res_api_aspnetcore.Dtos;
using res_api_aspnetcore.Models;
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

        public UsersController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost, Route("register")]
        public async Task<IActionResult> Register([FromBody] UserForRegisterDto requestBody)
        {
            var errors = new List<string>();
            try
            {
                if (!ModelState.IsValid)
                {
                    foreach (var value in ModelState.Values)
                    {
                        foreach (var error in value.Errors)
                        {
                            errors.Add(error.ErrorMessage);
                        }
                    }

                    return BadRequest(new { errors });
                }
                var appUser = new ApplicationUser
                {
                    UserName = requestBody.UserName,
                    Email = requestBody.Email,
                    FirstName = requestBody.FirstName,
                    LastName = requestBody.LastName,
                    MiddleName = requestBody.MiddleName
                };
                var result = await _userManager.CreateAsync(appUser, requestBody.Password);
                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        errors.Add(error.Description);
                    }
                    return BadRequest(new { errors });
                }

                var createdUser = await _userManager.Users.SingleOrDefaultAsync(x => x.UserName == requestBody.UserName);
                return CreatedAtAction("GetCurrentUser", new { id = createdUser.Id, userName = createdUser.UserName, fullName = createdUser.FullName });
            }
            catch (Exception ex)
            {
                errors = new List<string> { ex.Message };
                return StatusCode(500, new { errors });
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