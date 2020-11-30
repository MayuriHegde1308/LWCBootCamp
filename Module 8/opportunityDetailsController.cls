public with sharing class opportunityDetailsController {
    @AuraEnabled(Cacheable = true)
    public static List<Opportunity> getOppDetails(String recordId){

        String query = 'SELECT Id, Name, CloseDate, Amount FROM Opportunity Where AccountId =: recordId';
        List<Opportunity> oppDetails = Database.query(query);
        System.debug('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@newOrderItem@@@@@@@'+oppDetails);
        return oppDetails;

    }
}
