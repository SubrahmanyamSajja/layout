import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends CommonService {

  constructor(public http:HttpClient) {
    super(http);
  }

  getFilesList(){
    return this.get('files-list');
  }

  getClaims(filter){
    return this.post('claims',filter);
  }


}
