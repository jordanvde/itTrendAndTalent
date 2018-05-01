sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, MessageBox, JSONModel, MessageToast) {
	"use strict";
	var oView = null;
	return Controller.extend("ehb.jordanve.mlittrendsmlittrends.controller.View1", {
		onInit: function() {
			//	this.getRouter().getRoute("CreateExpenseView").attachPatternMatched(this._onObjectMatched, this);
			//	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.getRoute("CreateExpenseView").attachMatched(this._onRouteMatched, this);
			var imgModel = new JSONModel({});
			imgModel.setData({
				image: ""
			});
			oView = this.getView();
			this.getView().setModel(imgModel, "imgModel");
			this.mBindingOptions = {};
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("View1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
		},

		__sendPhoto: function(oEvent) {
			var me = this;
			var image = "";
			var b = oView.getModel("imgModel").getData();
			if (b) {
				image = b.image;
			}

			if (image) {
				var formData = new FormData();
				// Attach file
				formData.append('file', image);
/*
				$.ajax({
					url: "http://ml-jordan.westeurope.cloudapp.azure.com:8000/predict",
					type: "POST",
					contentType: "multipart/form-data",
					//dataType: "json",
					data:formData,
					processData: false,
					success: function(data, textStatus, jqXHR) {
						alert("success");
					},
					error: function() {
						alert("error");
					}
				});
			*/	
						var f = document.createElement('form');
f.action='http://ml-jordan.westeurope.cloudapp.azure.com:8000/predict';
f.method='POST';
//f.target='_blank';
f.enctype="multipart/form-data";

var k=document.createElement('input');
k.type='hidden';k.name='file';
k.value='7299';
f.appendChild(k);

//var z=document.getElementById("FileNameId")
//z.setAttribute("name", "IDProof");
//z.setAttribute("id", "IDProof");
//f.appendChild(z);

document.body.appendChild(f);
f.submit();
			}
		},
		
		jk: function(){
			var f = document.createElement('form');
f.action='http://ml-jordan.westeurope.cloudapp.azure.com:8000/predict';
f.method='POST';
//f.target='_blank';
//f.enctype="multipart/form-data"

var k=document.createElement('input');
k.type='hidden';k.name='file';
k.value='7299';
f.appendChild(k);



//var z=document.getElementById("FileNameId")
//z.setAttribute("name", "IDProof");
//z.setAttribute("id", "IDProof");
//f.appendChild(z);

document.body.appendChild(f);
f.submit();
		},

		handleRouteMatched: function(oEvent) {
			var oParams = {};
			//var p = oEvent.mParameters.data.objectId;
			var model = this.getView().getModel("imgModel").getData();
			//	model.expenseNoteId = p;
			this.getView().getModel("imgModel").setData(model);

			var mo = this.getView().getModel("imgModel").getData();
			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;
				var oPath;
				if (this.sContext) {
					oPath = {
						path: "/" + this.sContext,
						parameters: oParams
					};
					this.getView().bindObject(oPath);
				}
			}
		},

		onPhotoDataSuccess: function(imageData) {
			var myImage = oView.byId("myImage");
			myImage.setSrc("data:image/jpeg;base64," + imageData);
			var b = oView.getModel("imgModel").getData();
			b.image = imageData;
			//oView.setModel(b,"imgModel");		Werkt niet, anders komt het model in oModels terecht en heeft het geen getData() functie. Anders moet je de rest ook herschrijven.
			oView.getModel("imgModel").setData(b);
		},
		onPhotoURISuccess: function(imageURI) {
			// dit is een link met 	data:image/jpeg;base64,
			//Dit moet je verwijderen alvorens up te loaden.
			var myImage = oView.byId("myImage");
			myImage.setSrc(imageURI);
			var b = oView.getModel("imgModel").getData();
			//Hier een javascript functie oproepen om de string te splitsen. kan zijn op basis van ";base64," nadien p[1] gebruiken.
			var image = imageURI.split(";base64,");
			var imageData = image[1];
			b.image = imageData;
			//	oView.setModel(b,"imgModel");
			oView.getModel("imgModel").setData(b);
		},
		onFail: function(message) {
			console.log("Failed because: " + message);
		},
		_getPhoto: function() {
			var oNav = navigator.camera;
			oNav.getPicture(this.onPhotoURISuccess, this.onFail, {
				quality: 90,
				targetWidth: 300,
				targetHeight: 400,
				destinationType: oNav.DestinationType.FILE_URI,
				sourceType: oNav.PictureSourceType.PHOTOLIBRARY
			});
		},
		_takePhoto: function() {
			var oNav = navigator.camera;
			oNav.getPicture(this.onPhotoDataSuccess, this.onFail, {
				quality: 90,
				targetWidth: 300,
				targetHeight: 400,
				destinationType: oNav.DestinationType.DATA_URL
			});
		},

	});
});