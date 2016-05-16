import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import {Config} from '../config'

@Injectable()
export class LanguageService {
    private languages;
    private config: Config;
    
    constructor(private http: Http) {
        this.config = new Config()
    }
    
    getLanguages() {
        var path = this.config.apiURL + '/languages';
        return this.http.get(path)
            .map(res => res.json());
    }
}