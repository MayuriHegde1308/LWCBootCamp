import { LightningElement, api } from 'lwc';

export default class GrandParentComponent extends LightningElement {
    @api status;
    @api noofselects=0;

    handleSelect(event){
        this.noofselects = event.target.noofselects;
        
    }
    handleReset(event){
    this.noofselects=0;
    }
}