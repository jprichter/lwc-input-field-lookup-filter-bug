There appears to be a bug with lwc and lookup filters. When there are multiple 
lookup fields which have related filters (e.g. Type field is filtered by the 
value in the Category field), the second lookup will not properly filter when
using the `lightning-input-field` in a `lightning-record-edit-form`. This repo 
provides a simple example. 

1. Create a Scratch org
2. Push 
3. Import the data 
  
  `sfdx force:data:tree:import -f Case_Segment__c.json`

4. Open the org, open up the Case Segment tab, and find the Case Segment record 
named *General Type*. Fill in the Parent lookup on this record to *General 
Category* Case Segment record. This will create a hierarchical relationship 
which is needed to demonstrate the lookup filter bug. 
5. Open the Case Create page and try to set the Case Category to *General 
Category* and the Case Type field to *General Type*, then save. If you can't, 
then there's a bug. 
6. To confirm, navigate to the standard Case tab and create a Case with the same
values in those fields. 

