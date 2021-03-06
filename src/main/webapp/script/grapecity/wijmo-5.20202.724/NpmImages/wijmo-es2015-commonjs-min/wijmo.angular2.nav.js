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

"use strict";var WjTreeView_1,WjTabPanel_1,WjTab_1,WjAccordion_1,WjAccordionPane_1,__decorate=this&&this.__decorate||function(e,t,n,a){var r,o=arguments.length,i=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},__param=this&&this.__param||function(e,t){return function(n,a){t(n,a,e)}};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcCore=require("wijmo/wijmo"),wjcNav=require("wijmo/wijmo.nav");var wjTreeViewMeta={selector:"wj-tree-view",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","isContentHtml","showCheckboxes","autoCollapse","isAnimated","isReadOnly","allowDragging","checkOnClick","expandOnClick","expandOnLoad","lazyLoadFunction","itemsSource","selectedItem","selectedNode","checkedItems"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","itemsSourceChangedNg: itemsSourceChanged","loadingItemsNg: loadingItems","loadedItemsNg: loadedItems","itemClickedNg: itemClicked","selectedItemChangedNg: selectedItemChanged","selectedItemChangePC: selectedItemChange","selectedNodeChangePC: selectedNodeChange","checkedItemsChangedNg: checkedItemsChanged","checkedItemsChangePC: checkedItemsChange","isCollapsedChangingNg: isCollapsedChanging","isCollapsedChangedNg: isCollapsedChanged","isCheckedChangingNg: isCheckedChanging","isCheckedChangedNg: isCheckedChanged","formatItemNg: formatItem","dragStartNg: dragStart","dragOverNg: dragOver","dropNg: drop","dragEndNg: dragEnd","nodeEditStartingNg: nodeEditStarting","nodeEditStartedNg: nodeEditStarted","nodeEditEndingNg: nodeEditEnding","nodeEditEndedNg: nodeEditEnded"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjTreeViewMeta=wjTreeViewMeta;let WjTreeView=WjTreeView_1=class WjTreeView extends wjcNav.TreeView{constructor(e,t,n){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,n,a=!1){let r=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,o=r.ngZone;o&&r.outsideZoneEvents[t]?o.runOutsideAngular(()=>{super.addEventListener(e,t,n,a)}):super.addEventListener(e,t,n,a)}};WjTreeView.meta={outputs:wjTreeViewMeta.outputs,changeEvents:{selectedItemChanged:["selectedItem","selectedNode"],checkedItemsChanged:["checkedItems"]}};WjTreeView=WjTreeView_1=__decorate([core_1.Component({selector:wjTreeViewMeta.selector,template:wjTreeViewMeta.template,inputs:wjTreeViewMeta.inputs,outputs:wjTreeViewMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjTreeView_1)},...wjTreeViewMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTreeView);exports.WjTreeView=WjTreeView;var wjTabPanelMeta={selector:"wj-tab-panel",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","isAnimated","autoSwitch","selectedIndex","selectedTab"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedTabChangePC: selectedTabChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjTabPanelMeta=wjTabPanelMeta;let WjTabPanel=WjTabPanel_1=class WjTabPanel extends wjcNav.TabPanel{constructor(e,t,n){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this.tabs.beginUpdate();this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this.selectedIndex<0&&this.tabs.length&&(this.selectedIndex=0);this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,n,a=!1){let r=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,o=r.ngZone;o&&r.outsideZoneEvents[t]?o.runOutsideAngular(()=>{super.addEventListener(e,t,n,a)}):super.addEventListener(e,t,n,a)}ngAfterContentInit(){let e=this.selectedIndex,t=this.tabs;e>-1&&e<t.length&&wjcCore.addClass(t[e].header,"wj-state-active");t.endUpdate()}};WjTabPanel.meta={outputs:wjTabPanelMeta.outputs,changeEvents:{selectedIndexChanged:["selectedIndex","selectedTab"]}};WjTabPanel=WjTabPanel_1=__decorate([core_1.Component({selector:wjTabPanelMeta.selector,template:wjTabPanelMeta.template,inputs:wjTabPanelMeta.inputs,outputs:wjTabPanelMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjTabPanel_1)},...wjTabPanelMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTabPanel);exports.WjTabPanel=WjTabPanel;var wjTabMeta={selector:"wj-tab",template:"<ng-content></ng-content>",inputs:["wjProperty","isDisabled","isVisible"],outputs:["initialized"],providers:[]};exports.wjTabMeta=wjTabMeta;let WjTab=WjTab_1=class WjTab extends wjcNav.Tab{constructor(e,t,n){super(document.createElement("div"),document.createElement("div"));this.isInitialized=!1;this.wjProperty="tabs";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}ngAfterContentInit(){let e=this._wjBehaviour.elementRef.nativeElement;this._setParts(e.children[0],e.children[1])}};WjTab.meta={outputs:wjTabMeta.outputs};WjTab=WjTab_1=__decorate([core_1.Component({selector:wjTabMeta.selector,template:wjTabMeta.template,inputs:wjTabMeta.inputs,outputs:wjTabMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjTab_1)},...wjTabMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTab);exports.WjTab=WjTab;var wjAccordionMeta={selector:"wj-accordion",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","isAnimated","autoSwitch","selectedIndex","selectedPane","showIcons","allowCollapseAll","allowExpandMany"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjAccordionMeta=wjAccordionMeta;let WjAccordion=WjAccordion_1=class WjAccordion extends wjcNav.Accordion{constructor(e,t,n){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this.panes.beginUpdate();this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this.selectedIndex<0&&this.panes.length&&(this.selectedIndex=0);this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,n,a=!1){let r=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,o=r.ngZone;o&&r.outsideZoneEvents[t]?o.runOutsideAngular(()=>{super.addEventListener(e,t,n,a)}):super.addEventListener(e,t,n,a)}ngAfterContentInit(){let e=this.selectedIndex,t=this.panes;e>-1&&e<t.length&&wjcCore.addClass(t[e].header,"wj-state-active");t.endUpdate()}};WjAccordion.meta={outputs:wjAccordionMeta.outputs,changeEvents:{selectedIndexChanged:["selectedIndex"]}};WjAccordion=WjAccordion_1=__decorate([core_1.Component({selector:wjAccordionMeta.selector,template:wjAccordionMeta.template,inputs:wjAccordionMeta.inputs,outputs:wjAccordionMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjAccordion_1)},...wjAccordionMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjAccordion);exports.WjAccordion=WjAccordion;var wjAccordionPaneMeta={selector:"wj-accordion-pane",template:"<ng-content></ng-content>",inputs:["wjProperty","isDisabled","isVisible"],outputs:["initialized"],providers:[]};exports.wjAccordionPaneMeta=wjAccordionPaneMeta;let WjAccordionPane=WjAccordionPane_1=class WjAccordionPane extends wjcNav.AccordionPane{constructor(e,t,n){super(document.createElement("div"),document.createElement("div"));this.isInitialized=!1;this.wjProperty="panes";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}ngAfterContentInit(){let e=this._wjBehaviour.elementRef.nativeElement;this._setParts(e.children[0],e.children[1])}};WjAccordionPane.meta={outputs:wjAccordionPaneMeta.outputs};WjAccordionPane=WjAccordionPane_1=__decorate([core_1.Component({selector:wjAccordionPaneMeta.selector,template:wjAccordionPaneMeta.template,inputs:wjAccordionPaneMeta.inputs,outputs:wjAccordionPaneMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjAccordionPane_1)},...wjAccordionPaneMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjAccordionPane);exports.WjAccordionPane=WjAccordionPane;let moduleExports=[WjTreeView,WjTabPanel,WjTab,WjAccordion,WjAccordionPane],WjNavModule=class WjNavModule{};WjNavModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjNavModule);exports.WjNavModule=WjNavModule;