using GiftShop.core.IDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GiftShop.core;
using System.Data.Entity;

namespace GiftShop.core.Services.ShoppingCart
{
    public class ShoppingCartService : IShoppingCart
    {

        public bool RegistraProducto(GiftShop.core.ShoppingCart Product)
        {
            try
            {
                using (GiftShopDBEntities db = new GiftShopDBEntities())
                {
                    db.ShoppingCarts.Add(Product);
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception ex) { throw ex; }
        }

        public bool EliminaProducto(GiftShop.core.ShoppingCart Product)
        {
            try
            {
                using (GiftShopDBEntities db = new GiftShopDBEntities())
                {
                    var entry = db.Entry(Product);
                    if (entry.State == EntityState.Detached)
                        db.ShoppingCarts.Attach(Product);
                    db.ShoppingCarts.Remove(Product);
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception ex) { throw ex; }
        }
    }
}
