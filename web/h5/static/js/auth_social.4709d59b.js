(window.webpackJsonp=window.webpackJsonp||[]).push([["auth_social"],{"386d":function(e,t,n){"use strict";var r=n("cb7c"),o=n("83a1"),i=n("5f1b");n("214f")("search",1,(function(e,t,n,a){return[function(n){var r=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=a(n,e,this);if(t.done)return t.value;var c=r(e),s=String(this),u=c.lastIndex;o(u,0)||(c.lastIndex=0);var l=i(c,s);return o(c.lastIndex,u)||(c.lastIndex=u),null===l?-1:l.index}]}))},"4eb5":function(e,t,n){var r=n("6981"),o={autoSetContainer:!1,appendToBody:!0},i={install:function(e){e.prototype.$clipboardConfig=o,e.prototype.$copyText=function(e,t){return new Promise((function(n,i){var a=document.createElement("button"),c=new r(a,{text:function(){return e},action:function(){return"copy"},container:"object"==typeof t?t:document.body});c.on("success",(function(e){c.destroy(),n(e)})),c.on("error",(function(e){c.destroy(),i(e)})),o.appendToBody&&document.body.appendChild(a),a.click(),o.appendToBody&&document.body.removeChild(a)}))},e.directive("clipboard",{bind:function(e,t,n){if("success"===t.arg)e._vClipboard_success=t.value;else if("error"===t.arg)e._vClipboard_error=t.value;else{var i=new r(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:o.autoSetContainer?e:void 0});i.on("success",(function(t){var n=e._vClipboard_success;n&&n(t)})),i.on("error",(function(t){var n=e._vClipboard_error;n&&n(t)})),e._vClipboard=i}},update:function(e,t){"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:(e._vClipboard.text=function(){return t.value},e._vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){"success"===t.arg?delete e._vClipboard_success:"error"===t.arg?delete e._vClipboard_error:(e._vClipboard.destroy(),delete e._vClipboard)}})},config:o};e.exports=i},6981:function(e,t,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(1)),a=s(n(3)),c=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),o(t,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===r(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,c.default)(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}();function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=u},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),c=(r=a)&&r.__esModule?r:{default:r},s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=s},function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,a=r.length;i<a;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return d=t,p=n,(f=e).addEventListener(d,p),{destroy:function(){f.removeEventListener(d,p)}};if(r.nodeList(e))return s=e,u=t,l=n,Array.prototype.forEach.call(s,(function(e){e.addEventListener(u,l)})),{destroy:function(){Array.prototype.forEach.call(s,(function(e){e.removeEventListener(u,l)}))}};if(r.string(e))return i=e,a=t,c=n,o(document.body,i,a,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var i,a,c,s,u,l,f,d,p}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(7);function o(e,t,n,o,i){var a=function(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}}])},7067:function(e,t,n){"use strict";n("e17f");var r=n("2241"),o=(n("e7e5"),n("d399")),i=n("a026"),a=n("3ce7"),c=n("4eb5"),s=n.n(c);i.a.use(s.a);var u=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||n&&!t)o.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};a.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var a=-1!==e.url.indexOf("?")?"&":"?",c=n?"".concat(t).concat(a,"ticket=").concat(e.ticket):e.url;u?window.location.href=c:r.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{i.a.prototype.$copyText(c).then((function(){o.a.success("复制成功")}),(function(){o.a.fail("请更换浏览器复制")}))}catch(e){o.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){o.a.fail(e.message)}))}}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},8820:function(e,t,n){"use strict";n.r(t),n("4917");var r=n("3ce7"),o={data:function(){return{code:"",popupShow:!1,closeOnClickOverlay:!1,btnDisable:!0,isErrorCode:!1,errorText:"",courseId:"",courseTitle:""}},watch:{code:function(e,t){var n=e.length-t.length;if(Math.abs(n)>8){var r=this.spliceCode(e);this.code=r||e,this.isErrorCode=!1,this.btnDisable=!1,this.errorText=""}}},methods:{spliceCode:function(e){var t=/[a-z0-9A-Z]{8}/;return!!e.match(t)&&e.match(t)[0]},checkCodeChange:function(e){if(e.length>7)return/^[a-z0-9A-Z]{8}$/.test(e)?(this.isErrorCode=!1,this.btnDisable=!1,void(this.errorText="")):(this.isErrorCode=!0,void(this.errorText="8位数字、英文字母组成"));this.isErrorCode=!1,this.btnDisable=!0,this.errorText=""},codeCovert:function(e){var t=this;r.a.couponCheck({query:{code:e}}).then((function(n){if(!1===n.success||n.error)return t.isErrorCode=!0,void(t.errorText=n.error.message);r.a.exchangeCoupon({query:{code:e}}).then((function(e){t.courseId=e.products[0].course.id,t.courseTitle=e.products[0].course.displayedTitle,t.popupShow=!0})).catch((function(e){t.isErrorCode=!0,t.errorText=e.message}))}))},toStudy:function(){var e=this.courseId;if(e){var t=encodeURIComponent("/my/orders");this.$router.push({path:"/course/".concat(e,"?backUrl=").concat(t)})}}}},i=n("0c7c"),a=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"coupon-covert-container"},[n("h2",{staticClass:"title"},[e._v("兑换卡券")]),n("van-field",{class:[{"error-code":e.isErrorCode},"e-input","coupon-input"],attrs:{placeholder:"请输入8位兑换码",clearable:""},on:{input:function(t){return e.checkCodeChange(e.code)}},model:{value:e.code,callback:function(t){e.code="string"==typeof t?t.trim():t},expression:"code"}}),e.isErrorCode?n("span",{staticClass:"error-code text-14"},[e._v(e._s(e.errorText))]):e._e(),n("van-button",{staticClass:"covert-submit",attrs:{disabled:e.btnDisable||e.isErrorCode,type:"info"},on:{click:function(t){return e.codeCovert(e.code)}}},[e._v("确认")]),n("van-popup",{staticClass:"coupon-covert-popup",attrs:{"close-on-click-overlay":e.closeOnClickOverlay},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[n("div",{staticClass:"modal-content"},[e._v("\n      兑换成功"),n("div",[e._v("恭喜您获得"+e._s(e.courseTitle)+"课程")])]),n("div",{staticClass:"color-primary mt10 text-15",on:{click:e.toStudy}},[e._v("去学习")])])],1)}),[],!1,null,null,null);t.default=a.exports},a262:function(e,t,n){"use strict";var r=n("7067");t.a={methods:{activityHandle:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.a)(e,t,n)}}}},d863:function(e,t,n){"use strict";n("a481");var r=n("7067");t.a={data:function(){return{redirect:""}},created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:{afterLogin:function(){var e=this,t=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",n=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",o=this.$route.query.callbackType,i=this.$route.query.activityId,a=decodeURIComponent(this.$route.query.callback);setTimeout((function(){if(o)switch(o){case"marketing":Object(r.a)(i,a)}else n?e.$router.replace({path:t,query:{backUrl:n}}):e.$router.replace({path:t})}),2e3)}}}},e289:function(e,t,n){"use strict";n.r(t),n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),o=(n("386d"),n("4917"),n("e7e5"),n("d399")),i=(n("a481"),n("96cf"),n("3b8d")),a=n("a262"),c=n("d863"),s=n("faa5"),u=n("3ce7"),l=n("2f62");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"SocialWx",mixins:[a.a,c.a],created:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$store.state.token){e.next=9;break}if(1!=localStorage.getItem("first_direct")){e.next=5;break}return this.$router.replace({path:this.$route.query.redirect||"/"}),e.abrupt("return");case 5:return o.a.loading({message:"请稍后"}),this.afterLogin(),localStorage.setItem("first_direct",1),e.abrupt("return");case 9:if(t=localStorage.getItem("socialBinded_wx")?JSON.parse(localStorage.getItem("socialBinded_wx")):this.socialBinded.wx,this.setSocialStatus({key:"wx",status:t}),n=location.search.match(/\?code.*&/g)){e.next=16;break}return localStorage.setItem("first_direct",0),this.wxLogin(),e.abrupt("return");case 16:return o.a.loading({message:"正在登录"}),n=n[0].slice(6,-1),e.next=20,u.a.login({params:{code:n,type:"weixinmob"}}).then((function(e){r.userLogin(e),o.a.clear(),o.a.success({duration:2e3,message:"登录成功"});var t=r.socialBinded.wx?-2:-7;r.$route.query.callbackType&&(t+=1),localStorage.setItem("socialBinded_wx",!0),r.$router.go(t)})).catch((function(e){localStorage.setItem("socialBinded_wx",!1),window.location.href="/login/bind/weixinmob?os=h5&_target_path="+encodeURIComponent(location.pathname+location.hash)}));case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),computed:d({},Object(l.d)(["socialBinded"])),methods:d({},Object(l.c)({setSocialStatus:s.m,userLogin:s.s}),{wxLogin:function(){o.a.loading({message:"请稍后"});var e=encodeURIComponent(location.origin+location.pathname+location.hash);window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+this.$route.query.weixinmob_key+"&redirect_uri="+e+"&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect"}})},h=n("0c7c"),y=Object(h.a)(p,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=y.exports}}]);