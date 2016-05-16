System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', './Services/game.service', './config'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, game_service_1, config_1;
    var GamesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            GamesComponent = (function () {
                function GamesComponent(_gameService, _router) {
                    this._gameService = _gameService;
                    this._router = _router;
                    this.getGames();
                    this.config = new config_1.Config();
                }
                GamesComponent.prototype.getGames = function () {
                    var _this = this;
                    this._gameService.getGames().then(function (result) { _this.games = result; }, function (error) { return alert('Во время загрузки произошла ошибка'); });
                };
                GamesComponent.prototype.gotoDetail = function (id) {
                    this._router.navigate(['GameDetails', { id: id }]);
                };
                GamesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-games',
                        templateUrl: 'views/games.html',
                        styleUrls: ['css/games.css'],
                        providers: [http_1.HTTP_PROVIDERS, game_service_1.GameService]
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService, router_deprecated_1.Router])
                ], GamesComponent);
                return GamesComponent;
            }());
            exports_1("GamesComponent", GamesComponent);
        }
    }
});
//# sourceMappingURL=games.component.js.map