System.register(['@angular/core', '@angular/http', '../config'], function(exports_1, context_1) {
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
    var core_1, http_1, config_1;
    var GameService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            GameService = (function () {
                function GameService(http) {
                    this.http = http;
                    this.config = new config_1.Config();
                }
                GameService.prototype.getGames = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var path = _this.config.apiURL + '/games';
                        _this.http.get(path)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (gamesFromJSON) { resolve(gamesFromJSON); }, function (error) { return reject(error); });
                    });
                };
                GameService.prototype.getGame = function (id) {
                    var params = new http_1.URLSearchParams();
                    params.set('id', id.toString());
                    var path = this.config.apiURL + '/games';
                    return this.http.get(path, { search: params })
                        .map(function (res) { return res.json(); });
                };
                GameService.prototype.saveGame = function (game) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        var params = new http_1.URLSearchParams();
                        params.set('id', game.GameId.toString());
                        var value = JSON.stringify(game);
                        var myPath = _this.config.apiURL + '/games';
                        _this.http.put(myPath, value, { search: params, headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
                    });
                };
                GameService.prototype.addGame = function (game) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        var value = JSON.stringify(game);
                        var myPath = _this.config.apiURL + '/games';
                        _this.http.post(myPath, value, { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
                    });
                };
                GameService.prototype.saveBoxart = function (file) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        xhr.onload = function () {
                            if (this.status == 200) {
                                resolve(this.response.replace(new RegExp("\"", 'g'), ""));
                            }
                            else {
                                reject('error');
                            }
                        };
                        formData.append("upload", file, file.name);
                        xhr.open("POST", _this.config.apiURL + '/helper/UploadBoxArt/', true);
                        xhr.send(formData);
                    });
                };
                GameService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GameService);
                return GameService;
            }());
            exports_1("GameService", GameService);
        }
    }
});
//# sourceMappingURL=game.service.js.map