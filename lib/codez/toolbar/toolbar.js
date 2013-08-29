(function() {
    "use strict";
    Codez.Toolbar = function() {
        var docHead = document.getElementsByTagName('head')[0],
            toolbarCssEl = document.createElement('link');

        toolbarCssEl.setAttribute('rel', 'stylesheet');
        toolbarCssEl.setAttribute('type', 'text/css');
        toolbarCssEl.setAttribute('href', 'lib/codez/toolbar/toolbar.css');
        docHead.appendChild(toolbarCssEl);

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
                this.renderItems(targetContainerEl, this.config.menu)
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
                        "action": function() { console.log('New file action'); }
                    },
                    {
                        "label": "Save as...",
                        "action": function() { console.log('Save action'); }
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