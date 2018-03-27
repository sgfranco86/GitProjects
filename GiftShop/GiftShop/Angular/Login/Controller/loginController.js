angular.module('Giftshop').controller('LoginController', ['$scope', '$state', 'AuthenticationService', 'inform', 'blockUI', function ($scope, $state, AuthenticationService, inform, blockUI) {
    AuthenticationService.ClearCredentials();
    $scope.Logon = function () {
        var _block = blockUI.instances.get('login-block');
        AuthenticationService.Logon($scope.user_id, $scope.passwordx).then(function (response) {
            _block.start();
            if (response.status === 'ok') {
                document.title = "Giftshop";
                AuthenticationService.SetCredentials(response);
                $state.go('home');
            }
        }, function (error) {
            _block.stop();
            inform.add(error.msg);
        });
    };
}]);