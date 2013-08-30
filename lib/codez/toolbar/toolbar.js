(function() {
    "use strict";
    Codez.Toolbar = function() {

        Codez.Loader.autoload({
            styles: [
                {
                    'path': 'codez/toolbar',
                    'cssFile': 'toolbar.css'
                }
            ]
        });

        return {
            setCfg: function(config) {
                this.config = config;
            },
            renderItems: function(targetEl, items) {
                var toolbarEl = document.createElement('ul'),
                    item, mainEl, pointerEl, i;

                toolbarEl.setAttribute('id', 'nav');
                toolbarEl.setAttribute('class', 'dropdown dropdown-horizontal');

                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    mainEl = document.createElement('li');
                    if (typeof item.action == 'function') {
                        pointerEl = document.createElement('a');
                        pointerEl.addEventListener('click', item.action, false);

                        if (item.hasOwnProperty('inButtonBar') && (item.inButtonBar == true)) {

                        }

                    } else {
                        pointerEl = document.createElement('span');
                        pointerEl.setAttribute('class', 'dir');
                        this.renderItems(mainEl, item.action);
                    }
                    pointerEl.innerText = item.label;
                    mainEl.appendChild(pointerEl);
                    toolbarEl.appendChild(mainEl);
                }

                targetEl.appendChild(toolbarEl);
                return targetEl;
            },
            render: function(targetContainerEl) {
                this.renderItems(targetContainerEl, this.config.menu);
            }
        }
    };

    var toolbar = new Codez.Toolbar();
    toolbar.setCfg({
        "menu": [
            {
                "label": "File",
                "action": [
                    {
                        "label": "New...",
                        "action": [
                            {
                                "label": "Project",
                                "action": function() { console.log('New project') }
                            },
                            {
                                "label": "File",
                                "action": function() { console.log('New file') }
                            }
                        ]
                    },
                    {
                        "label": "Open...",
                        "action": function() { console.log('New file action'); }
                    },
                    {
                        "label": "Save as...",
                        "action": function() { console.log('Save action'); }
                    },
                    {
                        "label": "Save all",
                        "inButtonBar": true,
                        "action": function() { console.log('New file action'); }
                    },
                    {
                        "label": "Preferences",
                        "action": function() { console.log("Open Preferences"); }
                    }
                ]
            },
            {
                "label": "Edit",
                "action": function() { console.log('Edit action'); }
            },
            {
                label: "Help",
                "action": function() { console.log('Help action') }
            }
        ]
    });
    toolbar.render(document.getElementById('toolbarContainer'));
})();