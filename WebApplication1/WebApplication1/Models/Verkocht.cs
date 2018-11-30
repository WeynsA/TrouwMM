using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrouwApi.Models
{
    public class Verkocht
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Amount { get; set; }
        public string Message { get; set; }
        public string Items { get; set; }
        public string Straatnaam { get; set; }
        public string Gemeente { get; set; }
    }
}
