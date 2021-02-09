using API.Data;
using API.Helpers;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        // this refers to the class that called this static method
        public static IServiceCollection AddApplicationServices (this IServiceCollection services, IConfiguration config)
        {
            // add the token services
            services.AddScoped<ITokenService, TokenService>();
            // add the User Repository
            services.AddScoped<IUserRepository, UserRepository>();
            // add the AutoMapper service
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            // link the db context class with a sqlite database
            services.AddDbContextPool<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            return services;
        }
    }
}