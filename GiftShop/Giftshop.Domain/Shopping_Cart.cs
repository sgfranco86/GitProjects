using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Giftshop.Domain
{
    public class Shopping_Cart
    {
        public string IdShopping { get; set; }
        public string user { get; set; }
        public string IdProduct { get; set; }
        public Nullable<bool> TransactionCompleted { get; set; }
    }
}
