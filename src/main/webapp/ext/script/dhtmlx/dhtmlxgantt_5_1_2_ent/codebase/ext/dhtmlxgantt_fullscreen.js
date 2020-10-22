/*!
 * @license
 * 
 * dhtmlxGantt v.5.1.2 Professional
 * This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.
 * 
 * (c) Dinamenta, UAB.
 * 
 */
Gantt.plugin(function(e){!function(e){function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=9)}({10:function(n,t){!function(){e._fs_change=[];var n=e.getState;e.getState=function(){var e=n.apply(this,arguments);return e.fullscreen=!!this._expanded,e},e._onFullScreenChange=function(){if(e.$container){e.getState().fullscreen&&(e._isFullScreenActive()||e.collapse());var n=e._fs_change.length?e._fs_change.pop():null;if(e._expanded=!e._expanded,n)if(n.condition())n.callback();else{var t=setInterval(function(){n.condition()&&(clearInterval(t),t=null,n.callback())},10);setTimeout(function(){t&&(clearInterval(t),n.callback())},100)}else e.render()}},e._isFullScreenActive=function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},e._isFullScreenAvailable=function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled},e.event(document,"webkitfullscreenchange",e._onFullScreenChange),e.event(document,"mozfullscreenchange",e._onFullScreenChange),e.event(document,"MSFullscreenChange",e._onFullScreenChange),e.event(document,"fullscreenChange",e._onFullScreenChange),e.event(document,"fullscreenchange",e._onFullScreenChange),e.expand=function(){if(e.callEvent("onBeforeExpand",[])){e._toggleFullScreen(!0);var n=e.$root;do{n._position=n.style.position||"",n.style.position="static"}while((n=n.parentNode)&&n.style);n=e.$root,n.style.position="absolute",n._width=n.style.width,n._height=n.style.height,n.style.width=n.style.height="100%",n.style.top=n.style.left="0px";var t=document.body;t.scrollTop=0,t=t.parentNode,t&&(t.scrollTop=0),document.body._overflow=document.body.style.overflow||"",document.body.style.overflow="hidden",document.body._width=document.body.style.width,document.body._height=document.body.style.height;var l=function(){document.documentElement.msRequestFullscreen&&e.$root&&(e.$root.style.width=document.body.style.width=window.outerWidth+"px",e.$root.style.height=document.body.style.height=window.outerHeight+"px"),e.render(),e.callEvent("onExpand",[])};if(e._isFullScreenAvailable()){var o=window.outerHeight,c=window.outerWidth;e._fs_change.push({condition:function(){return o<window.outerHeight&&c<=window.outerWidth},callback:l})}else e._expanded=!e._expanded,l()}},e.collapse=function(){if(e.callEvent("onBeforeCollapse",[])){var n=e.$root;do{n.style.position=n._position}while((n=n.parentNode)&&n.style);n=e.$root,n.style.width=n._width,n.style.height=n._height,document.body.style.overflow=document.body._overflow,document.body.style.width=document.body._width,document.body.style.height=document.body._height,e._toggleFullScreen(!1);var t=function(){e.render(),e.callEvent("onCollapse",[])};if(e._isFullScreenAvailable()){var l=window.outerHeight,o=window.outerWidth;e._fs_change.push({condition:function(){return l>window.outerHeight&&o>=window.outerWidth},callback:t})}else e._expanded=!e._expanded,t()}},e._toggleFullScreen=function(e){!e&&(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}()},9:function(e,n,t){e.exports=t(10)}})});
//# sourceMappingURL=dhtmlxgantt_fullscreen.js.map