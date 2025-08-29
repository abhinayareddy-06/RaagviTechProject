public class AccountRetriever {
    public static List<Account> getFirstFiveAccounts() {
        return [SELECT Id, Name FROM Account LIMIT 5];




        system.debug('Printing Accounts: ' + accounts);
    }
}
