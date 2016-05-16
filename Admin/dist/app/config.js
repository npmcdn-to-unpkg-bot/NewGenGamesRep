System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                    this.langID = 1;
                    this.domain = 'http://localhost:63296/';
                    this.apiURL = this.domain + 'api/' + this.langID;
                    this.boxesURL = this.domain + 'content/images/boxes/';
                }
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.js.map