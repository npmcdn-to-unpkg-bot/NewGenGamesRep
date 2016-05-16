using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NewGenGames.Models;
using NewGenGames.Services;
using NewGenGames.Services.Repositories;

namespace NewGenGames.UnitOfWork
{
    public class EF_UnitOfWork : IUnitOfWork
    {
        private NewGenGamesEntities db = new NewGenGamesEntities();

        private GamesRepository gamesRepository;
        private LanguagesRepository languagesRepository;

        public IGamesRepository Games {
            get {
                if (gamesRepository == null)
                    gamesRepository = new GamesRepository(db);
                return gamesRepository;
            }
        }

        public IRepository<LanguageModel> Languages
        {
            get
            {
                if (languagesRepository == null)
                    languagesRepository = new LanguagesRepository(db);
                return languagesRepository;
            }
        }

        public void Save()
        {
            db.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}