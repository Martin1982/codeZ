(function(){
    "use strict";
    Codez.Filebrowser = function() {

        Codez.Loader.autoload({
            plugins: [
                {
                    'path': 'jquery-modal',
                    'initFile': 'jquery.modal.min.js'
                }
            ],
            styles: [
                {
                    'path': 'codez/filebrowser',
                    'cssFile': 'filebrowser.css'
                },
                {
                    'path': 'jquery-modal',
                    'cssFile': 'jquery.modal.css'
                }
            ]
        });

        return {
//            entityAddDialog: function() {
//                var modalContainer = document.createElement('div'),
//                    existingModal = document.getElementById('addModal');
//
//                if (existingModal) {
//                    existingModal.parentNode.removeChild(existingModal);
//                }
//
//                modalContainer.setAttribute('style', 'display:none');
//                modalContainer.setAttribute('id', 'addModal');
//
//                document.body.appendChild(modalContainer);
//
//                $('#addModal').modal();
//            },
            fileErrorHandler: function(e) {
                var msg = '';
                switch (e.code) {
                    case FileError.QUOTA_EXCEEDED_ERR:
                        msg = 'Quota exceeded';
                        break;
                    case FileError.NOT_FOUND_ERR:
                        msg = 'File not found';
                        break;
                    case FileError.SECURITY_ERR:
                        msg = 'Security error';
                        break;
                    case FileError.INVALID_MODIFICATION_ERR:
                        msg = 'Invalid modification';
                        break;
                    case FileError.INVALID_STATE_ERR:
                        msg = 'Invalid state';
                        break;
                    default:
                        msg = 'Unknown error';
                        break;
                }
                alert('Error: ' + msg);
            },
            onFileSystemCreated: function(filesystem) {
                window.Codez.FileSystem = filesystem;
            },
            initFileSystem: function() {
                window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
                window.Codez.FileSystem = null;
                if (window.requestFileSystem) {
                    window.requestFileSystem(window.PERSISTENT, 1024*1024, this.onFileSystemCreated, this.fileErrorHandler);
                }
            },
            render: function(targetContainer) {
                var browserContainer = document.createElement('div'),
                    toolbar = document.createElement('div'),
                    rootList = document.createElement('ul'),
                    rootElement = document.createElement('li');

                this.initFileSystem();

                toolbar.setAttribute('class', 'toolbar');
                toolbar.innerText = "Files";

                rootElement.innerText = "projectroot";
                rootElement.setAttribute('class', 'type folder');

                rootList.appendChild(rootElement);
                browserContainer.appendChild(toolbar);
                browserContainer.appendChild(rootList);
                browserContainer.setAttribute('id', 'filebrowser');

                targetContainer.appendChild(browserContainer);
            }
        }
    };

    var filebrowser = new Codez.Filebrowser();
    filebrowser.render(document.querySelector('#middleContainer .left'));
})();