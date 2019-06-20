import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-taxonomy-codes',
  templateUrl: './taxonomy-codes.component.html',
  styleUrls: ['./taxonomy-codes.component.scss']
})
export class TaxonomyCodesComponent implements OnInit {
  serviceColumns: any = ['Code', 'Description'];
  servicesData: any = [{
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
