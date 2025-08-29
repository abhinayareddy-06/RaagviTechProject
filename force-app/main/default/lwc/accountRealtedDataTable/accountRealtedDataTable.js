import { api, LightningElement,track,wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
const actions=[
    {label:'view',name:'view'},
    {label:'edit',name:'edit'},
    {label:'delete',name:'delete'}
];
const columns=[
    {label:'Name',fieldName:'Name',Editable :'true'},
    {label:'Phone',fieldName:'Phone',Editable : 'true'},
    {label:'Email',fieldName:'Email',Editable:'true'},
    {
        type:'action',
        typeAttributes: {
            rowActions:actions,
            menuAlignment:'Auto'}
    }
];





export default class accountRealtedDataTable extends LightningElement {
   
        dataTable =[];
        columns=columns;
    //To get the Accouts from the Apex method
        // @wire(getAccountList)
        // Accounts;
        @api recordId;
        connectedCallback(){
            getAccountList({accId:this.recordId}).then(result=>{
                console.log('result=>'+JSON.stringify(result));
                let tempvalue=result;
                this.dataTable=tempvalue;
    
                // let value = tempvalue.map(item=>{
                //     return Object.assign({Con:item.Contacts});
                // })
                // console.log('value=> '+JSON.stringify(value));
                // value.forEach(element => {
                //     this.dataTable=element.Con; 
                //     console.log('dataTable==>>> '+JSON.stringify(this.dataTable));
                // });
                
                
                
            });
        }
}



//Query selector search the first element matches css selector
// 1. By tag('tagName)
// 2. By class Name('.className')
// 3. By tag and class Name(tagname.classname)
