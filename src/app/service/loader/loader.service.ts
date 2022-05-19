import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Loader } from '../../model/loader/loader.model';

@Injectable()
export class LoaderService {
  private loader = new BehaviorSubject<Loader>({ id: 'global', status: false });

  loaderStatus$ = this.loader.asObservable();

  constructor() { }
  public showLoader(id: string = 'global'): void {
    this.loader.next({ id, status: true });
  }
  public hideLoader(id: string = 'global'): void {
    this.loader.next({ id, status: false });
  }
}