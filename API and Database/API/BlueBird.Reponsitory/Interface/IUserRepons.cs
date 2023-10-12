using BlueBird.DataConext.Data;
using BlueBird.DataConext.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlueBird.Reponsitory.Interface
{
    public interface IUserRepons
    {
        public Task<string> SignUpAsync(SignUpModel signUpModel);
        public Task<string> SignUpShopAsync(SignUpShopModel signUpShopModel);
        public Task<string> SignInAsync(SignInModel signInModel);
        public Task<Users> GetByIdAsync(string email);
    }
}
