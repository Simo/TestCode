import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { WaitingService } from './waiting/waiting.service';
import { ConnectionBackend, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NwhttpService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private waitingService: WaitingService) {
    super(backend, defaultOptions);
   }

   get(url: string, options?: RequestOptionsArgs): Observable<Response> {
     this.waitingService.show();
     return super.get(url, options).finally(() => this.waitingService.hide());
   }

}
