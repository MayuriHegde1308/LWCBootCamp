import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    isJerry = false;
    isTom = false;
 
    showJerry(){
        
        this.isJerry = true;
    }
 
    showTom(){
        this.isTom = true;
        
    }
}
