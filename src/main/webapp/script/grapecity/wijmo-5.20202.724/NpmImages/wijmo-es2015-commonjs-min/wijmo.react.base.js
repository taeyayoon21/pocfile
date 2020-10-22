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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_1=require("wijmo/wijmo"),React=require("react");class ComponentBase extends React.Component{constructor(t,e,i){super(t);this._objPropHash={};this._isMounted=!1;this._mountedCBs=[];this._hostRef=React.createRef();this._beforeRender=new wijmo_1.Event;this._afterRender=new wijmo_1.Event;this._beforeWillUnmount=new wijmo_1.Event;this._afterWillUnmount=new wijmo_1.Event;this._beforeDidUpdate=new wijmo_1.Event;this._afterDidUpdate=new wijmo_1.Event;this.props=t;this.controlType=e;for(let t of i&&i.objectProps||[])this._objPropHash[t]=!0}render(){this._onBeforeRender();const t=this._renderImpl();this._onAfterRender();return t}componentDidMount(){if(this._isChild()){let t=this.props[ComponentBase._propsParent];t&&t._mountedCB(()=>{this._setParent(t)})}else this._prepareControl();return this.control}componentWillUnmount(){this._onBeforeWillUnmount();this._siblingInsertedEH&&this._getElement().removeEventListener("DOMNodeInserted",this._siblingInsertedEH);let t=this.control;if(t)if(this._isChild()){let e=this._getParentProp();if(e){let i=this.parent.control[e];if(wijmo_1.isArray(i)){let e=i.indexOf(t);e>-1&&i.splice(e,1)}}}else t instanceof wijmo_1.Control&&setTimeout(()=>{t.hostElement&&t.dispose()});this._onAfterWillUnmount()}shouldComponentUpdate(t){return!0}componentDidUpdate(t){this._onBeforeDidUpdate();var e=this.control;this._copy(e,this.props,t);this._onAfterDidUpdate()}_mountedCB(t){this._isMounted?t():this._mountedCBs.push(t)}_renderImpl(){let t={};t[ComponentBase._propsParent]=this;let e=React.Children.map(this.props.children,e=>e&&React.cloneElement(e,t));const i={ref:this._hostRef};this._isChild()&&(i.style={display:"none"});return React.createElement("div",i,e)}_onBeforeRender(t){this._beforeRender.raise(this,t)}_onAfterRender(t){this._afterRender.raise(this,t)}_onBeforeWillUnmount(t){this._beforeWillUnmount.raise(this,t)}_onAfterWillUnmount(t){this._afterWillUnmount.raise(this,t)}_onBeforeDidUpdate(t){this._beforeDidUpdate.raise(this,t)}_onAfterDidUpdate(t){this._afterDidUpdate.raise(this,t)}_createControl(){let t=this._isChild()?this._isParentInCtor()?this.parent.control:void 0:this._getElement();return new this.controlType(t)}_prepareControl(){let t=this._getElement(),e=this.props;t&&!this._isChild()&&ComponentBase._copyAttrs(t,e,wijmo_1.Control._rxInputAtts);let i=this.control=this._createControl(),n=i instanceof wijmo_1.Control,s=ComponentBase;if(!this._siblingId){null==this.constructor[s._typeSiblingIdProp]&&(this.constructor[s._typeSiblingIdProp]=++s._siblingDirId+"");this._siblingId=this.constructor[s._typeSiblingIdProp]}t.setAttribute(s._typeSiblingIdProp,this._siblingId);var r={};for(var o in e){let n=e[o];this._ignoreProp(o)||wijmo_1.isUndefined(n)||(o in i?r[o]=n:this._setHostAttribute(t,o,n))}n?i.initialize(r):this._copy(i,r,null,!0);this._isMounted=!0;let l=this._mountedCBs;this._mountedCBs=[];for(let t of l)t();wijmo_1.isFunction(e.initialized)&&e.initialized(i)}_initParent(){let t=this._getParentProp();if(t){let e=this.parent.control,i=e[t];if(wijmo_1.isArray(i)){let t=this._getSiblingIndex();(t<0||t>=i.length)&&(t=i.length);i.splice(t,0,this.control);this._siblingInsertedEH=this._siblingInserted.bind(this);this._getElement().addEventListener("DOMNodeInserted",this._siblingInsertedEH)}else e[t]=this.control}}_setParent(t){if(t!==this.parent){if(this.parent)throw"Wijmo child component is already attached to a different parent.";this.parent=t;this._prepareControl();this._initParent()}}_isChild(){return null!=this._parentProp||null!=this._parentInCtor}_isParentInCtor(){return!0===this._parentInCtor}_getParentProp(){return this.props.wjProperty||this._parentProp}_getSiblingIndex(){var t=this._getElement(),e=t.parentElement;if(!e)return-1;for(var i=e.childNodes,n=-1,s=this._siblingId,r=0;r<i.length;r++){var o=i[r];if(1==o.nodeType&&o.getAttribute(ComponentBase._typeSiblingIdProp)==s){++n;if(o===t)return n}}return-1}_siblingInserted(t){if(t.target===this._getElement()){var e=this._getSiblingIndex(),i=this.control,n=this.parent.control[this._getParentProp()],s=n.indexOf(i);if(e>=0&&s>=0&&e!==s){n.splice(s,1);e=Math.min(e,n.length);n.splice(e,0,i)}}}_copy(t,e,i,n=!1){if(!t||!e)return;let s,r=t===this.control;for(var o in e)if(!this._ignoreProp(o)||!r){var l=e[o];if(o in t){if(this._isEvent(t,o))n&&wijmo_1.isFunction(l)&&t[o].addHandler(l);else if(!i||!this._sameValue(i[o],l))if(null==l)t[o]=l;else if(wijmo_1.isPrimitive(l)||wijmo_1.isFunction(l)||this._objPropHash[o]&&t===(s||(s=this.control)))t[o]=l;else if(wijmo_1.isArray(l)&&wijmo_1.isArray(t[o])){let e=t[o],i=l;if(i.length==e.length)for(var h=0;h<i.length;h++)this._copy(e[h],i[h])}else wijmo_1.isObject(l)&&this._copy(t[o],e[o])}else this._setHostAttribute(t.hostElement,o,e[o])}}_setHostAttribute(t,e,i){if(t)switch(e){case"className":wijmo_1.addClass(t,i);break;case"style":wijmo_1.setCss(t,i);break;default:null!=t[e]?t[e]=i:"string"==typeof i&&"$"!==e[0]&&t.setAttribute(e,i)}}_sameValue(t,e){return t==e||wijmo_1.DateTime.equals(t,e)}_isEvent(t,e){let i=t&&t[e];return null!=i&&i instanceof wijmo_1.Event}_getElement(){return this._hostRef&&this._hostRef.current}_ignoreProp(t){return"children"===t}static _copyAttrs(t,e,i){if(t)for(let n in e)n.match(i)&&t.setAttribute(n,e[n])}static isInStrictMode(t){return!!(t.hasOwnProperty("_reactInternalFiber")&&1&t._reactInternalFiber.mode)}}ComponentBase._propsParent="$parent";ComponentBase._typeSiblingIdProp="_wjSiblingIdProp";ComponentBase._siblingDirId=0;exports.ComponentBase=ComponentBase;