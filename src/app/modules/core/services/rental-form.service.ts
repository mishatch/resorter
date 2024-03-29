import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalFormService {
  private startDate: string = this.getCurrentDate();
  private endDate: string = this.getCurrentDate();
  private carIdSubject = new BehaviorSubject<string | undefined>(undefined);
  private apiUrl = 'https://api.resorter.ge';
  carId$ = this.carIdSubject.asObservable();

  constructor(private http: HttpClient) {}

  setStartDate(date: string) {
    this.startDate = date;
  }

  getStartDate(): string {
    return this.startDate;
  }

  setEndDate(date: string) {
    this.endDate = date;
  }

  getEndDate(): string {
    return this.endDate;
  }

  setId(carId: string) {
    this.carIdSubject.next(carId);
  }


  private getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  takeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/take-order`, orderData);
  }
}
