System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', './Services/game.service', './Services/language.service', './config', './Models/game.model', './localization-form.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, game_service_1, language_service_1, config_1, game_model_1, localization_form_component_1;
    var GameDetailsComponent;
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
            function (language_service_1_1) {
                language_service_1 = language_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (game_model_1_1) {
                game_model_1 = game_model_1_1;
            },
            function (localization_form_component_1_1) {
                localization_form_component_1 = localization_form_component_1_1;
            }],
        execute: function() {
            GameDetailsComponent = (function () {
                function GameDetailsComponent(_gameService, _routeParams, _languageService, _router) {
                    this._gameService = _gameService;
                    this._routeParams = _routeParams;
                    this._languageService = _languageService;
                    this._router = _router;
                    this.active = true;
                    this.config = new config_1.Config();
                    this.id = +this._routeParams.get('id');
                    if (this.id !== 0) {
                        this.getGame(this.id);
                    }
                    else {
                        this.game = new game_model_1.Game();
                    }
                    this.getLanguages();
                }
                GameDetailsComponent.prototype.selectLanguage = function (lang) {
                    this.selectedLanguage = lang.LangId;
                    var result = this.game.Localizations.filter(function (obj) {
                        return obj.LangId == lang.LangId;
                    });
                    if (result.length == 0) {
                        var newLocal = new game_model_1.AdditionalGameInfoModel();
                        newLocal.LangId = lang.LangId;
                        this.game.Localizations.push(newLocal);
                    }
                };
                ;
                GameDetailsComponent.prototype.deleteLocalization = function (langId) {
                    this.selectedLanguage = null;
                    this.game.Localizations = this.game.Localizations.filter(function (obj) {
                        return obj.LangId !== langId;
                    });
                };
                GameDetailsComponent.prototype.getGame = function (id) {
                    var _this = this;
                    this._gameService.getGame(id).subscribe(function (gamesFromJSON) {
                        _this.game = gamesFromJSON;
                        _this.selectedLanguage = _this.game.Localizations[0].LangId;
                    });
                };
                ;
                GameDetailsComponent.prototype.getLanguages = function () {
                    var _this = this;
                    this._languageService.getLanguages().subscribe(function (languagesFromJSON) { _this.languages = languagesFromJSON; });
                };
                ;
                GameDetailsComponent.prototype.onFileInputChange = function (event) {
                    var _this = this;
                    this._gameService.saveBoxart(event.target.files[0]).then(function (result) {
                        _this.game.BoxArt = result.toString();
                    }, function (error) { return alert('Во время загрузки произошла ошибка'); });
                };
                ;
                GameDetailsComponent.prototype.saveGame = function () {
                    var _this = this;
                    if (this.id !== 0) {
                        this._gameService.saveGame(this.game).then(function (result) {
                            alert('Информация об игре обновлена!');
                        }, function (error) { return alert('Во время загрузки произошла ошибка'); });
                    }
                    else {
                        this._gameService.addGame(this.game).then(function (result) {
                            _this._router.navigate(['Games']);
                        }, function (error) { return alert('Во время загрузки произошла ошибка'); });
                    }
                };
                ;
                GameDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-game-details',
                        templateUrl: 'views/game-details.html',
                        styleUrls: ['css/game-details.css'],
                        providers: [http_1.HTTP_PROVIDERS, game_service_1.GameService, language_service_1.LanguageService],
                        directives: [localization_form_component_1.LocalizationFormComponent]
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService, router_deprecated_1.RouteParams, language_service_1.LanguageService, router_deprecated_1.Router])
                ], GameDetailsComponent);
                return GameDetailsComponent;
            }());
            exports_1("GameDetailsComponent", GameDetailsComponent);
        }
    }
});
//# sourceMappingURL=game-details.component.js.map