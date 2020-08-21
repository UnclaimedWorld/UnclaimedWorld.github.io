(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{270:function(t,e,l){"use strict";l.r(e);var n={name:"ProductsBlock",components:{BannerItem:l(78).default},props:{title:{type:String},category:{type:String},link:{type:String},banner:{type:String},bannerUrl:{type:String}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"products-block",class:{"products-block--banner":t.banner}},[l("div",{staticClass:"products-block__header"},[l("div",{staticClass:"products-block__wrap"},[l("div",{staticClass:"products-block__title"},[t._v(t._s(t.title))]),t._v(" "),t.category?l("div",{staticClass:"products-block__subtitle"},[t._v("Товары из категории "),l("span",{staticClass:"color-second"},[t._v(t._s(t.category))])]):t._e()]),t._v(" "),t.link?l("div",{staticClass:"products-block__link text-link"},[t._v("Посмотреть все")]):t._e()]),t._v(" "),l("div",{staticClass:"products-block__body"},[t._t("default"),t._v(" "),t.banner?l("banner-item",{staticClass:"products-block__banner",attrs:{src:t.banner,link:t.bannerUrl}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerItem:l(78).default})},271:function(t,e,l){"use strict";l.r(e);var n={name:"ProductsSlider",components:{ProductItem:l(77).default},props:{products:{type:Array},buttonColor:{type:String,default:"white"},buttonBorder:{type:String,default:"gray"}},data:function(){return{productsSliderOptions:{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1},currentSlide:0}},methods:{previous:function(){this.$refs.slider.previous()},next:function(){this.$refs.slider.next()},setCurrentSlide:function(t){this.currentSlide=t}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&(t.$refs.slider.on("change",t.setCurrentSlide),setTimeout((function(){t.$refs.slider.resize()}),200))}))},beforeDestroy:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&t.$refs.slider.off("change",t.setCurrentSlide)}))}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"products-slider"},[l("client-only",[l("flickity",{ref:"slider",staticClass:"products-slider__wrap",attrs:{options:t.productsSliderOptions},on:{change:t.setCurrentSlide}},t._l(t.products,(function(t){return l("product-item",{key:t.id,staticClass:"products-slider__item carousel-cell",attrs:{data:t,rating:""}})})),1),t._v(" "),t.currentSlide>0?l("app-button",{staticClass:"products-slider__button previous",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.previous}},[l("dynamic-icon",{attrs:{icon:"chevron-left"}})],1):t._e(),t._v(" "),t.currentSlide<t.products.length?l("app-button",{staticClass:"products-slider__button next",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.next}},[l("dynamic-icon",{attrs:{icon:"chevron-right"}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:l(77).default,DynamicIcon:l(23).default,AppButton:l(30).default})},273:function(t,e,l){"use strict";l.r(e);var n={name:"LogoItem",props:{image:{type:String,required:!0},link:{type:String,required:!0},modStyle:{type:String,default:""}}},r=l(2),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"logo-item",class:this.modStyle,attrs:{to:this.link}},[e("div",{staticClass:"logo-item__wrap"},[e("img",{attrs:{src:this.image,alt:""}})])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,l){"use strict";l.r(e);var n={name:"IndexCategory",props:{data:{type:Object},modStyle:{type:String,default:""}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"index-category",class:t.modStyle},[l("div",{staticClass:"index-category__image"},[l("img",{attrs:{src:t.data.image,alt:""}})]),t._v(" "),l("div",{staticClass:"index-category__content"},[l("div",{staticClass:"index-category__title"},[t._v(t._s(t.data.title))]),t._v(" "),t.data.subtitle?l("div",{staticClass:"index-category__subtitle"},[t._v(t._s(t.data.subtitle))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,l){"use strict";l.r(e);var n=l(31),r={name:"ProductCards",components:{ProductItem:l(77).default,BlockWrap:n.default},props:{products:{type:Array,required:!0}},computed:{otherProducts:function(){for(var t=[],i=1;i<this.products.length;i++)t.push(this.products[i]);return t}}},o=l(2),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-cards"},[e("product-item",{staticClass:"product-cards__item-large",attrs:{"mod-style":"large",data:this.products[0],description:"",rating:""}}),this._v(" "),e("block-wrap",{staticClass:"product-cards__items-other",attrs:{"offset-x":"20",count:"4"}},this._l(this.otherProducts,(function(t){return e("product-item",{key:t.id,staticClass:"product-cards__card",attrs:{"mod-style":"small",data:t,"no-rating":""}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:l(77).default,BlockWrap:l(31).default})},282:function(t,e,l){"use strict";l.r(e);var n={name:"StartBanner",components:{BannerItem:l(78).default},props:{items:{type:Array}},data:function(){return{flickityOptions:{contain:!0,cellAlign:"left",prevNextButtons:!1}}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"start-banner"},[l("flickity",{ref:"slider",attrs:{options:t.flickityOptions}},t._l(t.items,(function(e,n){return l("banner-item",{key:n,staticClass:"start-banner__slide carousel-cell",attrs:{link:t.$localePath("/"),src:e.src}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerItem:l(78).default})},283:function(t,e,l){"use strict";l.r(e);var n={name:"CategoryButton",props:{icon:{type:String},link:{type:String}}},r=l(2),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"category-button",attrs:{to:this.link}},[e("div",{staticClass:"category-button__icon-wrap"},[e("dynamic-icon",{staticClass:"category-button__icon-background",attrs:{icon:"category-button-background"}}),this._v(" "),e("img",{staticClass:"category-button__icon",attrs:{src:this.icon,alt:""}})],1),this._v(" "),e("div",{staticClass:"category-button__title"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DynamicIcon:l(23).default})},284:function(t,e,l){"use strict";l.r(e);var n={name:"AppBanner"},r=l(2),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-banner"},[e("div",{staticClass:"app-banner__content"},[e("div",{staticClass:"app-banner__wrap"},[this._m(0),this._v(" "),e("block-wrap",{attrs:{"width-auto":"","offset-x":"20"}},[e("a",{staticClass:"app-banner__badge",attrs:{href:"javascript: void(0);"}},[e("img",{attrs:{src:"/img/apps/appstore.png",alt:""}})]),this._v(" "),e("a",{staticClass:"app-banner__badge",attrs:{href:"javascript: void(0);"}},[e("img",{attrs:{src:"/img/apps/google-play.png",alt:""}})])])],1),this._v(" "),this._m(1),this._v(" "),e("img",{staticClass:"app-banner__back-image",attrs:{src:"/img/apps/phones.png",alt:""}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-banner__title"},[this._v("Еще удобнее,"),e("br"),this._v("в мобильном приложении")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-banner__qr qr-block"},[e("div",{staticClass:"qr-block__image"},[e("img",{attrs:{src:"/img/apps/qr.png",alt:""}})]),this._v(" "),e("div",{staticClass:"qr-block__title"},[this._v("Наведите камеру и скачайте приложение")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockWrap:l(31).default})},285:function(t,e,l){"use strict";l.r(e);var n={name:"StyleItem",components:{LogoItem:l(273).default},props:{modStyle:{type:String,default:""},data:{type:Object,required:!0},buttonTitle:{type:String},showDescription:{type:Boolean},showLogos:{type:Boolean},showButton:{type:Boolean}},data:function(){return{logosCount:3}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"style-item",class:t.modStyle},[l("img",{staticClass:"style-item__image",attrs:{src:t.data.image,alt:""}}),t._v(" "),l("div",{staticClass:"style-item__content"},[l("div",{staticClass:"style-item__title"},[t._v(t._s(t.data.title))]),t._v(" "),t.showDescription?l("div",{staticClass:"style-item__description"},[t._v(t._s(t.data.description))]):t._e(),t._v(" "),t.showLogos?l("block-wrap",{staticClass:"style-item__logos-wrap",attrs:{"offset-x":"20","offset-y":"0",count:t.logosCount}},t._l(t.data.logos,(function(t){return l("logo-item",{attrs:{href:t.image,link:t.link,image:t.image,"mod-style":"small"}})})),1):t._e(),t._v(" "),t.data.linkTitle?l("div",{staticClass:"style-item__link text-link"},[t._v(t._s(t.data.linkTitle))]):t._e(),t._v(" "),t.buttonTitle?l("app-button",{staticClass:"style-item__button",attrs:{modStyle:"second","text-color":"white",sides:"15"}},[t._v(t._s(t.buttonTitle))]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoItem:l(273).default,BlockWrap:l(31).default,AppButton:l(30).default})},297:function(t,e,l){"use strict";l.r(e);var n={name:"NewsSlider",components:{NewsItem:l(310).default},props:{news:{type:Array}},data:function(){return{flickityOptions:{contain:!0,cellAlign:"left",prevNextButtons:!1,pageDots:!1}}}},r=l(2),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"news-slider"},[e("client-only",[e("flickity",{staticClass:"news-slider__wrap",attrs:{options:this.flickityOptions}},this._l(this.news,(function(t){return e("news-item",{key:t.id,staticClass:"news-slider__item carousel-cell",attrs:{data:t}})})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewsItem:l(310).default})},310:function(t,e,l){"use strict";l.r(e);var n={name:"NewsItem",props:{data:{type:Object,required:!0}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nuxt-link",{staticClass:"news-item",attrs:{to:t.data.link}},[l("div",{staticClass:"news-item__image"},[l("img",{attrs:{src:t.data.image,alt:t.data.title}})]),t._v(" "),l("div",{staticClass:"news-item__content"},[l("div",{staticClass:"news-item__category"},[t._v(t._s(t.data.category))]),t._v(" "),l("div",{staticClass:"news-item__title"},[t._v(t._s(t.data.title))])])])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,l){"use strict";l.r(e);l(76),l(21),l(22),l(11),l(57);var n=l(32),r=l(282),o=l(283),c=l(270),d=l(77),m=l(42),_=l(271),f=l(31),h=l(281),y=l(78),k=l(297),v=l(276),C=l(273),w=l(284);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var $={components:{StyleItem:l(285).default,AppBanner:w.default,LogoItem:C.default,IndexCategory:v.default,NewsSlider:k.default,BannerItem:y.default,ProductCards:h.default,BlockWrap:f.default,ProductsSlider:_.default,ProductItem:d.default,ProductsBlock:c.default,CategoryButton:o.default,StartBanner:r.default},data:function(){return{menStyle:{image:"/img/style/style-men.jpg",title:"Мужской стиль",description:"Мы вынуждены отталкиваться от того, что курс на социально-ориентированный национальный проект требует анализа соответствующих условий активизации.",logos:[{image:"/img/brand-logos/lc_waikiki.png",link:this.$localePath("/")},{image:"/img/brand-logos/terrapro-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/rayban-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/xiaomi-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/nike-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/lego-1.png",link:this.$localePath("/")}]},womenStyle:{image:"/img/style/style-women.jpg",title:"Сумки",description:"Господа, высококачественный прототип будущего проекта и реализации стандартных подходов.",linkTitle:"Одежда для женщин"},childrenStyle:{image:"/img/style/style-children.jpg",title:"Детский мир",linkTitle:"Одежда для детей"},startBannerItems:[{src:"/img/start-banner/start-banner-01.jpg",to:this.$localePath("/")},{src:"/img/start-banner/start-banner-01.jpg",to:this.$localePath("/")},{src:"/img/start-banner/start-banner-01.jpg",to:this.$localePath("/")}],categoriesList:[{title:"Смартфоны",icon:"/img/index-categories/phones.png",link:this.$localePath("/")},{title:"Телевизоры",icon:"/img/index-categories/tv.png",link:this.$localePath("/")},{title:"Игровые приставки",icon:"/img/index-categories/playstation.png",link:this.$localePath("/")},{title:"Ноутбуки",icon:"/img/index-categories/notebook.png",link:this.$localePath("/")},{title:"Велосипеды",icon:"/img/index-categories/bicycle.png",link:this.$localePath("/")},{title:"Надувные бассейны",icon:"/img/index-categories/pool.png",link:this.$localePath("/")},{title:"Верхняя одежда",icon:"/img/index-categories/shirt.png",link:this.$localePath("/")},{title:"Напитки",icon:"/img/index-categories/drinks.png",link:this.$localePath("/")}],categoriesListOptions:{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1},logos:[{image:"/img/brand-logos/adidas.png"},{image:"/img/brand-logos/apple.png"},{image:"/img/brand-logos/artel.png"},{image:"/img/brand-logos/huawei.png"},{image:"/img/brand-logos/just.png"},{image:"/img/brand-logos/lc_waikiki.png"},{image:"/img/brand-logos/lego.png"},{image:"/img/brand-logos/lego-1.png"},{image:"/img/brand-logos/lg.png"},{image:"/img/brand-logos/nike.png"},{image:"/img/brand-logos/nike-1.png"},{image:"/img/brand-logos/rayban.png"},{image:"/img/brand-logos/rayban-1.png"},{image:"/img/brand-logos/redtag.png"},{image:"/img/brand-logos/samsung.png"},{image:"/img/brand-logos/sony.png"},{image:"/img/brand-logos/terrapro.png"},{image:"/img/brand-logos/terrapro-1.png"},{image:"/img/brand-logos/xiaomi.png"},{image:"/img/brand-logos/xiaomi-1.png"}],footerBanners:[{src:"/img/banners/footer-banner-1.png",link:"/"},{src:"/img/banners/footer-banner-2.png",link:"/"}],news:[{id:1,link:this.$localePath("/"),title:"Господа, парад бытовой техники оказался началом великой войны",category:"Рекомендации",image:"/img/news/news-1.jpg"},{id:2,link:this.$localePath("/"),title:"Главные СМИ предупреждают: в провинциях ещё есть чем...",category:"Новости",image:"/img/news/news-2.jpg"},{id:3,link:this.$localePath("/"),title:"Постоянный количественный рост станет частью наших традиций",category:"Совет дня",image:"/img/news/news-3.jpg"},{id:4,link:this.$localePath("/"),title:"Политика не может не реагировать на шопот бессменных лидеров",category:"Акция",image:"/img/news/news-4.jpg"}],menStyleLogos:[{image:"/img/brand-logos/lc_waikiki.png",link:this.$localePath("/")},{image:"/img/brand-logos/terrapro-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/rayban-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/xiaomi-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/nike-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/lego-1.png",link:this.$localePath("/")}],indexCategoriesCards:[{id:1,image:"/img/index-categories-cards/category-1.jpg",title:"Кухня",subtitle:"Техника для кухни"},{id:2,image:"/img/index-categories-cards/category-2.jpg",title:"Спальня",subtitle:"Мебель для спальни"},{id:3,image:"/img/index-categories-cards/category-3.jpg",title:"Гостиная",subtitle:"Мебель для гостиной"},{id:4,image:"/img/index-categories-cards/category-4.jpg",title:"Ванная",subtitle:"Санузел"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.c)("products",["products"]))},x=l(2),component=Object(x.a)($,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{staticClass:"container"},[l("start-banner",{staticClass:"mb-40",attrs:{items:t.startBannerItems}}),t._v(" "),l("client-only",[l("flickity",{staticClass:"categories-slider mb-40",attrs:{options:t.categoriesListOptions}},t._l(t.categoriesList,(function(e){return l("category-button",{key:e.title,staticClass:"categories-slider__item",attrs:{link:e.link,icon:e.icon}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),1)],1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Рекомендуем к покупке",category:"Электроника",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Летние товары",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("products-block",{staticClass:"logos-block mb-60",attrs:{title:"Популярные бренды",link:t.$localePath("/"),banner:"/img/banners/ad-1.png","banner-url":t.$localePath("/")}},[l("block-wrap",{attrs:{"offset-x":"30","offset-y":"20",overflow:""}},t._l(t.logos,(function(e){return l("logo-item",{key:e.image,staticClass:"logos-block__item",attrs:{image:e.image,link:t.$localePath("/")}})})),1)],1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Для автолюбителей",category:"Авто",link:t.$localePath("/"),banner:"/img/banners/ad-1.png","banner-url":t.$localePath("/")}},[l("product-cards",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Дачный сезон",category:"Товары для дачи",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("block-wrap",{staticClass:"mb-60",attrs:{"offset-x":"40",count:"2","min-width":"410","mod-style":"grow"}},t._l(t.footerBanners,(function(t){return l("banner-item",{attrs:{src:t.src,link:t.link}})})),1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Летние товары",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Статьи",link:t.$localePath("/")}},[l("news-slider",{attrs:{news:t.news}})],1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Рекомендуем к покупке",category:"Электроника",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("banner-item",{staticClass:"mb-60",attrs:{src:"/img/banners/hor-1.png",link:t.$localePath("/")}}),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Популярные товары",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("div",{staticClass:"style-block mb-60"},[l("style-item",{staticClass:"style-block__col",attrs:{data:t.menStyle,"mod-style":"large","button-title":"Подобрать стиль","show-description":"","show-logos":""}}),t._v(" "),l("div",{staticClass:"style-block__col style-block__col--list"},[l("style-item",{staticClass:"style-block__item",attrs:{data:t.womenStyle,"mod-style":"image-right short","show-description":""}}),t._v(" "),l("style-item",{staticClass:"style-block__item",attrs:{data:t.childrenStyle,"mod-style":"image-right short","show-description":""}})],1)],1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Рекомендуем к покупке",category:"Электроника",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("block-wrap",{staticClass:"index-categories mb-60",attrs:{count:"4","offset-x":"40"}},t._l(t.indexCategoriesCards,(function(t){return l("index-category",{key:t.id,staticClass:"index-categories__item",attrs:{"mod-style":"image-long",data:t}})})),1),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Летние товары",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1),t._v(" "),l("app-banner",{staticClass:"mb-60"}),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Популярные товары",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{StartBanner:l(282).default,CategoryButton:l(283).default,ProductsSlider:l(271).default,ProductsBlock:l(270).default,LogoItem:l(273).default,BlockWrap:l(31).default,ProductCards:l(281).default,BannerItem:l(78).default,NewsSlider:l(297).default,StyleItem:l(285).default,IndexCategory:l(276).default,AppBanner:l(284).default})}}]);