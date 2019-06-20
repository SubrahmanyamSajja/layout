import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { SystemService } from '../services/system.service';

@Injectable()
export class WithCredentialsInterceptor implements HttpInterceptor {
  private data: any = {};
  private routeChangeMethod: string = '';
  constructor(private router: Router, private authService: AuthenticationService, private systemService: SystemService) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.routeChangeMethod = event.navigationTrigger;
        }
      }
    );
  }
  processError(error) {
    if (error.status != "0") {
      if (error.status == 401 && (error.url=="" || error.url==null || error.url.substr(error.url.length-10)!="api/logout")) {
        this.authService.logout();
      } else {
        if (error.error.message && error.error.message != "") {
          this.systemService.showSnack(error.error.message);
        }
      }
    } else {
      this.systemService.showSnack("Api Service Not Running. Please check!");
    }
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let pageChange = this.systemService.pageChange;
    let pageUrl = this.systemService.currentRoute.url;
    this.systemService.pageChange = "";
    let tokenData: any = localStorage.getItem('profile');
    let res = next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.data[url] = event;
        }
      }, error => {
      })

    );
    if (request.url.indexOf('/token') < 0 && request.url.indexOf('/auth/') < 0 && tokenData != null) {
      tokenData = JSON.parse(tokenData);
      const authReq = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenData.token}`,
          'x-client': `${tokenData.clientId}`,
          'x-tenant': `${tokenData.companyId}`,
          'audit-id': `${tokenData.auditId}`,
          'page-change': `${pageChange}`,
          'page-url': `${pageUrl}`
        })
      });
      return next.handle(authReq).pipe(
        tap(event => {
        }, error => {
          this.processError(error);
        }));
    }
    let url = request.url.replace(/[^a-zA-Z0-9]/g, '');
    if (this.routeChangeMethod == "popstate1" && this.data[url] && url.indexOf('systemping') == -1 && url.indexOf('accountsgooglecom') == -1) {
      return Observable.create((o) => { o.next(this.data[url]) });
    } else {
      let res = next.handle(request).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.data[url] = event;
          }
        }, error => {
          this.processError(error);
        })

      );

      return res;

    }

  }
}