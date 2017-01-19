import { Subscription } from 'rxjs/Rx';
import { WaitingService } from './waiting.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit, OnDestroy {

  show = false;
  subscription: Subscription;

  constructor(private waitingService: WaitingService) { }

  ngOnInit() {
    this.subscription = this.waitingService.updates.subscribe(n => this.show = n );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
