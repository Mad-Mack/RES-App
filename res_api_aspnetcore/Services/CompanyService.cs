using Microsoft.EntityFrameworkCore;
using res_api_aspnetcore.Data;
using res_api_aspnetcore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace res_api_aspnetcore.Services
{
    public class CompanyService : BaseService, ICompanyService
    {
        private readonly ApplicationDbContext _context;

        public CompanyService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Company> AddCompany(Company company)
        {
            company.ApplicationUserId = AppUser.Id;
            await _context.Companies.AddAsync(company);
            await _context.SaveChangesAsync();

            return company;
        }

        public async Task<bool> CompanyExists(int id) =>
            (await _context.Companies.FirstOrDefaultAsync(c => c.User.Id == AppUser.Id && c.Id == id)) != null ? true : false;

        public async Task<Company> DeleteCompany(int id)
        {
            var companyToDelete = await _context.Companies.FirstOrDefaultAsync(c => c.Id == id && c.User.Id == AppUser.Id);
            _context.Companies.Remove(companyToDelete);
            await _context.SaveChangesAsync();

            return companyToDelete;
        }

        public async Task<List<Company>> GetMyCompanies() =>
            await _context.Companies.Where(c => c.ApplicationUserId == AppUser.Id).ToListAsync();

        public async Task<Company> GetMyCompany(int id) =>
            (await GetMyCompanies()).FirstOrDefault(c => c.Id == id);


        public async Task<Company> UpdateCompany(int id, Company company)
        {
            var companyInDb = await _context.Companies.FirstOrDefaultAsync(c => c.Id == id && c.User.Id == AppUser.Id);
            companyInDb.Name = company.Name;
            companyInDb.ImageUrl = company.ImageUrl;
            companyInDb.Projects = company.Projects;
            companyInDb.About = company.About;

            await _context.SaveChangesAsync();

            return companyInDb;
        }
    }
}
