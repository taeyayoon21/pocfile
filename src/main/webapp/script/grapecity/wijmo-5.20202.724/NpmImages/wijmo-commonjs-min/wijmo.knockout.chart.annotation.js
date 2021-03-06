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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=require("knockout"),wjcChartAnno=require("wijmo/wijmo.chart.annotation"),wjKo=mKo,wjFlexChartAnnotationLayer=function(t){__extends(wjFlexChartAnnotationLayer,t);function wjFlexChartAnnotationLayer(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnnotationLayer.prototype._getControlConstructor=function(){return wjcChartAnno.AnnotationLayer};return wjFlexChartAnnotationLayer}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartAnnotationLayer=wjFlexChartAnnotationLayer;var wjFlexChartAnnotation=function(t){__extends(wjFlexChartAnnotation,t);function wjFlexChartAnnotation(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnnotation.prototype._createControl=function(t){return this._context._createAnnotation()};wjFlexChartAnnotation.prototype._getMetaDataId=function(){return"FlexChartAnnotation"};wjFlexChartAnnotation.prototype._createWijmoContext=function(){this._context=new wjFlexChartAnnotationContext(this);return this._context};return wjFlexChartAnnotation}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartAnnotation=wjFlexChartAnnotation;var wjFlexChartAnnotationContext=function(t){__extends(wjFlexChartAnnotationContext,t);function wjFlexChartAnnotationContext(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnnotationContext.prototype._createAnnotation=function(){var t=this.valueAccessor(),n=wjKo.unwrap(t.type);return new wjcChartAnno[n]};return wjFlexChartAnnotationContext}(wijmo_knockout_base_1.WjContext);exports.wjFlexChartAnnotationContext=wjFlexChartAnnotationContext;wjKo.bindingHandlers.wjFlexChartAnnotationLayer=new wjFlexChartAnnotationLayer;wjKo.bindingHandlers.wjFlexChartAnnotation=new wjFlexChartAnnotation;