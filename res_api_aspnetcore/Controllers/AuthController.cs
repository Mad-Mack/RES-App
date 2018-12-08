using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using res_api_aspnetcore.Dtos;
using res_api_aspnetcore.Models;
using res_api_aspnetcore.Services;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace res_api_aspnetcore.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IErrorService _errorService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _config;

        public AuthController
            (
                SignInManager<ApplicationUser> signInManager, 
                IErrorService errorService, UserManager<ApplicationUser> userManager, 
                IConfiguration config
            )
        {
            _errorService = errorService;
            _userManager = userManager;
            _config = config;
            _signInManager = signInManager;
        }
        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody] UserForLoginDto requestBody)
        {
            try
            {
                var user = await _userManager.FindByNameAsync(requestBody.UserName);
                if (user == null) return BadRequest(_errorService.GetResponseErrors("Invalid username or password."));

                var result = await _signInManager.PasswordSignInAsync(user, requestBody.Password, true, true);

                if (result.IsLockedOut) return BadRequest(_errorService.GetResponseErrors("Account locked for multiple failed attempts."));
                if (!result.Succeeded) return BadRequest(_errorService.GetResponseErrors("Invalid username or password."));

                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Name, user.FullName)
                    }),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"])), SecurityAlgorithms.HmacSha512Signature)
                };

                return Ok(new { token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor)) });
            }
            catch (Exception ex)
            {
                return StatusCode(500, _errorService.GetResponseErrors(ex.Message));
            }
           
        }
    }
}