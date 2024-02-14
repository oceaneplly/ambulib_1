import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { LoadingService } from './loading.service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  // variables generales

  // constructeur
  constructor(
    private router: Router,
    private loadingService: LoadingService) {
  }

  // methodes
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // envoi du token
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({ headers: request.headers.set('X-Auth-Token', token) });
    }

    return next.handle(request).pipe(
      tap((evt: HttpEvent<any>) => {
        switch (evt.type) {
          case HttpEventType.Sent:
            // console.log('Request sent!');
            this.loadingService.increaseRequestCounter();
            break;

          case HttpEventType.UploadProgress:
            // @ts-ignore
            const percentUploaded = Math.round(100 * evt.loaded / evt.total);
            // console.log(`Upload in progress! ${percentUploaded}% uploaded`);
            break;

          case HttpEventType.ResponseHeader:
            // console.log('Response header received!');
            break;

          case HttpEventType.DownloadProgress:
            // @ts-ignore
            const percentDownloaded = Math.round(evt.loaded / evt.total);
            // console.log(`Download in progress! ${percentDownloaded}% downloaded`);
            break;

          case HttpEventType.Response:
            // console.log('---> status:', evt.status);
            // console.log('---> body:', evt.body);
            this.loadingService.decreaseRequestCounter();
            break;

          case HttpEventType.User:
          // console.log('user event!', evt.type);
        }

      }, (errResponse: any) => {
        this.loadingService.decreaseRequestCounter();
        // console.log(errResponse);
        let errorMsg;
        let level;
        if (errResponse.error.message) {
          errorMsg = errResponse.error.message;
        } else if (errResponse.error.error.message) {
          errorMsg = errResponse.error.error.message;
        }

        if (errResponse.error.level) {
          level = errResponse.error.level;
        }

        if (errResponse instanceof HttpErrorResponse) {

          switch (errResponse.status) {
          /*  case 401: // deconnexion en cas d'erreur 401 unauthorized
              // effacement du localstorage
              localStorage.clear();
              this.router.navigate(['']);
              break;*/

            case 403: // deconnexion en cas d'erreur 401 unauthorized
              // effacement du localstorage
              localStorage.clear();
              this.router.navigate(['']);
              break;

            case 503: // redirection en cas de maintenance
              // this.router.navigate(['response']);
              break;

            default:
              break;
          }
        }
      }) // End tap
    );


  }

}
