import { LightningElement,api } from 'lwc';
export default class FullCalculator extends LightningElement {
    @api CalcExpression = '';
    @api Result = '';
    handleClick(event){
        this.CalcExpression += event.target.label;
        if(this.CalcExpression.startsWith('+') || this.CalcExpression.startsWith('-') || this.CalcExpression.startsWith('*') || this.CalcExpression.startsWith('/')){
            this.Result = "Invalid Expression";
        }
    } 
    handleCalculate(){
        try{
            this.Result = eval(this.CalcExpression);
        }catch(e){
            this.Result = "Invalid Expression";
        }
    }

    Clear(){
        this.CalcExpression='';
        this.Result='';
    }
}