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
                    '<h1>Welcome to codeZ</h1><h2>The hosted coding environment</h2>',
                    '<p>You haven\'t set up a project yet.</p><hr>',
                    '<form method="post" action="#">',
                        '<label for="projectname">Project name:</label>',
                        '<input type="text" name="projectname" id="projectname" /><br>',
                        '<label for="projecttemplate">Template:</label>',
                        '<select name="projecttemplate" id="projecttemplate">',
                            '<option>Empty template</option>',
                        '</select><br>',
                        '<input type="submit" name="create-project" value="Create">',
                    '</form>'
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