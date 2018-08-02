import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class BusCompanyService {
  public API = '//localhost:8080/api';
  public BUS_COMPANY_API = this.API + '/buscompanies';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.BUS_COMPANY_API);
  }

  get(id: string) {
    return this.http.get(this.BUS_COMPANY_API + '/' + id);
  }

  save(busCompany: any): Observable<any> {
    let result: Observable<Object>;
    if (busCompany['href']) {
      result = this.http.put(this.BUS_COMPANY_API+ '/' + busCompany.href, busCompany);
    } else {
      result = this.http.post(this.BUS_COMPANY_API, busCompany);
    }
    return result;
  }

  //using href to identify the bus company
  remove(href: string) {
    return this.http.delete(this.BUS_COMPANY_API + '/' + href);
  }
}
