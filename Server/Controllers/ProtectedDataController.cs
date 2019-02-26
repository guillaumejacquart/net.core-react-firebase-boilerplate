using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace App.Controllers
{
    [Route("api/protected")]
    [Authorize]
    public class ProtectedDataController : Controller
    {
        private readonly ApplicationContext _context;
        public ProtectedDataController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet("data")]
        public async Task<IActionResult> Data()
        {
            if (!await _context.Posts.AnyAsync())
            {
                Blog blog = new Blog()
                {
                    Url = "http://test.fr"
                };
                _context.Blogs.Add(blog);
                await _context.SaveChangesAsync();

                _context.Posts.Add(new Post()
                {
                    Title = "youpi",
                    BlogId = blog.BlogId
                });
                await _context.SaveChangesAsync();
            }
            var rng = new Random();
            return Ok(_context.Posts.Select(t => new
            {
                Title = t.Title
            }));
        }
    }
}
