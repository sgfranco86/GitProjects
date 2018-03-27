using System.Web;
using System.Web.Optimization;

namespace GiftShop
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/services").Include(
               "~/Angular/Login/Service/authenticationService.js",
               "~/Angular/Services/tableModalService.js"


               ));

            bundles.Add(new ScriptBundle("~/bundles/controllers").Include(
          "~/Angular/Login/Controller/loginController.js",
          "~/Angular/Home/Controller/homeController.js"
          ));

            bundles.Add(new ScriptBundle("~/bundles/directives").Include(
              //"~/Angular/Directives/uppercaseOnly.js",
              //"~/Angular/Directives/deliverexTable.js",
              //"~/Angular/Directives/ngKeyEnter.js",
              //"~/Angular/Directives/passwCheck.js",
              //"~/Angular/Directives/alphanumericOnly.js",
              //"~/Angular/Directives/OnlyNumbers.js",
              //"~/Angular/Directives/dynamicTableNCD.js",
              "~/Scripts/uiBreadcrumbs/uiBreadcrumbs.js"
              //"~/Angular/Directives/cpObject.js",
              //"~/Angular/Directives/ngSize.js",
              //"~/Angular/Directives/EmptyToNull.js",
              //"~/Angular/Directives/custom_ExternalTables.js",
              //"~/Angular/Directives/TabNext.js",
              //"~/Angular/Directives/autofocus.js",
              //"~/Angular/Directives/ClickIf.js",
              //"~/Angular/Directives/dynamicTemplate.js",
              //"~/Angular/Directives/focusingInput.js",
              //"~/Angular/Directives/parseFloat.js"
              ));

            bundles.Add(new ScriptBundle("~/bundles/Scripts").Include(
               "~/Scripts/jquery-1.12.4.js",
               "~/Scripts/angular.js",
               "~/Scripts/angular-Idle/angular-idle.js",
               "~/Scripts/angular-ui/ui-bootstrap.js",
               "~/Scripts/angular-inform/angular-shawdown.js",
               "~/Scripts/angular-ui-router.js",
               "~/Scripts/angular-local-storage/angular-local-storage.js",
               "~/Scripts/angular-block-ui.js",
               "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
               "~/Scripts/moment.js",
               "~/Angular/Giftshop.js",
               "~/Scripts/angular-ui-switch.js",
               "~/Scripts/dirPagination/dirPagination.js",
               "~/Scripts/sb-admin-2.js",
               "~/Scripts/metisMenu/metisMenu.js",
               "~/Scripts/angular-animate.js",
               "~/Scripts/angular-sanitize.js",
               "~/Scripts/transition.js",
               "~/Scripts/angular-inform/angular-inform.js",
               "~/Scripts/SweetAlert/sweetalert.js",
               "~/Scripts/mask.js",
               "~/Scripts/require.js",
               "~/Scripts/angular-confirm-master/js/angular-confirm.js",
               "~/Scripts/oclazyload/ocLazyLoad.js",
               "~/Scripts/oclazyload/ocLazyLoad.require.js",
               "~/Scripts/angular-aria.js",
               "~/Scripts/angular-messages.js",
               //"~/Scripts/angular-material-1.1.5/angular-material.js",
               "~/Scripts/angular-route.js",
               "~/Scripts/statehelper.js",
               "~/Scripts/select.js",
               "~/Scripts/select2.js"
               // "~/Scripts/underscore.js"
               ));

            bundles.Add(new StyleBundle("~/Content/Styles").Include(
          "~/Content/bootstrap.css",
          "~/Content/angular-block-ui.css",
          "~/Content/angular-ui-switch.css",
          "~/Content/custom.css",
          "~/font-awesome-4.1.0/css/font-awesome.css",
          "~/Content/metisMenu/metisMenu.css",
          "~/Content/main.css",
          "~/Content/select.css",
          "~/Content/select2-bootstrap.css",
          "~/Content/sb-admin-2.css",
          "~/Content/inform/angular-inform.css",
          "~/Content/sweetalert.css",
          "~/Content/bsRadioCheck.css",
           "~/Scripts/angular-confirm-master/css/angular-confirm.css",
           //  "~/Scripts/angular-material-1.1.5/angular-material.css",
           "~/Content/pretty-checkbox.css"
          ));


            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            //// Use the development version of Modernizr to develop with and learn from. Then, when you're
            //// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js",
            //          "~/Scripts/respond.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));
        }
    }
}
