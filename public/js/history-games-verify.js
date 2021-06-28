(self.webpackChunk=self.webpackChunk||[]).push([[2154],{92344:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={props:["id","small"]}},96007:(e,t,a)=>{"use strict";a.d(t,{s:()=>r,x:()=>n});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:""}},r),[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"history.games.show",params:{id:e.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-eye")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.$t("View")))])],1)],1),e._v(" "),a("v-list-item",{attrs:{to:{name:"history.games.verify",params:{id:e.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-check-decagram")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.$t("Verify")))])],1)],1)],1)],1)},n=[]},60421:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M});var r=a(87757),n=a.n(r),i=a(9669),s=a.n(i),l=a(57731),o=a(68843);function c(e,t,a,r,n,i,s){try{var l=e[i](s),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(r,n)}const v={middleware:["auth","verified","2fa_passed"],components:{Preloader:a(81673).Z,GameMenu:l.Z},props:["id"],metaInfo:function(){return{title:this.$t("Game {0}",[this.id])}},data:function(){return{game:null,serverHashModal:!1,clientHashModal:!1,shiftValueModal:!1}},computed:{serverHashCalculationCode:function(){return this.game?'print hash_hmac("sha256", "'.concat(this.game.provably_fair_game.secret,'", "').concat(this.game.provably_fair_game.server_seed,'")'):""},clientHashCalculationCode:function(){return this.game?'print hash_hmac("sha256", "'.concat(this.game.provably_fair_game.secret).concat(this.game.provably_fair_game.server_seed,'", "').concat(this.game.provably_fair_game.client_seed,'")'):""},shiftValueCalculationCode:function(){return this.game?'print hexdec(substr("'.concat(this.game.provably_fair_game.client_hash,'", -5))'):""}},created:function(){var e,t=this;return(e=n().mark((function e(){var a,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/history/games/".concat(t.id,"/verify"));case 2:a=e.sent,r=a.data.game,t.game=r;case 5:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function s(e){c(i,r,n,s,l,"next",e)}function l(e){c(i,r,n,s,l,"throw",e)}s(void 0)}))})()},methods:{copyToClipboard:function(e){return(0,o.vQ)(e.$el.querySelector("textarea"))}}};var d=a(51900),h=a(43453),u=a.n(h),_=a(4330),m=a(43776),f=a(5255),p=a(17024),g=a(66530),b=a(85305),y=a(6571),C=a(57894),$=a(22515),x=a(54933),k=a(14884),H=a(40961),V=a(73845),w=(0,d.Z)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"8"}},[a("v-card",[a("v-toolbar",[a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.go(-1)}}},[a("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),a("v-toolbar-title",[e._v("\n            "+e._s(e.$t("Game {0}",[e.id]))+"\n          ")]),e._v(" "),a("v-spacer"),e._v(" "),a("game-menu",{attrs:{id:e.id}}),e._v(" "),a("preloader",{attrs:{active:!e.game}})],1),e._v(" "),a("v-card-text",[a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.secret:"",label:e.$t("Server secret"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("Randomly generated by the server before each game."),"persistent-hint":""}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.server_seed:"",label:e.$t("Server seed"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("Randomly generated by the server before each game."),"persistent-hint":""}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.hash:"",label:e.$t("Server hash"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("HMAC SHA256 hash of the server secret with server seed as the key, revealed to player before each game."),"persistent-hint":"","append-icon":"mdi-code-tags"},on:{"click:append":function(t){e.serverHashModal=!0}}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.client_seed:"",label:e.$t("Client seed"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("A random string, which is provided before each game from the client side (by the player)."),"persistent-hint":""}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.client_hash:"",label:e.$t("Client hash"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("HMAC SHA256 hash of the server secret and server seed with client seed as the key."),"persistent-hint":"","append-icon":"mdi-code-tags"},on:{"click:append":function(t){e.clientHashModal=!0}}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.shift_value:"",label:e.$t("Shift value"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("Last 5 chars of the Client hash are converted to a decimal value."),"persistent-hint":"","append-icon":"mdi-code-tags"},on:{"click:append":function(t){e.shiftValueModal=!0}}}),e._v(" "),a("v-text-field",{attrs:{value:e.game?e.game.gameable[e.game.gameable.secret_attribute]:"",label:e.$t("Adjusted secret"),outlined:"",readonly:"",disabled:!e.game,hint:e.game?e.game.gameable.secret_attribute_hint:"","persistent-hint":""}}),e._v(" "),a("v-dialog",{attrs:{width:"600"},model:{value:e.serverHashModal,callback:function(t){e.serverHashModal=t},expression:"serverHashModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n                  "+e._s(e.$t("Server hash"))+"\n                ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.serverHashModal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("p",[e._v(e._s(e.$t("Server hash can be calculated using the following PHP code.")))]),e._v(" "),a("v-textarea",{ref:"server_hash",attrs:{outlined:"",readonly:"",label:e.$t("Code"),value:e.serverHashCalculationCode}}),e._v(" "),a("v-btn",{on:{click:function(t){return e.copyToClipboard(e.$refs.server_hash)}}},[e._v("\n                  "+e._s(e.$t("Copy"))+"\n                ")]),e._v(" "),a("v-btn",{attrs:{href:"http://phpfiddle.org",target:"_blank"}},[e._v("\n                  "+e._s(e.$t("Run on phpfiddle.org"))+"\n                ")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"600"},model:{value:e.clientHashModal,callback:function(t){e.clientHashModal=t},expression:"clientHashModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n                  "+e._s(e.$t("Client hash"))+"\n                ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.clientHashModal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("p",[e._v(e._s(e.$t("Client hash can be calculated using the following PHP code.")))]),e._v(" "),a("v-textarea",{ref:"client_hash",attrs:{outlined:"",readonly:"",label:e.$t("Code"),value:e.clientHashCalculationCode}}),e._v(" "),a("v-btn",{on:{click:function(t){return e.copyToClipboard(e.$refs.client_hash)}}},[e._v("\n                  "+e._s(e.$t("Copy"))+"\n                ")]),e._v(" "),a("v-btn",{attrs:{href:"http://phpfiddle.org",target:"_blank"}},[e._v("\n                  "+e._s(e.$t("Run on phpfiddle.org"))+"\n                ")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"600"},model:{value:e.shiftValueModal,callback:function(t){e.shiftValueModal=t},expression:"shiftValueModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n                  "+e._s(e.$t("Shift value"))+"\n                ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.shiftValueModal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("p",[e._v(e._s(e.$t("Server hash can be calculated using the following PHP code.")))]),e._v(" "),a("v-textarea",{ref:"shift_value",attrs:{outlined:"",readonly:"",label:e.$t("Code"),value:e.shiftValueCalculationCode}}),e._v(" "),a("v-btn",{on:{click:function(t){return e.copyToClipboard(e.$refs.shift_value)}}},[e._v("\n                  "+e._s(e.$t("Copy"))+"\n                ")]),e._v(" "),a("v-btn",{attrs:{href:"http://phpfiddle.org",target:"_blank"}},[e._v("\n                  "+e._s(e.$t("Run on phpfiddle.org"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const M=w.exports;u()(w,{VBtn:_.Z,VCard:m.Z,VCardText:f.ZB,VCol:p.Z,VContainer:g.Z,VDialog:b.Z,VIcon:y.Z,VRow:C.Z,VSpacer:$.Z,VTextField:x.Z,VTextarea:k.Z,VToolbar:H.Z,VToolbarTitle:V.qW})}}]);
//# sourceMappingURL=history-games-verify.js.map