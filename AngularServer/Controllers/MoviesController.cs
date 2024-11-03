using AngularServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularServer.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly EfDbContext _context;
        public MoviesController(EfDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<VideoData>> GetMoviesList()
        {
            var Movies = await _context.VideoDatas.ToListAsync();
            return Movies;
        }

        [HttpPost]
        public int AddMovies(VideoData videoData)
        {
            if (videoData == null) return 0;
            int count = 0;
            try
            {
                _context.VideoDatas.Add(videoData);
                count = _context.SaveChanges();
            }
            catch (Exception ex)
            {

            }

            return 1;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<VideoData?>> GetById(string id)
        {
            long vid = 0;
            try
            {
                vid = long.Parse(id);
            }
            catch (Exception ex)
            {
                return NotFound();
            }

            var video = await _context.VideoDatas.AsNoTracking().
                 FirstOrDefaultAsync(c => c.ID == vid);
            return video;
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<int>> UpdateVidep(VideoData video)
        {
            if (video == null) return NotFound();
            //更改数据
            _context.Entry(video).State = EntityState.Modified;
            var count = await _context.SaveChangesAsync();
            return count;
        }

        [HttpDelete("{id:int}")]
        public ActionResult<int> DeleteVideo(string id)
        {
            var product = _context.VideoDatas.Find(long.Parse(id));
            if (product == null) return NotFound();
            //删除数据
            _context.VideoDatas.Remove(product);
            //执行删除操作
            var count = _context.SaveChanges();

            return count;







        }
    }
}