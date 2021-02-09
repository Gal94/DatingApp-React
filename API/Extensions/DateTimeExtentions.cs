using System;

namespace API.Extensions
{
    public static class DateTimeExtentions
    {
        public static int CalculateAge(this DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;

            // If haven't had birthday yet
            if (dob.Date > today.AddYears(-age)) age--;

            return age;
        }
    }
}