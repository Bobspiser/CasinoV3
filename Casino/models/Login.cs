namespace Casino.models
{
    public class Login
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }

        public Login(int id, string name, string password)
        {
            Id = id;
            Name = name;
            Password = password;
        }

        public Login()
        {
        }

        public override string ToString()
        {
            return $"{{{nameof(Id)}={Id.ToString()}, {nameof(Name)}={Name}, {nameof(Password)}={Password}}}";
        }
    }
}
