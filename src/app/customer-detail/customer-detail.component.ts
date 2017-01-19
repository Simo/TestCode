import { Subscription } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnDestroy, OnChanges {

  private paramsSubscription: Subscription;
  customer = new Customer();

  loading: boolean = true;


  constructor(private route: ActivatedRoute, private service: CustomerService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(p => {
      let customerId = p['id'];
      this.service.getCustomer(customerId).then(c => {
        this.customer = c;
        this.loading = false;
      });
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  ngOnChanges(s: SimpleChanges){

  }

  saveCustomer(){
    this.service.saveCustomer(this.customer).then(r => alert('salvato!'));
  }

}
