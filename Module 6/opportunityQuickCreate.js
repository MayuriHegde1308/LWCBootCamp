import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactQuickCreate extends LightningElement {
    showOpportunity=false;
    handleSuccess(event){
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
            const evt = new ShowToastEvent({
                title: "Contact created",
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
    
    showOpprtunities(){
        this.showOpportunity=!this.showOpportunity;
    }
}
