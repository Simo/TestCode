import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { TestModule } from './test/test.module';

import { CustomerService } from './customer.service';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { FirstLetterValidatorDirective } from './first-letter-validator.directive';
import { ConsumerDetailReactiveComponent } from './consumer-detail-reactive/consumer-detail-reactive.component';
import { FirstLetterLowerCasePipe } from './first-letter-lower-case.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'customerdetail/:id', component: CustomerDetailComponent },
  { path: 'customerdetailreact/:id', component: ConsumerDetailReactiveComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerDetailComponent,
    FirstLetterValidatorDirective,
    ConsumerDetailReactiveComponent,
    FirstLetterLowerCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    TestModule
  ],
  providers: [ CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
