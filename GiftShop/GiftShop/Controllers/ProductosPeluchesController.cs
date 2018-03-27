using System;
using System.Web.Http;
using System.Net.Http;
using System.Net;
//using Domain;
using GiftShop.core.IDatos;
using GiftShop.core;
using System.Dynamic;
using Newtonsoft.Json;
using GiftShop.Model;

namespace GiftShop.Controllers
{
    public class ProductosPeluchesController: ApiGiftShop    {

        private IProductosPeluche _service;

        public ProductosPeluchesController(IProductosPeluche ProductosPeluche)
        {

            _service = ProductosPeluche;
        }


        [HttpPost]
        public HttpResponseMessage AddProductoPeluche(Product request)
        {
            try
            {      
                return Request.CreateResponse(HttpStatusCode.OK, _service.AddProducto(request));
            }
            catch (Exception e)
            {
                return this.responseWithError(e);
            }
        }

        [HttpPost]
        public HttpResponseMessage RemoveProductoPeluche(Product request)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _service.RemoveProducto(request));
            }
            catch (Exception e)
            {
                return this.responseWithError(e);
            }
        }


    }
}