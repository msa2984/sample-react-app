using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Ingredient
    {
        [JsonPropertyName("strIngredient")]
        public string Name { get; set; }

        [JsonPropertyName("idIngredient")]
        public int Id { get; set; }

        [JsonPropertyName("strDescription")]
        public string Description { get; set; }

        [JsonPropertyName("strType")]
        public string Type { get; set; }

        [JsonPropertyName("strAlcohol")]
        public string isAlcohol { get; set; }

        [JsonPropertyName("strABV")]
        public string ABV { get; set; }
    }
}
