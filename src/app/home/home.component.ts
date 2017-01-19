import { Subscription } from 'rxjs/Rx';
import { Customer } from '../customer.model';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../customer.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  customers: Customer[];
  customer: Customer;

  subscription: Subscription;

  constructor(private router: Router, private service: CustomerService ) { }

  ngOnInit() {
    console.log($);
    // chiamata con Promise
    // this.service.getCustomers().then();
    // chiamata con RXJS
    this.subscription = this.service.customers.subscribe(c => { this.customers = c; });
    this.service.getCustomersReact();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  showCustomer(id: string) {
    this.router.navigateByUrl('/customerdetail/' + id );
  }

  showCustomerReact(id: string) {
    this.service.getCustomerReact(id);
    this.router.navigateByUrl('/customerdetailreact/' + id );
  }

  onPageChanged(pageIndex: number) {
    alert(pageIndex);
  }
}
