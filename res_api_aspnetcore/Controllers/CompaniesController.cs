using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using res_api_aspnetcore.Models;
using res_api_aspnetcore.Services;
using System;
using System.Threading.Tasks;

namespace res_api_aspnetcore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly ICompanyService _companyService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IErrorService _errorService;

        public CompaniesController(ICompanyService companyService, UserManager<ApplicationUser> userManager, IErrorService errorService)
        {
            _userManager = userManager;
            _companyService = companyService;
            _errorService = errorService;

            SetCurrentUser(userManager);
        }

        private async void SetCurrentUser(UserManager<ApplicationUser> userManager)
        {
            _companyService.AppUser = await userManager.GetUserAsync(User);
        }

        [HttpGet]
        public async Task<IActionResult> GetCompanies()
        {
            try
            {
                var companies = await _companyService.GetMyCompanies();
                if (companies.Count == 0) return NotFound(_errorService.GetResponseErrors("No companies can be found."));

                return Ok(companies);
            }
            catch (Exception ex)
            {
                return StatusCode(500, _errorService.GetResponseErrors(ex.Message));
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompany([FromRoute] int id)
        {
            try
            {
                var company = await _companyService.GetMyCompany(id);

                if (company == null)
                {
                    return NotFound(_errorService.GetResponseErrors("Company not found."));
                }

                return Ok(company);
            }
            catch (Exception ex)
            {
                return StatusCode(500, _errorService.GetResponseErrors(ex.Message));
            }
            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCompany([FromRoute] int id, [FromBody] Company company)
        {
            try
            {
                if (!(await _companyService.CompanyExists(id)))
                    return NotFound(_errorService.GetResponseErrors("Company not found."));

                if (!ModelState.IsValid)
                    return BadRequest(_errorService.GetResponseErrors(ModelState));

                var updatedCompany = await _companyService.UpdateCompany(id, company);

                if (updatedCompany == null)
                    return StatusCode(400, _errorService.GetResponseErrors(ModelState));

                return Ok(updatedCompany);
            }

            catch (Exception ex)
            {
                return StatusCode(500, _errorService.GetResponseErrors(ex.Message));
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddCompany([FromBody] Company company)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var companyAdded = await _companyService.AddCompany(company);

                return CreatedAtAction("GetCompany", new { id = companyAdded.Id }, company);
            }
            catch (Exception ex)
            {
                return StatusCode(500, _errorService.GetResponseErrors(ex.Message));             
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany([FromRoute] int id)
        {
            try
            {
                if (!(await _companyService.CompanyExists(id)))
                    return NotFound(_errorService.GetResponseErrors("Company not found"));

                var deletedCompany = await _companyService.DeleteCompany(id);

                return Ok(deletedCompany);
            }
            catch (Exception ex)
            {
                return StatusCode(500, _errorService.GetResponseErrors(ex.Message));
            }
        }
    }
}