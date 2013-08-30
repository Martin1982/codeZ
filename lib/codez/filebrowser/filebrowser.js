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
            entityAddDialog: function() {
                var modalContainer = document.createElement('div'),
                    existingModal = document.getElementById('addModal');

                if (existingModal) {
                    existingModal.parentNode.removeChild(existingModal);
                }

                modalContainer.setAttribute('style', 'display:none');
                modalContainer.setAttribute('id', 'addModal');

                document.body.appendChild(modalContainer);

                $('#addModal').modal();
            },
            render: function(targetContainer) {
                var browserContainer = document.createElement('div'),
                    toolbar = document.createElement('div'),
                    rootList = document.createElement('ul'),
                    rootElement = document.createElement('li');

                toolbar.setAttribute('class', 'toolbar');

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