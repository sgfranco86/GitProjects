
using GiftShop.core.IDatos;
using System;
using Giftshop.Domain;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.Core.Objects;

namespace GiftShop.core.Services
{
    public class AutheticationService : IAuthentication
    {
        public bool Authenticate(User u)
        {

            return IsValidUser(u);
        }

        public bool IsValidUser(User u)
        {
            try
            {
                using (GiftShopDBEntities db = new GiftShopDBEntities())
                {
                    User obj = (from user in db.Users
                                 where
user.password == u.password && user.user== u.user
                                 select user).FirstOrDefault();

                     

                    

                    if (obj != null)
                        return true;
                    else

                        return false;

                }

                //    List<OracleParameter> param = new List<OracleParameter>()
                //{

                //    new OracleParameter("p_user_id",OracleDbType.Int32, u.USER_ID, ParameterDirection.Input),
                //    new OracleParameter("p_password", OracleDbType.Varchar2, u.PASSWORDX, ParameterDirection.Input){Size=200},
                //    new OracleParameter("p_valid", OracleDbType.Varchar2, ParameterDirection.Output){Size=200},
                //    new OracleParameter("p_site_id",OracleDbType.Int32,ParameterDirection.Output),
                //    new OracleParameter("p_active", OracleDbType.Varchar2,ParameterDirection.Output){Size=200},
                //    new OracleParameter("p_role",OracleDbType.Varchar2,ParameterDirection.Output){Size=200},
                //    new OracleParameter("p_force_pswd_change",OracleDbType.Varchar2,ParameterDirection.Output){Size=200}

                //};

                //    OracleParameterCollection Coll = new ClsSQL().ExecuteSPOutputParams("TS_VALIDATE_USER", param);

                //    string userid = Coll["p_user_id"].Value.ToString();

                //    User user = new UserService().GetUser(decimal.Parse(Coll["p_user_id"].Value.ToString()), Coll["p_password"].Value.ToString());

                //    log.Info(string.Format("User {0} was logged correctly ", user.USER_ID.ToString()));

                return true;
            }
            catch (Exception Exception)
            {
                //log.Error(Exception);
                throw Exception;
            }

        }
    }
}
