(function() {
    "use strict";
    Codez.Editor = function() {
        Codez.Loader.autoload({
            plugins: [
                {
                    'path': 'codez/editor/',
                    'initFile': 'codemirror-compressed.js'
                }
            ]
        });

        return {
            render: function(targetContainerEl) {
                var docHead = document.getElementsByTagName('head')[0],
                    codeMirrorCssEl = document.createElement('link');

                codeMirrorCssEl.setAttribute('rel', 'stylesheet');
                codeMirrorCssEl.setAttribute('type', 'text/css');
                codeMirrorCssEl.setAttribute('href', 'lib/codemirror/lib/codemirror.css');
                docHead.appendChild(codeMirrorCssEl);
                window.CodeMirror(targetContainerEl, {
                    mode: "php"
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