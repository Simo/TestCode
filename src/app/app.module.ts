import { NwhttpService } from './nwhttp.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionBackend, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
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
import { WaitingComponent } from './waiting/waiting.component';
import { WaitingService } from './waiting/waiting.service';
import { PagerComponent } from './pager/pager.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'customerdetail/:id', component: CustomerDetailComponent },
  { path: 'customerdetailreact/:id', component: ConsumerDetailReactiveComponent }
  ];

export function httpFactory(backend: ConnectionBackend, defaultOptions: RequestOptions, waitingService: WaitingService) {
  return new NwhttpService(backend, defaultOptions, waitingService);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerDetailComponent,
    FirstLetterValidatorDirective,
    ConsumerDetailReactiveComponent,
    FirstLetterLowerCasePipe,
    WaitingComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    TestModule
  ],
  providers: [ CustomerService,
                WaitingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
