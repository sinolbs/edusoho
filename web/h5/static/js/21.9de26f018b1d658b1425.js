webpackJsonp([21],{Jpvt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),s=a.n(i),r=a("Xxa5"),n=a.n(r),o=a("exGp"),c=a.n(o),u=(a("eqfM"),a("/QYm")),p=a("Dd8w"),l=a.n(p),d=a("NYxO"),h=a("SQAI"),y=a("oHlh"),v=a("gyMJ"),m={components:{eCourse:y.a,coupon:h.a},data:function(){return{course:{availableCoupons:[],courseSet:{cover:{}}},activeItemIndex:-1,showList:!1,itemData:null,couponNumber:0,preferenceCode:"",targetType:this.$route.query.targetType,targetId:this.$route.params.id,targetUnit:this.$route.params.unit,targetNum:this.$route.params.num,vipOrderType:this.$route.params.type,detail:{},payWay:"",selected:!0,paySettings:{},inWechat:this.isWeixinBrowser(),timeoutId:-1}},created:function(){"升级"===this.vipOrderType&&(this.targetUnit=void 0,this.targetNum=void 0),this.confirmOrder(),this.getSettings()},computed:l()({},Object(d.mapState)(["wechatSwitch","isLoading"]),{total:function(){var t=this.course.totalPrice;if(!this.itemData)return t?Number(this.course.totalPrice).toFixed(2):"";var e="minus"===this.itemData.type,a=this.itemData.rate;return e?Math.max(t-a,0).toFixed(2):t?Number(t*a*.1).toFixed(2):""},couponMoney:function(){if(this.itemData){var t="discount"===this.itemData.type,e=this.itemData.rate;return t&&(e=Number(this.course.totalPrice-this.course.totalPrice*this.itemData.rate*.1).toFixed(2)),this.couponNumber=e}},couponShow:function(){return 0==this.course.availableCoupons.length?"无可用优惠券":this.couponNumber?parseFloat(this.itemData.rate):this.course.availableCoupons.length+"张可用"},getValidity:function(){return this.$route.query.expiryScope||"永久有效"},validPayWay:function(){return this.paySettings.wxpayEnabled||this.paySettings.alipayEnabled&&!this.inWechat}}),filters:{filterPrice:function(t){return parseFloat(t).toFixed(2)},couponType:function(t){return"discount"==t?"折":"元"}},watch:{$route:function(t,e){this.confirmOrder()}},beforeRouteLeave:function(t,e,a){clearTimeout(this.timeoutId),a()},methods:{handleSubmit:function(){if(0==this.total)this.createOrder("free");else{if(!this.validPayWay)return void u.a.fail("无可用支付方式");this.createOrder("pay")}},usePreferenceCode:function(){var a=this,i=this;v.a.exchangePreferential({query:{code:this.preferenceCode},data:{targetType:this.targetType,targetId:this.targetId,action:"receive"}}).then(function(t){if(t.success){i.itemData=t.data;var e=i.course.availableCoupons.length||0;i.$set(a.course.availableCoupons,e,t.data),i.preferenceCode="",i.showList=!1}else t.error&&u.a.fail(t.error.message)}).catch(function(t){})},disuse:function(){this.showList=!1,this.activeItemIndex=-1,this.itemData=null,this.couponNumber=0},chooseItem:function(t){this.activeItemIndex=t.index,this.itemData=t.itemData,this.showList=!1},confirmOrder:function(){var a=this,t={targetType:this.targetType,targetId:this.targetId,num:this.targetNum,unit:this.targetUnit};v.a.confirmOrder({data:t}).then(function(t){var e=t.availableCoupons;a.course=t,a.itemData=0<e.length?e[0]:null}).catch(function(t){a.$router.go(-1)})},routerChange:function(){var t=this;this.wechatSwitch?this.$router.replace({path:"/pay_success",query:{targetType:this.targetType,targetId:this.targetId}}):"vip"===this.targetType?this.$router.replace({path:"/"+this.targetType},function(){t.$router.go(-1)}):this.$router.replace({path:"/"+this.targetType+"/"+this.targetId},function(){t.$router.go(-1)})},getSettings:function(){var e=this;return c()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.getSettings({query:{type:"payment"}}).catch(function(t){u.a.fail(t.message)});case 2:e.paySettings=t.sent,e.paySettings.alipayEnabled&&!e.inWechat?e.payWay="Alipay_LegacyH5":e.paySettings.wxpayEnabled&&(e.payWay="WechatPay_H5");case 4:case"end":return t.stop()}},t,e)}))()},createOrder:function(e){var a=this,i=this;v.a.createOrder({data:{targetType:this.targetType,targetId:this.targetId,isOrderCreate:1,couponCode:this.itemData?this.itemData.code:"",unit:this.targetUnit,num:this.targetNum}}).then(function(t){"free"==e?i.routerChange():"pay"==e&&(a.detail=s()({},t),i.handlePay())}).catch(function(t){u.a.fail(t.message)})},isWeixinBrowser:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},getTradeInfo:function(e){var a=this;return v.a.getTrade({query:{tradesSn:e}}).then(function(t){if(t.isPaid)return a.wechatSwitch?void a.$router.replace({path:"/pay_success",query:{paidUrl:window.location.origin+t.paidSuccessUrlH5}}):void(window.location.href=window.location.origin+t.paidSuccessUrlH5);a.timeoutId=setTimeout(function(){a.getTradeInfo(e)},2e3)}).catch(function(t){u.a.fail(t.message)})},handlePay:function(){var e=this;this.validPayWay&&("WechatPay_H5"===this.payWay&&this.inWechat?window.location.href=window.location.origin+"/pay/center/wxpay_h5?pay_amount="+this.detail.pay_amount+"&title="+this.detail.title+"&sn="+this.detail.sn:v.a.createTrade({data:{gateway:this.payWay,type:"purchase",orderSn:this.detail.sn,app_pay:"Y"}}).then(function(t){"WechatPay_H5"!==e.payWay?window.location.href=t.payUrl:e.getTradeInfo(t.tradeSn).then(function(){window.location.href=t.mwebUrl})}).catch(function(t){u.a.fail(t.message)}))}}},g={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"order"},[i("div",{staticClass:"goods-info"},[a.isLoading?i("e-loading"):a._e(),a._v(" "),0<Object.keys(a.course).length?i("e-course",{attrs:{type:"confirmOrder",typeList:a.targetType,duration:a.course.duration,order:a.course,course:a.course}}):a._e(),a._v(" "),i("div",{staticClass:"order-coupon"},[i("div",{staticClass:"coupon-column",on:{click:function(t){a.showList=!0}}},[i("span",[a._v("优惠券")]),a._v(" "),i("span",{class:["red",a.itemData?"coupon-money":""]},[a._v(a._s(a.couponShow)),a.itemData?i("span",{staticClass:"coupon-type"},[a._v(a._s(a._f("couponType")(a.itemData.type)))]):a._e(),a._v(" "),i("i",{staticClass:"iconfont icon-arrow-right"})])]),a._v(" "),i("van-popup",{staticClass:"e-popup full-height-popup coupon-popup",attrs:{position:"bottom",overlay:!1},model:{value:a.showList,callback:function(t){a.showList=t},expression:"showList"}},[i("van-nav-bar",{staticClass:"nav-bar",attrs:{title:"优惠券","left-arrow":!0},on:{"click-left":a.disuse}}),a._v(" "),i("div",{class:["btn-coupon-exit",{active:a.activeItemIndex<0}],on:{click:a.disuse}},[a._v("不使用优惠\n          "),i("i",{staticClass:"h5-icon h5-icon-circle"}),a._v(" "),i("i",{staticClass:"h5-icon h5-icon-check"})]),a._v(" "),i("div",{staticClass:"e-popup__content coupon-popup__content"},[i("div",{staticClass:"coupon-number-change"},[i("van-field",{attrs:{center:"",border:"",clearable:"",placeholder:"请输入优惠码"},model:{value:a.preferenceCode,callback:function(t){a.preferenceCode=t},expression:"preferenceCode"}},[i("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:!a.preferenceCode},on:{click:a.usePreferenceCode},slot:"button"},[a._v("使用")])],1)],1),a._v(" "),a._l(a.course.availableCoupons,function(t,e){return i("coupon",{key:e,attrs:{coupon:t,index:e,active:a.activeItemIndex,showButton:!1,showSelecet:!0},on:{chooseItem:a.chooseItem}})}),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.course.availableCoupons.length,expression:"!course.availableCoupons.length"}],staticClass:"coupon-empty"},[i("img",{staticClass:"empty-img",attrs:{src:"static/images/coupon_empty.png"}}),a._v(" "),i("div",{staticClass:"empty-text"},[a._v("暂无优惠券")])])],2)],1)],1),a._v(" "),"vip"!==a.targetType?i("div",{staticClass:"order-goods-item"},[i("span",[a._v("学习有效期")]),a._v(" "),i("span",{staticClass:"gray-dark",domProps:{innerHTML:a._s(a.getValidity)}})]):a._e()],1),a._v(" "),i("div",{staticClass:"payPage"},[a.isLoading?i("e-loading"):a._e(),a._v(" "),i("div",{staticClass:"payPage__order"},[i("div",{staticClass:"order__head"},[a._v("\n        支付方式\n      ")]),a._v(" "),i("div",{staticClass:"order__infomation"},[i("div",{staticClass:"payWay"},[i("div",{directives:[{name:"show",rawName:"v-show",value:a.paySettings.alipayEnabled&&!a.inWechat,expression:"paySettings.alipayEnabled && !inWechat"}],class:["payWay__item",{"payWay__item--selected":"Alipay_LegacyH5"===a.payWay}],on:{click:function(t){a.payWay="Alipay_LegacyH5",a.selected=!0}}},[i("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a._v(" "),i("div",{staticClass:"right"}),a._v(" "),i("img",{staticClass:"payWay__img",attrs:{src:"static/images/zfb.png"}})]),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:a.paySettings.wxpayEnabled,expression:"paySettings.wxpayEnabled"}],class:["payWay__item",{"payWay__item--selected":"WechatPay_H5"===a.payWay}],on:{click:function(t){a.payWay="WechatPay_H5",a.selected=!1}}},[i("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a._v(" "),i("div",{staticClass:"right"}),a._v(" "),i("img",{staticClass:"payWay__img",attrs:{src:"static/images/wx.png"}})])])])])],1),a._v(" "),i("div",{staticClass:"order-footer"},[i("div",{staticClass:"order-footer__text"},[a._v("\n      实付："),i("div",{staticClass:"price"},[a._v(a._s(a.total))]),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:a.itemData,expression:"itemData"}],staticClass:"discount"},[a._v("已优惠"+a._s(a.couponMoney))])]),a._v(" "),i("div",{class:["order-footer__btn",{disabled:!a.validPayWay}],on:{click:a.handleSubmit}},[a._v("\n      去支付\n    ")])])])},staticRenderFns:[]},f=a("VU/8")(m,g,!1,null,null,null);e.default=f.exports}});