using MealDB.Model;
using Microsoft.EntityFrameworkCore;

namespace MealDB.Data
{
    public class appDbContext : DbContext
    {
        public appDbContext(DbContextOptions<appDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }  
    }
}
