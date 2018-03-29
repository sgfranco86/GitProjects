using GiftShop.core.IDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftShop.core.Services
{
    public class UserService : IUser    {
        int RecordsAffected = default(int);
        string info = null;



        public User GetUser(string UserID, string password)
        {
            try
            {
                using (GiftShopDBEntities db = new GiftShopDBEntities())
                {
                return  db.Users.Find(UserID);
                
                }

                

            }
            catch (Exception ex)
            {
                //   log.Error(ex);
                throw ex;
            }
        }

        public bool ChangePassword(User user)
        {
            try
            {
                //return GenericService.Instance.ExecuteQueryWithTransaction(String.Format("UPDATE TS_USER SET PASSWORDX = '{0}' WHERE USER_ID = {1} AND SITE_ID = {2}", user.PASSWORDX, user.USER_ID, user.SITE_ID), out RecordsAffected, out info);
                return true;
            }
            catch (Exception ex)
            {
                // log.Error(ex);
                throw ex;
            }
        }

        public bool ShortPassword(User user)
        {
            try
            {
                //   return GenericService.Instance.ExecuteQueryWithTransaction(String.Format("UPDATE TS_USER SET FRIENDLY_PASSWORD='{0}' WHERE USER_ID = {1} AND SITE_ID = {2}", user.FRIENDLY_PASSWORD, user.USER_ID, user.SITE_ID), out RecordsAffected, out info);
                return true;
            }
            catch (Exception ex)
            {
                //  log.Error(ex);
                throw ex;
            }
        }

    }
}
