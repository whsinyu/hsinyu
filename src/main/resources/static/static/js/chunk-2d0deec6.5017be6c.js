(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0deec6"],{"885e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column is-four-fifths"},[a("article",{staticClass:"message is-light"},[t._m(0),a("div",{staticClass:"message-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.topicMap.title,expression:"topicMap.title"}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.topicMap.title},on:{input:function(e){e.target.composing||t.$set(t.topicMap,"title",e.target.value)}}})])]),a("b-field",[a("b-select",{attrs:{placeholder:"选择主题节点"},model:{value:t.topicMap.node,callback:function(e){t.$set(t.topicMap,"node",e)},expression:"topicMap.node"}},[a("optgroup",{attrs:{label:"信息发布"}},[a("option",{attrs:{value:"zhaopin"}},[t._v("招聘")]),a("option",{attrs:{value:"qiuzhi"}},[t._v("求职")]),a("option",{attrs:{value:"neitui"}},[t._v("内推")])]),a("optgroup",{attrs:{label:"城市"}},[a("option",{attrs:{value:"beijing"}},[t._v("北京")]),a("option",{attrs:{value:"shanghai"}},[t._v("上海")]),a("option",{attrs:{value:"hangzhou"}},[t._v("杭州")]),a("option",{attrs:{value:"suzhou"}},[t._v("苏州")])])])],1),a("b-field",[a("mavon-editor",{ref:"md",attrs:{placeholder:t.placeholder,boxShadow:t.boxShadow,toolbars:t.toolbars}})],1),a("b-field",[a("b-taginput",{attrs:{maxlength:"5",maxtags:"3",ellipsis:"",placeholder:"请输入主题标签，限制为 5 个字符和 3 个标签"},model:{value:t.topicMap.tags,callback:function(e){t.$set(t.topicMap,"tags",e)},expression:"topicMap.tags"}})],1),a("b-button",{attrs:{type:"is-info",outlined:""},on:{click:function(e){return t.save()}}},[t._v("发布主题")])],1)])]),t._m(1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-header"},[a("i",{staticClass:"fa fa fa-book"},[t._v(" 主题 / 发布主题")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("article",{staticClass:"message is-light"},[a("div",{staticClass:"message-header"},[a("i",{staticClass:"fa fa-exclamation-circle"},[t._v(" 发帖提示")])]),a("div",{staticClass:"message-body"},[a("p",[t._v("1. 请在标题中描述内容要点。")]),a("br"),a("p",[t._v("2. 可以在正文中为你要发布的主题添加更多细节。编辑器支持 Markdown 文本标记语法。")]),a("br"),a("p",[t._v("3. 在最后，请为你的话题选择一个或多个标签。恰当的标签会让你发布的信息更加有用。")])])])])}],o=a("895f"),l=a("2423"),n={name:"publish",components:{},data:function(){return{topicMap:{title:"",node:"",tags:[],content:{}},placeholder:"本站已全部支持markdown语法",boxShadow:!1,boxShadowStyle:{},subfield:!1,toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!1,subscript:!1,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!1,htmlcode:!1,help:!0,undo:!1,redo:!1,trash:!1,save:!1,navigation:!1,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}}},methods:{save:function(){var t=this,e=this.$refs.md;return null==this.topicMap.title||""===this.topicMap.title?(Object(o["b"])("标题不可以为空！"),!1):0===this.topicMap.tags.length||""===this.topicMap.tags?(Object(o["b"])("标签不可以为空！"),!1):(this.topicMap.content=e.d_value,null==this.topicMap.content||""===this.topicMap.content?(Object(o["b"])("主题内容不可以为空！"),!1):void Object(l["a"])(this.topicMap).then((function(e){200===e.status?(Object(o["b"])("发布成功！"),setTimeout((function(){t.$router.push({name:"detail",params:{id:e.data.id}})}),800)):Object(o["c"])(e.status+"："+e.message)})))}}},c=n,r=a("2877"),p=Object(r["a"])(c,i,s,!1,null,"0b8b0313",null);e["default"]=p.exports}}]);