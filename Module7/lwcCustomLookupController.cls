public with sharing class lwcCustomLookupController {
        @AuraEnabled(cacheable = true)
        public static List<SObject> findRecords(String searchKey, String objectName, String searchField){
            String key = '%' + searchKey + '%';
            String QUERY = 'Select Id, '+searchField+' From '+objectName +' Where '+searchField +' LIKE :key';
            //List<Account> accList = [Select Id, Name, Phone, Industry From Account Where Name LIKE :key];
            System.debug(System.LoggingLevel.DEBUG, QUERY);
            List<SObject> sObjectList = Database.query(QUERY);
            return sObjectList;
        }

        @AuraEnabled(cacheable=true)
        public static List<Contact> fetchContact(string patientId) {
        List<Contact> conList = [SELECT Id, Name, Title, Email, Phone FROM Contact WHERE AccountId =: patientId];
            return conList;
        }
}