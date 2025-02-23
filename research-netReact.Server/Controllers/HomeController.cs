using Microsoft.AspNetCore.Mvc;

namespace research_netReact.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        // private static readonly string[] Summaries = new[]
        // {
        //     "Here"
        // };

        // private readonly ILogger<WeatherForecastController> _logger;

        // public WeatherForecastController(ILogger<WeatherForecastController> logger)
        // {
        //     _logger = logger;
        // }

        // [HttpGet(Name = "GetHome")]
        // public IEnumerable<WeatherForecast> Get()
        // {
        //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //     {
        //         Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        //         TemperatureC = 1,
        //         Summary = "Test"
        //     })
        //     .ToArray();
        // }
    }
}
