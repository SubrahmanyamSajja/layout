import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-left-panel',
  templateUrl: './left-panel.component.html',
  styles: []
})
export class LeftPanelComponent implements OnInit {


  menus: any[] = [
    {
      name: 'Dashboard',
      icon: 'fas fa-home',
      url: '/dashboard'
    },
    {
      name: 'Claims List',
      icon: 'fas fa-list',
      url: '/claims'
    },
    {
      name: 'Members',
      icon: 'fas fa-user',
      url: '/members'
    },
    {
      name: 'Providers',
      icon: 'fas fa-user-md',
      url: '/providers'
    },
    {
      name: 'Provider Specialities',
      icon: 'fas fa-briefcase-medical',
      url: '/provider-specialities'
    },
    {
      name: 'Place Of Service Codes',
      icon: 'fas fa-code',
      url: '/pos-codes'
    },
    {
      name: 'NDC Codes',
      icon: 'fas fa-code',
      url: '/ndc-codes'
    },

    {
      name: 'Service Codes',
      icon: 'fas fa-code',
      url: '/service-codes'
    },
    {
      name: 'Diag Codes',
      icon: 'fas fa-code',
      url: '/diag-codes'
    },
    {
      name:'Files List',
      icon: 'fas fa-bars',
      url:'/files-list'
    }


  ]
  constructor() { }

  ngOnInit() {
  }

}
