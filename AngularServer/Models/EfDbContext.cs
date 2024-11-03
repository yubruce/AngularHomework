using Microsoft.EntityFrameworkCore;

namespace AngularServer.Models
{
    public class EfDbContext : DbContext
    {
        public EfDbContext(DbContextOptions<EfDbContext> options) : base(options)
        {
        }
        //電影分類
        public DbSet<VideoData> VideoDatas { get; set; }
    }

}
