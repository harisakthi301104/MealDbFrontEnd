using MealDB.Data;
using MealDB.DTO;
using MealDB.Model;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MealDB.Service
{
    public class AuthService
    {
        private readonly appDbContext _context;
        private readonly IConfiguration configuration;
        private readonly PasswordHasher<User> _passwordHasher;

        public AuthService(appDbContext context, IConfiguration configuration , PasswordHasher<User> passwordHasher)
        {
            _context = context;
            configuration = configuration;
            _passwordHasher = passwordHasher;
        }

        public string Register(RegisterDTO dto)
        {
            // Check if the username already exists
            var register = _context.Users.FirstOrDefault(u => u.Username == dto.Username);
            if (register != null)
            {
                return "User already exists";
            }
            // map the RegisterDTO to a User entity
            var user = new User
            {
                Username = dto.Username,
                HashPassword = "",
                Role = dto.Role,
            };

            // Hash the password
            user.HashPassword = _passwordHasher.HashPassword(user, dto.Password);

            // Save the user to the database
            _context.Users.Add(user);
            _context.SaveChanges();

            // Generate a JWT token for the registered user
            return GenerateToken(user);
        }

        public string Login(LoginDTO dto)
        {
            //Check User Registered ?
            var login = _context.Users.FirstOrDefault( c => c.Username == dto.Username );
            if (login == null)
            {
                return "User Not Found";
            }
            // Verifyhashed password
            var verifypassword = _passwordHasher.VerifyHashedPassword(login, login.HashPassword, dto.Password);
            if (verifypassword == PasswordVerificationResult.Failed)
                return null;
            // Return Token
            return GenerateToken(login);
        }

        public string GenerateToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: configuration["Jwt:Issuer"],
                audience: configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: creds
            );
            //step5: Return the token as a string
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
