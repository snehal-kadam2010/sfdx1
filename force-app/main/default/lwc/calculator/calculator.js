import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track Result;
     Fname;
     Sename;
     @track previousResult=[];
     fnameevent(event){
        this.Fname=event.target.value;
     }
        Senameevent(event){
            this.Sename = event.target.value;
        }

        addhandler(){
            const Fnum =parseInt(this.Fname);
            const Snum = parseInt(this.Sename);
            this.Result=`result is ${Fnum}+${Snum}= ${Fnum+Snum}`;
            this.previousResult.push(this.Result);

        }
        subhandler(){
            const Fnum =parseInt(this.Fname);
            const Snum = parseInt(this.Sename);
            this.Result=`result is ${Fnum}-${Snum}= ${Fnum-Snum}`;
            this.previousResult.push(this.Result);


        }
        checkboxhandler(event){
            this.previousResult=event.target.value;

        }

}