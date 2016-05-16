import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, Response} from '@angular/http';

import {Game} from '../Models/game.model';
import {Config} from '../config'

@Injectable()
export class GameService {
    private config: Config;
    private games;

    constructor(private http: Http) {
        this.config = new Config()
    }
    
    getGames() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var path = _this.config.apiURL + '/games';
            _this.http.get(path)
                .map(res => res.json())
                .subscribe(
                    gamesFromJSON => {resolve(gamesFromJSON);},
                    error => reject(error)
                ); 
        });
    }

    getGame(id: number) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id.toString());
        //params.set('isAdmin', "1");

        var path = this.config.apiURL + '/games';
        return this.http.get(path, { search: params })
            .map(res => res.json());
    }

    saveGame(game: Game) {
        var _this = this;

        return new Promise(function(resolve, reject) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let params: URLSearchParams = new URLSearchParams();
            params.set('id', game.GameId.toString());

            let value = JSON.stringify(game);
            let myPath = _this.config.apiURL + '/games';


            _this.http.put(myPath, value, { search: params, headers: headers })
                .map(res => res.json())
                .subscribe(
                    data => resolve(data),
                    err => reject(err)
                );
        });
    }
    
    addGame(game: Game) : any {
        var _this = this;

        return new Promise(function(resolve, reject) {
        
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let value = JSON.stringify(game);
            let myPath = _this.config.apiURL + '/games';

            _this.http.post(myPath, value, { headers: headers })
                .map(res => res.json())
                .subscribe(
                    data => resolve(data),
                    err => reject(err)
                );
            });
    }


    saveBoxart(file: any) {
        var _this = this;

        return new Promise(function(resolve, reject) {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            xhr.onload = function() {
                if (this.status == 200) {
                    resolve(this.response.replace(new RegExp("\"", 'g'), ""));
                } else {
                    reject('error');
                }
            };

            formData.append("upload", file, file.name);

            xhr.open("POST", _this.config.apiURL + '/helper/UploadBoxArt/', true);
            xhr.send(formData);
        });
    }
}