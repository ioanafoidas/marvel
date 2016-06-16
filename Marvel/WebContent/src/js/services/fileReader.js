'use strict';
// =============================================================================
// FILE READER FACTORY
// =============================================================================
angular
    .module('Chat')
    .factory('fileReader', fileReader);

fileReader.$inject = ['$q'];

function fileReader($q) {
    var onLoad = OnLoad,
        onError = OnError,
        onProgress = OnProgress,
        getReader = GetReader,
        readAsDataURL = ReadAsDataURL,
        readVideoURL = ReadVideoURL,
        services = {
            readAsDataUrl: readAsDataURL,
            readVideoURL: readVideoURL
        };

    return services;

    function OnLoad(reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.resolve(reader.result);
            });
        };
    }

    function OnError(reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.reject(reader.result);
            });
        };
    }

    function OnProgress(reader, scope) {
        return function (event) {
            scope.$broadcast('fileProgress', {
                total: event.total,
                loaded: event.loaded
            });
        };
    }

    function GetReader(deferred, scope) {
        var reader = new FileReader();

        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        reader.onprogress = onProgress(reader, scope);

        return reader;
    }

    function ReadAsDataURL(file, scope) {
        var deferred = $q.defer(),
            reader = getReader(deferred, scope);

        reader.readAsDataURL(file);

        return deferred.promise;
    }

    function ReadVideoURL(file, scope) {
        var deferred = $q.defer(),
            reader = window.URL || window.webkitURL,
            url;

        if (reader && reader.createObjectURL) {
            url = reader.createObjectURL(file);
            scope.$apply(function () {
                deferred.resolve(url);
            });
        }
        return deferred.promise;
    }
}
