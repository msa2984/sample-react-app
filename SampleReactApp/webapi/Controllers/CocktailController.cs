using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    public class CocktailController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
