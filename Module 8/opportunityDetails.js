import { LightningElement, api, track, wire } from 'lwc';
import getOppDetails from '@salesforce/apex/opportunityDetailsController.getOppDetails';
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'CloseDate', fieldName: 'CloseDate' },
    { label: 'Amount', fieldName: 'Amount' }
];
export default class OpportunityDetails extends LightningElement {
    @api recordId;
    @api opportunities;
    @api error;
    columns = columns;
    @wire(getOppDetails,{recordId: '$recordId'})
    wiredOpportunity({ error, data }) {
        if (data) {
            this.opportunities =  data;      
            this.error = undefined;
            // eslint-disable-next-line no-undef
            debugger; 

          }else if (error) {
            this.error = error;
            this.data = undefined;
          }
       } 
}