namespace Casino.models
{
    public class LoggedInUser
    {
        public string Name { get; set; }
        public bool IsAdmin { get; set; }

        public bool IsLoggedOn { get; set; }

        public LoggedInUser() : this("", false, true)
        {
        }

        public LoggedInUser(string name, bool isAdmin, bool isLoggedOn)
        {
            Name = name;
            IsAdmin = isAdmin;
            IsLoggedOn = isLoggedOn;
        }

        public override string ToString()
        {
            return $"{{ {nameof(Name)}={Name}, {nameof(IsAdmin)}={IsAdmin.ToString()}, {nameof(IsLoggedOn)}={IsLoggedOn.ToString()}}}";
        }
    }
}
