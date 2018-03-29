using System;
using System.Web.Http;
using System.Net.Http;
using System.Net;
//using Domain;
using GiftShop.core.IDatos;
using GiftShop.core;

namespace GiftShop.Controllers
{
    public class ShoppingCartController : ApiGiftShop
    {
        private IShoppingCart _service;

        public ShoppingCartController(IShoppingCart ShoppingCart)
        {

            _service = ShoppingCart;
        }


        [HttpPost]
        public HttpResponseMessage AddProductToShoppingCart(ShoppingCart request)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _service.RegistraProducto(request));
            }
            catch (Exception e)
            {
                return this.responseWithError(e);
            }
        }

        [HttpPost]
        public HttpResponseMessage DeleteProductShoppingCart(ShoppingCart product)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _service.EliminaProducto(product));
            }
            catch (Exception e)
            {
                return this.responseWithError(e);
            }
        }
        

    }
}