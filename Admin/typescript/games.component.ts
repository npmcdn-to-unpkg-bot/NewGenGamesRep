import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {GameService} from './Services/game.service'
import {Game} from './Models/game.model'

//Модели
import {Config} from './config';

@Component({
    selector: 'my-games',
    templateUrl: 'views/games.html',
    styleUrls: ['css/games.css'],
    providers: [HTTP_PROVIDERS, GameService]
})

export class GamesComponent {
    config: Config;
    private games : Game[];
    
    constructor(private _gameService: GameService,
                private _router: Router) { 
        this.getGames();
        this.config = new Config();
    }
    
    getGames() {
    
        this._gameService.getGames().then(
            result => { this.games = result as Game[] },
            error => alert('Во время загрузки произошла ошибка')
        );
    }
    
    gotoDetail(id: number) {
        this._router.navigate(['GameDetails', { id: id }]);
    }
}