export class Config {
  langID: number = 1;
  domain: string = 'http://localhost:63296/';
  
  apiURL: string;
  boxesURL: string;
  
  constructor() {
        this.apiURL = this.domain + 'api/' + this.langID;
        this.boxesURL = this.domain + 'content/images/boxes/'
    }
}