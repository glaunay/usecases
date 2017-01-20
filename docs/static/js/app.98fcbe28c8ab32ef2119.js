webpackJsonp([1,0],[function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=s(3),r=a(o),i=s(44),n=a(i),c=s(63),l=a(c),u=s(46),d=a(u),m=s(8);r.default.use(l.default);var f=new l.default({mode:"history",routes:[{path:m.home,component:n.default,name:m.home},{path:m.usecases.home,component:n.default,name:m.usecases.home},{path:m.models,component:d.default,name:m.models},{path:m.usecases.models,component:d.default,name:m.usecases.models}],scrollBehavior:function(e,t,s){return{x:0,y:0}}});new r.default({el:"#app",router:f,data:function(){return{}}})},,,,,,,,function(e,t){e.exports={home:"/",usecases:{home:"/usecases/",models:"/usecases/models"},models:"/models"}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(62),r=a(o);s(39);var i=s(3),n=a(i),c=s(49),l=a(c),u=s(8);n.default.use(r.default),t.default={name:"startapp",data:function(){return{configroutes:u}},components:{ucContainer:l.default,VueMaterial:r.default}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(48),r=a(o),i=s(45),n=a(i);t.default={name:"modelContainer",components:{modelItem:r.default,modalComponent:n.default},data:function(){return{showModal:!1,modalSrc:String}},methods:{showimage:function(e){this.modalSrc=e.src,this.path=e.path,this.showModal=!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"modelDescription"}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(47),r=a(o);t.default={name:"modelItem",components:{modelDescription:r.default},props:{path:{type:String}},data:function(){return{pathParts:[]}},methods:{showImage:function(e){this.$emit("showimage",{src:e.target.src,path:this.path})},hasNext:function(e){return e<this.pathParts.length-1}},mounted:function(){this.pathParts=this.path.replace(/ /g,"").split(">")}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(51),r=a(o),i=s(40);t.default={name:"ucContainer",components:{ucItem:r.default},data:function(){return{usercases:i[0],categories:i[1].categories}},methods:{selected:function(e){this.$el.querySelectorAll(".selected").forEach(function(e){e.classList.remove("selected")}),e.currentTarget.classList.toggle("selected")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ucDescription",props:{uc:{type:Object}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(50),r=a(o),i=s(52),n=a(i);t.default={name:"ucItem",components:{ucDescription:r.default,ucTags:n.default},props:{uc:{type:Object},categories:{type:Object}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(18),r=a(o);t.default={name:"uc-tags",props:{uc:{type:Object,default:function(){return{}}},categories:{type:Object}},methods:{getClassByPrefix:function(e,t){var s=e+t,a=(0,r.default)({},s,!0);return a},getTooltipByPrefix:function(e,t){var s="";return e&&t&&(s=this.categories[e][t].tooltip),s},fullName:function(e,t){return this.categories[e][t].name}}}},,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports=[{"Trace Analysis":[{title:"Feature extraction",description:"Extracts electrophysiological features; traces can be from NeuroInformatics Platform or uploaded",experience:["all"],maturity:["beta"],access:[""],picture:{src:"https://github.com/antonelepfl/usecases/blob/master/src/assets/cAC.png?raw=true",alt:"Logo of feature Extraction"}},{title:"Feature registration",description:"Register features of user's traces in NeuroInformatics Platform",experience:["all"],maturity:["experimental"],access:[""],picture:{src:"https://github.com/antonelepfl/usecases/blob/master/src/assets/cAC.png?raw=true",alt:"Logo of feature Extraction"}},{title:"Feature comparison",description:"Compare electrophysiological features from NeuroInformatics Platform or uploaded data",experience:["all"],maturity:["experimental"],access:[""],picture:{src:"https://github.com/antonelepfl/usecases/blob/master/src/assets/cAC.png?raw=true",alt:"Logo of feature Extraction"}},{title:"Synaptic event fitting",description:"Fitting synaptic events using data and model in NeuroInformatics Platform",experience:["power"],maturity:["experimental"],access:["hpc"],picture:{src:"https://github.com/antonelepfl/usecases/blob/master/src/assets/cAC.png?raw=true",alt:"Logo of feature Extraction"}},{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",description:"Fitting synaptic events using data in NeuroInformatics Platform and user's model",experience:["experts"],maturity:["experimental"],access:["hpc"],picture:{src:"https://github.com/antonelepfl/usecases/blob/master/src/assets/cAC.png?raw=true",alt:"Logo of feature Extraction"}},{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",description:"Fitting user's synaptic events data with model from NeuroInformatics Platform",experience:["experts"],maturity:["experimental"],access:["hpc"],picture:{src:"https://github.com/antonelepfl/usecases/blob/master/src/assets/cAC.png?raw=true",alt:"Logo of feature Extraction"}},{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",description:"Register user's model and synaptic parameters on NeuroInformatics Platform",experience:["power","experts"],maturity:["experimental"],access:[""],picture:{src:"https://github.com/antonelepfl/usecases/blob/master/src/assets/cAC.png?raw=true",alt:"Logo of feature Extraction"}}]},{categories:{experience:{all:{name:"Everybody",tooltip:"Easily accessible use case"},power:{name:"Power users",tooltip:"Advanced use case"},experts:{name:"Experts",tooltip:"Use case for contributors and tools experts"},code:{name:"Code",tooltip:"Use case for tools developers"}},maturity:{beta:{name:"Beta",tooltip:"A service with a certain robustness"},experimental:{name:"Experimental",tooltip:"A service under heavy development"}},access:{hpc:{name:"HPC",tooltip:"Requires high-performance computing resources access"},byor:{name:"BYOR",tooltip:"(Bring Your Own Resources) allow you to use your own compute resources"}}}}]},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA/hJREFUeJzt3FluE0EUheHf2UsU5jVEGUgUQNkiYwRZR6QgIlhBAEVkAwxhlDAPdgkS2u5uu+rWrerzSfWSF9ftc9K2y1KDiIiIiIiIiIiIiIiIiIjIQkbTJf2sTFdxVoB94BA4B35P1xlwAOyhQjSZdd3Op3/bp4BC3AZeA+OWdQysZdqjR12v2xvgTqY9ttoGvtA+RFifgPUcG3XmLv2u2wWwk2Wnc9ym3xD/DrORYb9e7ALfWey63cqw30YrdLt9qQSXLRp+WCc4+Sy1z+JDDLUEy4Yf1j3rjTc5ZPlBhlSCWOGPgWfGe290TpxhhlCCmOGPgfe22//fiMl31VgD1VyC2OGPgV+mEzRIUYAaS5Ai/DHw03KIWc6IP9gY+EodJdghTfhj4NRwjpkOSDNcDSXYAb6R7vo8NJtkjj3SDVhyCVKHP2Zy+prdiMnZvkrwl0X4R2bTdLDG5GxfJbAJ/yOwajVQV+tMQhpyCSzCv8Dxj2gbDLcEVuF7nP2SIZZA4V9hVYJNq4HmuIvCbzSEEij8FjWXQOF3VGMJFH5PNZVA4S+ohhIo/CVtUm4JFH4kJZZA4UdWUgkUfiJWJdhaYo8KPzHPJdhG4ZvwWAKFb8xTCRR+Jh5KoPAz2yJfCRS+EzlKoPCdsSyBwnfKqgQK3zGLEih850otgcKPqLQSKPwESimBwk9oG98lUPgGvJZA4RvyVgKFn4GXEij8jHKXQOE7kKsECt8R6xIofIesSlBV+O6fPy/Shd4CBkwfAgdMXwMHLHf4KkFGXsJXCTLwFr5KYMhr+CqBAe/hh+XtEXZVKCV8lSCB0sJXCSIqNXyVIAKL8C8MXkMlWIBV+BsM89nGrlmGH6gETuQIP1AJMssZflDDwyyL5CH8QCUw5in8QCUw4jH8QCVIzHP4gUqQSAnhByU91rYIJYUfqASRlBh+oBIsqeTwAw8PsyxSDeEHKkFPNYUfqAQd1Rh+oBK0qDn8QCWYYQjhByrBFUMKP8j5lHNXhhh+MPgSWNwKvYYfWJXA3WHRDeAzww4/sCjBZ+C61UBtRsArFP6/LErw0myaFvdR+E0sSrBrNs0cz1H4s6QuwWO7UWb7gMKfJ2UJTg3naDQCfqPw26T6evzDcogmKQpQW/hBihJ8N51ghphvAbWGH8QuQfa3AIAXKPw+YpbgkfHeGz1A4fcVqwQ71htvMgJOUPh9LVsCNwdBADeBLyj8vhYtgauj4GCLfiX4CKzn2Kgzm8An+oXv7seg4Cbdfhc4AlYz7dGja8Ax3W777v7zrxoBe8BT4B3wa7pOgYdMbnvSbJfJ8e5b/l63d8ATnJz7i4iIiIiIiIiIiIiIiIiIiH9/AOUFE05IoW12AAAAAElFTkSuQmCC"},function(e,t,s){e.exports=s.p+"static/img/morphology.3e7f560.png"},function(e,t,s){e.exports=s.p+"static/img/traces.335a4ed.png"},function(e,t,s){var a,o;s(31),a=s(9);var r=s(54);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(34);var r=s(57);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(33),a=s(10);var r=s(56);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(37),a=s(11);var r=s(60);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(36),a=s(12);var r=s(59);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(35),a=s(13);var r=s(58);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(30),a=s(14);var r=s(53);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(38),a=s(15);var r=s(61);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t,s){var a,o;s(32),a=s(16);var r=s(55);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uc-description"},[s("div",{staticClass:"title"},[s("h2",{staticClass:"title-text"},[e._v(e._s(e.uc.title))])]),e._v(" "),s("div",{staticClass:"description"},[s("p",[e._v(e._s(e.uc.description))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"startapp"},[s("uc-container",{key:"container"})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uc-tags"},[s("div",{staticClass:"exp"},e._l(e.uc.experience,function(t,a){return s("b",[s("md-chip",{class:e.getClassByPrefix("exp-",t),attrs:{disabled:""}},[e._v(e._s(e.fullName("experience",t)))]),e._v(" "),s("md-tooltip",{attrs:{"md-direction":"top"}},[e._v(e._s(e.getTooltipByPrefix("experience",t)))])],1)})),e._v(" "),s("div",{staticClass:"divider"}),e._v(" "),s("div",{staticClass:"mat-acc"},[e._l(e.uc.maturity,function(t,a){return e.uc.maturity?s("b",[t?s("div",{staticClass:"image-tag-size",class:e.getClassByPrefix("mat-",t),attrs:{title:"maturity"}}):e._e(),e._v(" "),s("md-tooltip",{attrs:{"md-direction":"left"}},[e._v(e._s(e.getTooltipByPrefix("maturity",t)))])],1):e._e()}),e._v(" "),e._l(e.uc.access,function(t,a){return e.uc.access?s("b",[t?s("div",{staticClass:"image-tag-size",class:e.getClassByPrefix("access-",t),attrs:{title:"access"}}):e._e(),e._v(" "),s("md-tooltip",{attrs:{"md-direction":"left"}},[e._v(e._s(e.getTooltipByPrefix("access",t)))])],1):e._e()})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"model-container"},[s("md-whiteframe",{staticClass:"item-sections",attrs:{"md-elevation":"2"}},[s("model-item",{staticClass:"model-item",attrs:{path:"Rat > SSCx > L5_TTPC1 > cAD"},on:{showimage:e.showimage}})],1),e._v(" "),s("md-whiteframe",{staticClass:"item-sections",attrs:{"md-elevation":"2"}},[s("model-item",{staticClass:"model-item",attrs:{path:"Rat > Hippocampus > ..."},on:{showimage:e.showimage}})],1),e._v(" "),s("md-whiteframe",{staticClass:"item-sections",attrs:{"md-elevation":"2"}},[s("model-item",{staticClass:"model-item",attrs:{path:"Rat > Cerebellum > ..."},on:{showimage:e.showimage}})],1),e._v(" "),e.showModal?s("modal-component",{on:{close:function(t){e.showModal=!1}}},[s("img",{attrs:{src:e.modalSrc},slot:"image"}),e._v(" "),s("h3",{slot:"header"},[e._v(" "+e._s(e.path))])]):e._e()],1)},staticRenderFns:[]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[e._t("header"),e._v(" "),a("img",{staticClass:"close-button",attrs:{src:s(41),alt:"close button"},on:{click:function(t){e.$emit("close")}}})],2),e._v(" "),a("div",{staticClass:"modal-image"},[e._t("image")],2),e._v(" "),a("div",{staticClass:"modal-footer"},[e._t("footer")],2)])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uc-container"},e._l(e.usercases,function(t,a){return s("section",e._l(t,function(t){return s("div",{on:{click:e.selected}},[s("md-whiteframe",{staticClass:"item-sections",attrs:{"md-elevation":"2"}},[s("uc-item",{staticClass:"uc-item",attrs:{uc:t,categories:e.categories}})],1)],1)}))}))},staticRenderFns:[]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"model-item"},[a("div",{staticClass:"path"},e._l(e.pathParts,function(t,s){return a("div",{staticClass:"inline"},[a("span",{staticClass:"square"},[e._v(e._s(t))]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.hasNext(s),expression:"hasNext(index)"}]},[e._v(" >")])])})),e._v(" "),a("div",{staticClass:"section"},[a("md-layout",{attrs:{"md-gutter":""}},[a("md-layout",{staticClass:"model-item-picture",attrs:{"md-flex-large":"40","md-flex-medium":"20","md-hide-xsmall":""}},[a("md-layout",{attrs:{"md-column":"","md-flex-large":"50","md-flex-medium":"100"}},[a("img",{attrs:{src:s(43)},on:{click:e.showImage}})]),e._v(" "),a("md-layout",{attrs:{"md-column":"","md-flex-large":"50","md-flex-medium":"100"}},[a("img",{attrs:{src:s(42)},on:{click:e.showImage}})])],1),e._v(" "),a("md-layout",{attrs:{"md-column":"","md-flex-large":"60","md-flex-medium":"80","md-flex-xsmall":"100"}},[a("model-description",{staticClass:"model-description"})],1)],1)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"model-description"},[s("md-layout",{attrs:{"md-gutter":""}},[s("md-layout",{staticClass:"model-column ",attrs:{"md-column":"","md-flex-large":"33","md-flex-medium":"50"}},[e._m(0)],1),e._v(" "),s("md-layout",{staticClass:"model-column",attrs:{"md-column":"","md-flex-large":"33","md-flex-medium":"50"}},[e._m(1)],1),e._v(" "),s("md-layout",{staticClass:"model-column",attrs:{"md-column":"","md-flex-large":"33","md-flex-medium":"100"}},[e._m(2)],1)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-table",[s("md-table-header",[s("md-table-row",[s("md-table-head",[e._v("Anatomy")])],1)],1),e._v(" "),s("md-table-body",[s("md-table-row",[s("md-table-cell",{staticClass:"compact"},[e._v("Soma diameter:")]),e._v(" "),s("md-table-cell",{},[e._v("8")])],1),e._v(" "),s("md-table-row",[s("md-table-cell",{staticClass:"compact"},[e._v("Axon maximum branch order:")]),e._v(" "),s("md-table-cell",[e._v("12")])],1),e._v(" "),s("md-table-row",[s("md-table-cell",{staticClass:"compact"},[e._v("Abical maximum branch order:")]),e._v(" "),s("md-table-cell",[e._v("12")])],1),e._v(" "),s("md-table-row",[s("md-table-cell",{staticClass:"compact"},[e._v("Basal maximum branch order:")]),e._v(" "),s("md-table-cell",[e._v("8")])],1)],1)],1)},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-table",[s("md-table-header",[s("md-table-row",[s("md-table-head",[e._v("Physiology")])],1)],1),e._v(" "),s("md-table-body",[s("md-table-row",[s("md-table-cell",{staticClass:"compact"},[e._v("Resting membrane potential:")]),e._v(" "),s("md-table-cell",{},[e._v("-71.263 mV")])],1),e._v(" "),s("md-table-row",[s("md-table-cell",{staticClass:"compact"},[e._v("Input resistance:")]),e._v(" "),s("md-table-cell",{},[e._v("57.288 MOhm")])],1),e._v(" "),s("md-table-row",[s("md-table-cell",{staticClass:"compact"},[e._v("Membrane time constant:")]),e._v(" "),s("md-table-cell",{},[e._v("29.076 ms")])],1)],1)],1)},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-table",[s("md-table-header",[s("md-table-row",[s("md-table-head",[e._v("Channel Model:")])],1)],1),e._v(" "),s("md-table-body",[s("md-table-row",[s("md-table-cell",{},[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officia commodi\n                                          esse fuga, expedita ullam, vel. Iure id quos assumenda totam, aliquam reiciendis\n                                          modi, officiis cupiditate sequi in exercitationem aperiam!")])],1)],1)],1)}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uc-item"},[s("div",{staticClass:"item-picture"},[s("img",{attrs:{src:e.uc.picture.src,alt:e.uc.picture.alt}})]),e._v(" "),s("uc-description",{staticClass:"uc-description",attrs:{uc:e.uc}}),e._v(" "),s("uc-tags",{staticClass:"tags",attrs:{uc:e.uc,categories:e.categories}})],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.98fcbe28c8ab32ef2119.js.map