import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'School Bus';
  loggedIn: boolean;

  constructor(private authService: AuthService){
    authService.handleAuthentication();
  }
  ngOnInit(){
    if (this.authService.isAuthenticated()){
      this.loggedIn = true;
      console.log("you are loggged in");
    } else {
      console.log("you are loggged out");
      this.loggedIn = false;
    }
  }

  logout(){
    this.authService.logout();
    console.log("loggged out");
    this.loggedIn = false;
  }
  

}
