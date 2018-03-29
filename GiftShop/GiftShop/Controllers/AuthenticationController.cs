using System;
using System.Web.Http;
using System.Net.Http;
using System.Net;
//using Domain;
using GiftShop.core.IDatos;
using GiftShop.core;
//using Giftshop.Domain;

namespace GiftShop.Controllers
{
    public class AuthenticationController : ApiGiftShop
    {
        private IAuthentication _service;
        private IUser _Uservice;

        public AuthenticationController(IAuthentication service, IUser UService)
        {
            _service = service;
            _Uservice = UService;
        }

        [HttpPost]
        public HttpResponseMessage Logon(User user)
        {
            try
            {
                if (_service.Authenticate(user))
                {
                    core.User _usr = _Uservice.GetUser(user.userid.ToString(), user.password.ToString());
                    if (_usr != null)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK,
                        new
                        {
                            status = "ok",
                            user = new
                            {
                              user = _usr.userid,
                              password = _usr.password,
                              Name = _usr.Name,
                             Lastname =  _usr.Lastname,
                             userType= _usr.userType
                            }
                        });
                    }
                    else
                    {
                        return this.responseWithError(new Exception("Username does not exist."));
                    }
                }
                else
                {
                    return this.responseWithError(new Exception("Authentication error, verify your data."));
                }
            }
            catch (Exception ex)
            {
                return this.responseWithError(ex);
            }
        }
    }
}