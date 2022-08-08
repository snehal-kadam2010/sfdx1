public with sharing class accountacc {
     // it's a mandate to have the method cacheable as true
     @AuraEnabled(cacheable=true)
     public static List<Account> lstaccountdetails(){
         return [SELECT Id, Name, Rating FROM Account];
     }
 }