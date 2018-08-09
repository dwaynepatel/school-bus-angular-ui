import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { SharedService } from './shared/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'School Bus';
  loggedIn: boolean;

  constructor(private authService: AuthService, private sharedService: SharedService){
    authService.handleAuthentication();
  }
  ngOnInit(){
    if (this.authService.isAuthenticated()){
      this.sharedService.setLoggedIn("true");
      this.sharedService.checkLoggedIn();
      this.loggedIn = this.sharedService.isLoggedIn;
      console.log("you are loggged in");
    } else {
      this.sharedService.setLoggedIn("false");
      this.sharedService.checkLoggedIn();
      this.loggedIn = this.sharedService.isLoggedIn;
      console.log("you are loggged out");
    
    }
  }

  logout(){
    this.authService.logout();
    console.log("loggged out");
    this.loggedIn = false;
  }
  

}
