import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-diag-codes',
  templateUrl: './diag-codes.component.html',
  styles: []
})
export class DiagCodesComponent implements OnInit {
  diagColumns: any = ['Code', 'Description'];
  diagData: any = [{
code:10,
description:'Essential primary HyperTension  '
  },
  {
    code:10,
    description:'Essential primary HyperTension  '
      },
      {
        code:10,
        description:'Essential primary HyperTension  '
          },
          {
            code:10,
            description:'Essential primary HyperTension  '
              },
              {
                code:10,
                description:'Essential primary HyperTension  '
     },
                {
                  code:10,
                  description:'Essential primary HyperTension  '
    },
                  {
                    code:10,
                    description:'Essential primary HyperTension  '
                      }]
  constructor() { }

  ngOnInit() {
  }

}
