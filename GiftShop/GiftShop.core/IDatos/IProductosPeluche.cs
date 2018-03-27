using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftShop.core.IDatos
{
    public interface IProductosPeluche
    {
        bool AddProducto(Product ProductoPeluche);
        bool RemoveProducto(Product ProductoPeluche);



    }
}
