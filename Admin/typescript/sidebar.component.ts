import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'sidebar',
    templateUrl: 'views/sidebar.html',
    styleUrls: ['css/sidebar.css'],
})
export class SidebarComponent { 
    
    constructor(private _router: Router) {
        
    }
    
    navigateTo() {
        this._router.navigate(['Games', {}]);
    }
}