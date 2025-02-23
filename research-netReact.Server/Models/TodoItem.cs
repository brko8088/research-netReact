namespace research_netReact.Server.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public bool IsCompleted { get; set; } = false;

        public TodoItem(string title, bool isCompleted)
        {
            IsCompleted = isCompleted;
            Title = title;
        }
    }
}
