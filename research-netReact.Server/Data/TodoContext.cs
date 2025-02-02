using Microsoft.EntityFrameworkCore;
using research_netReact.Server.Models;


namespace research_netReact.Server.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }
        public DbSet<TodoItem> Todos { get; set; }
    }
}
