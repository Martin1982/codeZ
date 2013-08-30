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
                var modalWin = document.createElement('div');

                modalWin.innerHTML = [
                    "<h1>Welcome to codeZ</h1><h2>The hosted coding environment</h2>",
                    "<p>You haven't set up a project yet.</p>",
                    "<p>We haven't got a form for that yet</p>",
                    "<p>So please return later...</p>"
                ].join('');
                modalWin.setAttribute('class', 'modal');
                modalWin.setAttribute('id', 'noProjectModal');
                document.body.appendChild(modalWin);

                $('#noProjectModal').modal({ zIndex: 1000 });
            }
        }, 2000);
    }

    window.addEventListener('DOMContentLoaded', bootstrapApp);
})();