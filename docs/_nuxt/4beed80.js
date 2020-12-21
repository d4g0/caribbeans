(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(t,n,e){var content=e(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("1b7833da",content,!0,{sourceMap:!1})},219:function(t,n,e){"use strict";e.r(n);var o={},r=e(9),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("div",{staticClass:"px-6 md:px-0 max-w-screen-md mx-auto mt-20 md:mt-40"},[e("p",{staticClass:"text-center font-bold text:base md:text-lg opacity-50"},[e("span",[t._v(" "+t._s(t.$t("home.intro.bulleted.design"))+" ")]),t._v(" "),e("span",[t._v("•")]),t._v(" "),e("span",[t._v(" "+t._s(t.$t("home.intro.bulleted.development"))+" ")]),t._v(" "),e("span",[t._v("•")]),t._v(" "),e("span",[t._v(" "+t._s(t.$t("home.intro.bulleted.support")))])]),t._v(" "),e("h1",{staticClass:"mt-4 font-bold text-3xl lg:text-7xl text-center"},[t._v("\n      "+t._s(t.$t("home.intro.heading"))+"\n    ")]),t._v(" "),e("p",{staticClass:"mt-6 md:mt-20 text-sm text-center max-w-md mx-auto opacity-80"},[t._v("\n      "+t._s(t.$t("home.intro.description"))+"\n    ")]),t._v(" "),e("div",{staticClass:"mt-16 text-center "},[e("nuxt-link",{staticClass:"inline-block py-4 px-6 border rounded-kush bg-light-primary text-gray-50 focus-within:ring-2 focus:outline-none focus:ring-4 ",attrs:{to:t.localePath("/#")}},[t._v("\n        "+t._s(t.$t("home.intro.cta_0"))+"\n      ")])],1)])])}),[],!1,null,null,null);n.default=component.exports},220:function(t,n,e){"use strict";e.r(n);e(31);var o=e(15),r=e(222),l=e(108),c=e(28);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var f={components:{HomeOfferItem:r.default},computed:m(m({},Object(c.d)("icons/",["icons"])),{},{offers:function(){var t=this,n=this.$t("home.offers.items");return n=n.map((function(n){return m(m({},n),{},{icon:t.icons[n.icon]})})),n}}),mounted:function(){},setup:function(){return{state:Object(l.b)({offers:[{title:"Blazing fast speed",icon:'\n          <svg\n            \n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            class="stroke-current"\n          >\n            <path\n              d="M13 10V3L4 14H11L11 21L20 10L13 10Z"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n            />\n          </svg>\n          ',content:"Our costumers don't like to wait for the content, \n          world class performance <strong>metrics</strong> are warranted."},{title:"Delightful design",icon:'\n          <svg \n              viewBox="0 0 24 24" \n              fill="none" \n              xmlns="http://www.w3.org/2000/svg"\n              class="stroke-current"\n              >\n            <path\n              d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"\n              stroke="#4A5568"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n            />\n          </svg>\n          ',content:"A clean, easy to use and engaging interface it's a must have for us."},{title:"Custom Development",icon:'\n           <svg\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            class="stroke-current"\n          >\n            <path\n              d="M19.428 15.4282C19.1488 15.149 18.7932 14.9587 18.406 14.8812L16.0185 14.4037C14.7101 14.1421 13.3519 14.324 12.1585 14.9207L11.8411 15.0793C10.6477 15.676 9.28948 15.8579 7.98113 15.5963L6.04938 15.2099C5.39366 15.0788 4.71578 15.284 4.24294 15.7569M7.9998 4H15.9998L14.9998 5V10.1716C14.9998 10.702 15.2105 11.2107 15.5856 11.5858L20.5856 16.5858C21.8455 17.8457 20.9532 20 19.1714 20H4.82823C3.04642 20 2.15409 17.8457 3.41401 16.5858L8.41402 11.5858C8.78909 11.2107 8.9998 10.702 8.9998 10.1716V5L7.9998 4Z"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n            />\n          </svg>\n          ',content:"A product made expecially for your needs."},{title:"SEO optimized content",icon:'\n           <svg\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            class="stroke-current"\n          >\n            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" \n             stroke-width="2" \n             stroke-linecap="round" \n             stroke-linejoin="round"/>\n          </svg>\n          ',content:"\n          Guidance and tools for you to declare \n          your services and products  as SEO optimal as posible. "},{title:"Easy to manage infrastructure",icon:'\n           <svg\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            class="stroke-current"\n          >\n            \n            <path d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" \n              stroke-width="2" \n              stroke-linecap="round" \n              stroke-linejoin="round\n             "/>\n\n             \n          </svg>\n          ',content:"\n          Leave you with a complicated to manage system it's simply not an option to us.\n           "},{title:"Support",icon:'\n          <svg\n            \n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            class="stroke-current"\n          >\n            \n            <path\n              d="M18.364 5.63604L14.8284 9.17157M14.8284 14.8284L18.364 18.364M9.17157 9.17157L5.63604 5.63604M9.17157 14.8284L5.63604 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n            />\n          </svg>\n          ',content:"We are happy to help our clients maintain a\n           secure and smooth infrastructure in this ever \n           changing technical landscape."}]})}}},h=e(9),component=Object(h.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"mt-32 max-w-screen-lg mx-auto px-6 xl:px-0"},[n("section",{staticClass:"text-center"},[n("h1",{staticClass:"font-bold text-3xl"},[this._v(this._s(this.$t("home.offers.title")))]),this._v(" "),n("ul",{staticClass:"mt-10 md:mt-16 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3"},this._l(this.offers,(function(t){return n("li",{key:t.title,staticClass:"bg-white pl-2 pr-4 py-5 rounded-kush shadow-sm"},[n("HomeOfferItem",{attrs:{item:t}})],1)})),0)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeOfferItem:e(222).default})},221:function(t,n,e){"use strict";e.r(n);var o={components:{HomeWorkItem:e(223).default}},r=e(9),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"mt-32 max-w-screen-lg mx-auto px-6 xl:px-0"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"font-bold text-3xl"},[this._v("Our Projects")]),this._v(" "),n("ul",{staticClass:"mt-10 md:mt-16 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-9 lg:grid-cols-3"},[n("li",{staticClass:"bg-white rounded-kush shadow-sm"},[n("HomeWorkItem")],1)])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeWorkItem:e(223).default})},222:function(t,n,e){"use strict";e.r(n);var o={props:{item:{type:Object,default:function(){return{title:"Blazing fast speed",icon:'\n          <svg\n            \n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            class="stroke-current"\n          >\n            <path\n              d="M13 10V3L4 14H11L11 21L20 10L13 10Z"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n            />\n          </svg>\n          ',body:"We don't like our costumers wait for us. \n          So we provide world class performance <strong>metrics</strong>."}}}}},r=e(9),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("article",{staticClass:"text-left flex"},[e("div",[e("div",{staticClass:"w-12 h-12 rounded-kush bg-gray-200 p-1.5"},[e("div",{domProps:{innerHTML:t._s(t.item.icon)}})])]),t._v(" "),e("div",{staticClass:"ml-4"},[e("h1",{staticClass:"font-medium text-xl leading-tight"},[t._v(t._s(t.item.title))]),t._v(" "),e("p",{staticClass:"mt-2 text-sm",domProps:{innerHTML:t._s(t.item.body)}})])])])}),[],!1,null,null,null);n.default=component.exports},223:function(t,n,e){"use strict";e.r(n);var o={},r=e(9),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("article",[n("h1",[this._v("Home Work Item")])])])}],!1,null,null,null);n.default=component.exports},224:function(t,n,e){"use strict";e(218)},225:function(t,n,e){(n=e(62)(!1)).push([t.i,'.font-pacifico{font-family:Pacifico}.font-dm-mono{font-family:"DM Mono"}',""]),t.exports=n},227:function(t,n,e){"use strict";e.r(n);var o=e(109),r=e(219),l=e(220),c=e(221),d={name:"App",components:{HomeIntro:r.default,HomeOffers:l.default,HomeWorks:c.default,TheSkipToMainLink:o.default}},m=(e(224),e(9)),component=Object(m.a)(d,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"min-h-screen w-full font-sans"},[n("main",[n("span",{staticClass:"sr-only absolute -top-32",attrs:{id:"main"}},[this._v("\n      Main Content\n    ")]),this._v(" "),n("HomeIntro"),this._v(" "),n("HomeOffers"),this._v(" "),n("HomeWorks")],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeIntro:e(219).default,HomeOffers:e(220).default,HomeWorks:e(221).default})}}]);