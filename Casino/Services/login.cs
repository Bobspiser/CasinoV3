using Casino.models;

namespace Casino.Services
{
    public class login : Ilogin
    {
        // hack til menu bar
        public static bool iAmAdmin = false;

        private LoggedInUser _user;

        public static bool loggedOn = false;

        public login()
        {
            _user = new LoggedInUser();
        }

        public void SetUserLoggedIn(String name, bool isAdmin, bool isLoggedOn)
        {
            _user.Name = name;
            _user.IsAdmin = isAdmin;
            iAmAdmin = isAdmin;
            loggedOn = isLoggedOn;

        }

        public void UserLoggedOut()
        {
            _user.Name = "";
            _user.IsAdmin = false;
            iAmAdmin = false;
            loggedOn = false;
        }

        public bool IsLoggedIn
        {
            get
            {
                return !string.IsNullOrEmpty(_user.Name);
            }
        }

        public bool IsUserAdmin
        {
            get { return _user.IsAdmin; }
            set { _user.IsAdmin = value; }
        }

        public bool IsLoggedOn
        {
            get { return _user.IsLoggedOn; }
            set { _user.IsLoggedOn = value; }
        }

        public String UserName
        {
            get { return _user.Name; }
            set { _user.Name = value; }
        }
    }
}
