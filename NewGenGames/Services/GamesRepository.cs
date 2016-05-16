using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Hosting;
using NewGenGames.Models;
using System.Threading.Tasks;
using System.Net;
using System.Web.Http;

using NewGenGames.Services.Repositories;

namespace NewGenGames.Services
{
    public class GamesRepository : IGamesRepository
    {
        private NewGenGamesEntities db;
        int? langId = 1; //TODO

        public GamesRepository(NewGenGamesEntities context)
        {
            this.db = context;
        }

        public IEnumerable<GameModel> Get()
        {
            var games = db.Games.AsNoTracking().Select(s => new GameModel()
            {
                GameId = s.ID,
                CodeName = langId == 2 ? s.CodeName : s.GamesInfoes.FirstOrDefault(gi => gi.LangID == langId).Title,
                BoxArt = s.BoxArt,
                ReleaseDate = s.ReleaseDate
            }).ToList();

            return games;
        }

        public GameModel Get(int gameId)
        {
            var game =
                db.Games.Include("GamesInfoes")
                    .AsNoTracking()
                    .Where(g => g.ID == gameId)
                    .Select(s => new GameModel()
                    {
                        GameId = s.ID,
                        CodeName = s.CodeName,
                        BoxArt = s.BoxArt,
                        ReleaseDate = s.ReleaseDate,
                        FullInfo = new AdditionalGameInfoModel()
                        {
                            GameTitle = s.GamesInfoes.FirstOrDefault(gi => gi.LangID == langId).Title,
                            Description = s.GamesInfoes.FirstOrDefault(gi => gi.LangID == langId).Description,
                            LangId = langId.HasValue ? langId.Value : 1
                        }
                    }).FirstOrDefault();

            return game;
        }

        public GameModel GetForAdmins(int gameId)
        {
            var game =
                db.Games.Include("GamesInfoes")
                    .AsNoTracking()
                    .Where(g => g.ID == gameId)
                    .Select(s => new GameModel()
                    {
                        GameId = s.ID,
                        CodeName = s.CodeName,
                        BoxArt = s.BoxArt,
                        ReleaseDate = s.ReleaseDate,
                        Localizations = s.GamesInfoes.Select(gi => new AdditionalGameInfoModel()
                        {
                            GameTitle = gi.Title,
                            Description = gi.Description,
                            LangId = gi.LangID
                        })
                    }).FirstOrDefault();

            return game;
        }

        public string UpdateBoxArtPath(string boxArtPath, int gameId)
        {
            if (boxArtPath.StartsWith("_temp_"))
            {
                var newBoxArtName = gameId.ToString() + System.IO.Path.GetExtension(boxArtPath);

                var oldPath = HostingEnvironment.MapPath("~/Content/images/Boxes/") + boxArtPath;
                var newPath = HostingEnvironment.MapPath("~/Content/images/Boxes/") + newBoxArtName;

                if (System.IO.File.Exists(newPath)) {
                    System.IO.File.Delete(newPath);
                }
                System.IO.File.Move(oldPath, newPath);

                //System.IO.File.Delete(System.Web.HttpContext.Current.Server.MapPath("~/Content/images/Boxes/" + game.BoxArt));
                return newBoxArtName;
            }
            else
            {
                return boxArtPath;
            } 
        }

        public void Put(int gameId, GameModel game)
        {
            var dbGame = db.Games.Include("GamesInfoes").FirstOrDefault(g => g.ID == gameId);
            if (dbGame != null)
            {
                dbGame.CodeName = game.CodeName;
                dbGame.ReleaseDate = game.ReleaseDate;

                //var test = System.Web.HttpContext.Current.Server.MapPath("~/Content/images/Boxes/");

                Task boxArtTask = new Task(() => { dbGame.BoxArt = UpdateBoxArtPath(game.BoxArt, dbGame.ID); });
                boxArtTask.Start();

                dbGame.GamesInfoes.Clear();
                if (game.Localizations != null)
                {
                    foreach (var item in game.Localizations)
                    {
                        dbGame.GamesInfoes.Add(new GamesInfo()
                        {
                            GameID = gameId,
                            Title = item.GameTitle,
                            Description = item.Description,
                            LangID = item.LangId
                        });
                    }
                }

                boxArtTask.Wait();
                db.Entry(dbGame).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
            else {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }



        public void Post(GameModel game)
        {
            if (game != null)
            {
                Game dbGame = new Game();

                dbGame.CodeName = game.CodeName;
                dbGame.ReleaseDate = game.ReleaseDate;

                db.Games.Add(dbGame);
                db.SaveChanges();

                //Обновляем обложку
                Task boxArtTask = new Task(() => { dbGame.BoxArt = UpdateBoxArtPath(game.BoxArt, dbGame.ID); });
                boxArtTask.Start();

                if (game.Localizations != null)
                {
                    foreach (var item in game.Localizations)
                    {
                        dbGame.GamesInfoes.Add(new GamesInfo()
                        {
                            GameID = dbGame.ID,
                            Title = item.GameTitle,
                            Description = item.Description,
                            LangID = item.LangId
                        });
                    }
                }

                boxArtTask.Wait();
                db.Entry(dbGame).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
            else
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
        }

        public void Delete(int id)
        {
            var dbGame = db.Games.FirstOrDefault(g => g.ID == id);
            if (dbGame != null)
            {
                db.Games.Remove(dbGame);
                db.SaveChanges();
            }
            else
            {
                //throw new Exception();
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
    }
}