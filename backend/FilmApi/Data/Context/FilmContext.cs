using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Context
{
    public class FilmContext : DbContext
    {
        public FilmContext():base ("@Data Source=192.168.0.193;Initial Catalog=Film;Persist Security Info=True;User ID=FilmLog;Password=123321@")
        {
        }
    }
}
