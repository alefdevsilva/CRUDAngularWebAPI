namespace CRUDAPI.Models
{
    public class Audio
    {
        public int AudioId { get; set; }

        public string  ArquivoNome { get; set; }

        public string Tipo { get; set; }

        public string   OperadorNome { get; set; }

        public DateTime DataCriacao { get; set; }

        
    }
}