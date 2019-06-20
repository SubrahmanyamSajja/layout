import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { GridColumn } from '../models/grid-column';
import { AcoDatePipe } from '../pipes/aco-date.pipe';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search.pipe';

@Component({
  selector: 'custom-grid',
  templateUrl: './custom-grid.component.html',
})
export class CustomGridComponent implements OnInit {
  @Input('loading') loading: boolean = false;
  @Input('data') data: any[] = [];
  @Input('comparedata') comparedata: any[] = [];
  @Input('columns') columns: GridColumn[] = [];
  @Input('showEdit') showEdit: boolean = false;
  @Input('showDelete') showDelete: boolean = false;
  @Input('multi-select') multiSelect: boolean = true;
  @Input('id') id: string = 'CG_01';
  @Input('pagination') pagination: boolean = true;
  @Input('searchStr') searchStr: string;
  @Input('searchColumns') searchColumns: string[] = [];
  @Input('width') width: number = 0;
  @Input('nodatamsg') nodatamsg = 'No data available.';
  @Input('useAutoHeight') useAutoHeight: boolean = true;
  @Input('LocalPagination') LocalPagination: boolean = false;

  height: number = 0;
  style: any = {};
  @ViewChild('paginator') paginator;

  @Output('onclk') onclk: EventEmitter<any> = new EventEmitter<any>();
  @Output('onedit') onedit: EventEmitter<any> = new EventEmitter<any>();
  @Output('ondelete') ondelete: EventEmitter<any> = new EventEmitter<any>();
  @Output('onselect') onselect: EventEmitter<any> = new EventEmitter<any>();
  @Output('page') page: EventEmitter<any> = new EventEmitter<any>();
  pageIndex: number = 0;
  @Input('pageSize') pageSize: number = 10;
  pageSizeOptions: number[] = [10, 25, 50, 100, 250];
  length: number = 0;

  intermediate: boolean = false;
  allSelected: boolean = false;

  displayedColumns = [];
  _data: any[] = [];

  constructor(private datePipe: AcoDatePipe,  private currency: CurrencyPipe, private router: Router, private search: SearchPipe) {
  }

  pageChnage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    if(this.LocalPagination){
      this.buildData();
    }
    this.page.emit(event);
  }

  ngOnInit() {

  }
  ngOnChanges(changes) {
    if (changes.width) {
      if (this.width > 0) {
        this.style = { 'width.px': this.width };
      } else {
        this.style = { 'width': '100' }
      }
    }
    if (changes.pagination) {
      this.pageSize = (this.pagination) ? this.pageSize : 100000;
    }
    this.displayedColumns = ((this.multiSelect) ? ['select'] : []);
    if (this.columns) {
      this.columns.forEach((v, i) => {
        this.columns[i].isSortable = (v.isSortable == undefined) ? true : v.isSortable;
        this.columns[i].tempColumnName = v.field.replace('.', '_');
        this.columns[i].autoClass = this.columns[i].tempColumnName.toLocaleLowerCase();
        this.displayedColumns.push(v.field);

      });
      if (this.showEdit) {
        this.displayedColumns.push('showEdit');
      }
      if (this.showDelete) {
        this.displayedColumns.push('showDelete');
      }

      this.length = this.data.length;




      this.buildData();
    }
  }

  buildData() {
    this._data = [];
    let data = Object.assign([], this.data);
    data = this.search.transform(data, this.searchStr, this.searchColumns);
    data = data.slice((this.pageIndex * this.pageSize), ((this.pageIndex + 1) * this.pageSize));
    let impColumns = [];
    if (data.length > 0) {
      impColumns = Object.keys(data[0]).filter(k => k.substr(0, 1) == '_');
    }
    data.forEach((row, ind) => {
      let temp: any = {};
      temp.orginalIndex = ind;
      temp.isSelected = row.isSelected || false;
      this.columns.forEach((column) => {
        temp[column.tempColumnName] = this.getValue(row, column);
      });
      impColumns.forEach((column) => {
        temp[column] = row[column];
      })
      this._data.push(temp);

    });
    this.checkSelection();
  }

  getValue(row, column) {
    let val = eval('row.' + column.field) || '';
    if (column.filter && this[column.filter]) {
      val = this[column.filter].transform(val, column.filterAddl);
    }
    return val;
  }

  fromCurrency(val) {
    if (val == undefined || val == null)
      return 0;
    return Number(val.replace('$', '').replace(',', ''));
  }
  fromDate(val) {
    if (val == undefined || val == null)
      return new Date(1, 1, 1);
    val = val.split(' ');
    let dt = val[0].split('-');
    return new Date(dt[2], dt[0], dt[1]);
  }

  sortData(sort) {
    const data = this._data.slice();
    if (!sort.active) {// || sort.direction === '') {
      return;
    }
    let column;
    this.columns.forEach((v) => {
      if (v.tempColumnName == sort.active) {
        column = v;
      }
    });
    this._data = [];
    const isAsc = sort.direction !== 'desc';
    this._data = Object.assign([], data.sort((a, b) => {
      let v1 = a[sort.active];
      let v2 = b[sort.active];
      if (column.filter) {
        if (column.filter == 'currency') {
          v1 = this.fromCurrency(v1);
          v2 = this.fromCurrency(v2);
        } else if (column.filter == 'hsDate') {
          v1 = this.fromDate(v1);
          v2 = this.fromDate(v2);
        }
      }
      return compare(v1, v2, isAsc);
    }));
  }

  onClick(displayRow, column) {
    let row = Object.assign({}, this.data[displayRow.orginalIndex]);
    if (column.routeLinks && column.routeLinks.length > 0) {
      let routes = new Array(column.routeLinks[0]);
      column.routeLinks.shift();
      column.routeLinks.forEach((v) => {
        if (v && v != '') {
          routes.push(eval('row.' + v));
        }
      });
      this.router.navigate(routes);
    } else {
      if (column.isLink) {
        this.onclk.emit({ row: row, column: column });
      }
    }
  }

  edit(row) {
    this.onedit.emit(this.data[row.orginalIndex]);
  }

  delete(row) {
    this.ondelete.emit(this.data[row.orginalIndex]);
  }

  toggleAll(mode) {
    this._data.forEach((v) => {
      v.isSelected = mode.checked;
    });
    this.checkSelection();
  }

  checkSelection() {
    let selected = this._data.filter(v => v.isSelected).length;
    let total = this._data.length;
    this.intermediate = (selected > 0 && selected != total);
    this.allSelected = (selected == total && total != 0);
    this._data.forEach(v => {
      if (v.isSelected) {
        let ind = v.orginalIndex + (this.pageIndex * this.pageSize);
        this.data[ind].isSelected = true;
      }
    });
    this.onselect.emit(this.data.filter(x => x.isSelected));
  }

}


function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
