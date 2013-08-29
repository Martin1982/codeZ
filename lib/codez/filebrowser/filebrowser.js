(function(){
    "use strict";
    Codez.Filebrowser = function() {
        var headEl = document.getElementsByTagName('head')[0],
            toolbarLinkEl = document.createElement('link'),
            modalLinkEl = document.createElement('link');

        Codez.Loader.autoload({
            plugins: [
                {
                    'path': 'jquery-modal',
                    'initFile': 'jquery.modal.min.js'
                }
            ]
        });

        toolbarLinkEl.setAttribute('rel', 'stylesheet');
        toolbarLinkEl.setAttribute('type', 'text/css');
        toolbarLinkEl.setAttribute('href', 'lib/codez/filebrowser/filebrowser.css');
        headEl.appendChild(toolbarLinkEl);

        modalLinkEl.setAttribute('rel', 'stylesheet');
        modalLinkEl.setAttribute('type', 'text/css');
        modalLinkEl.setAttribute('href', 'lib/jquery-modal/jquery.modal.css');
        headEl.appendChild(modalLinkEl);

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
            getButton: function(cfg){
                var buttonEl = document.createElement('button');

                if (cfg.hasOwnProperty('class')) {
                    buttonEl.setAttribute('class', cfg.class);
                }

                if (cfg.hasOwnProperty('pressAction')) {
                    // @todo yes we have an "evil eval" here.... this'll need some love
                    buttonEl.addEventListener('click', eval(cfg.pressAction), false);
                }

                return buttonEl;
            },
            render: function(targetContainer) {
                var browserContainer = document.createElement('div'),
                    toolbar = document.createElement('div'),
                    rootList = document.createElement('ul'),
                    rootElement = document.createElement('li');

                toolbar.setAttribute('class', 'toolbar');
                toolbar.appendChild(this.getButton({
                    'class': 'add',
                    'pressAction': 'this.entityAddDialog'
                }));

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