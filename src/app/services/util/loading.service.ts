import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {

  // variables generales
  private requestCounter = 0;
  private isLoading = false;
  private changeEmitter = new Subject<any>();

  // constructeur
  constructor() {
  }

  // methodes
  setLoading(bool: boolean) {
    this.isLoading = bool;
    this.changeEmitter.next(this.isLoading);
    return this.isLoading;
  }

  getLoading() {
    return this.isLoading;
  }

  getChangeEmitter() {
    return this.changeEmitter.asObservable();
  }

  getRequestCounter() {
    return this.requestCounter;
  }

  increaseRequestCounter() {
    this.requestCounter += 1;
    if (this.requestCounter > 0) {
      this.changeEmitter.next(true);
    }
  }

  decreaseRequestCounter() {
    this.requestCounter -= 1;
    if (this.requestCounter <= 0) {
      this.changeEmitter.next(false);
    }
  }

}
