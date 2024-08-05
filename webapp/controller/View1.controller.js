sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("zpractise.controller.View1", {
        onInit: function () {
var oNameModel = new JSONModel();
var names = {
    "firstName" : "Ahamed",
    "lastName" : "Kaleemullah"
}

oNameModel.setData(names);
debugger;
var fName = oNameModel.getProperty("/firstName");
var lName = oNameModel.getProperty("/lastName");

this.getView().byId("idFirstName").setValue(fName);
this.getView().byId("idLastName").setValue(lName);
this.getView().byId("idFullName").setValue(fName + " " + lName);

        },
        onNameChange : function(){
            var firstName =  this.getView().byId("idFirstName").getValue();
            var lastName  =  this.getView().byId("idLastName").getValue();
            var fullName = firstName + " " + lastName;

            this.getView().byId("idFullName").setValue(fullName);
        },
        onListPress:function(oEvent){
            debugger;
            var oContextPath = oEvent.getSource().getBindingContextPath();
            this.getView().bindElement(oContextPath);
            console.log(oEvent);
        }
    });
});
