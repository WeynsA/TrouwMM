using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrouwApi.Models;

namespace TrouwApi.Data
{
    public class DBContext: DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }
        
        public DbSet<Resterend> Resterends { get; set; }
        public DbSet<Verkocht> verkocht { get; set; }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Resterend>().ToTable("Resterend");
            modelbuilder.Entity<Verkocht>().ToTable("Verkocht");
        }

    }
}
