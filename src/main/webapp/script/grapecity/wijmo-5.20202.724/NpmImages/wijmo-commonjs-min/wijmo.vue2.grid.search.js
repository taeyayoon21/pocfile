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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcGridSearch=require("wijmo/wijmo.grid.search"),WjFlexGridSearchBehavior=function(e){__extends(WjFlexGridSearchBehavior,e);function WjFlexGridSearchBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexGridSearchBehavior.tag="wj-flex-grid-search";WjFlexGridSearchBehavior.props=["isDisabled","text","delay","placeholder","cssMatch","grid"];WjFlexGridSearchBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjFlexGridSearchBehavior.classCtor=function(){return wjcGridSearch.FlexGridSearch};return WjFlexGridSearchBehavior}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjFlexGridSearch=WjFlexGridSearchBehavior.register();function registerV3WjFlexGridSearch(e){e.component(WjFlexGridSearchBehavior.tag,exports.WjFlexGridSearch)}function registerGridSearch(e){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjFlexGridSearch(e)}exports.registerGridSearch=registerGridSearch;