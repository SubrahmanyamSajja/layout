import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  providerColumns: any = ['Provider Id', 'Name', 'Provider Type', 'Primary Specialty', 'Organization', 'Active  From', 'Active  Thru ', 'Primary  Address'];
  providersData: any = [{

    firstName: "Drew",
    lastName: "Geller",
    orgAddressLine1: "PO Box 740548",
    orgAddressLine2: null,
    orgCity: "Los Angeles",
    orgState: "CA",
    orgZip: "900740548",
    organizationId: "45-5618565",
    organizationName: "Sound Physicians of California",
    pageSize: 10,
    primarySpeciality: null,
    primarySpecialityName: "FP - Family / General Practice",
    providerContractEffectiveDate: "2018-09-01T00:00:00",
    providerContractExpiryDate: null,
    providerId: "1386871473(SPC)",
    providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
    providerType: "INDIVIDUAL",
    sortBy: "dwid",
    sortDirection: "asc"
  },
  {

    firstName: "Drew",
    lastName: "Geller",
    orgAddressLine1: "PO Box 740548",
    orgAddressLine2: null,
    orgCity: "Los Angeles",
    orgState: "CA",
    orgZip: "900740548",
    organizationId: "45-5618565",
    organizationName: "Sound Physicians of California",
    pageSize: 10,
    primarySpeciality: null,
    primarySpecialityName: "FP - Family / General Practice",
    providerContractEffectiveDate: "2018-09-01T00:00:00",
    providerContractExpiryDate: null,
    providerId: "1386871473(SPC)",
    providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
    providerType: "INDIVIDUAL",
    sortBy: "dwid",
    sortDirection: "asc"
  }
    ,
    {

      firstName: "Drew",
      lastName: "Geller",
      orgAddressLine1: "PO Box 740548",
      orgAddressLine2: null,
      orgCity: "Los Angeles",
      orgState: "CA",
      orgZip: "900740548",
      organizationId: "45-5618565",
      organizationName: "Sound Physicians of California",
      pageSize: 10,
      primarySpeciality: null,
      primarySpecialityName: "FP - Family / General Practice",
      providerContractEffectiveDate: "2018-09-01T00:00:00",
      providerContractExpiryDate: null,
      providerId: "1386871473(SPC)",
      providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
      providerType: "INDIVIDUAL",
      sortBy: "dwid",
      sortDirection: "asc"
    }
    ,
    {

      firstName: "Drew",
      lastName: "Geller",
      orgAddressLine1: "PO Box 740548",
      orgAddressLine2: null,
      orgCity: "Los Angeles",
      orgState: "CA",
      orgZip: "900740548",
      organizationId: "45-5618565",
      organizationName: "Sound Physicians of California",
      pageSize: 10,
      primarySpeciality: null,
      primarySpecialityName: "FP - Family / General Practice",
      providerContractEffectiveDate: "2018-09-01T00:00:00",
      providerContractExpiryDate: null,
      providerId: "1386871473(SPC)",
      providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
      providerType: "INDIVIDUAL",
      sortBy: "dwid",
      sortDirection: "asc"
    },
    {

      firstName: "Drew",
      lastName: "Geller",
      orgAddressLine1: "PO Box 740548",
      orgAddressLine2: null,
      orgCity: "Los Angeles",
      orgState: "CA",
      orgZip: "900740548",
      organizationId: "45-5618565",
      organizationName: "Sound Physicians of California",
      pageSize: 10,
      primarySpeciality: null,
      primarySpecialityName: "FP - Family / General Practice",
      providerContractEffectiveDate: "2018-09-01T00:00:00",
      providerContractExpiryDate: null,
      providerId: "1386871473(SPC)",
      providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
      providerType: "INDIVIDUAL",
      sortBy: "dwid",
      sortDirection: "asc"
    }
    ,
    {

      firstName: "Drew",
      lastName: "Geller",
      orgAddressLine1: "PO Box 740548",
      orgAddressLine2: null,
      orgCity: "Los Angeles",
      orgState: "CA",
      orgZip: "900740548",
      organizationId: "45-5618565",
      organizationName: "Sound Physicians of California",
      pageSize: 10,
      primarySpeciality: null,
      primarySpecialityName: "FP - Family / General Practice",
      providerContractEffectiveDate: "2018-09-01T00:00:00",
      providerContractExpiryDate: null,
      providerId: "1386871473(SPC)",
      providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
      providerType: "INDIVIDUAL",
      sortBy: "dwid",
      sortDirection: "asc"
    },
    {

      firstName: "Drew",
      lastName: "Geller",
      orgAddressLine1: "PO Box 740548",
      orgAddressLine2: null,
      orgCity: "Los Angeles",
      orgState: "CA",
      orgZip: "900740548",
      organizationId: "45-5618565",
      organizationName: "Sound Physicians of California",
      pageSize: 10,
      primarySpeciality: null,
      primarySpecialityName: "FP - Family / General Practice",
      providerContractEffectiveDate: "2018-09-01T00:00:00",
      providerContractExpiryDate: null,
      providerId: "1386871473(SPC)",
      providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
      providerType: "INDIVIDUAL",
      sortBy: "dwid",
      sortDirection: "asc"
    }
    ,
    {

      firstName: "Drew",
      lastName: "Geller",
      orgAddressLine1: "PO Box 740548",
      orgAddressLine2: null,
      orgCity: "Los Angeles",
      orgState: "CA",
      orgZip: "900740548",
      organizationId: "45-5618565",
      organizationName: "Sound Physicians of California",
      pageSize: 10,
      primarySpeciality: null,
      primarySpecialityName: "FP - Family / General Practice",
      providerContractEffectiveDate: "2018-09-01T00:00:00",
      providerContractExpiryDate: null,
      providerId: "1386871473(SPC)",
      providerRecUid: "423A324E-C88B-4EC2-8480-F711A1CAE57F",
      providerType: "INDIVIDUAL",
      sortBy: "dwid",
      sortDirection: "asc"
    }]
  constructor() { }

  ngOnInit() {
  }

}
