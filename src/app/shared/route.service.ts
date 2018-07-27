import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class RouteService {
  public API = '//localhost:8080/api';
  public ROUTE_API = this.API + '/routes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.ROUTE_API)  
  }

  get(id: string) {
    return this.http.get(this.ROUTE_API + '/' + id);
  }

  save(stop: any): Observable<any> {
    let result: Observable<Object>;
    if (stop['href']) {
      result = this.http.put(this.ROUTE_API+ '/' + stop.href, stop);
    } else {
      result = this.http.post(this.ROUTE_API, stop);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(this.ROUTE_API + '/' + href);
  }


}
