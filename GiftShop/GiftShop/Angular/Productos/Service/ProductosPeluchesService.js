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
            return $http.post(this.urlBase + 'RemoveProductoPeluche', Product).then(handleSuccess, handleError);

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
