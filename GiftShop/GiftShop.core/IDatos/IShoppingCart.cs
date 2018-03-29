using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftShop.core.IDatos
{
    public interface IShoppingCart
    {
        bool RegistraProducto(ShoppingCart s);
        bool EliminaProducto(ShoppingCart s);
    }
}
