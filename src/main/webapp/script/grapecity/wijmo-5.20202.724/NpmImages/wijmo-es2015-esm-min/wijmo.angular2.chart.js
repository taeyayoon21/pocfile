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

var WjFlexChart_1,WjFlexPie_1,WjFlexChartAxis_1,WjFlexChartLegend_1,WjFlexChartDataLabel_1,WjFlexPieDataLabel_1,WjFlexChartSeries_1,WjFlexChartLineMarker_1,WjFlexChartDataPoint_1,WjFlexChartPlotArea_1,__decorate=this&&this.__decorate||function(e,t,a,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},__param=this&&this.__param||function(e,t){return function(a,r){t(a,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";import*as wjcChart from"wijmo/wijmo.chart";var wjFlexChartMeta={selector:"wj-flex-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","rotated","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexChartMeta};let WjFlexChart=WjFlexChart_1=class WjFlexChart extends wjcChart.FlexChart{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let i=WjDirectiveBehavior,n=i.ngZone;n&&i.outsideZoneEvents[t]?n.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};WjFlexChart.meta={outputs:wjFlexChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}};WjFlexChart=WjFlexChart_1=__decorate([Component({selector:wjFlexChartMeta.selector,template:wjFlexChartMeta.template,inputs:wjFlexChartMeta.inputs,outputs:wjFlexChartMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChart_1)},...wjFlexChartMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChart);export{WjFlexChart};var wjFlexPieMeta={selector:"wj-flex-pie",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","titles"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexPieMeta};let WjFlexPie=WjFlexPie_1=class WjFlexPie extends wjcChart.FlexPie{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let i=WjDirectiveBehavior,n=i.ngZone;n&&i.outsideZoneEvents[t]?n.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};WjFlexPie.meta={outputs:wjFlexPieMeta.outputs};WjFlexPie=WjFlexPie_1=__decorate([Component({selector:wjFlexPieMeta.selector,template:wjFlexPieMeta.template,inputs:wjFlexPieMeta.inputs,outputs:wjFlexPieMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexPie_1)},...wjFlexPieMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexPie);export{WjFlexPie};var wjFlexChartAxisMeta={selector:"wj-flex-chart-axis",template:"",inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export{wjFlexChartAxisMeta};let WjFlexChartAxis=WjFlexChartAxis_1=class WjFlexChartAxis extends wjcChart.Axis{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="axes";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartAxis.meta={outputs:wjFlexChartAxisMeta.outputs};WjFlexChartAxis=WjFlexChartAxis_1=__decorate([Component({selector:wjFlexChartAxisMeta.selector,template:wjFlexChartAxisMeta.template,inputs:wjFlexChartAxisMeta.inputs,outputs:wjFlexChartAxisMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartAxis_1)},...wjFlexChartAxisMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAxis);export{WjFlexChartAxis};var wjFlexChartLegendMeta={selector:"wj-flex-chart-legend",template:"",inputs:["wjProperty","orientation","position","title","titleAlign"],outputs:["initialized"],providers:[]};export{wjFlexChartLegendMeta};let WjFlexChartLegend=WjFlexChartLegend_1=class WjFlexChartLegend extends wjcChart.Legend{constructor(e,t,a){super(a);this.isInitialized=!1;this.wjProperty="legend";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartLegend.meta={outputs:wjFlexChartLegendMeta.outputs};WjFlexChartLegend=WjFlexChartLegend_1=__decorate([Component({selector:wjFlexChartLegendMeta.selector,template:wjFlexChartLegendMeta.template,inputs:wjFlexChartLegendMeta.inputs,outputs:wjFlexChartLegendMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartLegend_1)},...wjFlexChartLegendMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartLegend);export{WjFlexChartLegend};var wjFlexChartDataLabelMeta={selector:"wj-flex-chart-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};export{wjFlexChartDataLabelMeta};let WjFlexChartDataLabel=WjFlexChartDataLabel_1=class WjFlexChartDataLabel extends wjcChart.DataLabel{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="dataLabel";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartDataLabel.meta={outputs:wjFlexChartDataLabelMeta.outputs};WjFlexChartDataLabel=WjFlexChartDataLabel_1=__decorate([Component({selector:wjFlexChartDataLabelMeta.selector,template:wjFlexChartDataLabelMeta.template,inputs:wjFlexChartDataLabelMeta.inputs,outputs:wjFlexChartDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartDataLabel_1)},...wjFlexChartDataLabelMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartDataLabel);export{WjFlexChartDataLabel};var wjFlexPieDataLabelMeta={selector:"wj-flex-pie-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};export{wjFlexPieDataLabelMeta};let WjFlexPieDataLabel=WjFlexPieDataLabel_1=class WjFlexPieDataLabel extends wjcChart.PieDataLabel{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="dataLabel";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexPieDataLabel.meta={outputs:wjFlexPieDataLabelMeta.outputs};WjFlexPieDataLabel=WjFlexPieDataLabel_1=__decorate([Component({selector:wjFlexPieDataLabelMeta.selector,template:wjFlexPieDataLabelMeta.template,inputs:wjFlexPieDataLabelMeta.inputs,outputs:wjFlexPieDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexPieDataLabel_1)},...wjFlexPieDataLabelMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexPieDataLabel);export{WjFlexPieDataLabel};var wjFlexChartSeriesMeta={selector:"wj-flex-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartSeriesMeta};let WjFlexChartSeries=WjFlexChartSeries_1=class WjFlexChartSeries extends wjcChart.Series{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartSeries.meta={outputs:wjFlexChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartSeries=WjFlexChartSeries_1=__decorate([Component({selector:wjFlexChartSeriesMeta.selector,template:wjFlexChartSeriesMeta.template,inputs:wjFlexChartSeriesMeta.inputs,outputs:wjFlexChartSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartSeries_1)},...wjFlexChartSeriesMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartSeries);export{WjFlexChartSeries};var wjFlexChartLineMarkerMeta={selector:"wj-flex-line-marker",template:"",inputs:["wjProperty","isVisible","seriesIndex","horizontalPosition","content","verticalPosition","alignment","lines","interaction","dragLines","dragThreshold","dragContent"],outputs:["initialized","positionChangedNg: positionChanged"],providers:[]};export{wjFlexChartLineMarkerMeta};let WjFlexChartLineMarker=WjFlexChartLineMarker_1=class WjFlexChartLineMarker extends wjcChart.LineMarker{constructor(e,t,a){super(a);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartLineMarker.meta={outputs:wjFlexChartLineMarkerMeta.outputs};WjFlexChartLineMarker=WjFlexChartLineMarker_1=__decorate([Component({selector:wjFlexChartLineMarkerMeta.selector,template:wjFlexChartLineMarkerMeta.template,inputs:wjFlexChartLineMarkerMeta.inputs,outputs:wjFlexChartLineMarkerMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartLineMarker_1)},...wjFlexChartLineMarkerMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartLineMarker);export{WjFlexChartLineMarker};var wjFlexChartDataPointMeta={selector:"wj-flex-chart-data-point",template:"",inputs:["wjProperty","x","y"],outputs:["initialized"],providers:[]};export{wjFlexChartDataPointMeta};let WjFlexChartDataPoint=WjFlexChartDataPoint_1=class WjFlexChartDataPoint extends wjcChart.DataPoint{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartDataPoint.meta={outputs:wjFlexChartDataPointMeta.outputs};WjFlexChartDataPoint=WjFlexChartDataPoint_1=__decorate([Component({selector:wjFlexChartDataPointMeta.selector,template:wjFlexChartDataPointMeta.template,inputs:wjFlexChartDataPointMeta.inputs,outputs:wjFlexChartDataPointMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartDataPoint_1)},...wjFlexChartDataPointMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartDataPoint);export{WjFlexChartDataPoint};var wjFlexChartPlotAreaMeta={selector:"wj-flex-chart-plot-area",template:"",inputs:["wjProperty","column","height","name","row","style","width"],outputs:["initialized"],providers:[]};export{wjFlexChartPlotAreaMeta};let WjFlexChartPlotArea=WjFlexChartPlotArea_1=class WjFlexChartPlotArea extends wjcChart.PlotArea{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="plotAreas";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartPlotArea.meta={outputs:wjFlexChartPlotAreaMeta.outputs};WjFlexChartPlotArea=WjFlexChartPlotArea_1=__decorate([Component({selector:wjFlexChartPlotAreaMeta.selector,template:wjFlexChartPlotAreaMeta.template,inputs:wjFlexChartPlotAreaMeta.inputs,outputs:wjFlexChartPlotAreaMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartPlotArea_1)},...wjFlexChartPlotAreaMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartPlotArea);export{WjFlexChartPlotArea};let moduleExports=[WjFlexChart,WjFlexPie,WjFlexChartAxis,WjFlexChartLegend,WjFlexChartDataLabel,WjFlexPieDataLabel,WjFlexChartSeries,WjFlexChartLineMarker,WjFlexChartDataPoint,WjFlexChartPlotArea],WjChartModule=class WjChartModule{};WjChartModule=__decorate([NgModule({imports:[CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjChartModule);export{WjChartModule};