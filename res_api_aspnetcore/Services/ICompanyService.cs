using res_api_aspnetcore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace res_api_aspnetcore.Services
{
    public interface ICompanyService
    {
        ApplicationUser AppUser { get; set; }
        Task<List<Company>> GetMyCompanies();
        Task<Company> GetMyCompany(int id);
        Task<Company> AddCompany(Company company);
        Task<Company> UpdateCompany(int id, Company company);
        Task<Company> DeleteCompany(int id);
        Task<bool> CompanyExists(int id);
    }
}
