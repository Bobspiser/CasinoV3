using System.Data.SqlTypes;

namespace Casino.models
{
    public class Player
    {
        private int _age;

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { 
            get =>  _age;
            set
            {
                if (!(18 < value))
                {
                    throw new ArgumentException("Man skal være over 18 for at kunne spille");
                }

                _age = value;
            }
        }
        public int Money { get; set; }

        public Player(int id, string name, string email, string password, int age, int money)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Age = age;
            Money = money;
        }

        public override string ToString()
        {
            return $"{{{nameof(Id)}={Id.ToString()},{nameof(Name)}={Name.ToString()}, {nameof(Money)}={Money.ToString()}}}";
        }

    }
}
