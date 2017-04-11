webpackJsonp([0],[,,,,function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(3),n=t(30),r=t(29),o=t.n(r),i=t(18),m=t.n(i),d=t(19),c=t.n(d),u=t(22),p=t.n(u),l=t(17),v=t.n(l),h=t(20),_=t.n(h),f=t(21),g=t.n(f);t(11),s.default.use(n.a),s.default.use(o.a);var y=new n.a({routes:[{path:"/",name:"about",component:v.a},{path:"/join",name:"join",component:_.a},{path:"/privacy",name:"privacy",component:g.a},{path:"/db/:companyName/",name:"company",component:c.a},{path:"/db/:companyName/:pageHash",name:"companyPage",component:c.a},{path:"/db/:companyName/:pageHash/:userHash",name:"user",component:p.a},{path:"/db/:companyName/:pageHash/:userHash/:userPageHash",name:"userPage",component:p.a}]});new s.default({router:y,el:"#app",render:function(e){return e(m.a)}})},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"about"}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app",watch:{$route:"closeSidenav"},methods:{toggleSidenav:function(){this.$refs.leftSidenav.toggle()},closeSidenav:function(){this.$refs.leftSidenav.close()}}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(2),n=t.n(s),r=function(e,a){return n()("page"+e+a)},o=function(e,a){return n()("user"+e+a)};a.default={name:"company",created:function(){this.fetchData()},data:function(){return{pageId:0,pageHash:"",nextPageHash:"",prevPageHash:"",usersPerPage:10,users:[]}},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this,a=this.$route.params.companyName;this.pageHash=this.$route.params.pageHash||r(a,0);var t=Array.apply(null,Array(1e3)).map(function(e,a){return a});this.pageId=t.find(function(t){return r(a,t)===e.pageHash}),this.nextPageHash=r(a,this.pageId+1),this.prevPageHash=r(a,this.pageId-1),this.users=Array.apply(null,Array(this.usersPerPage)).map(function(t,s){var n=e.usersPerPage*e.pageId+s+1;return{id:n,hash:o(a,n)}})}}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"join"}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"privacy"}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(2),n=t.n(s),r=function(e,a){return n()("user"+e+a)},o=function(e){return n()("userpage"+e)},i=function(e,a){return"Message "+e+" "+a};a.default={name:"user",created:function(){this.fetchData()},data:function(){return{userId:0,pageId:0,nextPageHash:"",prevPageHash:"",itemsPerPage:6,messages:[],messagesCount:12321831}},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this,a=this.$route.params.userHash,t=this.$route.params.companyName,s=Array.apply(null,Array(1e3)).map(function(e,a){return a});this.userId=s.find(function(e){return r(t,e)===a})||0,console.log(a,s[0]);var n=this.$route.params.userPageHash,m=Array.apply(null,Array(1e3)).map(function(e,a){return a});this.pageId=n?m.find(function(e){return o(e)===n}):0,this.nextPageHash=o(this.pageId+1),this.prevPageHash=o(this.pageId-1),this.messages=Array.apply(null,Array(this.itemsPerPage)).map(function(t,s){var n=e.itemsPerPage*e.pageId+s+1;return{text:i(a,n),id:n}})}}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(16),n=t.n(s);n.a.install({onUpdateReady:function(){console.log("update ready"),n.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},,function(e,a){},function(e,a){},,,function(e,a,t){var s=t(0)(t(5),t(27),null,null);e.exports=s.exports},function(e,a,t){t(13);var s=t(0)(t(6),t(26),null,null);e.exports=s.exports},function(e,a,t){var s=t(0)(t(7),t(25),null,null);e.exports=s.exports},function(e,a,t){var s=t(0)(t(8),t(24),null,null);e.exports=s.exports},function(e,a,t){var s=t(0)(t(9),t(23),null,null);e.exports=s.exports},function(e,a,t){t(14);var s=t(0)(t(10),t(28),null,null);e.exports=s.exports},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("md-card",[t("md-card-header",[t("md-card-header-text",[t("div",{staticClass:"md-title"},[e._v("Privacy Policy")]),e._v(" "),t("div",{staticClass:"md-subhead"},[e._v("More than 60 years on data secutirty market")])])],1),e._v(" "),t("md-card-content",[e._v("\n\n    Lorem ipsum\n\n  ")])],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("md-card",[t("md-card-header",[t("md-card-header-text",[t("div",{staticClass:"md-title"},[e._v("How to join")]),e._v(" "),t("div",{staticClass:"md-subhead"},[e._v("It will take only 5 seconds")])])],1),e._v(" "),t("md-card-content",[e._v("\n\n    Lorem ipsum\n\n  ")])],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"company"}},[t("md-card",[t("md-card-header",[t("md-card-header-text",[t("div",{staticClass:"md-title"},[e._v("Company "+e._s(e.$route.params.companyName))]),e._v(" "),t("div",{staticClass:"md-subhead"},[e._v("Show users "+e._s(e.users[0].id)+" - "+e._s(e.users[e.users.length-1].id))])])],1),e._v(" "),t("md-card-content",[t("md-list",e._l(e.users,function(a){return t("md-list-item",{key:"user.id"},[t("md-avatar",[t("img",{attrs:{src:"https://placeimg.com/40/40/people/"+a.id,alt:"People"}})]),e._v(" "),t("span",[t("router-link",{attrs:{to:{name:"user",params:{companyName:e.$route.params.companyName,pageHash:e.pageHash,userHash:a.hash}}}},[e._v("\n              User #"+e._s(a.id)+"\n            ")])],1),e._v(" "),t("md-button",{staticClass:"md-icon-button md-list-action"},[t("md-icon",{staticClass:"md-primary"},[e._v("chat_bubble")])],1)],1)}))],1),e._v(" "),t("md-card-actions",[e.pageId>0?t("router-link",{attrs:{to:{name:"companyPage",params:{companyName:e.$route.params.companyName,pageHash:e.prevPageHash}}}},[t("md-button",[e._v("<< Prev")])],1):e._e(),e._v(" "),e.nextPageHash?t("router-link",{attrs:{to:{name:"companyPage",params:{companyName:e.$route.params.companyName,pageHash:e.nextPageHash}}}},[t("md-button",[e._v("Next >>")])],1):e._e()],1)],1)],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("md-toolbar",[t("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(a){e.toggleSidenav(a)}}},[t("md-icon",[e._v("menu")])],1),e._v(" "),t("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[e._v("Datastore")])],1),e._v(" "),t("md-sidenav",{ref:"leftSidenav",staticClass:"md-left"},[t("md-toolbar",[t("div",{staticClass:"md-toolbar-container"},[t("h3",{staticClass:"md-title"},[e._v("Our partners")])])]),e._v(" "),t("md-list",[t("router-link",{attrs:{to:{name:"company",params:{companyName:"Zello"}}}},[t("md-list-item",[t("md-avatar",[t("img",{attrs:{src:"https://placeimg.com/40/40/people/5",alt:"People"}})]),e._v(" "),t("span",[e._v("Zello")])],1)],1),e._v(" "),t("router-link",{attrs:{to:{name:"company",params:{companyName:"LinkedIn"}}}},[t("md-list-item",[t("md-avatar",[t("img",{attrs:{src:"https://placeimg.com/40/40/people/1",alt:"People"}})]),e._v(" "),t("span",[e._v("LinkedIn")])],1)],1),e._v(" "),t("router-link",{attrs:{to:{name:"company",params:{companyName:"Facebook"}}}},[t("md-list-item",[t("md-avatar",[t("img",{attrs:{src:"https://placeimg.com/40/40/people/6",alt:"People"}})]),e._v(" "),t("span",[e._v("Facebook")]),e._v(" "),t("md-divider",{staticClass:"md-inset"})],1)],1)],1),e._v(" "),t("router-link",{attrs:{to:{name:"about"}}},[t("md-list-item",[t("md-icon",[e._v("move_to_inbox")]),e._v(" "),t("span",[e._v("About us")])],1)],1),e._v(" "),t("router-link",{attrs:{to:{name:"privacy"}}},[t("md-list-item",[t("md-icon",[e._v("send")]),e._v(" "),t("span",[e._v("Privacy policy")])],1)],1),e._v(" "),t("router-link",{attrs:{to:{name:"join"}}},[t("md-list-item",[t("md-icon",[e._v("send")]),e._v(" "),t("span",[e._v("How to join")])],1)],1)],1),e._v(" "),t("content",[t("router-view")],1)],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("md-card",[t("md-card-header",[t("md-card-header-text",[t("div",{staticClass:"md-title"},[e._v("About us")]),e._v(" "),t("div",{staticClass:"md-subhead"},[e._v("More than 60 years on data secutirty market")])])],1),e._v(" "),t("md-card-content",[e._v("\n\n    Lorem ipsum\n\n  ")])],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"user"}},[t("md-card",[t("md-card-header",[t("md-card-header-text",[t("div",{staticClass:"md-title"},[e._v("\n          "+e._s(e.$route.params.companyName)+"\n          user #"+e._s(e.userId)+"\n        ")]),e._v(" "),t("div",{staticClass:"md-subhead"},[e._v("Show messages "+e._s(e.messages[0].id)+" - "+e._s(e.messages[e.messages.length-1].id))])]),e._v(" "),t("router-link",{attrs:{to:{name:"companyPage",params:{companyName:e.$route.params.companyName,pageHash:e.$route.params.pageHash}}}},[t("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[t("md-icon",[e._v("close")])],1)],1)],1),e._v(" "),t("md-card-content",[t("md-layout",{attrs:{"md-gutter":"24"}},e._l(e.messages,function(a){return t("md-layout",{key:"message.id",staticClass:"cardContainer"},[t("md-card",[t("md-card-header",[t("div",{staticClass:"md-title"},[e._v("Message #"+e._s(a.id))]),e._v(" "),t("div",{staticClass:"md-subhead"},[e._v("21th Aug 2016 15:34")])]),e._v(" "),t("md-card-content",[e._v("\n              "+e._s(a.text)+"\n            ")]),e._v(" "),t("md-card-actions",[t("md-button",[e._v("Download dump")])],1)],1)],1)}))],1),e._v(" "),t("md-card-actions",[this.pageId>0?t("router-link",{attrs:{to:{name:"userPage",params:{companyName:e.$route.params.companyName,pageHash:e.$route.params.pageHash,userHash:e.$route.params.userHash,userPageHash:this.prevPageHash}}}},[t("md-button",[e._v("<< Prev")])],1):e._e(),e._v(" "),this.nextPageHash?t("router-link",{attrs:{to:{name:"userPage",params:{companyName:e.$route.params.companyName,pageHash:e.$route.params.pageHash,userHash:e.$route.params.userHash,userPageHash:this.nextPageHash}}}},[t("md-button",[e._v("Next >>")])],1):e._e()],1)],1)],1)},staticRenderFns:[]}},,,,function(e,a,t){e.exports=t(4)}],[32]);
//# sourceMappingURL=client.2569ec12.js.map