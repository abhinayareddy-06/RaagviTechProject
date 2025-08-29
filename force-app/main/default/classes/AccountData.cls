public class AccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountData() {
        return[SELECT Id, Name, Phone FROM Account];

    }

    @AuraEnabled
    public static void updateAccount(string accid,string fvalue, string nvalue) {

        System.debug('coming inside');
        Account accList= [SELECT Id, Name, Phone FROM Account WHERE id=: accid];
         
        if(fvalue=='Name')
        accList.Name=nvalue;
        if(fvalue=='Phone')
        accList.Phone=nvalue;

        update accList;
        
    }

     //  List<Account> accList= [SELECT Id, Name, Phone FROM Account WHERE Id =: accid];


    
}