angular.module('samarth-webcomponents')
    .factory('datagenerate', function($http) {
        return {
            getjson: function(key, lang) {
                let data = {};
                return $http({
                    method: 'GET',
                    url: '/resource/' + key + lang,
                    type: 'JSON'

                }).then(function mySucces(response) {
                    data = response.data;


                    console.log(data);
                    return data;
                }, function errorCallback(response) {
                    return response.error.message;
                });
            }

        };
    });
