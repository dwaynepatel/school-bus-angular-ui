import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loggedIn: boolean;

  constructor(private authService: AuthService){
    authService.handleAuthentication();
  }
  ngOnInit(){
    if (this.authService.isAuthenticated()){
      this.loggedIn = true;
      console.log("you are loggged in");
    }
  }

  logout(){
    this.authService.logout();
    console.log("loggged out");
    this.loggedIn = true;
  }
  

}
