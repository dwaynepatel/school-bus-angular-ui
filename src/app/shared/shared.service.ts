import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
// class for storing variables to local storage and fetching test data
export class SharedService {
 //boolean to show a different view for a bus company or passenger
 isPassenger:boolean = false; 
 isLoggedIn:boolean = false;
 passengerId: string;
 public API = 'http://localhost:8080/api/test/create';
 //public API = '//localhost:8080/api/test/create';


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API)  
  }


setPassenger(input){
  localStorage.setItem('passenger', input );
  this.checkPassenger();
}

getPassenger(){
 return localStorage.getItem('passenger');
}

setLoggedIn(input){
  localStorage.setItem('loggedIn', input );
  this.checkLoggedIn();
}

getLoggedIn(){
 return localStorage.getItem('loggedIn');
}

checkLoggedIn(){
  console.log(" in shared service after changing loggedin ", this.getLoggedIn());
if(this.getLoggedIn() == 'true'){
  this.isLoggedIn = true;
} else{
  this.isLoggedIn = false;
}
}

checkPassenger(){
  console.log(" in shared service after changing  ", this.getPassenger());
if(this.getPassenger() == 'true'){
  this.isPassenger = true;
} else{
  this.isPassenger = false;
}
}

setPassengerId(input){
  localStorage.setItem('passengerId', input );
}

getPassengerId(){
  return this.passengerId = localStorage.getItem('passengerId');
}

 }


