using Casino.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Casino.Pages
{
    public class aboutModel : PageModel
    {
        public Player Bk { get; set; }
        public void OnGet()
        {
        }
    }
}
