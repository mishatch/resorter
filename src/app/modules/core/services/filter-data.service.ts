import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {
  private filterDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  filterData$: Observable<any> = this.filterDataSubject.asObservable();

  constructor() {}

  setFilterData(filterData: any) {
    this.filterDataSubject.next(filterData);
  }

  getFilterData(): Observable<any> {
    return this.filterData$;
  }
}
