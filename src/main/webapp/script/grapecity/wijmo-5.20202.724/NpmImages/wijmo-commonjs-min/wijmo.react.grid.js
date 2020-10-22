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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),React=require("react"),ReactDOM=require("react-dom"),wjcCore=require("wijmo/wijmo"),wjcGrid=require("wijmo/wijmo.grid"),wjcInteropGrid=require("wijmo/wijmo.interop.grid");exports.CellTemplateType=wjcInteropGrid.GridCellTemplateType;var FlexGrid=function(e){__extends(FlexGrid,e);function FlexGrid(t){return e.call(this,t,wjcGrid.FlexGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})||this}FlexGrid.prototype._createControl=function(){var t=e.prototype._createControl.call(this);new DirectiveCellFactory(this,t);return t};return FlexGrid}(wijmo_react_base_1.ComponentBase);exports.FlexGrid=FlexGrid;var FlexGridColumn=function(e){__extends(FlexGridColumn,e);function FlexGridColumn(t){var r=e.call(this,t,wjcGrid.Column,{objectProps:["dataMap","cellTemplate","editor"]})||this;r._parentProp="columns";return r}FlexGridColumn.prototype._initParent=function(){var t=this.parent.control;if(t.autoGenerateColumns){t.autoGenerateColumns=!1;t.columns.clear()}e.prototype._initParent.call(this)};return FlexGridColumn}(wijmo_react_base_1.ComponentBase);exports.FlexGridColumn=FlexGridColumn;var DirectiveCellFactory=function(e){__extends(DirectiveCellFactory,e);function DirectiveCellFactory(t,r){var l=e.call(this,r)||this;l._renderedCells=[];l._isViewUpdated=!1;r.updatedView.addHandler(l._gridViewUpdated,l);t._beforeDidUpdate.addHandler(l._gridCmpBeforeDidUpdate,l);t._afterDidUpdate.addHandler(l._gridCmpAfterDidUpdate,l);return l}DirectiveCellFactory.prototype.shouldInstantiate=function(e){var t=e.templateCache;return null==t||t.column!==e.column||t.templateContextProperty!==e.templateContextProperty||e.cell.firstChild!=t.rootElement};DirectiveCellFactory.prototype.renderTemplate=function(e,t){var r=e.row,l=e.templateContext,o=e.cell;e.cellBindingsData=this.setBindingsData({},r,e.column,r.dataItem,e.cellValue,l.valuePaths);this._renderCell(o,e);if(t){this._addRenderedCell(o);var i=e.templateCache={column:e.column,rootElement:o.firstElementChild,templateContextProperty:e.templateContextProperty};o[e.templateContextProperty]=i}};DirectiveCellFactory.prototype.disposeTemplate=function(t,r,l){if(r){ReactDOM.unmountComponentAtNode(t);this._removeRenderedCell(t);e.prototype.disposeTemplate.call(this,t,r,l)}};DirectiveCellFactory.prototype.clearCell=function(e){ReactDOM.unmountComponentAtNode(e)};DirectiveCellFactory.prototype.applyImmediately=function(e){};DirectiveCellFactory.prototype.flushPendingEvents=function(e){};DirectiveCellFactory.prototype.getEditorFocusFlag=function(){return!0};DirectiveCellFactory.prototype.setEditorFocusFlag=function(e){};DirectiveCellFactory.prototype._renderCell=function(e,t){var r=t||e.__wjCellLastRenderedProp;if(r){var l=r&&r.templateContext.template,o=r.cellBindingsData.localVars;ReactDOM.render(React.createElement("div",{},l&&l(o)),e);e.__wjCellLastRenderedProp=r}};DirectiveCellFactory.prototype._addRenderedCell=function(e){var t=this._renderedCells;t.indexOf(e)<0&&t.push(e)};DirectiveCellFactory.prototype._removeRenderedCell=function(e){var t=this._renderedCells,r=t.indexOf(e);r>-1&&t.splice(r,1)};DirectiveCellFactory.prototype._reRenderCells=function(){var e=this;this._renderedCells.forEach((function(t){return e._renderCell(t)}))};DirectiveCellFactory.prototype._gridCmpBeforeDidUpdate=function(){this._isViewUpdated=!1};DirectiveCellFactory.prototype._gridCmpAfterDidUpdate=function(){this._gridCmpRendered()};DirectiveCellFactory.prototype._gridCmpRendered=function(){var e=this;setTimeout((function(){e._isViewUpdated?e._isViewUpdated=!1:e._reRenderCells()}),wjcCore.Control._REFRESH_INTERVAL)};DirectiveCellFactory.prototype._gridViewUpdated=function(){this._isViewUpdated=!0};return DirectiveCellFactory}(wjcInteropGrid.DirectiveCellFactoryBase),FlexGridCellTemplate=function(e){__extends(FlexGridCellTemplate,e);function FlexGridCellTemplate(){return null!==e&&e.apply(this,arguments)||this}Object.defineProperty(FlexGridCellTemplate.prototype,"cellOverflow",{get:function(){return this.props.cellOverflow},enumerable:!0,configurable:!0});Object.defineProperty(FlexGridCellTemplate.prototype,"autoSizeRows",{get:function(){var e=this.props.autoSizeRows;return null==e||e},enumerable:!0,configurable:!0});Object.defineProperty(FlexGridCellTemplate.prototype,"forceFullEdit",{get:function(){var e=this.props.forceFullEdit;return null==e||e},enumerable:!0,configurable:!0});Object.defineProperty(FlexGridCellTemplate.prototype,"valuePaths",{get:function(){return this.props.valuePaths},enumerable:!0,configurable:!0});Object.defineProperty(FlexGridCellTemplate.prototype,"template",{get:function(){return this.props[FlexGridCellTemplate._CellRenderFuncProp]},enumerable:!0,configurable:!0});FlexGridCellTemplate.prototype.componentDidMount=function(){var e=this,t=this.props[wijmo_react_base_1.ComponentBase._propsParent];t&&t._mountedCB((function(){var r=e.ownerControl=t.control;if(r instanceof wjcGrid.FlexGrid)e.grid=r;else if(r instanceof wjcGrid.Column){e.column=r;e.grid=t.props[wijmo_react_base_1.ComponentBase._propsParent].control}e.template&&e._attachToControl()}))};FlexGridCellTemplate.prototype.componentWillUnmount=function(){this._detachFromControl()};FlexGridCellTemplate.prototype.componentDidUpdate=function(e){var t=e[FlexGridCellTemplate._CellRenderFuncProp],r=this.template;t!=r&&(null==t?this._attachToControl():null==r&&this._detachFromControl())};FlexGridCellTemplate.prototype.render=function(){return null};FlexGridCellTemplate.prototype._attachToControl=function(){var e=this.cellType=wjcCore.asEnum(this.props.cellType,exports.CellTemplateType),t=this.ownerControl;t[DirectiveCellFactory.getTemplContextProp(e)]=this;t instanceof wjcGrid.Column&&(e===exports.CellTemplateType.Cell||e===exports.CellTemplateType.ColumnHeader||e===exports.CellTemplateType.ColumnFooter)&&t._setFlag(wjcGrid.RowColFlags.HasTemplate,!0);this.grid.invalidate()};FlexGridCellTemplate.prototype._detachFromControl=function(){if(null!=this.cellType){this.ownerControl[DirectiveCellFactory.getTemplContextProp(this.cellType)]=null;this.grid.invalidate()}};FlexGridCellTemplate._CellRenderFuncProp="template";return FlexGridCellTemplate}(React.Component);exports.FlexGridCellTemplate=FlexGridCellTemplate;