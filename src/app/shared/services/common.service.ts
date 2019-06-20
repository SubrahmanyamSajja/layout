import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export class CommonService {
    apiUrl: string = `${environment.apiUrl}api/`;
    constructor(public http: HttpClient) {
        if (window.location.hostname.toString() == 'localhost' && window.location.port == "4300") {
            this.apiUrl = `${environment.lapiUrl}api/`;
        }
    }

    get(url: string, headers?: any) {
        return this.http.get(`${this.apiUrl}${url}`,headers);
    }
    post(url: string, data: any, headers?: any) {
        return this.http.post(`${this.apiUrl}${url}`,data,headers);
    }
    put(url: string, data: any, headers?: any) {
        return this.http.post(`${this.apiUrl}${url}`,data,headers);
    }
    delete(url: string, headers?: any) {
        return this.http.delete(`${this.apiUrl}${url}`,headers);
    }

}