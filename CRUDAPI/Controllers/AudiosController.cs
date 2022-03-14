using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers
{
     [ApiController]
    [Route("api/[controller]")]
    public class AudiosController : ControllerBase
    {
         private readonly Contexto _contexto;

        public AudiosController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Audio>>> SelecionarTodosAsync(){
            return await _contexto.Audios.ToListAsync();

        }
        [HttpGet("{Id}")]

        public async Task<ActionResult<Audio>> SelecionarPKAsync(int Id){
                Audio audio = await _contexto.Audios.FindAsync(Id);
                if(audio == null){
                    return NotFound();
                }
                return audio;

        }

         [HttpPost]
        public async Task<ActionResult<Audio>> SalvarAudioAsync (Audio audio) {
            await _contexto.Audios.AddAsync (audio);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarAudioAsync (Audio audio) {
            _contexto.Audios.Update (audio);
            await _contexto.SaveChangesAsync();

            return Ok ();
        }

        [HttpDelete ("{Id}")]
        public async Task<ActionResult> ExcluirAudioAsync (int Id) {
            Audio audio = await _contexto.Audios.FindAsync (Id);
            if (audio == null)
                return NotFound();

            _contexto.Remove(audio);
            await _contexto.SaveChangesAsync();
            return Ok();
        }

    }
}