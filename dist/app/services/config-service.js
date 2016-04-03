System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ConfigService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfigService = (function () {
                function ConfigService() {
                    this.searchEnabled = true;
                    this.orderEnabled = true;
                    this.globalSearchEnabled = true;
                    this.footerEnabled = false;
                    this.paginationEnabled = true;
                    this.exportEnabled = true;
                    // public resourceUrl = "http://beta.json-generator.com/api/json/get/Nyl81BFTg";
                    this.resourceUrl = "http://beta.json-generator.com/api/json/get/E164yBM0l";
                }
                ConfigService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ConfigService);
                return ConfigService;
            }());
            exports_1("ConfigService", ConfigService);
        }
    }
});
