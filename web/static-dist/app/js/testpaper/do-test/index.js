webpackJsonp(["app/js/testpaper/do-test/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_doTestBase=__webpack_require__("4428b108ee5aeb4e86ba"),_doTestBase2=_interopRequireDefault(_doTestBase),DoTestpaper=function(_DoTestBase){function DoTestpaper($container){_classCallCheck(this,DoTestpaper);var _this=_possibleConstructorReturn(this,(DoTestpaper.__proto__||Object.getPrototypeOf(DoTestpaper)).call(this,$container));return _this.$timePauseDialog=_this.$container.find("#time-pause-dialog"),_this.$timer=$container.find(".js-testpaper-timer"),_this._init(),_this._initTimer(),_this}return _inherits(DoTestpaper,_DoTestBase),_createClass(DoTestpaper,[{key:"_init",value:function(){var _this2=this;this.$container.on("click",".js-btn-pause",function(event){return _this2._clickBtnPause(event)}),this.$container.on("click",".js-btn-resume",function(event){return _this2._clickBtnReume(event)})}},{key:"_initTimer",value:function(){var self=this;void 0!=this.$timer&&this.$timer.timer({countdown:!0,duration:this.$timer.data("time"),format:"%H:%M:%S",callback:function(){self.$container.find("#time-finish-dialog").modal("show"),clearInterval(self.$usedTimer),self.usedTime=self.$timer.data("time")/60,self._submitTest(self.$container.find('[data-role="paper-submit"]').data("url"))},repeat:!0,start:function(){self.usedTime=0}})}},{key:"_clickBtnPause",value:function(event){var $btn=$(event.currentTarget).toggleClass("active");$btn.hasClass("active")?(this.$timer.timer("pause"),clearInterval(this.$usedTimer),this.$timePauseDialog.modal("show")):(this.$timer.timer("resume"),this._initUsedTimer(),this.$timePauseDialog.modal("hide"))}},{key:"_clickBtnReume",value:function(event){this.$timer.timer("resume"),this._initUsedTimer(),this.$container.find(".js-btn-pause").removeClass("active"),this.$timePauseDialog.modal("hide")}}]),DoTestpaper}(_doTestBase2["default"]);new DoTestpaper($(".testpaper-activity-show"))}]);