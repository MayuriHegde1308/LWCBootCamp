import { LightningElement,api } from 'lwc';
export default class ChildComponent extends LightningElement {
    @api status;
    @api noofselects=0;
    handleclick(event){
            event.target.label="Deselect";
            event.target.variant="destructive";
            this.status="Selected";
            this.noofselects="1";

        const selectEvent = new CustomEvent('select', {
            bubbles: true,
            composed: true,
            detail: {status : this.status, noofselects : this.noofselects}
            });
        
        this.dispatchEvent(selectEvent);
    }
}