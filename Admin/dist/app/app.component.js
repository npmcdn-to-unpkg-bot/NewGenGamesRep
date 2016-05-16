System.register(['@angular/core', '@angular/router-deprecated', './sidebar.component', './games.component', './services.component', './game-details.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, sidebar_component_1, games_component_1, services_component_1, game_details_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (games_component_1_1) {
                games_component_1 = games_component_1_1;
            },
            function (services_component_1_1) {
                services_component_1 = services_component_1_1;
            },
            function (game_details_component_1_1) {
                game_details_component_1 = game_details_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'views/app.html',
                        styleUrls: ['css/app.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, sidebar_component_1.SidebarComponent],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS],
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/games',
                            name: 'Games',
                            component: games_component_1.GamesComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/games/gamedetails/:id',
                            name: 'GameDetails',
                            component: game_details_component_1.GameDetailsComponent,
                            useAsDefault: false
                        },
                        {
                            path: '/games/creategame',
                            name: 'CreateGame',
                            component: game_details_component_1.GameDetailsComponent,
                            useAsDefault: false
                        },
                        {
                            path: '/services',
                            name: 'Services',
                            component: services_component_1.ServicesComponent,
                            useAsDefault: false
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map