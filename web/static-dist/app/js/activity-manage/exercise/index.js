webpackJsonp(["app/js/activity-manage/exercise/index"],[function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Exercise=function(){function Exercise($form){_classCallCheck(this,Exercise),this.$element=$form,this._setValidateRule(),this._init(),this._initEvent()}return _createClass(Exercise,[{key:"_init",value:function(){this._inItStep2form()}},{key:"_initEvent",value:function(){}},{key:"_inItStep2form",value:function(){var $step2_form=$("#step2-form"),validator=$step2_form.validate({onkeyup:!1,rules:{title:{required:!0},itemCount:{required:!0,positiveInteger:!0},range:{required:!0},difficulty:{required:!0},"questionTypes[]":{required:!0,remote:{url:$('[name="checkQuestion"]').data("checkUrl"),type:"post",dataType:"json",async:!1,data:{itemCount:function(){return $('[name="itemCount"]').val()},range:function(){return $('[name="range"]:checked').val()},difficulty:function(){return $('[name="difficulty"]').val()},types:function types(){var types=[];return $('[name="questionTypes[]"]:checked').each(function(){types.push($(this).val())}),types}}}}},messages:{required:"请填写标题",range:"题目来源",difficulty:"请选择难易程度","questionTypes[]":{required:"请选择题型",remote:"题目数量不足"}}});$step2_form.data("validator",validator)}},{key:"_inItStep3form",value:function(){var $step3_form=$("#step3-form"),validator=$step3_form.validate({onkeyup:!1,rules:{finishCondition:{required:!0}},messages:{finishCondition:"请输完成条件"}});$step3_form.data("validator",validator)}},{key:"_setValidateRule",value:function(){$.validator.addMethod("positiveInteger",function(value,element){return this.optional(element)||/^[1-9]\d*$/.test(value)},$.validator.format("必须为正整数"))}}]),Exercise}();new Exercise($("#step2-form"))}]);