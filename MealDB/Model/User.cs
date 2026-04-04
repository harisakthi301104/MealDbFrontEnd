using System.ComponentModel.DataAnnotations;

namespace MealDB.Model
{
    public class User
    {
        [Key]
        public string Id { get; set; }
        public string Username { get; set; }

        public string HashPassword { get; set; }

        public string Role { get; set; } = "User";
    }
}
