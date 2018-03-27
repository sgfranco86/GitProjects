(function (ng) {
    angular.module('Giftshop').controller('ProductosPeluchesController', function ($scope, $state, $uibModal, $uibModalStack, $rootScope, $ngConfirm, inform, $interval, productosPeluchesService, Idle, Keepalive, TableModalService, localStorageService) {
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
            productosPeluchesService.saveToCart({ IdProduct: '1', Name: 'Teddy Bear', Image: 'TeddyBear.png', Description: '', Category: 'Bear' }).then(function (response) {
                if (response)
                    inform.add("Item has been added successfull to yiur cart list", { type: 'success' });

            }, function (error) {
                inform.add(error.msg);

            });
        }



    });
})(angular);