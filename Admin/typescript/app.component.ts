import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

// import {LocaleService} from 'angular2localization';
// import {LocalizationService} from 'angular2localization/angular2localization';
// import {TranslatePipe} from 'angular2localization/angular2localization';


import {TranslationsComponent} from './translations.component'
import {SidebarComponent} from './sidebar.component'
import {GamesComponent} from './games.component'
import {ServicesComponent} from './services.component'
import {GameDetailsComponent} from './game-details.component'


@Component({
    selector: 'my-app',
    templateUrl: 'views/app.html',
    styleUrls: ['css/app.css'],
    directives: [ROUTER_DIRECTIVES, SidebarComponent],
    providers: [ROUTER_PROVIDERS],
    //providers: [ROUTER_PROVIDERS, LocaleService, LocalizationService],
    //pipes: [TranslatePipe]
})
@RouteConfig([
// {
//     path: '/translations/...',
//     name: 'Translations',
//     component: TranslationsComponent,
//     useAsDefault: false
// },
{
    path: '/games',
    name: 'Games',
    component: GamesComponent,
    useAsDefault: true
},
{
    path: '/games/gamedetails/:id',
    name: 'GameDetails',
    component: GameDetailsComponent,
    useAsDefault: false
},
{
    path: '/games/creategame',
    name: 'CreateGame',
    component: GameDetailsComponent,
    useAsDefault: false
},
{
    path: '/services',
    name: 'Services',
    component: ServicesComponent,
    useAsDefault: false
}
])
export class AppComponent { 
    
}