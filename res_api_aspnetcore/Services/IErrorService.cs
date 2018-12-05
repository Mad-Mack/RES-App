using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using res_api_aspnetcore.Models;
using System.Collections.Generic;

namespace res_api_aspnetcore.Services
{
    public interface IErrorService
    {
        Error GetResponseErrors(ModelStateDictionary modelState);
        Error GetResponseErrors(IdentityResult identityResult);
        Error GetResponseErrors(string message);
        Error GetResponseErrors(List<string> errors);
    }
}
