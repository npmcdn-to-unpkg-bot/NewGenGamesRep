using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using NewGenGames.Services.Repositories;
using NewGenGames.Models;

namespace NewGenGames.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IGamesRepository Games { get; }
        IRepository<LanguageModel> Languages { get; }

        void Save();

    }
}