import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class DriverService {
  public API = 'http://localhost:8080/api';
  //public API = '//localhost:8080/api';
  public DRIVER_API = this.API + '/drivers';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.DRIVER_API)  
  }

  get(id: string) {
    return this.http.get(this.DRIVER_API + '/' + id);
  }

  save(busCompany: any): Observable<any> {
    let result: Observable<Object>;
    if (busCompany['href']) {
      result = this.http.put(this.DRIVER_API+ '/' + busCompany.href, busCompany);
    } else {
      result = this.http.post(this.DRIVER_API, busCompany);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(this.DRIVER_API + '/' + href);
  }
  //add method to get a list of drivers from a buscompany id.
  getDriverFromBusCompanyId(id: string): Observable<any> {
    return this.http.get(this.API + '/' + 'driversfrombuscompany' +'/' +id);
  }

}
