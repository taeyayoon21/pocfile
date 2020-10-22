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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcChartFinance from"wijmo/wijmo.chart.finance";var _wj_ns_exists_4=!0,WjcFinancialChart=function(t){__extends(WjcFinancialChart,t);function WjcFinancialChart(){var n=t.call(this,document.createElement("div"))||this;n._wjBehaviour=WjComponentBehavior._attach(n);return n}Object.defineProperty(WjcFinancialChart,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFinancialChart.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFinancialChart.prototype.attributeChangedCallback=function(t,n,e){this._wjBehaviour.lhAttributeChanged(t,n,e)};WjcFinancialChart.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFinancialChart.prototype.addEventListener=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];"string"==typeof n[0]?HTMLElement.prototype.addEventListener.apply(this,n):t.prototype.addEventListener.apply(this,n)};return WjcFinancialChart}(wjcChartFinance.FinancialChart);export{WjcFinancialChart};_wj_ns_exists_4&&WjComponentBehavior.register("wjc-financial-chart",WjcFinancialChart);var WjcFinancialChartSeries=function(t){__extends(WjcFinancialChartSeries,t);function WjcFinancialChartSeries(){var n=t.call(this)||this;n._wjBehaviour=WjComponentBehavior._attach(n);return n}Object.defineProperty(WjcFinancialChartSeries,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFinancialChartSeries.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFinancialChartSeries.prototype.attributeChangedCallback=function(t,n,e){this._wjBehaviour.lhAttributeChanged(t,n,e)};WjcFinancialChartSeries.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFinancialChartSeries.wrappedClass=function(){return wjcChartFinance.FinancialSeries};WjcFinancialChartSeries.parentProp="series";WjcFinancialChartSeries.siblingId="series";return WjcFinancialChartSeries}(HTMLElement);export{WjcFinancialChartSeries};_wj_ns_exists_4&&WjComponentBehavior.register("wjc-financial-chart-series",WjcFinancialChartSeries);