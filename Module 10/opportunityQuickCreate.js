import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import LEAD_SOURCE from '@salesforce/schema/Opportunity.LeadSource';
import Type_FIELD from '@salesforce/schema/Opportunity.Type';
import { NavigationMixin } from 'lightning/navigation';
export default class ContactQuickCreate extends NavigationMixin(LightningElement) {
    showOpportunity=false;
    @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
    objectInfo;

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: LEAD_SOURCE})
    LeadSourcePicklistValues;
    debugger;
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: Type_FIELD})
    TypePicklistValues;
    debugger;

    handleChange(event) {
        this.value = event.detail.value;
    }

    handleSuccess(event){
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        )

            const evt = new ShowToastEvent({
                title: "Account created",
                message: "Record ID: " + event.detail.id,
                variant: "success"
            });
            this.dispatchEvent(evt); 
    }

    handleCancel() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
    
    validateFields() {
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            element.reportValidity();
        });
    }

    navigateToNewRecordPage() {
        // Opens the new Account record modal
        // to create an Account.
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'new'
            }
        });
    }
    showOpprtunities(){
        this.showOpportunity=!this.showOpportunity;
    }
    
}
