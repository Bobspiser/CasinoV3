using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.SqlClient;
using Casino.Services;
using Casino.models;

namespace Casino.Pages
{
    public class LoginModel : PageModel
    {
        private Ilogin _service;

        public Player player { get; set; }

        public LoginModel()
        {

        }

        [BindProperty]
        [Required]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Der skal være et navn")]
        public String Name { get; set; }

        [BindProperty]
        [Required]
        [StringLength(25, MinimumLength = 6, ErrorMessage = "Password skal være mere end 6 tegn")]
        public String Password1 { get; set; }

        public void OnGet()
        {
            _service = SessionHelper.GetUser(HttpContext);
        }

        string query = "SELECT * from tbl_login WHERE Username = @username and password=@password";

        public IActionResult OnPostLogin()
        {
            _service = SessionHelper.GetUser(HttpContext);

            if (!ModelState.IsValid)
            {
                return Page();
            }

            if (Name == "admin@gmail.com" && Password1 == "admin123")
            {
                _service.SetUserLoggedIn(Name, true, true);
            }
            else
            {
                _service.SetUserLoggedIn(Name, false, true);
            }


            SessionHelper.SetUser(_service, HttpContext);
            return RedirectToPage("/Index");
        }

        public IActionResult OnPostRegister()
        {
            if(player.Password.Length <= 6)
            {
                throw new ArgumentOutOfRangeException("Password skal være mere end 6 tegn");
            } 
            else
            {
                _service.SetUserLoggedIn(Name, false, true);
                
            }
            return RedirectToPage("/Index");
        }

     }
}
