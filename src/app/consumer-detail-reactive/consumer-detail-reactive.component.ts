import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consumer-detail-reactive',
  templateUrl: './consumer-detail-reactive.component.html',
  styleUrls: ['./consumer-detail-reactive.component.css']
})
export class ConsumerDetailReactiveComponent implements OnInit {

  customer = new Customer();
  form: FormGroup;

  constructor(private service: CustomerService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadForm();

    this.service.customer.subscribe(c => {
      this.customer = c;
      this.loadForm();
    });
  }

  onSubmit(form: FormGroup) {
    this.customer.customerId = this.form.controls['customerId'].value;
    this.customer.companyName = this.form.controls['companyName'].value;
    this.customer.address = this.form.controls['address'].value;
    this.customer.city = this.form.controls['city'].value;
    this.customer.country = this.form.controls['country'].value;
    this.service.saveCustomer(this.customer);
  }

  private loadForm() {
    this.form = this.fb.group({
      // dichiariamo proprietà: [valore iniziale, [Validatori]]
      customerId: [this.customer.customerId, Validators.required],
      companyName: [this.customer.companyName, Validators.required],
      address: [this.customer.address, Validators.required],
      city: [this.customer.city, Validators.required],
      country: [this.customer.country, Validators.required],
    });
  }
}
