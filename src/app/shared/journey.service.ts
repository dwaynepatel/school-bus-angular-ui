import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class JourneyService {
  public API = '//localhost:8080/api';
  public JOURNEY_API = this.API + '/journeys';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.JOURNEY_API)  
  }

  getAllFromPassengerId(passengerId: string): Observable<any>{
    return this.http.get(this.API +  '/' + "journeysByPassengerId" + '/' + passengerId);
  }
  //not in use as cors isssues with back end
  updateJourneyWithPassengerId(passengerId: string, journeyId: string): Observable<any>{
    return this.http.get(this.API +  '/' + "journeysForPassenger" + '/' + passengerId + '/' + journeyId);
  }

  get(id: string) {
    return this.http.get(this.JOURNEY_API + '/' + id);
  }

  save(journey: any): Observable<any> {
    let result: Observable<Object>;
    if (journey['href']) {
      result = this.http.put(this.JOURNEY_API+ '/' + journey.href, journey);
    } else {
      result = this.http.post(this.JOURNEY_API, journey);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(this.JOURNEY_API + '/' + href);
  }


}
