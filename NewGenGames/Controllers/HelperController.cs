using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NewGenGames.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class HelperController : ApiController
    {
        [System.Web.Mvc.HttpPost]
        public string UploadBoxArt()
        {
            var upload = HttpContext.Current.Request.Files.Count > 0 ? HttpContext.Current.Request.Files[0] : null;

            if (upload != null)
            {
                string fileName = "_temp_" + Guid.NewGuid() + System.IO.Path.GetExtension(upload.FileName);
                fileName = fileName.Replace(" ", "_");

                upload.SaveAs(System.Web.HttpContext.Current.Server.MapPath("~/Content/images/Boxes/" + fileName));

                return fileName;
            }

            return "error";
        }
    }
}