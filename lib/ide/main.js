(function() {
    "use strict";

    function bootstrapApp() {
        Codez.Loader.autoload({
            plugins: [
                {
                    'path': 'jquery',
                    'initFile': 'jquery.js'
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
                }
            ]
        });
    }

    window.addEventListener('DOMContentLoaded', bootstrapApp);
})();