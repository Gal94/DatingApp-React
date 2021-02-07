namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        
    }
}

/* After each change migrate with the entity frame work |
    dotnet ef migrations add <Name of migration>
    dotnet ef database update        */
    // dotnet ef database update