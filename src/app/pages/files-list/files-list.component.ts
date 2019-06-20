import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'aco-files-list',
  templateUrl: './files-list.component.html',
  styles: []
})
export class FilesListComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit() {

  }

  getData(){
    return this.api.getFilesList().subscribe(res=>{
      console.log(res);
    });
  }

}
