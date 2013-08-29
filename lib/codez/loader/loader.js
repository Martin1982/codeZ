(function(){
    "use strict";
    var Codez = function() {
        return {
            Loader: {
                loadedFiles: [],
                defaultDir: 'lib/',
                autoload: function(loadCfg) {
                    if (typeof loadCfg != 'object') {
                        throw "Configuration must be an object";
                    }

                    if (!loadCfg.hasOwnProperty('plugins')) {
                        throw "No 'plugins' configuration directive found";
                    }

                    if (loadCfg.plugins.length < 1) {
                        throw "The 'plugins' configuration must be an array";
                    }

                    for (var i = 0; i < loadCfg.plugins.length; i++) {
                        var plugin = loadCfg.plugins[i],
                            scriptTag = document.createElement('script');

                        if (!plugin.hasOwnProperty('path')) {
                            throw "Plugin " + i + ": misconfiguration in 'path'";
                        }

                        if (!plugin.hasOwnProperty('initFile')) {
                            throw "Plugin " + i + ": misconfiguration in 'initFile'";
                        }

                        scriptTag.setAttribute('src', this.defaultDir + plugin.path + '/' + plugin.initFile);
                        document.body.appendChild(scriptTag);
                    }
                }
            }
        }
    };

    if (!window.Codez) {
        window.Codez = new Codez();
    }


})();