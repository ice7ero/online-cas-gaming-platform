(self.webpackChunk=self.webpackChunk||[]).push([[6260],{77014:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>c});const n={middleware:["auth","verified","2fa_passed","admin"],data:function(){return{activeTab:null}},computed:{tabs:function(){var t=[{route:"admin.dashboard.users",name:this.$t("Users")},{route:"admin.dashboard.affiliates",name:this.$t("Affiliates")},{route:"admin.dashboard.games",name:this.$t("Games")}];return this.$store.getters["package-manager/get"]("payments")&&t.push({route:"admin.dashboard.accounting",name:this.$t("Accounting")}),t}}};var s=e(51900),r=e(43453),u=e.n(r),i=e(756),d=e(83868),o=(0,s.Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-tabs",{attrs:{centered:""}},t._l(t.tabs,(function(a,n){return e("v-tab",{key:n,attrs:{to:{name:a.route}}},[t._v("\n      "+t._s(a.name)+"\n    ")])})),1),t._v(" "),e("router-view")],1)}),[],!1,null,null,null);const c=o.exports;u()(o,{VTab:i.Z,VTabs:d.Z})}}]);
//# sourceMappingURL=admin-dashboard.js.map