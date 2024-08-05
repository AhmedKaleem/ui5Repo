sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zpractise.controller.View1", {
        onInit: function () {

        },
        onNameChange : function(){
            var firstName =  this.getView().byId("idFirstName").getValue();
            var lastName  =  this.getView().byId("idLastName").getValue();
            var fullName = firstName + " " + lastName;

            this.getView().byId("idFullName").setValue(fullName);
        }
    });
});
