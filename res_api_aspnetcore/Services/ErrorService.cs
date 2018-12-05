using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using res_api_aspnetcore.Models;
using System.Collections.Generic;

namespace res_api_aspnetcore.Services
{
    public class ErrorService : IErrorService
    {
        private readonly Error _error = new Error();
        public Error GetResponseErrors(ModelStateDictionary modelState)
        {
            foreach (var value in modelState.Values)
            {
                foreach (var error in value.Errors)
                {
                    _error.Errors.Add(error.ErrorMessage);
                }
            }

            return _error;
        }

        public Error GetResponseErrors(IdentityResult identityResult)
        {
            foreach (var error in identityResult.Errors)
            {
                _error.Errors.Add(error.Description);
            }

            return _error;
        }

        public Error GetResponseErrors(string message)
        {
            _error.Errors.Add(message);
            return _error;
        }

        public Error GetResponseErrors(List<string> errors)
        {
            foreach (var errorMessage in errors)
            {
                _error.Errors.Add(errorMessage);
            }
            return _error;
        }
    }
}
