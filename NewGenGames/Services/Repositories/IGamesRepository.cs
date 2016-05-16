using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NewGenGames.Models;

namespace NewGenGames.Services.Repositories
{
    public interface IGamesRepository : IRepository<GameModel>
    {
        GameModel GetForAdmins(int gameId);
        string UpdateBoxArtPath(string boxArtPath, int gameId);
    }
}
