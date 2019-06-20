import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-service-codes',
  templateUrl: './service-codes.component.html',
  styleUrls: ['./service-codes.component.scss']
})
export class ServiceCodesComponent implements OnInit {
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
