using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace App.Model
{
    public class User
    {
        [Key]
        public string Email { get; set; }
    }
}