using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //Ref to the table and table will also be called User
        public DbSet<AppUser> Users { get; set; }
    }
}