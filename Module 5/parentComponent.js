import { LightningElement, api } from 'lwc';
export default class ParentComponent extends LightningElement {
    @api status="Deselected";
    @api noofselects=0;
 
    handleChildClick(event){
        this.status = event.target.status;
    }
	
}