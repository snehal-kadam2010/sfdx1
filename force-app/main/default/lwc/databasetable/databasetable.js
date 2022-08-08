import { LightningElement, wire ,track } from 'lwc';

import allRecord from '@salesforce/apex/accountacc.lstaccountdetails';

const colom=[{lable:'Account name',
fieldNmae:'Name',
type:'text',
sortable:true},

{lable:'Account phone',
fieldNmae:'Phone',
type:'phone',
sortable:true},

{lable:'Account rating',
fieldNmae:'Rating',
type:'text',
sortable:true}];



export default class DataTable extends LightningElement {

        //wiring the output of the method to a property
        @track records;
        @track error;
        @track columns=colom;

    
   
    @wire(allRecord)
    recordswire({data,error}){
        if(data){
        this.records=data;
        console.log(data);
        }else if(error){
            this.error=error;
        }
   
}
}
    
