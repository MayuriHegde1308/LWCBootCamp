import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    isJerry = false;
    isTom = false;
 
    showTimon(){
        //this.isPumba = false;
        this.isJerry = true;
    }
 
    showPumba(){
        this.isTom = true;
        //this.isTimon = false;
    }
}
