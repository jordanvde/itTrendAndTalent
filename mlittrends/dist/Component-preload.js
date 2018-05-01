/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "ehb/jordanve/mlittrendsmlittrends/Component-preload",
	"modules": {
		"ehb/jordanve/mlittrendsmlittrends/view/View1.view.xml": "<mvc:View xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" controllerName=\"ehb.jordanve.mlittrendsmlittrends.controller.View1\" displayBlock=\"true\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t<content>\n\t\t\t    <sap.ui.layout.form:Form xmlns:sap.ui.layout.form=\"sap.ui.layout.form\" editable=\"true\" id=\"__form0\">\n\t\t\t        <sap.ui.layout.form:formContainers>\n\t\t\t            <sap.ui.layout.form:FormContainer title=\"ML digit recognizer (MNIST)\" id=\"__container0\">\n\t\t\t            \t<!--\n\t\t\t                <sap.ui.layout.form:formElements>\n\t\t\t                    <sap.ui.layout.form:FormElement label=\"Take photo\" id=\"__element1\">\n\t\t\t                        <sap.ui.layout.form:fields>\n\t\t\t                            <Button text=\"Button\" width=\"100px\" id=\"__button2\" icon=\"sap-icon://camera\"/>\n\t\t\t                        </sap.ui.layout.form:fields>\n\t\t\t                    </sap.ui.layout.form:FormElement>\n\t\t\t                    <sap.ui.layout.form:FormElement label=\"image\" id=\"__element2\">\n\t\t\t                        <sap.ui.layout.form:fields>\n\t\t\t                            <Image width=\"140px\" height=\"140px\" id=\"__image1\"/>\n\t\t\t                        </sap.ui.layout.form:fields>\n\t\t\t                    </sap.ui.layout.form:FormElement>\n\t\t\t                    <sap.ui.layout.form:FormElement id=\"__element0\" label=\"send\">\n\t\t\t                        <sap.ui.layout.form:fields><Button text=\"Send\" width=\"100px\" id=\"__button5\" icon=\"sap-icon://attachment-photo\"/>\n\t\t\t                        </sap.ui.layout.form:fields>\n\t\t\t                    </sap.ui.layout.form:FormElement>\n\t\t\t                </sap.ui.layout.form:formElements>\n\t\t\t                -->\n\t\t\t            </sap.ui.layout.form:FormContainer>\n\t\t\t        </sap.ui.layout.form:formContainers>\n\t\t\t        <sap.ui.layout.form:layout>\n\t\t\t            <sap.ui.layout.form:ResponsiveGridLayout id=\"__layout0\"/>\n\t\t\t        </sap.ui.layout.form:layout></sap.ui.layout.form:Form>\n\t\t\t        \n\t\t\t        \t<HBox width=\"100%\" id=\"__vbox1\" alignItems=\"Center\" alignContent=\"SpaceAround\">\n\t\t\t\t<items>\n\t\t\t\t\t<Button xmlns=\"sap.m\" text=\"Take a photo\" press=\"_takePhoto\" icon=\"sap-icon://camera\"/><Button xmlns=\"sap.m\" text=\"Get photo\" press=\"_getPhoto\" icon=\"sap-icon://image-viewer\"/>\n\t\t\t\t</items>\n\t\t\t</HBox>\n\t\t\t\t<HBox width=\"100%\" justifyContent=\"Center\">\n\t\t\t\t<items>\n\t\t\t\t\t<Image width=\"300px\" height=\"300px\" id=\"myImage\"/>\n\t\t\t\t\n\t\t\t\t</items>\n\t\t\t\t\n\t\t\t</HBox>\n\t\t\t\t<Button text=\"Send\" width=\"100px\" id=\"__button1\" press=\"__sendPhoto\" icon=\"sap-icon://attachment-photo\"/>\n\t\t\t        \n\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"ehb/jordanve/mlittrendsmlittrends/controller/View1.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\",\n\t\"sap/m/MessageBox\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/m/MessageToast\"\n], function(Controller, MessageBox, JSONModel, MessageToast) {\n\t\"use strict\";\n\tvar oView = null;\n\treturn Controller.extend(\"ehb.jordanve.mlittrendsmlittrends.controller.View1\", {\n\t\tonInit: function() {\n\t\t\t//\tthis.getRouter().getRoute(\"CreateExpenseView\").attachPatternMatched(this._onObjectMatched, this);\n\t\t\t//\tvar oRouter = sap.ui.core.UIComponent.getRouterFor(this);\n\t\t\t//oRouter.getRoute(\"CreateExpenseView\").attachMatched(this._onRouteMatched, this);\n\t\t\tvar imgModel = new JSONModel({});\n\t\t\timgModel.setData({\n\t\t\t\timage: \"\"\n\t\t\t});\n\t\t\toView = this.getView();\n\t\t\tthis.getView().setModel(imgModel, \"imgModel\");\n\t\t\tthis.mBindingOptions = {};\n\t\t\tthis.oRouter = sap.ui.core.UIComponent.getRouterFor(this);\n\t\t\tthis.oRouter.getTarget(\"View1\").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));\n\t\t},\n\n\t\t__sendPhoto: function(oEvent) {\n\t\t\tvar me = this;\n\t\t\tvar image = \"\";\n\t\t\tvar b = oView.getModel(\"imgModel\").getData();\n\t\t\tif (b) {\n\t\t\t\timage = b.image;\n\t\t\t}\n\n\t\t\tif (image) {\n\t\t\t\tvar formData = new FormData();\n\t\t\t\t// Attach file\n\t\t\t\tformData.append('file', image);\n/*\n\t\t\t\t$.ajax({\n\t\t\t\t\turl: \"http://ml-jordan.westeurope.cloudapp.azure.com:8000/predict\",\n\t\t\t\t\ttype: \"POST\",\n\t\t\t\t\tcontentType: \"multipart/form-data\",\n\t\t\t\t\t//dataType: \"json\",\n\t\t\t\t\tdata:formData,\n\t\t\t\t\tprocessData: false,\n\t\t\t\t\tsuccess: function(data, textStatus, jqXHR) {\n\t\t\t\t\t\talert(\"success\");\n\t\t\t\t\t},\n\t\t\t\t\terror: function() {\n\t\t\t\t\t\talert(\"error\");\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t*/\t\n\t\t\t\t\t\tvar f = document.createElement('form');\nf.action='http://ml-jordan.westeurope.cloudapp.azure.com:8000/predict';\nf.method='POST';\n//f.target='_blank';\nf.enctype=\"multipart/form-data\";\n\nvar k=document.createElement('input');\nk.type='hidden';k.name='file';\nk.value='7299';\nf.appendChild(k);\n\n//var z=document.getElementById(\"FileNameId\")\n//z.setAttribute(\"name\", \"IDProof\");\n//z.setAttribute(\"id\", \"IDProof\");\n//f.appendChild(z);\n\ndocument.body.appendChild(f);\nf.submit();\n\t\t\t}\n\t\t},\n\t\t\n\t\tjk: function(){\n\t\t\tvar f = document.createElement('form');\nf.action='http://ml-jordan.westeurope.cloudapp.azure.com:8000/predict';\nf.method='POST';\n//f.target='_blank';\n//f.enctype=\"multipart/form-data\"\n\nvar k=document.createElement('input');\nk.type='hidden';k.name='file';\nk.value='7299';\nf.appendChild(k);\n\n\n\n//var z=document.getElementById(\"FileNameId\")\n//z.setAttribute(\"name\", \"IDProof\");\n//z.setAttribute(\"id\", \"IDProof\");\n//f.appendChild(z);\n\ndocument.body.appendChild(f);\nf.submit();\n\t\t},\n\n\t\thandleRouteMatched: function(oEvent) {\n\t\t\tvar oParams = {};\n\t\t\t//var p = oEvent.mParameters.data.objectId;\n\t\t\tvar model = this.getView().getModel(\"imgModel\").getData();\n\t\t\t//\tmodel.expenseNoteId = p;\n\t\t\tthis.getView().getModel(\"imgModel\").setData(model);\n\n\t\t\tvar mo = this.getView().getModel(\"imgModel\").getData();\n\t\t\tif (oEvent.mParameters.data.context) {\n\t\t\t\tthis.sContext = oEvent.mParameters.data.context;\n\t\t\t\tvar oPath;\n\t\t\t\tif (this.sContext) {\n\t\t\t\t\toPath = {\n\t\t\t\t\t\tpath: \"/\" + this.sContext,\n\t\t\t\t\t\tparameters: oParams\n\t\t\t\t\t};\n\t\t\t\t\tthis.getView().bindObject(oPath);\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\n\t\tonPhotoDataSuccess: function(imageData) {\n\t\t\tvar myImage = oView.byId(\"myImage\");\n\t\t\tmyImage.setSrc(\"data:image/jpeg;base64,\" + imageData);\n\t\t\tvar b = oView.getModel(\"imgModel\").getData();\n\t\t\tb.image = imageData;\n\t\t\t//oView.setModel(b,\"imgModel\");\t\tWerkt niet, anders komt het model in oModels terecht en heeft het geen getData() functie. Anders moet je de rest ook herschrijven.\n\t\t\toView.getModel(\"imgModel\").setData(b);\n\t\t},\n\t\tonPhotoURISuccess: function(imageURI) {\n\t\t\t// dit is een link met \tdata:image/jpeg;base64,\n\t\t\t//Dit moet je verwijderen alvorens up te loaden.\n\t\t\tvar myImage = oView.byId(\"myImage\");\n\t\t\tmyImage.setSrc(imageURI);\n\t\t\tvar b = oView.getModel(\"imgModel\").getData();\n\t\t\t//Hier een javascript functie oproepen om de string te splitsen. kan zijn op basis van \";base64,\" nadien p[1] gebruiken.\n\t\t\tvar image = imageURI.split(\";base64,\");\n\t\t\tvar imageData = image[1];\n\t\t\tb.image = imageData;\n\t\t\t//\toView.setModel(b,\"imgModel\");\n\t\t\toView.getModel(\"imgModel\").setData(b);\n\t\t},\n\t\tonFail: function(message) {\n\t\t\tconsole.log(\"Failed because: \" + message);\n\t\t},\n\t\t_getPhoto: function() {\n\t\t\tvar oNav = navigator.camera;\n\t\t\toNav.getPicture(this.onPhotoURISuccess, this.onFail, {\n\t\t\t\tquality: 90,\n\t\t\t\ttargetWidth: 300,\n\t\t\t\ttargetHeight: 400,\n\t\t\t\tdestinationType: oNav.DestinationType.FILE_URI,\n\t\t\t\tsourceType: oNav.PictureSourceType.PHOTOLIBRARY\n\t\t\t});\n\t\t},\n\t\t_takePhoto: function() {\n\t\t\tvar oNav = navigator.camera;\n\t\t\toNav.getPicture(this.onPhotoDataSuccess, this.onFail, {\n\t\t\t\tquality: 90,\n\t\t\t\ttargetWidth: 300,\n\t\t\t\ttargetHeight: 400,\n\t\t\t\tdestinationType: oNav.DestinationType.DATA_URL\n\t\t\t});\n\t\t},\n\n\t});\n});",
		"ehb/jordanve/mlittrendsmlittrends/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"ehb/jordanve/mlittrendsmlittrends/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"ehb.jordanve.mlittrendsmlittrends.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"ehb/jordanve/mlittrendsmlittrends/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});"
	}
});