using Casino.models;

namespace Casino.Services
{
    public interface Ilogin
    {
        bool IsUserAdmin { get; }
        string UserName { get; }
        bool IsLoggedIn { get; }
        bool IsLoggedOn { get; }

        void SetUserLoggedIn(string name, bool isAdmin, bool isLoggedOn);
        void UserLoggedOut();

    }
}
