import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-ndc-codes',
  templateUrl: './ndc-codes.component.html',
  styleUrls: ['./ndc-codes.component.scss']
})
export class NdcCodesComponent implements OnInit {
  ndcColumns: any = ['Code', 'Description'];
  ndcData: any = [{
code:41,
description:'Ambulance Land'
  },
{
  code:49,
  description:'Independent Clinic'
},
{
  code:41,
  description:'Ambulance Land'
    },
  {
    code:49,
    description:'Independent Clinic'
  },
  {
    code:41,
    description:'Ambulance Land'
      },
    {
      code:49,
      description:'Independent Clinic'
    },
    {
      code:41,
      description:'Ambulance Land'
        },
      {
        code:49,
        description:'Independent Clinic'
      },
      {
        code:41,
        description:'Ambulance Land'
          },
        {
          code:49,
          description:'Independent Clinic'
        }]
  constructor() { }

  ngOnInit() {
  }

}
