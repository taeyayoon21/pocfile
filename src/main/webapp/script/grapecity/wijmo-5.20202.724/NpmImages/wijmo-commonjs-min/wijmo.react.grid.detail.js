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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),ReactDOM=require("react-dom"),wjcCore=require("wijmo/wijmo"),wjcGridDetail=require("wijmo/wijmo.grid.detail"),FlexGridDetail=function(e){__extends(FlexGridDetail,e);function FlexGridDetail(t){var r=e.call(this,t,wjcGridDetail.FlexGridDetailProvider)||this;r._parentInCtor=!0;r._renderedCells=[];r._destroyCell=r._destroyCell.bind(r);return r}FlexGridDetail.prototype._onBeforeWillUnmount=function(t){e.prototype._onBeforeWillUnmount.call(this,t);this._unmountRenderedCells()};FlexGridDetail.prototype._initParent=function(){this._setTemplateRelatedProps(this.props);e.prototype._initParent.call(this)};FlexGridDetail.prototype.componentDidUpdate=function(t){var r=this;e.prototype.componentDidUpdate.call(this,t);this.props.template!==this._template&&this._setTemplateRelatedProps(this.props);this._template?this._renderedCells.forEach((function(e){var t=e.cell,o=r._template(r._getTemplateContext(e.row));ReactDOM.render(o,t)})):this._unmountRenderedCells()};FlexGridDetail.prototype._setTemplateRelatedProps=function(e){var t=this.control,r=this._template=e.template;if(r){t.createDetailCell=this._getCellCreator(r);t.disposeDetailCell=this._destroyCell}else{t.createDetailCell=e.createDetailCell;t.disposeDetailCell=e.disposeDetailCell}};FlexGridDetail.prototype._getTemplateContext=function(e){return{row:e,item:e.dataItem,provider:this.control}};FlexGridDetail.prototype._unmountRenderedCells=function(){this._renderedCells.forEach((function(e){ReactDOM.unmountComponentAtNode(e.cell)}));this._renderedCells=[]};FlexGridDetail.prototype._getCellCreator=function(e){var t=this;return function(r){var o=document.createElement("div"),l=e(t._getTemplateContext(r));ReactDOM.render(l,o);t._renderedCells.push({row:r,cell:o});return o}};FlexGridDetail.prototype._destroyCell=function(e){var t=this.control.grid.rows[e.index-1],r=-1;this._renderedCells.some((function(e,o){return e.row===t&&!!((r=o)+1)}));wjcCore.assert(-1!==r,"Main row rendered cell is not found");ReactDOM.unmountComponentAtNode(this._renderedCells[r].cell);this._renderedCells.splice(r,1);return!0};return FlexGridDetail}(wijmo_react_base_1.ComponentBase);exports.FlexGridDetail=FlexGridDetail;