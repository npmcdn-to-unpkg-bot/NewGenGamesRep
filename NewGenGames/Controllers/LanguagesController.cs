using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NewGenGames.UnitOfWork;

namespace NewGenGames.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LanguagesController : ApiController
    {
        IUnitOfWork repository;

        public LanguagesController() {
            repository = new EF_UnitOfWork();
        }

        public LanguagesController(IUnitOfWork _repository)
        {
            repository = _repository;
        }


        public IHttpActionResult Get()
        {
            var langs = repository.Languages.Get();
            return Json(langs);
        }

        public string Get(int id)
        {
            return "value";
        }

        public void Post([FromBody]string value)
        {
        }

        public void Put(int id, [FromBody]string value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}