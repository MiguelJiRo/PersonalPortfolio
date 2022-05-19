import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  // private infoPanel = new BehaviorSubject<string>('HOME');
  // private infoPanel$ = new Subject<string>();
  // private tittleInfo: string = 'HOME';
  // infoPanel$ = this.infoPanel.asObservable();

  constructor() { }

  // public setTittlePage(tittle: string = 'HOME'): void {
  //   this.infoPanel.next(tittle);
  // }

  // public newTittle(tittle: string) {
  //   this.infoPanel$.next(tittle);
  // }

  // public getNewTittle$() {
  //   return this.infoPanel$.asObservable();
  // }

  public getLenguageStorage(): string {
    return localStorage.getItem('lenguage')!;
  }

  public setLenguageStorage(lg: string) {
    localStorage.setItem('lenguage', lg);
  }
}
