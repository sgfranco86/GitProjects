'use strict';
angular.module('Giftshop').service('AuthenticationService', ['Base64', '$http', '$q', 'localStorageService', '$rootScope', function (Base64, $http, $q, localStorageService, $rootScope) {
    this.Logon = function (id, pwd) {
        return $http.post('/api/Authentication/Logon', { user: id, password: pwd }).then(handleSuccess, handleError);
    };

    this.SetCredentials = function (response) {
        var _authdata = Base64.encode(response.user.user + ':' + response.user.password);
        $rootScope.globals = {
            currentUser: {
                username: response.user.Name + " " + response.user.Lastname,
                userType: response.user.userType,
                userid: response.user.user,
                authdata: _authdata

            },
            User: response.user
        };

        $http.defaults.headers.common['Authorization'] = 'GiftShop ' + _authdata; // jshint ignore:line
        localStorageService.set('globals', $rootScope.globals);
    };

    this.ClearCredentials = function () {
        $rootScope.globals = {};
        localStorageService.clearAll();
        $http.defaults.headers.common.Authorization = 'GiftShop ';
    };

    this.checkPermission = function (arg1, arg2) {
        return Base64.encode(arg1 + ':' + arg2);
    }
    // --------------------------------------------------------
    // Unwrap error response
    function handleError(response) {
        // Normalize the response from server side
        if (!angular.isObject(response.data) || !response.data)
            return ($q.reject("An unknown error occurred."));

        // Otherwise, use expected error message.
        //return ($q.reject(response.data.message));
        return ($q.reject(response.data));
    };

    // Transform the successful response, unwrapping the application data
    function handleSuccess(response) {
        return (response.data);
    };
    // --------------------------------------------------------
}]).factory('Base64', function () {
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                            keyStr.charAt(enc1) +
                            keyStr.charAt(enc2) +
                            keyStr.charAt(enc3) +
                            keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                            "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };
});