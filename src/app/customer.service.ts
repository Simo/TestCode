import 'rxjs/add/operator/toPromise';
import { Customer } from './customer.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';


@Injectable()
export class CustomerService {

  customers = new Subject<Customer[]>();
  customer = new Subject<Customer>();

  url: string = 'http://sm-angular2api.azurewebsites.net/api/customers/list';
  detailUrl: string = 'http://sm-angular2api.azurewebsites.net/api/customers/detail/';
  saveUrl: string = 'http://sm-angular2api.azurewebsites.net/api/customers/save';

  constructor(private _http: Http) { }

  getCustomers(){
    return this._http.get(this.url)
            .toPromise()
            .then(c => { return c.json().items as Customer[]; });
  }

  getCustomer(id: string){
    return this._http.get(`${this.detailUrl}${id}`)
            .toPromise()
            .then(c => { return c.json() as Customer; });
  }

  getCustomerReact(id: string){
    return this._http.get(`${this.detailUrl}${id}`).subscribe(c => { 
      let cust = c.json() as Customer;
      this.customer.next(cust);
    });
  }

  getCustomersReact() {
    return this._http.get(this.url).subscribe(c => { 
      let cust = c.json().items as Customer[];
      this.customers.next(cust);
    });
  }

  saveCustomer(c: Customer) {
    return this._http.post(this.saveUrl, c)
                .toPromise()
                .then(res => {});
  }

}
