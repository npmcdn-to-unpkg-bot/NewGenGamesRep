//Системные библиотеки
import {Component, Input} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteParams, Router} from '@angular/router-deprecated';

//Сервисы
import {GameService} from './Services/game.service';
import {LanguageService} from './Services/language.service';

//Модели
import {Config} from './config';
import {Game, AdditionalGameInfoModel} from './Models/game.model';
import {Language} from './Models/language.model';

//Компоненты
import {LocalizationFormComponent} from './localization-form.component';

@Component({
    selector: 'my-game-details',
    templateUrl: 'views/game-details.html',
    styleUrls: ['css/game-details.css'],
    providers: [HTTP_PROVIDERS, GameService, LanguageService],
    directives: [LocalizationFormComponent] 
})

export class GameDetailsComponent {
    id: number;
    game: Game;
    languages: Language[];
    selectedLanguage: number;
    active = true;
    boxartName: string;
    config: Config;
    
    constructor(private _gameService: GameService,
                private _routeParams: RouteParams,
                private _languageService: LanguageService,
                private _router: Router) { 
                    
                    
                    
        this.config = new Config();
        
        this.id = +this._routeParams.get('id');
        
        //Если в URL'е есть id, то запускаем редактирование игры, иначе - создаём новую
        if(this.id !== 0) {
            this.getGame(this.id);
        }
        else {
            this.game = new Game();
        }
        
        this.getLanguages();
    }
    
    selectLanguage(lang: Language) {
        this.selectedLanguage = lang.LangId;
        
        var result = this.game.Localizations.filter(function( obj ) {
            return obj.LangId == lang.LangId;
        });
        
        //Если выбранный язык отсутствует в объекте {this.game:Game}, то добавляем туда новую локализацию
        if(result.length == 0)
        {
            var newLocal = new AdditionalGameInfoModel();
                newLocal.LangId = lang.LangId;
            
            this.game.Localizations.push(newLocal);
        }
    };
    
    deleteLocalization(langId){
        this.selectedLanguage = null;
        
        this.game.Localizations = this.game.Localizations.filter(function( obj ) {
            return obj.LangId !== langId;
        });
    }
    
    // Получение данных
    // ------------------------------------------------------------------------------------------
    
    getGame(id: number) {
        this._gameService.getGame(id).subscribe(
            gamesFromJSON => { 
                this.game = gamesFromJSON;
                this.selectedLanguage = this.game.Localizations[0].LangId;
                 }
        );
    };
    
    getLanguages() {
        this._languageService.getLanguages().subscribe(
            languagesFromJSON => { this.languages = languagesFromJSON }
        );
    };
    
    // Отправка данных
    // ------------------------------------------------------------------------------------------
    
    //Загружаем обложку на сервер
    onFileInputChange(event) {
        this._gameService.saveBoxart(event.target.files[0]).then(
            result => { 
                this.game.BoxArt = result.toString() 
            },
            error => alert('Во время загрузки произошла ошибка')
        );
    };
    
    saveGame() {
        // this.active = false;
        // setTimeout(()=> this.active=true, 0);
        if(this.id !== 0) {
            this._gameService.saveGame(this.game).then(
                result => { 
                    alert('Информация об игре обновлена!') 
                },
                error => alert('Во время загрузки произошла ошибка')
            );
        }
        else {
            this._gameService.addGame(this.game).then(
                result => { 
                    //alert('Игра успешно добавлена');
                    this._router.navigate(['Games']); 
                },
                error => alert('Во время загрузки произошла ошибка')
            );
        }  
    };
    
}