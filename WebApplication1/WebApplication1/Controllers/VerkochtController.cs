using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TrouwApi.Models;
using System.Text;
using TrouwApi.Data;

namespace TrouwApi.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class VerkochtController : ControllerBase
        {
            private readonly DBContext ctx;
            public VerkochtController(DBContext context)
            {
                ctx = context;
            }

            // GET api/values
            [HttpGet]
            public ActionResult<List<Verkocht>> GetAll()
            {
                return ctx.verkocht.ToList();
            }

            // GET api/values/5
            [HttpGet("{Id}")]
            public ActionResult<Verkocht> GetById(int Id)
            {
                var item = ctx.verkocht.Find(Id);

                return item;
            }

            // POST api/values
            [HttpPost]
            public IActionResult Post(Verkocht newItem)
            {
                if (ModelState.IsValid)
                {
                    ctx.verkocht.Add(newItem);
                    ctx.SaveChanges();
                    return Ok(newItem);
                }
                else return Ok("UserNotCreated");
            }

            // PUT api/values/5
            [HttpPut("{Name}")]
            public IActionResult Put(int Id, Verkocht oldItem)
            {
                var updateItem = ctx.verkocht.Find(Id);
                if (updateItem == null)
                {
                    return NotFound();
                }

                updateItem.FirstName = oldItem.FirstName;
                updateItem.LastName = oldItem.LastName;
                updateItem.Amount = oldItem.Amount;
                updateItem.Message = oldItem.Message;
                updateItem.Email = oldItem.Email;
                updateItem.Items = oldItem.Items;

            return Ok(updateItem);
            }

            // DELETE api/values/5
            [HttpDelete("{Name}")]
            public IActionResult Delete(string Name)
            {
                var item = ctx.verkocht.SingleOrDefault(x => x.FirstName == Name);
                if (User == null)
                    return NotFound();

                ctx.verkocht.Remove(item);
                ctx.SaveChanges();
                return Ok("Item removed.");
            }
        }
    }
