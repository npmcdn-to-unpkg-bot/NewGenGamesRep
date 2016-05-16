using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewGenGames.Services.Repositories
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> Get();
        T Get(int identificator);

        void Post(T model);
        void Put(int id, T model);

        void Delete(int id);
    }
}
