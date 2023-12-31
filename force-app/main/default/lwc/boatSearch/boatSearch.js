import { LightningElement } from "lwc";
import { NavigationMixin } from 'lightning/navigation';

export default class BoatSearch extends NavigationMixin(LightningElement) {
  isLoading = false;
  selectedTypeId;

  // Handles loading event
  handleLoading() {
    this.isLoading = true;
  }

  // Handles done loading event
  handleDoneLoading() {
    this.isLoading = false;
  }

  // Handles search boat event
  // This custom event comes from the form
  searchBoats(event) {
    console.log(event.detail.boatTypeId);
    this.selectedTypeId = event.detail.boatTypeId;
  }

  createNewBoat() {
    this[NavigationMixin.Navigate]({
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Boat__c",
          actionName: "new",
        },
    });
  }
}