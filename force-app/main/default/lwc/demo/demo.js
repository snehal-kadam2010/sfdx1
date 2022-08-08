import { LightningElement , track, wire,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import  getRecord from 'lightning/uiRecordApi';
import Field_Name from '@salesforce/schema/Account.Name';
import Field_Phone from '@salesforce/schema/Account.Phone';
import Field_Rating from '@salesforce/schema/Account.Rating';
const Fileds =[Field_Name,Field_Phone,Field_Rating];

export default class Demo1 extends LightningElement {
    title='sample title';
    massage='sample massage';
    variant='error';
    variantOptions = [
        { label: 'error', value: 'error' },
        { label: 'warning', value: 'warning' },
        { label: 'success', value: 'success' },
        { label: 'info', value: 'info' },
    ];
    titlehandler(event){
        this.title = event.target.value;
    }
    masageehandler(event){
        this.massage = event.target.value;
    }
    variantChange(event) {
        this.variant = event.target.value;
    }
    submithandler(){
        const msg=new showtoastevent({
            title :'this.title',
            massage:'this.massage',
            variant:'this.variant'
        });
        this.dispatchEvent(msg)
    }
    @api recordId;
    @track Name;
    @track phone;
    @track rating;
    
    @wire (getRecord,{recordId : '$recordId',Fileds:Fileds})
    Record;
    wireaccount({Data ,error}){
        if(Data){
            this.Record=Data;
            this.Name=Data.Fileds.Name.value;
            this.phone=Data.Fileds.Phone.value;
            this.rating=Data.Fileds.Rating.value;

        }
        else if(error){
            this.error=error;
            this.Record=undefined;
        }
    }
}