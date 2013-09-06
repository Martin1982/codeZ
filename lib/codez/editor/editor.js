(function() {
    "use strict";
    Codez.Editor = function() {
        Codez.Loader.autoload({
            plugins: [
                {
                    'path': 'codez/editor/',
                    'initFile': 'codemirror-compressed.js'
                }
            ],
            styles: [
                {
                    'path': 'codemirror/lib',
                    'cssFile': 'codemirror.css'
                },
                {
                    'path': 'codemirror/theme',
                    'cssFile': 'midnight.css'
                },
                {
                    'path': 'codez/editor',
                    'cssFile': 'editor.css'
                }
            ]
        });

        return {
            render: function(targetContainerEl) {
                window.CodeMirror(targetContainerEl, {
                    mode: "javascript",
                    theme: 'midnight',
                    indentUnit: 4,
                    lineNumbers: true,
                    autofocus: true
                });
            }
        }
    };

    var editor = new Codez.Editor();
    // @todo setTimeout is naughty....
    setTimeout(function() {
        editor.render(document.querySelector('#middleContainer .middle'));
    }, 1000);
})();