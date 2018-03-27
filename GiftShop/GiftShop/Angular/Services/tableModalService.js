angular.module('Giftshop').service('TableModalService', ['$uibModal', function ($uibModal) {
    this.show = function (modOptions) {
        return $uibModal.open({
            animation: true,
            size: modOptions.size,
            templateUrl: 'Angular/Home/View/tableModal.htm',
            controller: function ($scope, $uibModalInstance, opt) {
                $scope.list = opt.list;
                $scope.maxpages = opt.maxpages;
                $scope.maxitems = opt.maxitems;
                $scope.pagination = opt.pagination;

                var hs = [];
                var row = { key: "", value: "" }

                for (var i = 0, len = opt.headers.length; i < len; i++) {
                    row.key = i;
                    row.value = opt.headers[i];
                    hs.push(row);
                    var row = { key: "", value: "" }
                }

                $scope.headers = hs;

                $scope.fn = opt.fn;

                $scope.title = opt.title;

                $scope.select = function (selected) { $uibModalInstance.close(selected); };

                $scope.cancel = function () { $uibModalInstance.dismiss(); };

            }, resolve: {
                opt: function () {
                    return modOptions;
                }
            }
        }).result;
    }

    this.modShow = function (modOptions) {
        return $uibModal.open({
            animation: true,
            backdrop: modOptions.backdrop,
            keyboard: modOptions.keyboard,
            size: modOptions.size,
            templateUrl: 'Angular/Home/View/tableModal.htm',
            controller: function ($scope, $uibModalInstance, opt) {
                $scope.list = opt.list;
                $scope.maxpages = opt.maxpages;
                $scope.maxitems = opt.maxitems;
                $scope.pagination = opt.pagination;

                var hs = [];
                var row = { key: "", value: "" }

                for (var i = 0, len = opt.headers.length; i < len; i++) {
                    row.key = i;
                    row.value = opt.headers[i];
                    hs.push(row);
                    var row = { key: "", value: "" }
                }

                $scope.headers = hs;
                $scope.fn = opt.fn;

                $scope.title = opt.title;

                $scope.select = function (selected) { $uibModalInstance.close(selected); };

                $scope.cancel = function () { $uibModalInstance.dismiss(); };

            }, resolve: {
                opt: function () {
                    return modOptions;
                }
            }
        }).result;
    }
}]);