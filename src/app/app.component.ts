import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  test = [{fname : "Bhavin", lname:"Mehta"},{fname : "Bhavin1", lname:"Mehta"},{fname : "Bhavin2", lname:"Mehta"}];
}
