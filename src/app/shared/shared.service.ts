import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class SharedService {
 //boolean to show a different view for a bus company or passenger
 isPassenger: boolean; 

  constructor() {
  }

 

}
