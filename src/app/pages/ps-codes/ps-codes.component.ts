import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-ps-codes',
  templateUrl: './ps-codes.component.html',
  styleUrls: ['./ps-codes.component.scss']
})
export class PsCodesComponent implements OnInit {
  psColumns: any = ['Code', 'Description'];
  psData: any = [{
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
