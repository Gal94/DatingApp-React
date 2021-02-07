using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class TokenService : ITokenService
    {
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            // jwt signature
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }

        public string CreateToken(AppUser user)
        {
            // what we store on the jwt
            var claims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName.ToLower())
            };

            // how we encrypt the jwt in general
            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);


            // how the token should look
            var tokenDescriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(claims),
                Expires = System.DateTime.Now.AddDays(7),
                SigningCredentials = creds,
            };

            // create the token and return it
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            // return a serialized token
            return tokenHandler.WriteToken(token);
        }
    }
}