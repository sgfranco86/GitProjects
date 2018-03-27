using GiftShop.core.IDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace GiftShop.core.Services.Productos
{
    public class ProductoPelucheService : IProductosPeluche
    {
        public bool AddProducto(Product ProductoPeluche)
        {
            try {
                using (GiftShopDBEntities db = new GiftShopDBEntities())
                {
                    db.Products.Add(ProductoPeluche);
                    db.SaveChanges();
                    return true;
                }
            } catch(Exception ex) { throw ex; }
        }

        public bool RemoveProducto(Product ProductoPeluche)
        {
            try
            {
                using (GiftShopDBEntities db = new GiftShopDBEntities())
                {
                    db.Products.Remove(ProductoPeluche);
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception ex) { throw ex; }
        }

    }
}
