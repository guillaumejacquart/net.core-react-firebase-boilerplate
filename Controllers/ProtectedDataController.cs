using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
    [Route("api/protected")]
    [Authorize]
    public class ProtectedDataController : Controller
    {
        private static string[] data = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("data")]
        public IActionResult Data()
        {
            var rng = new Random();
            return Ok(new
            {
                data = data,
                user = User.Identity.Name
            });
        }
    }
}
