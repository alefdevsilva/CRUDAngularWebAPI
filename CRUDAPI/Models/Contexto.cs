using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Models
{
    public class Contexto: DbContext
    {

        public DbSet<Audio> Audios{get;set;}

        public Contexto(DbContextOptions<Contexto> opcoes): base(opcoes)
        {
            
        }

    }
}