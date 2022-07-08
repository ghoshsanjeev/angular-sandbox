import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  username:string ='';
  password:string = '';

  login(){
    alert(this.username+" has signed in!");
  }
}
