using Giftshop.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftShop.core.IDatos
{
    public interface IAuthentication
    {
        bool Authenticate(User u);
        bool IsValidUser(User u);
    }
}
