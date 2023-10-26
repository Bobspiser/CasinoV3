using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Casino.Services;

namespace Casino.Pages
{
    public class LogoutModel : PageModel
    {
        private readonly Ilogin _userService;

        public LogoutModel(Ilogin userService)
        {
            _userService = userService;
        }

        public IActionResult OnGet()
        {
            _userService.UserLoggedOut();
            return RedirectToPage("Index");
        }
    }
}
