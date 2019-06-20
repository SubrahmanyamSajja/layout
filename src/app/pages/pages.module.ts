import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/gaurds/auth.guard';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { MembersComponent } from './members/members.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderSpecialtiesComponent } from './provider-specialties/provider-specialties.component';
import { PsCodesComponent } from './ps-codes/ps-codes.component';
import { TaxonomyCodesComponent } from './taxonomy-codes/taxonomy-codes.component';
import { NdcCodesComponent } from './ndc-codes/ndc-codes.component';
import { ServiceCodesComponent } from './service-codes/service-codes.component';
import { DiagCodesComponent } from './diag-codes/diag-codes.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { SharedModule } from '../shared/shared.module';
import { FilesListComponent } from './files-list/files-list.component';
const pageRoutes:Routes =[
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'claims',
    component:ClaimsListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'members',
    component:MembersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'providers',
    component:ProvidersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'provider-specialities',
    component:ProviderSpecialtiesComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'pos-codes',
    component:PsCodesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'ndc-codes',
    component:NdcCodesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'service-codes',
    component:ServiceCodesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'diag-codes',
    component:DiagCodesComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:'claim-details',
    component:ClaimDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'files-list',
    component:FilesListComponent,
    canActivate:[AuthGuard]
  }
]

@NgModule({
  declarations: [DashboardComponent, ClaimsListComponent, MembersComponent, ProvidersComponent, ProviderSpecialtiesComponent, PsCodesComponent, TaxonomyCodesComponent, NdcCodesComponent, ServiceCodesComponent, DiagCodesComponent, ClaimDetailsComponent, FilesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes),
    SharedModule,
  ]
})
export class PagesModule { }
