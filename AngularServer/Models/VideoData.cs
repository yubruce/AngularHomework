using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularServer.Models
{

    [Table("VideoData")]
    public class VideoData
    {
        [Key]
        public long ID { get; set; }

        public string Title { get; set; }

        public string ReleaseDate { get; set; }

        public string MovieCompany { get; set; }

        public string Starring { get; set; }

        public string MoviePlot { get; set; }

        public string Type { get; set; }

    }
}
