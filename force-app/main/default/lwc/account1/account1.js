import { LightningElement , api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Account1 extends LightningElement {
    @api recordid;
    handlersuccess(event){
        this.recordid= event.detail.id;
    }
    handlerclike(){
    const msg = new ShowToastEvent({
        title:"success",
        massage:'account is created success',
        variant:'success'
            });
            this.dispatchEvent(msg);
    }
}
