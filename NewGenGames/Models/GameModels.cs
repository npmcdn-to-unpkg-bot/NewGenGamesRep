using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewGenGames.Models
{
    public class GameModel
    {
        public int GameId { get; set; }
        public string CodeName { get; set; }
        public string BoxArt { get; set; }
        public DateTime ReleaseDate { get; set; }

        public AdditionalGameInfoModel FullInfo { get; set; }
        public IEnumerable<AdditionalGameInfoModel> Localizations { get; set; }
    }

    public class AdditionalGameInfoModel
    {
        public int LangId { get; set; }
        public string GameTitle { get; set; }
        public string Description { get; set; }
    }
}