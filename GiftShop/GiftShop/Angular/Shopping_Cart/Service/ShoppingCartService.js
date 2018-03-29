(function (ng) {
    angular.module('Giftshop').service('ShoppingCartService', function ($http, $q) {
        this.urlBase = 'api/ShoppingCart/';

        //this.saveToCart = function (Product) {
        //    var number = 3;
        //    return $http.post(this.urlBase + 'AddProductoPeluche', Product).then(handleSuccess, handleError);
        //};
        this.saveToShoppingCart = function (Product) {
            return $http.post(this.urlBase + 'AddProductToShoppingCart', Product).then(handleSuccess, handleError);
        };
        
        this.deleteFromShoppingCart = function (Product) {
            return $http.post(this.urlBase + 'DeleteProductShoppingCart', Product).then(handleSuccess, handleError);
        };

        // ---------------------------------------------------------
        function handleError(response) {
            if (!angular.isObject(response.data) || !response.data)
                return ($q.reject("An unknown error occurred."));
            return ($q.reject(response.data));
        };

        function handleSuccess(response) {
            return (response.data);
        };
        // --------------------------------------------------------

    });
})(angular);

