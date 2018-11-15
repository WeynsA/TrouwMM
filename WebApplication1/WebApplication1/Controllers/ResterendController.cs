using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TrouwApi.Models;
using System.Text;
using TrouwApi.Data;
using System.Web.Http.Cors;

namespace TrouwApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResterendController : ControllerBase
    {
        private readonly DBContext ctx;


        public ResterendController(DBContext context)
        {
            ctx = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Resterend>> GetAll()
        {
            return ctx.Resterends.ToList();
        }

        // GET api/values/5
        [HttpGet("{Id}")]
        public ActionResult<Resterend> GetById(int Id)
        {
            var item = ctx.Resterends.Find(Id);

            return item;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post(Resterend newItem)
        {
            if (ModelState.IsValid)
            {
                ctx.Resterends.Add(newItem);
                ctx.SaveChanges();
                return Ok(newItem);
            }
            else return Ok("UserNotCreated");
        }

        // PUT api/values/5
        [HttpPut("{Id}")]
        public IActionResult Put(int Id, Resterend oldItem)
        {
            var updateItem = ctx.Resterends.Find(Id);
            if (updateItem == null)
            {
                return NotFound();
            }

            updateItem.Description = oldItem.Description;
            updateItem.PictureUrl = oldItem.PictureUrl;
            updateItem.Price = oldItem.Price;
            updateItem.Quantity = oldItem.Quantity;
            updateItem.Sold = oldItem.Sold;
            updateItem.Name = oldItem.Name;
            ctx.SaveChanges();

            return Ok(updateItem);
        }

        // DELETE api/values/5
        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            var item = ctx.Resterends.SingleOrDefault(x => x.Id == Id);
            if (User == null)
                return NotFound();

            ctx.Resterends.Remove(item);
            ctx.SaveChanges();
            return Ok("Item removed.");
        }
    }
}
