using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Routing;
using System.Web.UI.WebControls;
using NewGenGames.Models;
using NewGenGames.UnitOfWork;
using System.Threading.Tasks;

namespace NewGenGames.Controllers
{
    //[Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GamesController : ApiController
    {
        IUnitOfWork repository;

        public GamesController() {
            repository = new EF_UnitOfWork();
        }

        public GamesController(IUnitOfWork _repository)
        {
            repository = _repository;
        }

        public async Task<IHttpActionResult> Get()
        {
            var games = repository.Games.Get();
            return Json(games);
        }

        public IHttpActionResult Get(int id)
        {
            //var lang = HttpContext.Current.Request.RequestContext.RouteData.Values["lang"];
            int isAdmin = 1;    //TODO

            if (isAdmin == 1)
            {
                var game = repository.Games.GetForAdmins(id);
                return Json(game);
            }
            else
            {
                var game = repository.Games.Get(id);
                return Json(game);
            }
            
        }

        public HttpResponseMessage Post([FromBody]GameModel game)
        {
            HttpResponseMessage response;

            try
            {
                repository.Games.Post(game);
                response = new HttpResponseMessage(HttpStatusCode.Created);
                response.Content = new ObjectContent(typeof(GameModel), game, GlobalConfiguration.Configuration.Formatters.JsonFormatter);
            }
            catch (HttpResponseException e)
            {
                response = e.Response;
            }

            return response;
        }

        public HttpResponseMessage Put(int id, [FromBody]GameModel game)
        {
            HttpResponseMessage response;

            try
            {
                repository.Games.Put(id, game);
                response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new ObjectContent(typeof(GameModel), game, GlobalConfiguration.Configuration.Formatters.JsonFormatter);
            }
            catch (HttpResponseException e)
            {
                response = e.Response;
            }

            return response;
        }

        public HttpResponseMessage Delete(int id)
        {
            HttpResponseMessage response;

            try
            {
                repository.Games.Delete(id);

                //repository.Delete(id);
                response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new ObjectContent(typeof(int), id, GlobalConfiguration.Configuration.Formatters.JsonFormatter);
            }
            catch (HttpResponseException e)
            {
                response = e.Response;
            }

            return response;
        }
    }
}
