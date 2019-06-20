import { Component, OnInit } from '@angular/core';
import { GridColumn } from 'src/app/shared/components/models/grid-column';
import { ApiService } from 'src/app/shared/services/api.service';
import { CommonList } from 'src/app/shared/components/common-list';

@Component({
  selector: 'aco-claims-list',
  templateUrl: './claims-list.component.html',
})
export class ClaimsListComponent extends CommonList implements OnInit {
  claimsColumns: any = ['Claim #', 'Type', 'DOR', 'DOC', 'DOS', 'Health Plan', 'Member Name', 'Provider Name', 'Billed Amt.($)', 'Net Amt.($)', 'POS', 'DOP', 'Status'];

  gridColumns:GridColumn[]=[

    { field:'claimNo', display:'Claim #' },
    { field:'providerID', display:'Provider ID' },
    { field:'createdInPayorSystemOn', display:'DOR', filter:'date' },
    { field:'earliestServiceDate', display:'DOC' },
    { field:'paidOn', display:'DOS' },

  ]


  claimsData: any = []

  constructor(private api:ApiService) {
    super();
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.api.getClaims(this.filter).subscribe((res:any)=>{
      this.claimsData=res.table;
    });
  }

}
