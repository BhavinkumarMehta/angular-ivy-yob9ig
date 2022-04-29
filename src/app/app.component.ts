import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  test = [
    { fname: 'Bhavin', lname: 'Mehta' },
    { fname: 'Devidas', lname: 'Gaikwad' },
    { fname: 'Tushar', lname: 'Raut' },
  ];
}
