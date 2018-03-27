using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GiftShop.Controllers
{
    public class ApiGiftShop : ApiController
    {
        protected HttpResponseMessage responseWithError(Exception ex)
        {
            return Request.CreateResponse(HttpStatusCode.BadRequest, new
            {
                status = "error",
                msg = ex.Message
            });
        }
    }
}
