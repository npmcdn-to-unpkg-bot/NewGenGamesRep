import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {GamesComponent} from './games.component'
import {GameDetailsComponent} from './game-details.component'
import {ServicesComponent} from './services.component'

@Component({
    selector: 'my-translations',
    templateUrl: 'views/translations.html',
    styleUrls: ['css/translations.css'],
    directives: [ROUTER_DIRECTIVES]
})
// @RouteConfig([
// {
//     path: '/games',
//     name: 'Games',
//     component: GamesComponent,
//     useAsDefault: true
// },
// {
//     path: '/gamedetails/:id',
//     name: 'GameDetails',
//     component: GameDetailsComponent,
//     useAsDefault: false
// },
// {
//     path: '/creategame',
//     name: 'CreateGame',
//     component: GameDetailsComponent,
//     useAsDefault: false
// },
// {
//     path: '/services',
//     name: 'Services',
//     component: ServicesComponent,
//     useAsDefault: false
// }
// ])
export class TranslationsComponent {
    selectedItem: string;
    
    constructor() {
        this.selectedItem = "Игры";
    }
    
    onSelect(item: string) {
         this.selectedItem = item;
    }
}