using Microsoft.AspNetCore.DataProtection.KeyManagement;
using System.Globalization;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace webapi.JsonConverters
{
    public class CocktailBooleanConverter : JsonConverter<bool>
    {
        public override bool Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var boolAsString = reader.GetString();
            if (boolAsString == null || boolAsString.ToLower() == "no")
            {
                return false;
            }

            return true;
        }

        public override void Write(Utf8JsonWriter writer, bool value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value ? "yes" : "no");
        }
    }
}
