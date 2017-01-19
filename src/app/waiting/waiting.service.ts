import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class WaitingService {

  counter = 0;
  updates = new Subject<boolean>();

  constructor(private http: Http) { }

  show() {
    this.counter++;
    this.updates.next(true);
  }

  hide() {
    this.counter--; // siccome ho molte chiamate in contemporanea mi tengo un counter per capire quando sono finite
    if (this.counter === 0) {
      this.updates.next(false);
    }
  }

}
