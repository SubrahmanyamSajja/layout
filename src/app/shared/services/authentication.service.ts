import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SystemService } from './system.service';
import { Location } from '@angular/common';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends CommonService {

  token:any;
  tokenData:any;
  logedIn: EventEmitter<any> = new EventEmitter<any>();
  constructor(public  http: HttpClient,private systemService:SystemService,private router:Router,private location:Location) { 
    super(http);
    this.apiUrl=this.apiUrl.replace('api/','');
  }



  
  init() {
  }

  isLogedin() {
    let profile = localStorage.getItem('profile');
    return profile != null;
  }

  login(userData) {
    let data = `grant_type=password&username=${userData.username}&password=${userData.password}`;
    return this.post(`token`, data);
  }

  setToken(token) {
    token.menus = JSON.parse(token.menus);
    this.token=token;
    this.tokenData = {
      token: token.access_token,
      userEmail: token.userEmail,
      userName: token.userName,
      userType: token.userType,
      userPhone: token.userPhone,
      displayName: token.displayName,
      auditId : token.auditId,
      api_key: token.api_key
    };
    localStorage.setItem('profile', JSON.stringify(this.tokenData));
    setTimeout(()=>{
      this.emitUserDetails(this.token);
      this.logedIn.emit(this.tokenData);
      this.router.navigateByUrl('dashboard');
    },1000);
  }

  getSelectedCompanyId() {
    let tokenData: any = localStorage.getItem('profile');
    if (tokenData != null) {
      tokenData = JSON.parse(tokenData);
      return tokenData.companyId;
    }
    return undefined;
  }


  emitUserDetails(tokenData) {
    let token = Object.assign({}, tokenData);
    this.systemService.userMenus$.next(token.menus);
    delete token.menus;
    this.systemService.userDetails$.next(token);
    this.systemService.ready$.next(true);
  }

  getTotken() {
    let tokenData = localStorage.getItem('profile');
    tokenData = tokenData != null ? JSON.parse(tokenData) : tokenData;
    return tokenData;
  }
  sendLogout(token){
    let headers= new HttpHeaders({
      'Authorization': `Bearer ${token.token}`,
      'audit-id': `${token.auditId}`,
    });
    return this.get(`api/logout/${token.auditId}`,{headers:headers});
  }
  logout() {
    this.systemService.routes=[];
    localStorage.removeItem('profile');
    this.logedIn.emit(null);
    let loc=this.location.path(false) ;
    if(loc!="/forgot-password" && loc.substr(0,15) !="/reset-password"){
      this.router.navigateByUrl('login');
    }
  }

  checkTotken() {
    let tokenData = this.getTotken();
    if (tokenData != null) {
      this.logedIn.emit(tokenData);
      this.get(`api/users/details`).subscribe((res:any) => {
        if(res.isSuperAdmin){
          res.roles.unshift('Super Admin');
        }
        this.emitUserDetails(res);
      });
    } else {
      this.logout();
    }
  }
}
