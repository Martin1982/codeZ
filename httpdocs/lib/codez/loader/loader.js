(function(){
    "use strict";
    var Codez = function() {
        return {
            Loader: {
                loadedFiles: [],
                defaultDir: 'lib/',
                isLoaded: function(fileKey) {
                    if (this.loadedFiles.indexOf(fileKey) > 1) {
                        return true;
                    }
                    return false;
                },
                autoload: function(loadCfg) {
                    var headEl = document.querySelector('head'),
                        i;

                    if (typeof loadCfg != 'object') {
                        throw "Configuration must be an object";
                    }

                    if (loadCfg.hasOwnProperty('plugins')) {
                        for (i = 0; i < loadCfg.plugins.length; i++) {
                            var plugin = loadCfg.plugins[i],
                                scriptTag = document.createElement('script'),
                                fileKey = plugin.path + plugin.initFile;

                            if (this.isLoaded(fileKey)) {
                                continue;
                            }

                            if (!plugin.hasOwnProperty('path')) {
                                throw "Plugin " + i + ": misconfiguration in 'path'";
                            }

                            if (!plugin.hasOwnProperty('initFile')) {
                                throw "Plugin " + i + ": misconfiguration in 'initFile'";
                            }

                            scriptTag.setAttribute('src', this.defaultDir + plugin.path + '/' + plugin.initFile);
                            document.body.appendChild(scriptTag);
                            this.loadedFiles.push(fileKey);
                        }
                    }

                    if (loadCfg.hasOwnProperty('styles')){
                        for ( i = 0; i < loadCfg.styles.length; i++) {
                            var style = loadCfg.styles[i],
                                linkTag = document.createElement('link'),
                                fileKey = style.path + style.cssFile;

                            if (this.isLoaded(fileKey)) {
                                continue;
                            }

                            linkTag.setAttribute('rel', 'stylesheet');
                            linkTag.setAttribute('type', 'text/css');
                            linkTag.setAttribute('href', this.defaultDir + style.path + '/' + style.cssFile);

                            headEl.appendChild(linkTag);
                            this.loadedFiles.push(fileKey);
                        }
                    }
                }
            }
        }
    };

    if (!window.Codez) {
        window.Codez = new Codez();
    }


})();