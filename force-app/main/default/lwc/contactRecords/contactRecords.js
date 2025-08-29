import { LightningElement, api } from 'lwc';

export default class ContactRecords extends LightningElement {
    @api showContact;  
    @api contacts;     
}

