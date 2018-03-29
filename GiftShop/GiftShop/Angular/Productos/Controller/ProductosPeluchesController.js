(function (ng) {
    angular.module('Giftshop').controller('ProductosPeluchesController', function ($scope, $state, $uibModal, $uibModalStack, $rootScope, $ngConfirm, inform, $interval, productosPeluchesService, ShoppingCartService, Idle, Keepalive, TableModalService, localStorageService) {
        var iterator = 0
        $scope.product = { quantity: 0 };

        $scope.setQty = function (qty) {
            if (qty)
                iterator += 1;

            $scope.product.quantity = iterator;
        }

        $scope.minorQty = function (qty) {

            if (qty && iterator > 0)
                iterator -= 1;

            $scope.product.quantity = iterator;
        }

        $scope.saveToCart = function () {

            var id = Math.floor((Math.random() * 100) + 1);
            ShoppingCartService.saveToShoppingCart({ userid: "10133", IdProduct: "1" }).then(function (response) {
                if (response)
                    inform.add("Item has been added successfull to your cart list", { type: 'success' });

            }, function (error) {
                inform.add(error.msg);

            });
        }

        $scope.RemoveFromCart = function () {
            ShoppingCartService.deleteFromShoppingCart({ userid: "10133", IdProduct: "1", IdShoppingCart:"1" }).then(function (response) {
                if (response)
                    inform.add("Item has been deleted successfull from your cart list", { type: 'success' });

            }, function (error) {
                inform.add(error.msg);

            });
        }

    });
})(angular);