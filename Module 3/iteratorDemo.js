import { LightningElement } from 'lwc';
const columns = [
    { label: 'Index', fieldName: 'Index'},
    { label: 'Id', fieldName: 'id'},
    { label: 'Name', fieldName: 'Name'},
    { label: 'Email', fieldName: 'Email'}
];
export default class IteratorDemo extends LightningElement {
    
    contacts=[
        {Index : '0',id : 'C1',Name : 'John Abraham', Email : 'ja@gmail.com'},
        {Index : '1',id : 'C2',Name : 'Brad Pitt', Email : 'bpitt@gmail.com'},
        {Index : '2',id : 'C3',Name : 'Angelina Jolie', Email : 'anjel@gmail.com'},
        {Index : '3',id : 'C4',Name : 'Peter Parker', Email : 'peter14@gmail.com'}
    ]
}