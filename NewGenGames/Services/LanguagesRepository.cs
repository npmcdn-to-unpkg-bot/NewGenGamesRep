using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NewGenGames.Models;
using NewGenGames.Services.Repositories;

namespace NewGenGames.Services
{
    public class LanguagesRepository : IRepository<LanguageModel>
    {
        private NewGenGamesEntities db;

        public LanguagesRepository(NewGenGamesEntities context)
        {
            this.db = context;
        }

        public IEnumerable<LanguageModel> Get()
        {
            var langs = db.Langs.AsNoTracking().Select(s => new LanguageModel()
            {
                LangId = s.LangID,
                LangTitle = s.LangTitle
            }).ToList();

            return langs;
        }

        public LanguageModel Get(int id)
        {
            return new LanguageModel();
        }

        public void Post(LanguageModel game)
        {

        }

        public void Put(int id, LanguageModel game)
        {

        }

        public void Delete(int id)
        {

        }
    }
}