using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrouwApi.Models;

namespace TrouwApi.Data
{
    public class DBInitializer
    {
        public static void Initialize(DBContext context)
        {
            //Create the DB if not yet exists
            context.Database.EnsureCreated();

            if (!context.Resterends.Any())
            {
                var item = new Resterend()
                {
                    Description = "Kan brood roosteren.",
                    Name = "Broodrooster",
                    Price = 29,
                    Quantity = 1,
                    Sold = 0,
                    PictureUrl = "https://image.coolblue.be/422x390/products/731875"

                };
                var item0 = new Resterend()
                {
                    Description = "Vlucht Japan",
                    Name = "Sponser een klein deel van onze vlucht naar Japan.",
                    Price = 200,
                    Quantity = 3,
                    Sold = 0,
                    PictureUrl = "https://image.coolblue.be/422x390/products/731876"

                };
                context.Resterends.Add(item);
                context.Resterends.Add(item0);
                context.SaveChanges();
            }
        }
    }
}
