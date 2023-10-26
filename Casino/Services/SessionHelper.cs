using System.Text.Json;

namespace Casino.Services
{
    public class SessionHelper
    {
        private const String KEY = "User";
        public static void SetUser(Ilogin service, HttpContext context)
        {
            String json = JsonSerializer.Serialize(service);
            context.Session.SetString(KEY, json);

        }

        public static Ilogin GetUser(HttpContext context)
        {
            String? json = context.Session.GetString(KEY);

            if (json is not null)
            {
                return JsonSerializer.Deserialize<login>(json);
            }

            // Hvis nøglen ikke findes
            login us = new login();
            us.UserLoggedOut();
            return us;
        }
    }
}
