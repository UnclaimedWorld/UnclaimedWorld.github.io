(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{263:function(t,e,l){"use strict";l.r(e);var _={name:"VCard",props:{paddingX:{type:String,default:"30"},paddingY:{type:String},radius:{type:String,default:"5"},modStyle:{type:String,default:""}}},c=l(2),component=Object(c.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card",class:this.modStyle,style:{"--padding-x":this.paddingX+"px","--padding-y":this.paddingY?this.paddingY+"px":this.paddingX+"px","--radius":this.radius+"px"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,l){"use strict";l.r(e);var _={name:"MessageBlock",props:{title:{type:String},subtitle:{type:String},icon:{type:String}}},c=l(2),component=Object(c.a)(_,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"message-block"},[l("dynamic-icon",{staticClass:"message-block__icon",attrs:{icon:t.icon}}),t._v(" "),l("div",{staticClass:"message-block__title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"message-block__subtitle"},[t._v(t._s(t.subtitle))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DynamicIcon:l(23).default})},278:function(t,e,l){"use strict";l.r(e);l(15);var _={name:"NavTabs",props:{list:{type:Array,required:!0},itemValue:{type:String,default:"value"},value:{type:[String,Number]}}},c=l(2),component=Object(c.a)(_,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"nav-tabs"},t._l(t.list,(function(e){return l("div",{key:e[t.itemValue],staticClass:"nav-tabs__item",class:{active:e[t.itemValue]===t.value},on:{click:function(l){return t.$emit("input",e[t.itemValue])}}},[t._t("default",null,{item:e,active:e[t.itemValue]===t.value})],2)})),0)}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,l){"use strict";l.r(e);var _=l(267),c=l(263),n={components:{NavTabs:l(278).default,VCard:c.default,MessageBlock:_.default},data:function(){return{empty:!1,currentTab:1,list:[{id:1,title:"Заказы",list:[[{title:"Номер заказа"},{title:"Статус"},{title:"Кол-во товаров"},{title:"Способ получения"},{title:"Тип оплаты"},{title:"Дата",fluid:!0},{title:"Сумма"}],[{title:"445345"},{title:"Доставляется",type:"tag"},{title:"5"},{title:"Доставка"},{title:"Наличными"},{title:"22.02.2020",fluid:!0},{title:"12 000 000 сум"}],[{title:"445345"},{title:"Доставляется",type:"tag"},{title:"5"},{title:"Доставка"},{title:"Наличными"},{title:"22.02.2020",fluid:!0},{title:"12 000 000 сум"}],[{title:"445345"},{title:"Доставляется",type:"tag"},{title:"5"},{title:"Доставка"},{title:"Наличными"},{title:"22.02.2020",fluid:!0},{title:"12 000 000 сум"}],[{title:"445345"},{title:"Доставляется",type:"tag"},{title:"5"},{title:"Доставка"},{title:"Наличными"},{title:"22.02.2020",fluid:!0},{title:"12 000 000 сум"}]]},{id:2,title:"Товары",list:[[{title:"Наименование",fluid:!0},{title:"Кол-во"},{title:"Заказ"},{title:"Дата"},{title:"Цена"},{title:"Сумма"}],[{title:"Sony WH-1000XM3 беспроводные наушники",fluid:!0},{title:"5"},{title:"38242"},{title:"22.02.2020"},{title:"1 000 000"},{title:"12 000 000 сум"}],[{title:"Sony WH-1000XM3 беспроводные наушники",fluid:!0},{title:"5"},{title:"38242"},{title:"22.02.2020"},{title:"1 000 000"},{title:"12 000 000 сум"}],[{title:"Sony WH-1000XM3 беспроводные наушники",fluid:!0},{title:"5"},{title:"38242"},{title:"22.02.2020"},{title:"1 000 000"},{title:"12 000 000 сум"}],[{title:"Sony WH-1000XM3 беспроводные наушники",fluid:!0},{title:"5"},{title:"38242"},{title:"22.02.2020"},{title:"1 000 000"},{title:"12 000 000 сум"}],[{title:"Sony WH-1000XM3 беспроводные наушники",fluid:!0},{title:"5"},{title:"38242"},{title:"22.02.2020"},{title:"1 000 000"},{title:"12 000 000 сум"}]]},{id:3,title:"Транзакции",list:[[{title:"Заказ",fluid:!0},{title:"Тип",fluid:!0},{title:"Сумма транзакции"}],[{title:"3824234"},{title:"Наличные"},{title:"12 000 000 сум"}],[{title:"3824234"},{title:"Наличные"},{title:"12 000 000 сум"}],[{title:"3824234"},{title:"Наличные"},{title:"12 000 000 сум"}],[{title:"3824234"},{title:"Наличные"},{title:"12 000 000 сум"}],[{title:"3824234"},{title:"Наличные"},{title:"12 000 000 сум"}]]}]}}},d=l(2),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",[l("h1",{staticClass:"page-heading mb-40"},[t._v("Отчеты")]),t._v(" "),t.empty?l("message-block",{staticClass:"mt-100 mb-100",attrs:{title:"Пока нет отчетов",subtitle:"Начните продавать, и скоро у вас будут отчеты по продажам",icon:"file-document"}},[l("app-button",{attrs:{width:"270",height:"54","text-color":"white","mod-style":"second"}},[t._v("Продвижение")])],1):l("div",[l("block-wrap",{staticClass:"cards-promos mb-60",attrs:{"offset-x":"40",count:"3"}},t._l(t.list,(function(e){return l("v-card",{attrs:{"padding-y":"30","padding-x":"30",radius:"5","mod-style":"shadow"}},[l("div",{staticClass:"flex flex-j-b"},[l("div",[l("v-text",{staticClass:"mb-20",attrs:{font:"18",weight:"600"}},[t._v(t._s(e.title))]),t._v(" "),l("v-text",{staticClass:"mb-10",attrs:{font:"24",weight:"600"}},[t._v(t._s(e.list.length-1))]),t._v(" "),l("v-text",{staticClass:"color-gray",attrs:{font:"14"}},[t._v("Сегодня")])],1),t._v(" "),l("app-button",{attrs:{"mod-style":"second-lighten",width:"30",height:"30",radius:"100"}},[l("dynamic-icon",{attrs:{icon:"filter",size:"14"}})],1)],1),t._v(" "),l("div",{staticClass:"chart"})])})),1),t._v(" "),l("h2",{staticClass:"page-heading mb-40"},[t._v("Список")]),t._v(" "),l("nav-tabs",{attrs:{"item-value":"id",list:t.list},scopedSlots:t._u([{key:"default",fn:function(e){var _=e.item,c=e.active;return[l("div",{staticClass:"tab-bar",class:{active:c}},[l("div",{staticClass:"tab-bar__title"},[t._v(t._s(_.title))])])]}}]),model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}}),t._v(" "),l("div",{staticClass:"separator mb-30"}),t._v(" "),1===t.currentTab?l("section",{staticClass:"stat-table-wrap"},[l("table",{staticClass:"stat-table"},[l("thead",[l("tr",[l("th",{staticClass:"stat-table__head"},[t._v("Номер заказа")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Статус")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Кол-во товаров")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Способ получения")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Тип оплаты")]),t._v(" "),l("th",{staticClass:"stat-table__head stat-table__head--auto"},[t._v("Дата")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Сумма")])])]),t._v(" "),l("tbody",t._l(4,(function(e){return l("tr",[l("td",{staticClass:"stat-table__cell"},[t._v("445345")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[l("div",{staticClass:"tag tag--secondary tag--no-vertical-bounding tag--medium"},[t._v("Доставляется")])]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("5")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("Доставка")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("Наличными")]),t._v(" "),l("td",{staticClass:"stat-table__cell stat-table__cell--auto"},[t._v("22.02.2020")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("12 000 000 сум")])])})),0)])]):t._e(),t._v(" "),2===t.currentTab?l("section",{staticClass:"stat-table-wrap"},[l("table",{staticClass:"stat-table"},[l("thead",[l("tr",[l("th",{staticClass:"stat-table__head stat-table__head--auto"},[t._v("Наименование")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Кол-во")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Заказ")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Дата")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Цена")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Сумма")])])]),t._v(" "),l("tbody",t._l(4,(function(e){return l("tr",[l("td",{staticClass:"stat-table__cell stat-table__cell--auto"},[l("div",{staticClass:"cell-name"},[t._v("\n              Sony WH-1000XM3 беспроводные наушники\n            ")])]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("5")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("38242")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("22.02.2020")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("1 000 000")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("12 000 000 сум")])])})),0)])]):t._e(),t._v(" "),3===t.currentTab?l("section",{staticClass:"stat-table-wrap"},[l("table",{staticClass:"stat-table"},[l("thead",[l("tr",[l("th",{staticClass:"stat-table__head stat-table__head--auto"},[t._v("Заказ")]),t._v(" "),l("th",{staticClass:"stat-table__head stat-table__head--auto"},[t._v("Тип")]),t._v(" "),l("th",{staticClass:"stat-table__head"},[t._v("Сумма транзакции")])])]),t._v(" "),l("tbody",t._l(4,(function(e){return l("tr",[l("td",{staticClass:"stat-table__cell stat-table__cell--auto"},[t._v("3824234")]),t._v(" "),l("td",{staticClass:"stat-table__cell stat-table__cell--auto"},[t._v("Наличные")]),t._v(" "),l("td",{staticClass:"stat-table__cell"},[t._v("12 000 000 сум")])])})),0)])]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:l(30).default,MessageBlock:l(267).default,VText:l(105).default,DynamicIcon:l(23).default,VCard:l(263).default,BlockWrap:l(31).default,NavTabs:l(278).default})}}]);