(function ( ng )
{
    angular.module('Giftshop').service('productosPeluchesService', function ($http, $q)
    {
        this.urlBase = 'api/ProductosPeluches/';

        this.saveToCart = function (Product) {
            var number = 3;
            return $http.post(this.urlBase + 'AddProductoPeluche', Product).then(handleSuccess, handleError);
        };

        this.RemoveFromCart = function (Product) {
<<<<<<< HEAD
            return $http.post(this.urlBase + 'RemoveProductoPeluche', Product).then(handleSuccess, handleError)
=======
            return $http.post(this.urlBase + 'deleteFromShoppingCart', Product).then(handleSuccess, handleError);
>>>>>>> Second-commit
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
