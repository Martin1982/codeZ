(function() {
    "use strict";

    function bootstrapApp() {
        Codez.Loader.autoload({
            plugins: [
                {
                    'path': 'jquery',
                    'initFile': 'jquery.min.js'
                },
                {
                    'path': 'codez/editor',
                    'initFile': 'editor.js'
                },
                {
                    'path': 'codez/filebrowser',
                    'initFile': 'filebrowser.js'
                },
                {
                    'path': 'codez/toolbar',
                    'initFile': 'toolbar.js'
                },
                {
                    'path': 'jquery-modal/',
                    'initFile': 'jquery.modal.min.js'
                }
            ],
            styles: [
                {
                    'path': 'ide',
                    'cssFile': 'main.css'
                },
                {
                    'path': 'reset-css',
                    'cssFile': 'reset.css'
                }
            ]
        });
        // @todo make it nicer... this is a hack
        setTimeout(function() {
            if (!Codez.hasOwnProperty('currentProject') || !Codez.currentProject) {
                $('<p>Create a project</p>').modal({ zIndex: 1000 });
            }
        }, 2000);
    }

    window.addEventListener('DOMContentLoaded', bootstrapApp);
})();