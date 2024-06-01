import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private fadeOutSubject = new BehaviorSubject<boolean>(false);
  private dataLoadedSubject = new BehaviorSubject<boolean>(false);

  setLoading(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }

  setFadeOut(isFadingOut: boolean): void {
    this.fadeOutSubject.next(isFadingOut);
  }

  setDataLoaded(isDataLoaded: boolean): void {
    this.dataLoadedSubject.next(isDataLoaded);
  }

  getLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  getFadeOut(): Observable<boolean> {
    return this.fadeOutSubject.asObservable();
  }

  getDataLoaded(): Observable<boolean> {
    return this.dataLoadedSubject.asObservable();
  }
}
