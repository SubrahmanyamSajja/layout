import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { TopBarComponent } from './layouts/admin/top-bar/top-bar.component';
import { LeftPanelComponent } from './layouts/admin/left-panel/left-panel.component';
import { RightPanelComponent } from './layouts/admin/right-panel/right-panel.component';
import { BottomBarComponent } from './layouts/admin/bottom-bar/bottom-bar.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { ForgotComponent } from './layouts/auth/forgot/forgot.component';
import { AuthGuard } from './shared/gaurds/auth.guard';
import { WithCredentialsInterceptor } from './shared/interceptors/with-credentials-interceptor';
import { CurrencyPipe } from '@angular/common';
import { SafePipe } from './shared/components/pipes/safe.pipe';
import { SearchPipe } from './shared/components/pipes/search.pipe';
import { AcoDatePipe } from './shared/components/pipes/aco-date.pipe';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TopBarComponent,
    LeftPanelComponent,
    RightPanelComponent,
    BottomBarComponent,
    AuthLayoutComponent,
    LoginComponent,
    ForgotComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: WithCredentialsInterceptor,
      multi:true,
    },
    CurrencyPipe,
    SafePipe,
    SearchPipe,
    AcoDatePipe,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


declare global {
  interface Array<T> {
    groupBy(compareKey: string[], valueKey?: string): Array<T>;
    groupBy1(compareKey: string, valueKey: string, labelKey: string, descriptionKey?: string): Array<T>;
    distinct(keys?: string[]): Array<T>;
    sortByKeyAsString(compareKey: string[], valueKey: string,rev?:boolean):Array<T>;
    sortByKeyAsNumber(compareKey: string[], valueKey: string,rev?:boolean):Array<T>;
    sortByKeyAsDate(compareKey: string[], valueKey: string,rev?:boolean):Array<T>;
  }
  interface String {
    toTitleCase();
    replaceAll(searchStr:string,replaceWith?:string);
    toTitleCaseFromDb();
    toDbCase();
  }
}


if(!String.prototype.toTitleCaseFromDb){
  String.prototype.toTitleCaseFromDb = function<T>(this:String){
    return this.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}
if(!String.prototype.toDbCase){
  String.prototype.toDbCase = function<T>(this:String){
    return this.replace(/([A-Z])/g,'_$1').trim();
  }
}

if(!String.prototype.toTitleCase){
  String.prototype.toTitleCase = function<T>(this:String){
    let val=this.replace(/([A-Z])/g,' $1').trim();
    return val[0].toUpperCase()+val.substr(1);
  }
}
if(!String.prototype.replaceAll){
  String.prototype.replaceAll = function<T>(this:String,searchStr:string,replaceWith:string=''){
    replaceWith=replaceWith.replace(/"/g,'\"');
    return eval(`this.replace(/${searchStr}/g,"${replaceWith}").trim()`); 
  }
}



if (!Array.prototype.sortByKeyAsString) {
  Array.prototype.sortByKeyAsString =function<T>(this:T[], key, rev) {
    let result = this.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0) * (rev ? -1 : 1));
    });
    return result;
  }
}
if (!Array.prototype.sortByKeyAsNumber) {
  Array.prototype.sortByKeyAsNumber =function<T>(this:T[], key, rev) {
    let result = this.sort(function (a, b) {
        var x = parseInt(a[key]); var y = parseInt(b[key]);
        return ((x < y) ? -1 : ((x > y) ? 1 : 0) * (rev ? -1 : 1));
    });
    return result;
  }
}
if (!Array.prototype.sortByKeyAsDate) {
  Array.prototype.sortByKeyAsDate =function<T>(this:T[], key, rev) {
    let result = this.sort(function (a, b) {
        var x = new Date(a[key]); var y = new Date(b[key]);
        return ((x < y) ? -1 : ((x > y) ? 1 : 0) * (rev ? -1 : 1));
    });
    return result;
  }

}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function <T>(this: T[], compareKeys: string[], valueKey?: string): T[] {
    let hashMap = {};
    this.forEach(obj => {
      var realKey = "";
      compareKeys.forEach(key => {
        realKey += obj[key] + "|$|";
      });
      hashMap[realKey] = ((hashMap[realKey] == undefined) ? 0 : hashMap[realKey]) + ((valueKey) ? obj[valueKey] : 1);
    });
    let finalData = [];
    Object.keys(hashMap).forEach(v => {
      let vals = v.split('|$|');
      let tempRow = {};
      tempRow[((valueKey) ? valueKey : 'count')] = hashMap[v];
      compareKeys.forEach((key, i) => {
        tempRow[key] = vals[i];
      })
      finalData.push(tempRow);
    })
    return finalData;
  }
}

if (!Array.prototype.groupBy1) {
  Array.prototype.groupBy1 = function <T>(this: T[], compareKey: string, valueKey: string, labelKey: string, descriptionKey?: string): T[] {
    let compareValues: string[] = this.map(x => x[compareKey]).distinct();
    let matchedRows = this.filter(x => compareValues.indexOf(x[compareKey]) >= 0);
    let result: any = [];
    if (matchedRows.length > 0) {
      compareValues.forEach(k => {
        let groupedRows = matchedRows.filter(x => x[compareKey] == k);
        if (groupedRows.length > 0) {
          let total = groupedRows.reduce((x, y) => x + y[valueKey], 0);
          result.push({ label: groupedRows[0][labelKey], value: total, description: groupedRows[0][descriptionKey] });
        }
      })
    }
    return result;
  }
}

export function isEqual(src: any, obj: any): boolean {
  let result = true;
  let srcKeys = Object.keys(src);
  for (let ix = 0; ix < srcKeys.length; ix++) {
    let k = srcKeys[ix];
    if (typeof src[k] == "object") {
      result = isEqual(obj[k], src[k]);
    } else {
      result = src[k] == obj[k];
    }
    if (!result) {
      return false;
    }
  }
  return true;
}
if (!Array.prototype.distinct) {
  Array.prototype.distinct = function <T>(this: T[], keys: string[]): T[] {
    if (keys) {
      let result: any = [];
      let same = false;
      this.forEach((v, i) => {
        same = false;
        for (let ci = 0; ci < result.length; ci++) {
          let cv = result[ci];
          same = false;
          keys.forEach(key => {
            same = (same) ? true : cv[key] == v[key];
          })
          if (same) {
            break;
          }
        }
        if (!same || result.length == 0) {
          result.push(v);
        }
      });
      return result;
    } else {
      return this.filter((x, i, v) => v.indexOf(x) === i);
    }
  }
}

