import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class StopService {
  public API = '//localhost:8080/api';
  public STOP_API = this.API + '/stops';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.STOP_API)  
  }

  getAllFromBusCompanyId(busCompanyId: string): Observable<any>{
    return this.http.get(this.API +  '/' + "stopsById" + '/' + busCompanyId);
  }

  get(id: string) {
    return this.http.get(this.STOP_API + '/' + id);
  }

  save(stop: any): Observable<any> {
    let result: Observable<Object>;
    if (stop['href']) {
      result = this.http.put(this.STOP_API+ '/' + stop.href, stop);
    } else {
      result = this.http.post(this.STOP_API, stop);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(this.STOP_API + '/' + href);
  }
  //add method to get a list of stops from a stop id.
  //getDriverFromstopId(id: string): Observable<any> {
   // return this.http.get(this.API + '/' + 'stopsfromstop' +'/' +id);
  //}

}
