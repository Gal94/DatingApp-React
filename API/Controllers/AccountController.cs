using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        // Attribute to the entity framework refs
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public AccountController(DataContext context, ITokenService tokenService) {
            _context = context;
            _tokenService = tokenService;
        }

        // POST /api/account/register
        [HttpPost("register")]
        // Always return a Task<ActionResult<>> with the type of entity as a generic
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {
            // can useBad Request because I return an ActionResult
            if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

            // The hasing algorithm - using ensures that when usage has been done
            // the variable will be disposed via garbage collector - due to using keyword
            using var hmac = new HMACSHA512();
            // convert password to bytes, save hashed pass and its salt
            var user = new AppUser {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            // Add to the users table
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        } 

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login (LoginDto loginDto)
         {
            var user = await _context.Users.SingleOrDefaultAsync(user => user.UserName == loginDto.Username.ToLower());

            if (user == null) return Unauthorized("Invalid username");

            // check if passwords match
            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
            }

            // passwords match
            return new UserDto{
                Username = user.UserName.ToLower(),
                Token = _tokenService.CreateToken(user)
            };
        }

        // Check if username already exists in database
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(user => user.UserName == username.ToLower());
        }

    }
}