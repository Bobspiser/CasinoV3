using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Casino.Services;

namespace Casino.Pages
{
    public class ProfilePageModel : PageModel
    {
        private readonly Ilogin _userService;

        public ProfilePageModel(Ilogin userService)
        {
            _userService = userService;
        }

        public IActionResult OnPost()
        {
            _userService.UserLoggedOut();
            return RedirectToPage("Index");
        }
    }
}
