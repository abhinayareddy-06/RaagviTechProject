public class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId) {
        return [select Id,Name , Phone,Email From Contact where AccountId =: accId];
        system.debug('accId'+accId);
    }
}