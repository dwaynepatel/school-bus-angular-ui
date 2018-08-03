import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
// class for storing variables to local storage and fetching test data
export class SharedService {
 //boolean to show a different view for a bus company or passenger
 isPassenger:boolean = false; 
 passengerId: string;
 public API = 'https://schoolbusnci.herokuapp.com/api/test/create';
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
