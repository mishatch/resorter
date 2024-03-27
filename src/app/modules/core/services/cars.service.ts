import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'https://resorter.ge';

  constructor(private http: HttpClient) { }

  getCars(filterData?: any): Observable<any> {
    if(filterData){
      let params = new HttpParams();
      Object.keys(filterData).forEach(key => {
        if (filterData[key]) {
          if (Array.isArray(filterData[key])) {
            filterData[key].forEach((value: string) => {
              params = params.append(key, value);
            });
          } else {
            params = params.append(key, filterData[key]);
          }
        }
      });
      return this.http.get<any>(`${this.apiUrl}/filter/cars`, { params });
    }else{
      return this.http.get<any>(`${this.apiUrl}/filter/cars`);
    }
  }
getCarOptions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/manage-car/1`);
  }

}
