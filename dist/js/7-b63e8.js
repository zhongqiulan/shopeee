webpackJsonp([7],{227:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(239),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var r=s(264),o=s(78),u=Object(o.a)(n.a,r.a,r.b,!1,null,null,null);u.options.__file="src\\components\\account\\login.vue",e.default=u.exports},239:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(83);e.default={data:function(){return{user_name:"zhangsan",password:"123"}},methods:{login:function(){var t=this;this.$axios.post("site/account/login",{user_name:this.user_name,password:this.password}).then(function(e){1==e.data.status?(t.$message.error(e.data.message),a.bus.$emit("isLogin",!1)):(a.bus.$emit("isLogin",!0),t.$router.push({path:localStorage.getItem("lastVisitPath")}))})}}}},264:function(t,e,s){"use strict";s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"section"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"bg-wrap"},[t._m(1),t._v(" "),s("div",{staticClass:"login-box",attrs:{id:"loginform",name:"loginform"}},[s("div",{staticClass:"input-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user_name,expression:"user_name"}],attrs:{id:"txtUserName",name:"txtUserName",type:"text",placeholder:"用户名/手机/邮箱",maxlength:"50"},domProps:{value:t.user_name},on:{input:function(e){e.target.composing||(t.user_name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"txtPassword",name:"txtPassword",type:"password",placeholder:"输入登录密码",maxlength:"16"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"btn-box"},[s("input",{attrs:{id:"btnSubmit",name:"btnSubmit",type:"submit",value:"立即登录"},on:{click:t.login}})])])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"location"},[s("span",[t._v("当前位置：")]),t._v(" "),s("a",{attrs:{href:"/index.html"}},[t._v("首页")]),t._v(" >\n            "),s("a",{attrs:{href:"/login.html"}},[t._v("会员登录")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-tit"},[s("a",{staticClass:"selected",attrs:{href:"javascript:;"}},[t._v("账户登录")]),t._v(" "),s("i",[t._v("|")]),t._v(" "),s("a",{attrs:{href:"/register.html"}},[t._v("免费注册")])])}];a._withStripped=!0}});