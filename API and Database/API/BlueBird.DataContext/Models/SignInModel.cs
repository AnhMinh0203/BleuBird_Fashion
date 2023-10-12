using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlueBird.DataConext.Models
{
    public class SignInModel
    {
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
    public class Custommessage
    {
        public string status { get; set; }
        public string token { get; set; }
        public Guid Id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string avata { get; set; }
        public string password { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
    }
}
