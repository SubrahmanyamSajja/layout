import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SystemService {
  pageChange: string = "";
  userRoles$: BehaviorSubject<any> = new BehaviorSubject([]);
  userMenus$: BehaviorSubject<any> = new BehaviorSubject([]);
  userDetails$: BehaviorSubject<any> = new BehaviorSubject({});
  pageStateData: any = {};
  myStateData:any={};
  allRoutes: any[] = [];
  ready$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  routes: any[] = [];
  isBack: boolean = false;
  pageData: any;

  previousRoutes$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    this.routes
  );
  constructor(
    private router: Router
  ) { }
  state: any = {};
  currentRoute: { url: string; method: string } = { url: "", method: "" };


  setState(page: any) {

    let url = this.currentRoute.url.replace(/[^a-zA-Z0-9]/g, "");
    this.state[url] = Object.assign({}, page);
  }

  getState() {
    if (this.currentRoute.method == "popstate") {
      let url = this.currentRoute.url.replace(/[^a-zA-Z0-9]/g, "");
      return this.state[url];
    }
    return undefined;
  }

  getTo(url) {
    this.router.navigateByUrl(url);
  }

  gotoWork(row) {
    this.pageData = row;
    this.getTo(row.url);
  }

  showSnack(message:string,duration?:number){
    console.log(message,duration);
  }

}
