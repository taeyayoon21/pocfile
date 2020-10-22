﻿/*!
    *
    * Wijmo Library 5.20202.724
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])})(e,o)};return function(e,o){extendStatics(e,o);function __(){this.constructor=e}e.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,o,r,t){var a,n=arguments.length,i=n<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,r,t);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(n<3?a(i):n>3?a(o,r,i):a(o,r))||i);return n>3&&i&&Object.defineProperty(o,r,i),i},__param=this&&this.__param||function(e,o){return function(r,t){o(r,t,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcBarcodeCommon=require("wijmo/wijmo.barcode.common"),wjBarcodeCodabarMeta={selector:"wj-barcode-codabar",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","checkDigit","labelPosition","nwRatio"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeCodabarMeta=wjBarcodeCodabarMeta;var WjBarcodeCodabar=function(e){__extends(WjBarcodeCodabar,e);function WjBarcodeCodabar(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeCodabar;WjBarcodeCodabar.prototype.created=function(){};WjBarcodeCodabar.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeCodabar.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeCodabar.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeCodabar.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeCodabar.meta={outputs:wjBarcodeCodabarMeta.outputs};return WjBarcodeCodabar=o=__decorate([core_1.Component({selector:wjBarcodeCodabarMeta.selector,template:wjBarcodeCodabarMeta.template,inputs:wjBarcodeCodabarMeta.inputs,outputs:wjBarcodeCodabarMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeCodabarMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeCodabar)}(wjcBarcodeCommon.Codabar);exports.WjBarcodeCodabar=WjBarcodeCodabar;var wjBarcodeEan8Meta={selector:"wj-barcode-ean8",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeEan8Meta=wjBarcodeEan8Meta;var WjBarcodeEan8=function(e){__extends(WjBarcodeEan8,e);function WjBarcodeEan8(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeEan8;WjBarcodeEan8.prototype.created=function(){};WjBarcodeEan8.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeEan8.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeEan8.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeEan8.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeEan8.meta={outputs:wjBarcodeEan8Meta.outputs};return WjBarcodeEan8=o=__decorate([core_1.Component({selector:wjBarcodeEan8Meta.selector,template:wjBarcodeEan8Meta.template,inputs:wjBarcodeEan8Meta.inputs,outputs:wjBarcodeEan8Meta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeEan8Meta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeEan8)}(wjcBarcodeCommon.Ean8);exports.WjBarcodeEan8=WjBarcodeEan8;var wjBarcodeEan13Meta={selector:"wj-barcode-ean13",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","labelPosition","addOn","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeEan13Meta=wjBarcodeEan13Meta;var WjBarcodeEan13=function(e){__extends(WjBarcodeEan13,e);function WjBarcodeEan13(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeEan13;WjBarcodeEan13.prototype.created=function(){};WjBarcodeEan13.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeEan13.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeEan13.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeEan13.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeEan13.meta={outputs:wjBarcodeEan13Meta.outputs};return WjBarcodeEan13=o=__decorate([core_1.Component({selector:wjBarcodeEan13Meta.selector,template:wjBarcodeEan13Meta.template,inputs:wjBarcodeEan13Meta.inputs,outputs:wjBarcodeEan13Meta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeEan13Meta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeEan13)}(wjcBarcodeCommon.Ean13);exports.WjBarcodeEan13=WjBarcodeEan13;var wjBarcodeCode39Meta={selector:"wj-barcode-code39",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","checkDigit","fullAscii","labelPosition","nwRatio","labelWithStartAndStopCharacter"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeCode39Meta=wjBarcodeCode39Meta;var WjBarcodeCode39=function(e){__extends(WjBarcodeCode39,e);function WjBarcodeCode39(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeCode39;WjBarcodeCode39.prototype.created=function(){};WjBarcodeCode39.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeCode39.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeCode39.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeCode39.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeCode39.meta={outputs:wjBarcodeCode39Meta.outputs};return WjBarcodeCode39=o=__decorate([core_1.Component({selector:wjBarcodeCode39Meta.selector,template:wjBarcodeCode39Meta.template,inputs:wjBarcodeCode39Meta.inputs,outputs:wjBarcodeCode39Meta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeCode39Meta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeCode39)}(wjcBarcodeCommon.Code39);exports.WjBarcodeCode39=WjBarcodeCode39;var wjBarcodeCode128Meta={selector:"wj-barcode-code128",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","codeSet","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeCode128Meta=wjBarcodeCode128Meta;var WjBarcodeCode128=function(e){__extends(WjBarcodeCode128,e);function WjBarcodeCode128(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeCode128;WjBarcodeCode128.prototype.created=function(){};WjBarcodeCode128.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeCode128.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeCode128.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeCode128.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeCode128.meta={outputs:wjBarcodeCode128Meta.outputs};return WjBarcodeCode128=o=__decorate([core_1.Component({selector:wjBarcodeCode128Meta.selector,template:wjBarcodeCode128Meta.template,inputs:wjBarcodeCode128Meta.inputs,outputs:wjBarcodeCode128Meta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeCode128Meta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeCode128)}(wjcBarcodeCommon.Code128);exports.WjBarcodeCode128=WjBarcodeCode128;var wjBarcodeGs1_128Meta={selector:"wj-barcode-gs1_128",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeGs1_128Meta=wjBarcodeGs1_128Meta;var WjBarcodeGs1_128=function(e){__extends(WjBarcodeGs1_128,e);function WjBarcodeGs1_128(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeGs1_128;WjBarcodeGs1_128.prototype.created=function(){};WjBarcodeGs1_128.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeGs1_128.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeGs1_128.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeGs1_128.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeGs1_128.meta={outputs:wjBarcodeGs1_128Meta.outputs};return WjBarcodeGs1_128=o=__decorate([core_1.Component({selector:wjBarcodeGs1_128Meta.selector,template:wjBarcodeGs1_128Meta.template,inputs:wjBarcodeGs1_128Meta.inputs,outputs:wjBarcodeGs1_128Meta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeGs1_128Meta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeGs1_128)}(wjcBarcodeCommon.Gs1_128);exports.WjBarcodeGs1_128=WjBarcodeGs1_128;var wjBarcodeUpcAMeta={selector:"wj-barcode-upc-a",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeUpcAMeta=wjBarcodeUpcAMeta;var WjBarcodeUpcA=function(e){__extends(WjBarcodeUpcA,e);function WjBarcodeUpcA(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeUpcA;WjBarcodeUpcA.prototype.created=function(){};WjBarcodeUpcA.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeUpcA.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeUpcA.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeUpcA.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeUpcA.meta={outputs:wjBarcodeUpcAMeta.outputs};return WjBarcodeUpcA=o=__decorate([core_1.Component({selector:wjBarcodeUpcAMeta.selector,template:wjBarcodeUpcAMeta.template,inputs:wjBarcodeUpcAMeta.inputs,outputs:wjBarcodeUpcAMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeUpcAMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeUpcA)}(wjcBarcodeCommon.UpcA);exports.WjBarcodeUpcA=WjBarcodeUpcA;var wjBarcodeUpcE0Meta={selector:"wj-barcode-upc-e0",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeUpcE0Meta=wjBarcodeUpcE0Meta;var WjBarcodeUpcE0=function(e){__extends(WjBarcodeUpcE0,e);function WjBarcodeUpcE0(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeUpcE0;WjBarcodeUpcE0.prototype.created=function(){};WjBarcodeUpcE0.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeUpcE0.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeUpcE0.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeUpcE0.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeUpcE0.meta={outputs:wjBarcodeUpcE0Meta.outputs};return WjBarcodeUpcE0=o=__decorate([core_1.Component({selector:wjBarcodeUpcE0Meta.selector,template:wjBarcodeUpcE0Meta.template,inputs:wjBarcodeUpcE0Meta.inputs,outputs:wjBarcodeUpcE0Meta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeUpcE0Meta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeUpcE0)}(wjcBarcodeCommon.UpcE0);exports.WjBarcodeUpcE0=WjBarcodeUpcE0;var wjBarcodeUpcE1Meta={selector:"wj-barcode-upc-e1",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeUpcE1Meta=wjBarcodeUpcE1Meta;var WjBarcodeUpcE1=function(e){__extends(WjBarcodeUpcE1,e);function WjBarcodeUpcE1(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeUpcE1;WjBarcodeUpcE1.prototype.created=function(){};WjBarcodeUpcE1.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeUpcE1.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeUpcE1.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeUpcE1.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeUpcE1.meta={outputs:wjBarcodeUpcE1Meta.outputs};return WjBarcodeUpcE1=o=__decorate([core_1.Component({selector:wjBarcodeUpcE1Meta.selector,template:wjBarcodeUpcE1Meta.template,inputs:wjBarcodeUpcE1Meta.inputs,outputs:wjBarcodeUpcE1Meta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeUpcE1Meta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeUpcE1)}(wjcBarcodeCommon.UpcE1);exports.WjBarcodeUpcE1=WjBarcodeUpcE1;var wjBarcodeQrCodeMeta={selector:"wj-barcode-qr-code",template:"",inputs:["wjModelProperty","isDisabled","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","charCode","charset","model","version","errorCorrectionLevel","mask","connection","connectionIndex"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBarcodeQrCodeMeta=wjBarcodeQrCodeMeta;var WjBarcodeQrCode=function(e){__extends(WjBarcodeQrCode,e);function WjBarcodeQrCode(o,r,t){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,o,r,t);a.created();return a}o=WjBarcodeQrCode;WjBarcodeQrCode.prototype.created=function(){};WjBarcodeQrCode.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeQrCode.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeQrCode.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeQrCode.prototype.addEventListener=function(o,r,t,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.ngZone;c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,o,r,t,a)})):e.prototype.addEventListener.call(this,o,r,t,a)};var o;WjBarcodeQrCode.meta={outputs:wjBarcodeQrCodeMeta.outputs};return WjBarcodeQrCode=o=__decorate([core_1.Component({selector:wjBarcodeQrCodeMeta.selector,template:wjBarcodeQrCodeMeta.template,inputs:wjBarcodeQrCodeMeta.inputs,outputs:wjBarcodeQrCodeMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjBarcodeQrCodeMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBarcodeQrCode)}(wjcBarcodeCommon.QrCode);exports.WjBarcodeQrCode=WjBarcodeQrCode;var moduleExports=[WjBarcodeCodabar,WjBarcodeEan8,WjBarcodeEan13,WjBarcodeCode39,WjBarcodeCode128,WjBarcodeGs1_128,WjBarcodeUpcA,WjBarcodeUpcE0,WjBarcodeUpcE1,WjBarcodeQrCode],WjBarcodeCommonModule=function(){function WjBarcodeCommonModule(){}return WjBarcodeCommonModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjBarcodeCommonModule)}();exports.WjBarcodeCommonModule=WjBarcodeCommonModule;