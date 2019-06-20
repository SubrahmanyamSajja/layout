import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aco-paginator',
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent implements OnInit {
  @Input('length') length:number=0;
  @Input('pageIndex') pageIndex:number=0;
  @Input('pageSize') pageSize:number=10;
  @Input('pageSizeOptions') pageSizeOptions:number[]=[10,20,50,10];
  @Output('page') page:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  _page(){
    this.page.emit({pageIndex:this.pageIndex, pageSize:this.pageSize});
  }
}
