import { LightningElement, track } from 'lwc';

export default class Acc extends LightningElement {
    @track recordid;
    fiiedarray=['Name','Phone','Rating'];
    successhandler(event){
        this.recordid = event.detail.value;
    }
}