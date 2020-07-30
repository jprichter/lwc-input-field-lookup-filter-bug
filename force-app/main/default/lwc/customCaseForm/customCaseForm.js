import { LightningElement, api, wire, track } from "lwc";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import CASE_OBJECT from "@salesforce/schema/Case";
export default class CustomCaseForm extends LightningElement {
  @track recordTypeId;

  @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
  wiredObjectInfo({ error, data }) {
    if (data) {
      const rtis = data.recordTypeInfos;
      this.recordTypeId = Object.keys(rtis).find(
        (rti) => rtis[rti].name === "Tier 1"
      );
    } else if (error) {
      this.error = error;
      console.log("this.error", this.error);
    }
  }
}
