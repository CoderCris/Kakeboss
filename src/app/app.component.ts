import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

import {UsersComponent} from './component/users/users.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kakebosh';
  showList = true;

  constructor() {

  }

  switchButton() {
    this.showList = !this.showList;
  }
}
