using System;
using System.Text.Json.Serialization;

namespace webapi.Models
{
	public class IngredientsList
	{

        [JsonPropertyName("ingredients")]
        public IEnumerable<Ingredient> Ingredients { get; set; }
	}
}

