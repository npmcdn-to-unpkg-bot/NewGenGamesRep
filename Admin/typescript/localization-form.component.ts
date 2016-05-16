import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'localization-form',
  templateUrl: 'views/localization-form.html'
})
export class LocalizationFormComponent {
  @Input() localization;
  @Output() deleteLocalization = new EventEmitter();

  constructor() {
      
  }
  
  onDelete() {
      this.deleteLocalization.emit("event");
  }
}