import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aco-claim-details',
  templateUrl: './claim-details.component.html',

})
export class ClaimDetailsComponent implements OnInit {
  claim:any={
    payorSystemClaimNo:"2019060283700016",
    placeOfService:"81",
    placeOfServiceName:"81 - INDEPENDENT LABORATORY",
    earliestServiceDate:"2018-08-16",
    receivedByPayorOn:"2019-06-03",
    createdDateTime:"2019-06-01",
    adjudicatedOn:"2019-06-02",
    paidOn:"2019-06-02",
    paymentCheckNo:"12345",
    payorStatusName:"RELEASE TO A/P",
    authorizationNo:"12345678TA123",
    originalClaimOfAdjustedClaimNo:"12345678TA123",
    memberid:"25896374",
    memberName:"KUJALA, TUULIKKI T",
    memberDob:"1940-06-08",
    gender:"F",
    healthPlanName:"UNITED HEALTH SENIOR",
    benefitPlanid:"Q0S",
    benefitOptionDescription:"Description",
    memberBenefitOptionActiveDate:"2017-01-01",
    memberBenefitOptionExpiryDate:"2017-07-31",
    renderingProviderid:"32149526",
    renderingProviderName:"Quest Diagnositics,",
    renderingProviderSpecialtyName:"Laboratory",
    isProviderContracted:true,
    renderingProviderValidity:"2018/08/01 - 2019/01/26",
    Organization:"organizationName",
    providerNpi:"963214587"


  }

  constructor() { }

  ngOnInit() {
  }

}
