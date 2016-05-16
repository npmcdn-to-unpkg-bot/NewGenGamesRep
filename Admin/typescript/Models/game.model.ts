export class AdditionalGameInfoModel
{
    // constructor(public _langId) {
    //     this.LangId = _langId;
    // }
    
    LangId: number;
    GameTitle: string;
    Description: string;
}

export class Game {
    constructor() {
        this.Localizations = []
    }
    
  GameId: number;
  CodeName: string;
  BoxArt: string;
  ReleaseDate: string;
  
  FullInfo: AdditionalGameInfoModel;
  Localizations: AdditionalGameInfoModel[];
}

