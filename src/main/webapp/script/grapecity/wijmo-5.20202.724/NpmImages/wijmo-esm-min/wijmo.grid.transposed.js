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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{assert,isArray,isString,isNumber,isUndefined,asBoolean,getTypes,getType,tryCast,toHeaderCase,addClass,DataType,Binding,Control,CollectionView,ObservableArray,NotifyCollectionChangedEventArgs,NotifyCollectionChangedAction,_registerModule}from"wijmo/wijmo";import{FlexGrid,Row,Column,ColumnCollection,AllowSorting,HeadersVisibility}from"wijmo/wijmo.grid";import*as selfModule from"wijmo/wijmo.grid.transposed";var TransposedGrid=function(e){__extends(TransposedGrid,e);function TransposedGrid(r,t){var n=e.call(this,r,null)||this;n._keyPrefix="item";n._autoGenRows=!0;addClass(n.hostElement,"wj-transposed-grid");n.allowSorting=AllowSorting.None;n.headersVisibility=HeadersVisibility.Row;n._rowInfo=new ColumnCollection(n,n.columns.defaultSize);n.initialize(t);n._rowInfo.collectionChanged.addHandler(n._rowInfoChanged,n);n.deferUpdate((function(){var e=n.rowHeaders.columns;if(e.length){e[e.length-1].width=n.columns.defaultSize}}));return n}Object.defineProperty(TransposedGrid.prototype,"autoGenerateRows",{get:function(){return this._autoGenRows},set:function(e){this._autoGenRows=asBoolean(e)},enumerable:!0,configurable:!0});TransposedGrid.prototype.refresh=function(r){var t=this._rowInfo;if(t._dirty){t._dirty=!1;this._rowInfoChanged()}else e.prototype.refresh.call(this,r)};Object.defineProperty(TransposedGrid.prototype,"allowAddNew",{get:function(){return!1},set:function(e){},enumerable:!0,configurable:!0});Object.defineProperty(TransposedGrid.prototype,"allowDelete",{get:function(){return!1},set:function(e){},enumerable:!0,configurable:!0});TransposedGrid.prototype.onRowEditEnded=function(r){if(null!=this._view){var t=new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Change);this._view.collectionChanged.raise(this._view,t)}e.prototype.onRowEditEnded.call(this,r)};TransposedGrid.prototype._getCollectionView=function(r){var t=this,n=null;null!=this._view&&this._view.collectionChanged.removeHandler(this._sourceViewChanged);if(isArray(r))r=this._transposeItemsSource(r);else if(r){this._view&&this._view.collectionChanged.removeHandler(this._sourceViewChanged);this._view=tryCast(r,"ICollectionView");if(this._view){this._view.collectionChanged.addHandler(this._sourceViewChanged,this);r instanceof CollectionView&&(n=r.getError);r=this._transposeItemsSource(this._view.items)}}this.autoGenerateColumns=!0;var o=e.prototype._getCollectionView.call(this,r);n&&o instanceof CollectionView&&(this._supportsProxies()?o.getError=function(e,r){var t=e._keys.indexOf(r);return n(e._arr[t],e._bnd.path)}:o.getError=function(e,r){var o=parseInt(r.substr(t._keyPrefix.length));return n(e._arr[o],e._rowInfo.binding)});return o};TransposedGrid.prototype._getColumnTypes=function(e){var r=this;if(this._view){var t=this._view.items;if(isArray(t))return t.map((function(e,t){return{binding:r._keyPrefix+t,dataType:DataType.Object}}))}return getTypes(e)};TransposedGrid.prototype._copy=function(r,t){var n=this;if(/rows|columns/.test(r)){assert(isArray(t),"Array Expected.");this._rowInfo.deferUpdate((function(){n.autoGenerateRows=!1;n._rowInfo.clear();t.forEach((function(e){var r=new Column(e);n._rowInfo.push(r)}))}));return!0}return e.prototype._copy.call(this,r,t)};TransposedGrid.prototype.onLoadedRows=function(r){for(var t=this,n=this.rowHeaders.columns,o=0;o<n.length;o++)n[o].align="left";var i=this.columns;for(o=0;o<i.length;o++){var a=i[o];a.align=null;a.dataType=0}var s=FlexGrid._getSerializableProperties(Row);this.rows.forEach((function(e){var r=e.dataItem._rowInfo;if(r){t._copyProps(r,e,s,"showDropDown");if(n.length){var o=r.header||toHeaderCase(r.binding);t.rowHeaders.setCellData(e.index,n.length-1,o)}}}));e.prototype.onLoadedRows.call(this,r)};TransposedGrid.prototype._getBindingColumn=function(e,r,t){var n=t;if(e!=this.cells)return n;var o=e.rows[r].dataItem._rowInfo;if(isUndefined(o))return n;n=new Column;var i=FlexGrid._getSerializableProperties(Column);this._copyProps(o,n,i);n.binding=t.binding;n.header=o.header||toHeaderCase(o.binding);return n};TransposedGrid.prototype._copyProps=function(e,r,t,n){void 0===n&&(n="");for(var o in e)if(t.indexOf(o)>-1&&o!=n){var i=e[o];if(!isUndefined(i))try{r[o]=i}catch(e){}}};TransposedGrid.prototype._rowInfoChanged=function(){var e=this;this._toRowInfo&&clearTimeout(this._toRowInfo);this._toRowInfo=setTimeout((function(){var r=e.selection,t=e.itemsSource;e.itemsSource=null;e.itemsSource=t;e.selection=r}),Control._REFRESH_INTERVAL)};TransposedGrid.prototype._sourceViewChanged=function(e,r){this.activeEditor||this.invalidate()};TransposedGrid.prototype._transposeItemsSource=function(e){var r=this,t=new ObservableArray,n=getTypes(e),o=e.map((function(e,t){return r._keyPrefix+t}));(this.autoGenerateRows?this._getRowInfo(e):this._rowInfo).forEach((function(i,a){var s=new Binding(i.binding);if(null==i.dataType){var d=s.getValue(e[0]);i.dataType=null!=d?getType(d):n[a].dataType}if(r._supportsProxies()){var l=r._createProxy(e,i,o);t.push(l)}else{var u=r._createTransposedObject(e,i,r._keyPrefix);t.push(u)}}));e instanceof ObservableArray&&e.collectionChanged.addHandler((function(){var e=new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Reset);t.onCollectionChanged(e);r._rowInfoChanged()}));return t};TransposedGrid.prototype._supportsProxies=function(){return null!=window.Proxy};TransposedGrid.prototype._createProxy=function(e,r,t){var n={_arr:e,_rowInfo:r,_bnd:new Binding(r.binding),_keys:t};return new Proxy(n,{ownKeys:function(e){return e._keys},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0,writable:!0}},get:function(e,r){var t=e._keys.indexOf(r);return t>-1?e._bnd.getValue(e._arr[t]):e[r]},set:function(e,r,t){var n=e._keys.indexOf(r);if(n>-1){var o=e._arr,i=o[n];e._bnd.setValue(i,t);if(o instanceof ObservableArray){var a=new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Change,i,n);o.onCollectionChanged(a)}return!0}return!1}})};TransposedGrid.prototype._createTransposedObject=function(e,r,t){for(var n={_arr:e,_rowInfo:r},o=new Binding(r.binding),_loop_1=function(r){var i=e[r];Object.defineProperty(n,t+r,{enumerable:!0,get:function(){return o.getValue(i)},set:function(t){o.setValue(i,t);if(e instanceof ObservableArray){var n=new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Change,i,r);e.onCollectionChanged(n)}return!0}})},i=0;i<e.length;i++)_loop_1(i);return n};TransposedGrid.prototype._getRowInfo=function(e){var r=this,t=[];getTypes(e).forEach((function(e){var n=e.binding,o=e.dataType;if(o!=DataType.Object&&o!=DataType.Array){var i={binding:n,header:toHeaderCase(n),dataType:o},a=FlexGrid._defTypeWidth[o];if(null!=a){if(isString(a)){var s=Math.round(parseFloat(a));a=a.indexOf("*")<0?s:s*r.columns.defaultSize}isNumber(a)&&a>0&&(i.width=a)}t.push(i)}}));return t};return TransposedGrid}(FlexGrid);export{TransposedGrid};var TransposedGridRow=function(e){__extends(TransposedGridRow,e);function TransposedGridRow(){return null!==e&&e.apply(this,arguments)||this}return TransposedGridRow}(Column);export{TransposedGridRow};_registerModule("wijmo.grid.transposed",selfModule);