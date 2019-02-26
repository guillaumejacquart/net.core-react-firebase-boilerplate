using App.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Globalization;
using System.Threading.Tasks;

namespace App.Middlewares
{
    public static class UserMiddlewareExtensions
    {
        public static IApplicationBuilder UseUserMiddleware(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<UserMiddleware>();
        }
    }

    public class UserMiddleware
    {
        private readonly RequestDelegate _next;

        public UserMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, ApplicationContext _context)
        {
            var userEmail = context.User.Identity.Name;
            Console.WriteLine($"{userEmail}");
            if (!string.IsNullOrWhiteSpace(userEmail))
            {
                var existingUser = await _context.Users.SingleOrDefaultAsync(u => u.Email == userEmail);
                if (existingUser == null)
                {
                    _context.Users.Add(new User()
                    {
                        Email = userEmail
                    });
                    await _context.SaveChangesAsync();
                };
            }

            // Call the next delegate/middleware in the pipeline
            await _next(context);
        }
    }
}