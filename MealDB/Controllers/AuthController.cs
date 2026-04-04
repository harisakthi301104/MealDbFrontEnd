using MealDB.DTO;
using MealDB.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MealDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService authService;

        public AuthController(AuthService authService)
        {
            this.authService = authService;
        }

        [HttpGet]
        public IActionResult Register(RegisterDTO dto)
        {
            var token = authService.Register(dto);
            if (token == "User already exists")
            {
                return BadRequest("User already exist");
            }
            return Ok(token);
        }

        [HttpPost]
        public IActionResult Login(LoginDTO dto)
        {
            var token = authService.Login(dto);
            if (token == "User Not Found")
            {
                return BadRequest("User Not Found");
            }
            return Ok(token);
        }
    }
}
