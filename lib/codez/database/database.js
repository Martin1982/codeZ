(function(){
    var indexedDB = window.indexedDB;

    function getVfsTransaction()
    {
        var transaction = window.Codez.dbConnection.transaction(["vfs"], "readwrite");

        transaction.oncomplete = function(e) {
            console.log("Transaction done");
        };

        transaction.onerror = function(e) {
            console.log("Transaction error");
        };

        return transaction;
    }

    function loadDb(clean) {
        var requestDb, dbConnection;

        if (clean === true) {
            indexedDB.deleteDatabase('codeZ');
        }

        requestDb = indexedDB.open('codeZ', 1);
        requestDb.onsuccess = function() {
            if (requestDb.hasOwnProperty('result')) {
                window.Codez.dbConnection = dbConnection = requestDb.result;
                window.Codez.dbConnection.getVfsTransaction = getVfsTransaction;
            } else {
                throw "No indexedDb result found";
            }
        };

        requestDb.onerror = function(event) {
            // @todo handle the user agent denying access to indexedDB
            console.log('error event triggered: ', event.target.error);
        };

        requestDb.onupgradeneeded = function(event) {
            dbConnection = event.target.result;
            dbConnection.createObjectStore('vfs', {
                keyPath: 'nodeId',
                autoIncrement: true
            });
        }
    }

    loadDb(true);
})();