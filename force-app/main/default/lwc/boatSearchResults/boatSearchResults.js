import { LightningElement, api, wire } from "lwc";
import getBoats from "@salesforce/apex/BoatDataService.getBoats";
const SUCCESS_TITLE = "Success";
const MESSAGE_SHIP_IT = "Ship it!";
const SUCCESS_VARIANT = "success";
const ERROR_TITLE = "Error";
const ERROR_VARIANT = "error";

export default class BoatSearchResults extends LightningElement {
  selectedBoatId;
  columns = [];
  @api boatTypeId = "";
  boats;

  // wired message context
  messageContext;

  // wired getBoats method
  @wire(getBoats)
  wiredBoats(result) {
    if (result.data) {
        console.log(result.data);
        this.boats = result.data;
    } else if (result.error) {
        console.log('Error');
    }
  }

  // public function that updates the existing boatTypeId property
  // uses notifyLoading
  searchBoats(boatTypeId) {
        if (!boatTypeId) return this.boats;
        this.boats = this.boats.filter(boat => boat.id === this.boatTypeId);
        console.log(this.boats);
        return this.boats;
  }

  // this public function must refresh the boats asynchronously
  // uses notifyLoading
  refresh() {}

  // this function must update selectedBoatId and call sendMessageService
  updateSelectedTile() {}

  // Publishes the selected boat Id on the BoatMC.
  sendMessageService(boatId) {
    // explicitly pass boatId to the parameter recordIdsl
  }

  // The handleSave method must save the changes in the Boat Editor
  // passing the updated fields from draftValues to the
  // Apex method updateBoatList(Object data).
  // Show a toast message with the title
  // clear lightning-datatable draft values
  handleSave(event) {
    // notify loading
    const updatedFields = event.detail.draftValues;
    // Update the records via Apex
    updateBoatList({ data: updatedFields })
      .then(() => {})
      .catch((error) => {})
      .finally(() => {});
  }
  // Check the current value of isLoading before dispatching the doneloading or loading custom event
  notifyLoading(isLoading) {}
}
