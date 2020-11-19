import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    isJerry = false;
    isTom = false;
 
    showTimon(){
        
        this.isJerry = true;
    }
 
    showPumba(){
        this.isTom = true;
        
    }
}
