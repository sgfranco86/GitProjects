angular.module('Giftshop').controller('HomeController', function ($scope, $state, $uibModal, $uibModalStack, $rootScope, $ngConfirm, inform, $interval, AuthenticationService, Idle, Keepalive, TableModalService, localStorageService) {

    
    $scope.user = $rootScope.globals.User;
    if ($scope.user.userType == 'No Registrado')
        $scope.userName == 'Usuario No Registrado'
    else
        $scope.userName = $rootScope.globals.currentUser.username;

    $scope.started = false;

    $scope.init = function () {
        $scope.start();
    };

    $(document).on('click', '.nav-list li', function (e) {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //  var selector = '.nav li';

    //  $( selector ).on( 'click', function ()
    //  {
    //    $( selector ).removeClass( 'active' );
    //    $( this ).addClass( 'active' );
    //  } );

    //  $( "#li-users" ).click( function ()
    //  {
    //    $( "#li-users" ).removeClass( 'active' );
    //    $( this ).addClass( 'active' );
    //  } );

    $scope.logout = function () {
        AuthenticationService.ClearCredentials();
        Idle.unwatch();
        $scope.started = false;
        closeModals();
        $uibModalStack.dismissAll();
        $state.go('login');
    };

    $scope.openChangePassword = function () {
        $uibModal.open({
            size: 'sm',
            animation: true,
            templateUrl: 'Angular/Home/View/changePassword.html'
        });
    };

    function closeModals() {
        if ($scope.warning) {
            $scope.warning.close();
            $scope.warning = null;
        }
        if ($scope.timedout) {
            $scope.timedout.close();
            $scope.timedout = null;
        }
    }

    $scope.$on('IdleStart', function () {
        closeModals();
        $scope.warning = $uibModal.open({
            templateUrl: 'Angular/Home/View/Idle.html',
            windowClass: 'modal-info'
        });
    });

    $scope.$on('IdleEnd', function () {
        closeModals();
    });

    $scope.$on('IdleTimeout', function () {
        $scope.logout();
    });

    $scope.start = function () {
        closeModals();
        Idle.watch();
        $scope.started = true;
    };

    //$scope.showPrompt = function (ev) {
    //    // Appending dialog to document.body to cover sidenav in docs app
    //    var confirm = $mdDialog.prompt()
    //      .title('What would you name your dog?')
    //      .textContent('Bowser is a common name.')
    //      .placeholder('Dog name')
    //      .ariaLabel('Dog name')
    //      .initialValue('Buddy')
    //      .targetEvent(ev)
    //      .required(true)
    //      .ok('Okay!')
    //      .cancel('I\'m a cat person')
    //};

    $scope.ChangePasswd = function () {
        $ngConfirm({
            title: 'Change Password',
            contentUrl: 'Angular/Home/View/changePassword.html',
            backgroundDismiss: false,
            backgroundDismissAnimation: '',
            useBootstrap: false,
            boxWidth: '30%',
            theme: 'material',
            buttons: {
                OK: {
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    text: 'OK',
                    //          disabled: false,
                    //          btnClass: 'btn-primary',
                    action: function (scope) {
                        if ((scope.NEWPASSWORD2 !== null && scope.NEWPASSWORD2 !== undefined) || (scope.NEWPASSWORD !== null && scope.NEWPASSWORD !== undefined)) {
                            if (scope.NEWPASSWORD2 === scope.NEWPASSWORD) {
                                $scope.user.PASSWORDX = scope.NEWPASSWORD
                                SusersServices.changePassword($scope.user).then(function (data) {
                                    if (data.status === 'OK') {
                                        inform.add(data.msg, { type: 'success' });
                                    }
                                }, function (error) {
                                    inform.add(error.msg);
                                });
                            }
                            else {
                                $ngConfirm({ title: 'Mismatch Password', content: 'Mismatch user password, please enter password again', theme: 'material', useBootstrap: false, boxWidth: '30%', backgroundDismiss: true, backgroundDismissAnimation: '', closeIcon: false, buttons: { OK: { keys: ['enter', 'esc'], action: function () { scope.NEWPASSWORD2 = null; scope.NEWPASSWORD = null; $scope.ChangePasswd(); } } } })
                            }
                        }
                        else {
                            $ngConfirm({ title: 'Blank Fields', content: 'Please type password again, please do not leave blank spaces', theme: 'material', useBootstrap: false, boxWidth: '30%', backgroundDismiss: true, backgroundDismissAnimation: '', closeIcon: false, buttons: { OK: { keys: ['enter', 'esc'], action: function () { scope.NEWPASSWORD2 = null; scope.NEWPASSWORD = null; $scope.ChangePasswd(); } } } })

                        }
                    }
                },
                Close: function () {
                }
            }
        })

    };

    $scope.ShortPasswd = function () {
        $ngConfirm({
            title: 'Short Password',
            contentUrl: 'Angular/Home/View/shortPassword.html',
            backgroundDismiss: false,
            backgroundDismissAnimation: '',
            useBootstrap: false,
            boxWidth: '30%',
            theme: 'material',
            buttons: {
                OK: {
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    //          text: 'OK',
                    //          disabled: false,

                    action: function (scope) {

                        $scope.user.FRIENDLY_PASSWORD = scope.PASSWORD;
                        SusersServices.shortPassword($scope.user).then(function (data) {
                            if (data.status === 'OK') {
                                inform.add(data.msg, { type: 'success' });
                            }
                        }, function (error) {
                            inform.add(error.msg);
                        });
                    }
                },
                Close: function () {
                }
            }
        })

    };


    //#region DIALOGS

    $scope.DialogAlert = function (params) {
        $ngConfirm(
          {
              icon: 'fa fa-info',
              title: '  &nbsp;' + params.title,
              theme: 'material',
              content: params.content,
              autoClose: '30',
              backgroundDismiss: true,
              backgroundDismissAnimation: '',
              columnClass: 'large',
              /*containerFluid: true,*/
              closeIcon: true,
              escapeKey: true,
              enterKey: true,
              buttons: {
                  OK: {
                      text: 'OK',
                      keys: ['enter', 'esc']
                  }
              }
          });
    }

    //#endregion DIALOGS

});