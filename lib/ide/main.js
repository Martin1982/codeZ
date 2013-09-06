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
                },
                {
                    'path': 'codez/database',
                    'initFile': 'database.js'
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

        function initIdeForProject(projectName)
        {
            console.log('Setup IDE state for the given project;' + projectName);
        }

        function processProjectForm(e) {
            e.preventDefault();
            if (!window.Codez.dbConnection) {
                console.error('Database connection not available');
            }

            var projectName = document.getElementById('projectname').value,
                transaction = window.Codez.dbConnection.getVfsTransaction(),
                objStore    = transaction.objectStore('vfs'),
                queryRequest;

            queryRequest = objStore.add({
                "filename": projectName.toString(),
                "type": 'folder',
                "parent": 0,
                "content": null
            });

            queryRequest.onsuccess = function() {
                console.log('Added new project');
            };
            $.modal.close();
            initIdeForProject(projectName);
        }

        // @todo make it nicer... this is a hack
        setTimeout(function() {
            if (!Codez.hasOwnProperty('currentProject') || !Codez.currentProject) {
                var modalWin = document.createElement('div');

                modalWin.innerHTML = [
                    '<h1>Welcome to codeZ</h1><h2>The hosted coding environment</h2>',
                    '<p>You haven\'t set up a project yet.</p><hr>',
                    '<form method="post" action="#">',
                        '<label for="projectname">Project name:</label>',
                        '<input type="text" name="projectname" id="projectname" required /><br>',
                        '<label for="projecttemplate">Template:</label>',
                        '<select name="projecttemplate" id="projecttemplate">',
                            '<option>Empty template</option>',
                        '</select><br>',
                        '<button id="createProjectBtn">Create</button>',
                    '</form>'
                ].join('');
                modalWin.setAttribute('class', 'modal');
                modalWin.setAttribute('id', 'noProjectModal');
                document.body.appendChild(modalWin);
                $('#noProjectModal').modal({
                    zIndex: 1000,
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
                });
                var createBtn = document.getElementById('createProjectBtn');
                createBtn.addEventListener('click', processProjectForm, false);
            }
        }, 2000);
    }

    window.addEventListener('DOMContentLoaded', bootstrapApp);
})();