﻿using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class CocktailController : ControllerBase
{
    private readonly ILogger<CocktailController> _logger;

    public CocktailController(ILogger<CocktailController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetIngredient")]
    public async Task<IEnumerable<Ingredient>> GetIngredients()
    {
        using HttpClient client = new();
        client.DefaultRequestHeaders.Accept.Clear();
        var json = await client.GetStringAsync("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=peach");
        var content = JsonSerializer.Deserialize<IngredientsList>(json);

        return new List<Ingredient>();
    }
}
