using System.ComponentModel;
using System.Text.Json.Serialization;
using webapi.JsonConverters;

namespace webapi.Models
{
    public class Ingredient
    {
        [JsonPropertyName("strIngredient")]
        public string Name { get; set; }

        [JsonPropertyName("idIngredient")]
        [JsonNumberHandling(JsonNumberHandling.AllowReadingFromString)]
        public int Id { get; set; }

        [JsonPropertyName("strDescription")]
        public string Description { get; set; }

        [JsonPropertyName("strType")]
        public string Type { get; set; }

        [JsonPropertyName("strAlcohol")]
        [JsonConverter(typeof(CocktailBooleanConverter))]
        public bool IsAlcohol { get; set; }

        [JsonPropertyName("strABV")]
        public string ABV { get; set; }
    }
}
