import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService){}

  canActivate(){
    if(this.authService.isAuthenticated()){
      return true;
    } else {
      this.authService.login();
    }
  }
}