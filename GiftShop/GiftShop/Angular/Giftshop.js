angular.module('Giftshop', ['ui.router', 'ui.router.stateHelper', 'blockUI', 'ui.bootstrap', 'LocalStorageModule', 'inform', 'ngAnimate', 'ngSanitize', 'inform-exception', 'uiSwitch', 'angularUtils.directives.dirPagination', 'ngIdle', 'ui.mask', 'oc.lazyLoad', 'angularUtils.directives.uiBreadcrumbs', 'cp.ngConfirm', 'ngRoute', 'ui.select']).run(
	['$rootScope', '$state', '$stateParams', '$filter', function ($rootScope, $state, $stateParams, $filter) {
	    // var tabs = TABS_CONFIG.children;

	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	    //	  $rootScope.$on( '$stateChangeStart', function ( e, toState, toParams, fromState, fromParams )
	    //	  {
	    //	    angular.forEach( tabs, function ( item, index )
	    //	    {
	    //	      if ( item.name == toState.name )
	    //	      {
	    //	        $rootScope.active = index;
	    //	      }
	    //	    } );
	    //	  } );
	}
	]).config(['$qProvider', function ($qProvider) {
	    //This prvent Possibly unhandled rejection
	    $qProvider.errorOnUnhandledRejections(false);
	}]).config(function (blockUIConfig) {
	    // Change the default overlay message
	    blockUIConfig.message = 'Loading...';
	    blockUIConfig.delay = 100;
	    // Disable automatically blocking of the user interface
	    //blockUIConfig.autoBlock = false;
	}).config(function (informProvider) {
	    var myDefaults = {
	        /* default time to live for each notification */
	        ttl: 7000,
	        /* default type of notification */
	        type: 'danger'
	    };
	    informProvider.defaults(myDefaults);
	}).config(['KeepaliveProvider', 'IdleProvider', function (KeepaliveProvider, IdleProvider) {
	    //The idle timeout duration in seconds.
	    IdleProvider.idle(1200);
	    //The amount of time the user has to respond
	    IdleProvider.timeout(10);
	    KeepaliveProvider.interval(10);
	}])
.config(['uiMask.ConfigProvider', function (uiMaskConfigProvider) {
    uiMaskConfigProvider.maskDefinitions({ '0': /\d/ });
}]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$uibModalProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $uibModalProvider) {
        $ocLazyLoadProvider.config({
            debug: true
        });

        $uibModalProvider.options = { animation: true, backdrop: 'static', keyboard: false };
        var secs = new Date().getMilliseconds();

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('login', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: 'Angular/Login/View/login.html?' + secs,
                    controller: 'LoginController'
                }
            }, resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Giftshop',
                        files: ['Content/Styles.css']
                    });

                }]
            }
        }).state('home', {
            url: '/home',
            params: {
                SYSTEM_ID_REPLICATE: null
            },
            views: {
                'main@': {
                    templateUrl: 'Angular/Home/View/home.html?' + secs,
                    controller: 'HomeController'
                },
                'container@home': {
                    templateUrl: 'Angular/Home/View/blank.html?' + secs
                }
            }, resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Giftshop',
                        files: ['']
                    });
                }]
            }, data: {
                displayName: 'Home'
            }
        }).state('home.ProductsBears', {
            url: '/ProductsBears',
            views: {
                'container@home': {
                    templateUrl: 'Angular/Productos/Views/Peluches.html?' + secs,
                    controller: 'ProductosPeluchesController'
                }
            }, resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Giftshop',
                        files: ['Angular/Productos/Controller/ProductosPeluchesController.js', 'Angular/Productos/Service/ProductosPeluchesService.js','Angular/Shopping_Cart/Service/ShoppingCartService.js']
                    });
                }]
            }, data: {
                displayName: 'BearProducts'
            }
        }).state('home.shopping_Cart', {
            url: '/shopping_Cart',
            views: {
                'container@home': {
                    templateUrl: 'Angular/Shopping_Cart/View/ShoppingCart.html?' + secs,
                    controller: 'ShoppingCartController'
                }
            }, resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Giftshop',
                        files: ['Angular/Shopping_Cart/Controller/ShoppingCartController.js', 'Angular/Shopping_Cart/Service/ShoppingCartService.js']
                    });
                }]
            }, data: {
                displayName: 'ShoppingCart'
            }
        });
    }]).run(['$rootScope', '$state', 'localStorageService', '$http',
    function ($rootScope, $state, localStorageService, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = localStorageService.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Shov ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if (next.name !== 'login' && !$rootScope.globals.currentUser) {
                event.defaultPrevented = true;
                $state.go('login', {}, { reload: true, inherit: false, notify: true });
            }
        });
    }]).filter('trustAsResourceUrl', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);