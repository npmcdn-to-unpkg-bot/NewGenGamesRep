import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
    selector: 'my-services',
    templateUrl: 'views/services.html',
    //styleUrls: ['css/games.css'],
    providers: [HTTP_PROVIDERS]
})

export class ServicesComponent {
    constructor() {}
}