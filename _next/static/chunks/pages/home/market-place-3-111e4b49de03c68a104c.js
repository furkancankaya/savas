(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4522],{12469:function(e,s,r){"use strict";var i=r(85893),t=r(68216),c=r(25997),n=r(40316),a=r(14744),l=r(92953),o=r(67294),d=r(30381),h=r.n(d);function m(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=(0,l.Z)(e);if(s){var t=(0,l.Z)(this).constructor;r=Reflect.construct(i,arguments,t)}else r=i.apply(this,arguments);return(0,a.Z)(this,r)}}var j=function(e){(0,n.Z)(r,e);var s=m(r);function r(e){var i;return(0,t.Z)(this,r),(i=s.call(this,e)).state={seconds:null,minutes:null,hours:null,days:null},i}return(0,c.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var s=e.props,r=s.timeTillDate,i=s.timeFormat,t=h()(r,i),c=h()(),n=h()(t-c),a=n.format("D"),l=n.format("HH"),o=n.format("mm"),d=n.format("ss");e.setState({days:a,hours:l,minutes:o,seconds:d})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,s=e.days,r=e.hours,t=e.minutes,c=e.seconds;return(0,i.jsxs)("ul",{className:"ps-countdown",children:[(0,i.jsx)("li",{children:(0,i.jsx)("span",{className:"days mr-1",children:s})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{className:"hours ml-1 mr-1",children:r})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{className:"minutes ml-1 mr-1",children:t})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{className:"seconds ml-1",children:c})})]})}}]),r}(o.Component);s.Z=j},31918:function(e,s,r){"use strict";var i=r(85893),t=(r(67294),r(41664)),c=r(41312),n=r(26621),a=r(12734);s.Z=function(e){var s=e.product,r=(0,n.Z)(),l=r.thumbnailImage,o=r.price,d=r.badge,h=r.title;return(0,i.jsxs)("div",{className:"ps-product",children:[(0,i.jsxs)("div",{className:"ps-product__thumbnail",children:[(0,i.jsx)(t.default,{href:"/product/[pid]",as:"/product/".concat(s.id),children:(0,i.jsx)("a",{children:l(s)})}),d(s),(0,i.jsx)(c.Z,{product:s})]}),(0,i.jsxs)("div",{className:"ps-product__container",children:[(0,i.jsx)(t.default,{href:"/shop",children:(0,i.jsx)("a",{className:"ps-product__vendor",children:"Young Shop"})}),(0,i.jsxs)("div",{className:"ps-product__content",children:[h(s),(0,i.jsxs)("div",{className:"ps-product__rating",children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)("span",{children:"02"})]}),o(s)]}),(0,i.jsxs)("div",{className:"ps-product__content hover",children:[h(s),o(s)]})]})]})}},28351:function(e,s,r){"use strict";r.d(s,{Z:function(){return h}});var i=r(85893),t=(r(67294),r(37703)),c=r(41664),n=r(12734),a=r(45474),l=r(41312),o=function(e){var s=e.product;return(0,i.jsxs)("div",{className:"ps-product__progress-bar ps-progress","data-value":s.inventory,children:[(0,i.jsx)("div",{className:"ps-progress__value",children:s.depot/s.inventory*100<100?(0,i.jsx)("span",{style:{width:s.depot/s.inventory*100+"%"}}):(0,i.jsx)("span",{style:{width:"100%"}})}),s.inventory-s.depot>=0?(0,i.jsxs)("p",{children:["Sold: ",s.inventory-s.depot]}):(0,i.jsxs)("p",{children:["Sold: ",s.inventory]})]})},d=r(26621),h=(0,t.$j)()((function(e){var s=e.product,r=(0,d.Z)(),t=r.thumbnailImage,h=r.badge,m=r.title;return(0,i.jsxs)("div",{className:"ps-product ps-product--inner",children:[(0,i.jsxs)("div",{className:"ps-product__thumbnail",children:[(0,i.jsx)(c.default,{href:"/product/[pid]",as:"/product/".concat(s.id),children:(0,i.jsx)("a",{children:t(s)})}),h(s),(0,i.jsx)(l.Z,{product:s})]}),(0,i.jsxs)("div",{className:"ps-product__container",children:[(0,i.jsx)(c.default,{href:"/shop",children:(0,i.jsx)("a",{className:"ps-product__vendor",children:"Young Shop"})}),(0,i.jsxs)("div",{className:"ps-product__content",children:[(0,a.cg)(s),m(s),(0,i.jsxs)("div",{className:"ps-product__rating",children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)("span",{children:s.ratingCount})]}),(0,i.jsx)(o,{product:s})]})]})]})}))},20460:function(e,s,r){"use strict";var i=r(85893),t=(r(67294),r(41664)),c=r(12734),n=r(26621);s.Z=function(e){var s=e.product,r=(0,n.Z)(),a=r.thumbnailImage,l=r.price,o=r.title;return(0,i.jsxs)("div",{className:"ps-product--horizontal",children:[(0,i.jsx)("div",{className:"ps-product__thumbnail",children:(0,i.jsx)(t.default,{href:"/product/[pid]",as:"/product/".concat(s.id),children:(0,i.jsx)("a",{children:a(s)})})}),(0,i.jsxs)("div",{className:"ps-product__content",children:[o(s),(0,i.jsx)("div",{className:"ps-product__rating",children:(0,i.jsx)(c.Z,{})}),l(s)]})]})}},68697:function(e,s,r){"use strict";var i=r(85893),t=(r(67294),r(33860));s.Z=function(){return(0,i.jsxs)("div",{className:"ps-skeleton ps-skeleton--product",children:[(0,i.jsx)(t.Z.Input,{active:!0,size:350,style:{height:160}}),(0,i.jsx)(t.Z,{paragraph:{rows:4,title:!0}})]})}},11227:function(e,s,r){"use strict";var i=r(85893),t=r(92809),c=r(67294),n=r(41664),a=r(46066),l=r(28351),o=r(7864),d=r(68697),h=(r(77113),r(79264)),m=r(12469),j=r(61087);function p(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,i)}return r}function x(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?p(Object(r),!0).forEach((function(s){(0,t.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}s.Z=function(e){var s,r=e.collectionSlug,t=(0,j.Z)(),p=t.productItems,u=t.loading,f=t.getProductsByCollection;if((0,c.useEffect)((function(){f(r)}),[r]),u){var g=(0,o.Z)(6).map((function(e){return(0,i.jsx)("div",{className:"col-xl-2 col-lg-3 col-sm-3 col-6",children:(0,i.jsx)(d.Z,{})},e)}));s=(0,i.jsx)("div",{className:"row",children:g})}else if(p&&p.length>0){var v=p.map((function(e){return(0,i.jsx)(l.Z,{product:e},e.id)}));s=(0,i.jsx)(a.Z,x(x({},h.aL),{},{className:"ps-carousel outside",children:v}))}else s=(0,i.jsx)("p",{children:"No product(s) found."});return(0,i.jsx)("div",{className:"ps-deal-of-day",children:(0,i.jsxs)("div",{className:"ps-container",children:[(0,i.jsxs)("div",{className:"ps-section__header",children:[(0,i.jsxs)("div",{className:"ps-block--countdown-deal",children:[(0,i.jsx)("div",{className:"ps-block__left",children:(0,i.jsx)("h3",{children:"Deal of the day"})}),(0,i.jsx)("div",{className:"ps-block__right",children:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:"End in:"}),(0,i.jsx)(m.Z,{timeTillDate:"12 31 2021, 6:00 am",timeFormat:"MM DD YYYY, h:mm a"})]})})]}),(0,i.jsx)(n.default,{href:"/shop",children:(0,i.jsx)("a",{children:"View all"})})]}),(0,i.jsx)("div",{className:"ps-section__content",children:s})]})})}},83961:function(e,s,r){"use strict";var i=r(85893),t=(r(67294),r(61614)),c=r(60412),n=r(33662);s.Z=function(){return(0,i.jsx)("footer",{className:"ps-footer ps-footer--3",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"ps-block--site-features ps-block--site-features-2",children:[(0,i.jsxs)("div",{className:"ps-block__item",children:[(0,i.jsx)("div",{className:"ps-block__left",children:(0,i.jsx)("i",{className:"icon-rocket"})}),(0,i.jsxs)("div",{className:"ps-block__right",children:[(0,i.jsx)("h4",{children:"Free Delivery"}),(0,i.jsx)("p",{children:"For all oders over $99"})]})]}),(0,i.jsxs)("div",{className:"ps-block__item",children:[(0,i.jsx)("div",{className:"ps-block__left",children:(0,i.jsx)("i",{className:"icon-sync"})}),(0,i.jsxs)("div",{className:"ps-block__right",children:[(0,i.jsx)("h4",{children:"90 Days Return"}),(0,i.jsx)("p",{children:"If goods have problems"})]})]}),(0,i.jsxs)("div",{className:"ps-block__item",children:[(0,i.jsx)("div",{className:"ps-block__left",children:(0,i.jsx)("i",{className:"icon-credit-card"})}),(0,i.jsxs)("div",{className:"ps-block__right",children:[(0,i.jsx)("h4",{children:"Secure Payment"}),(0,i.jsx)("p",{children:"100% secure payment"})]})]}),(0,i.jsxs)("div",{className:"ps-block__item",children:[(0,i.jsx)("div",{className:"ps-block__left",children:(0,i.jsx)("i",{className:"icon-bubbles"})}),(0,i.jsxs)("div",{className:"ps-block__right",children:[(0,i.jsx)("h4",{children:"24/7 Support"}),(0,i.jsx)("p",{children:"Dedicated support"})]})]})]}),(0,i.jsx)(t.Z,{}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(n.Z,{})]})})}},40920:function(e,s,r){"use strict";var i=r(85893),t=(r(67294),r(38398)),c=r(20492);s.Z=function(){return(0,i.jsx)(c.Z,{source:t.a,className:"menu--dropdown"})}},10960:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return V}});var i=r(85893),t=r(67294),c=r(92809),n=r(68216),a=r(25997),l=r(40316),o=r(14744),d=r(92953),h=r(46066),m=r(41664),j=r(40920);function p(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,i)}return r}function x(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?p(Object(r),!0).forEach((function(s){(0,c.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function u(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=(0,d.Z)(e);if(s){var t=(0,d.Z)(this).constructor;r=Reflect.construct(i,arguments,t)}else r=i.apply(this,arguments);return(0,o.Z)(this,r)}}var f=function(e){(0,l.Z)(r,e);var s=u(r);function r(e){return(0,n.Z)(this,r),s.call(this,e)}return(0,a.Z)(r,[{key:"render",value:function(){return(0,i.jsx)("section",{className:"ps-home-banner",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"ps-section__left",children:(0,i.jsx)(j.Z,{})}),(0,i.jsxs)("div",{className:"ps-section__center",children:[(0,i.jsxs)(h.Z,x(x({},{dots:!1,arrows:!1,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1}),{},{children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/1.jpg",alt:"martfury"})})})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/2.jpg",alt:"martfury"})})})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/3.jpg",alt:"martfury"})})})}),(0,i.jsx)("div",{className:"item"})]})),(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/promotion-6.jpg",alt:"martfury"})})})]}),(0,i.jsxs)("div",{className:"ps-section__right",children:[(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/promotion-1.jpg",alt:"martfury"})})}),(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/promotion-2.jpg",alt:"martfury"})})}),(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{className:"wide",children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/promotion-3.jpg",alt:"martfury"})})}),(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/promotion-4.jpg",alt:"martfury"})})}),(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/slider/home-5/promotion-5.jpg",alt:"martfury"})})})]})]})})}}]),r}(t.Component),g=r(11133),v=g.Z.TabPane,N=function(){return(0,i.jsx)("div",{className:"ps-search-trending",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"ps-section__header",children:(0,i.jsxs)("h3",{children:["Search Trending",(0,i.jsx)("span",{children:"Updated at 9:00AM"})]})}),(0,i.jsx)("div",{className:"ps-section__content",children:(0,i.jsx)("div",{className:"ps-block--categories-tabs ps-tab-root",children:(0,i.jsx)("div",{className:"ps-block__header",children:(0,i.jsxs)(g.Z,{defaultActiveKey:"2",children:[(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-star"}),(0,i.jsx)("span",{children:"Hot Trending"})]})}),children:(0,i.jsx)("div",{className:"ps-block__item",children:[{imagePath:"/static/img/categories/home-5/1.jpg",text:"#television"},{imagePath:"/static/img/categories/home-5/2.jpg",text:"#camera"},{imagePath:"/static/img/categories/home-5/3.jpg",text:"#watch"},{imagePath:"/static/img/categories/home-5/4.jpg",text:"#chair"},{imagePath:"/static/img/categories/home-5/5.jpg",text:"#sneaker"},{imagePath:"/static/img/categories/home-5/6.jpg",text:"#xbox"},{imagePath:"/static/img/categories/home-5/7.jpg",text:"#gopro"},{imagePath:"/static/img/categories/home-5/8.jpg",text:"#lipstick"},{imagePath:"/static/img/categories/home-5/9.jpg",text:"#phone"},{imagePath:"/static/img/categories/home-5/10.jpg",text:"#laptop"},{imagePath:"/static/img/categories/home-5/11.jpg",text:"#speaker"},{imagePath:"/static/img/categories/home-5/12.jpg",text:"#book"},{imagePath:"/static/img/categories/home-5/13.jpg",text:"#blender"},{imagePath:"/static/img/categories/home-5/14.jpg",text:"#bag"},{imagePath:"/static/img/categories/home-5/15.jpg",text:"#smartphone"},{imagePath:"/static/img/categories/home-5/16.jpg",text:"#camping"}].map((function(e){return(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("img",{src:e.imagePath,alt:e.text}),(0,i.jsx)("span",{children:e.text})]})},e.text)}))})},"hottrending"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-smartphone"}),(0,i.jsx)("span",{children:"Cell Phones"})]})}),children:(0,i.jsx)("span",{children:"Cell Phones"})},"cellphone"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-desktop"}),(0,i.jsx)("span",{children:"Computers"})]})}),children:(0,i.jsx)("span",{children:"Computers"})},"computer"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-lampshade"}),(0,i.jsx)("span",{children:"Furnitures"})]})}),children:(0,i.jsx)("span",{children:"furnitures"})},"furnitures"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-shirt"}),(0,i.jsx)("span",{children:"T-Shirts"})]})}),children:(0,i.jsx)("span",{children:"T-Shirts"})},"tshirts"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-baby-bottle"}),(0,i.jsx)("span",{children:"Baby & Mom"})]})}),children:(0,i.jsx)("span",{children:"Baby & Mom"})},"babyandmom"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-baseball"}),(0,i.jsx)("span",{children:"Sports"})]})}),children:(0,i.jsx)("span",{children:"Sports"})},"sports"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-book2"}),(0,i.jsx)("span",{children:"Book & Office"})]})}),children:(0,i.jsx)("span",{children:"Book & Office"})},"bookandoffice"),(0,i.jsx)(v,{tab:(0,i.jsx)("div",{className:"ps-block__tab-list",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("i",{className:"icon-car-siren"}),(0,i.jsx)("span",{children:"Cars"})]})}),children:(0,i.jsx)("span",{children:"Cars"})},"cars")]})})})})]})})},b=r(11227),_=function(){return(0,i.jsx)("div",{className:"ps-home-promotions",children:(0,i.jsx)(m.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/promotions/home-5/simple.jpg",alt:"martfury"})})})})},y=(r(77113),r(31918)),k=r(20460),Z=r(61087),O=g.Z.TabPane,P=function(e){var s,r,c,n,a,l=e.categorySlug,o=e.banners,d=e.links,h=e.heading,j=(0,Z.Z)(),p=j.productItems,x=j.loading,u=j.getProductsByCategory;return(0,t.useEffect)((function(){u(l)}),[l]),x||p&&p.length>0&&(r=p.map((function(e,s){if(s<4)return(0,i.jsx)("div",{className:"col-md-3 col-sm-4 col-6",children:(0,i.jsx)(y.Z,{product:e},e.id)},e.id)})),c=p.map((function(e,s){if(s>1&&s<6)return(0,i.jsx)("div",{className:"col-md-3 col-sm-4 col-6",children:(0,i.jsx)(y.Z,{product:e},e.id)},e.id)})),n=p.map((function(e,s){if(s>0&&s<5)return(0,i.jsx)("div",{className:"col-md-3 col-sm-4 col-6",children:(0,i.jsx)(y.Z,{product:e},e.id)},e.id)})),s=p.map((function(e,s){if(s>3&&s<8)return(0,i.jsx)(k.Z,{product:e},e.id)})),a=d.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:e})})},e)}))),(0,i.jsxs)("div",{className:"ps-block--product-box",children:[(0,i.jsxs)("div",{className:"ps-block__header",children:[(0,i.jsxs)("h3",{children:[(0,i.jsx)("i",{className:h.icon})," ",h.title]}),(0,i.jsx)("ul",{children:a})]}),(0,i.jsxs)("div",{className:"ps-block__content",children:[(0,i.jsxs)("div",{className:"ps-block__left",children:[o,(0,i.jsx)("div",{className:"ps-block__products",children:(0,i.jsxs)(g.Z,{defaultActiveKey:"1",children:[(0,i.jsx)(O,{tab:"New Arrivals",children:(0,i.jsx)("div",{className:"row",children:r})},"1"),(0,i.jsx)(O,{tab:"Best Seller",children:(0,i.jsx)("div",{className:"row",children:c})},"2"),(0,i.jsx)(O,{tab:"Sale",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"row",children:n})})},"3")]})})]}),(0,i.jsx)("div",{className:"ps-block__right",children:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:"Recommended For You"}),s]})})]})]})},w=r(79264);function S(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,i)}return r}function D(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?S(Object(r),!0).forEach((function(s){(0,c.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}var C=function(e){var s=e.type;return"electronic"===s?(0,i.jsxs)(h.Z,D(D({},w.Wm),{},{fade:!0,className:"ps-carousel",children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/promotions/home-5/electronic-1.jpg",alt:"martfury"})})})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/promotions/home-5/electronic-2.jpg",alt:"martfury"})})})})]})):"clothing"===s?(0,i.jsxs)(h.Z,D(D({},w.Wm),{},{fade:!0,className:"ps-carousel",children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/promotions/home-5/clothing-1.jpg",alt:"martfury"})})})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/promotions/home-5/clothing-2.jpg",alt:"martfury"})})})})]})):"garden"===s?(0,i.jsxs)(h.Z,D(D({},w.Wm),{},{fade:!0,className:"ps-carousel",children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/promotions/home-5/kitchen-1.jpg",alt:"martfury"})})})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsx)(m.default,{href:"/shop",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/static/img/promotions/home-5/kitchen-2.jpg",alt:"martfury"})})})})]})):void 0},E=r(33875),T=r(83961),R=r(38398),M=r(60318),B=r(21862),I=r(83255),A=r(41403),Y=r(20492),F=r(7864),W=function(){return(0,t.useEffect)((function(){window.addEventListener("scroll",F._)}),[]),(0,i.jsxs)("header",{className:"header header--market-place-3",id:"headerSticky",children:[(0,i.jsx)("div",{className:"header__top",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"header__left",children:[(0,i.jsxs)("div",{className:"menu--product-categories",children:[(0,i.jsxs)("div",{className:"menu__toggle",children:[(0,i.jsx)("i",{className:"icon-menu"}),(0,i.jsx)("span",{children:" Shop by Department"})]}),(0,i.jsx)("div",{className:"menu__content",children:(0,i.jsx)(Y.Z,{source:R.a,className:"menu--dropdown"})})]}),(0,i.jsx)(m.default,{href:"/home/market-place-3",children:(0,i.jsxs)("a",{className:"ps-logo",children:["q",(0,i.jsx)("img",{src:"/static/img/logo_light.png",alt:"martfury"})]})})]}),(0,i.jsx)("div",{className:"header__center",children:(0,i.jsx)(I.Z,{})}),(0,i.jsx)("div",{className:"header__right",children:(0,i.jsx)(A.Z,{})})]})}),(0,i.jsx)("nav",{className:"navigation",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"navigation__left",children:(0,i.jsxs)("div",{className:"menu--product-categories",children:[(0,i.jsxs)("div",{className:"menu__toggle active",children:[(0,i.jsx)("i",{className:"icon-menu"}),(0,i.jsx)("span",{children:" Shop by Department"})]}),(0,i.jsx)("div",{className:"menu__content",children:(0,i.jsx)(Y.Z,{source:R.a,className:"menu--dropdown"})})]})}),(0,i.jsxs)("div",{className:"navigation__right",children:[(0,i.jsx)("ul",{className:"menu menu--recent-view",children:(0,i.jsxs)("li",{className:"menu-item-has-children",children:[(0,i.jsx)(m.default,{href:"/page/blank",children:(0,i.jsx)("a",{children:"Your Recently Viewed"})}),(0,i.jsx)("div",{className:"navigation__recent-products",children:(0,i.jsx)("p",{children:(0,i.jsx)(m.default,{href:"/page/blank",children:(0,i.jsx)("a",{children:"See all your recently viewed items"})})})})]})}),(0,i.jsxs)("ul",{className:"navigation__extra",children:[(0,i.jsx)("li",{children:(0,i.jsx)(m.default,{href:"/vendor/become-a-vendor",children:(0,i.jsx)("a",{children:"Sell on Martfury"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(m.default,{href:"/account/order-tracking",children:(0,i.jsx)("a",{children:"Tract your order"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(M.Z,{})}),(0,i.jsx)("li",{children:(0,i.jsx)(B.Z,{})})]})]})]})})]})},H=r(72538),V=function(){var e=["Women","Men","Girl","Boy","Baby","Accessories"],s=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W,{}),(0,i.jsx)(E.Z,{})]}),r=(0,i.jsx)(T.Z,{});return(0,i.jsx)(H.Z,{header:s,footer:r,title:"Home Marketplace 3",children:(0,i.jsx)("main",{id:"homepage-5",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(f,{}),(0,i.jsx)(N,{}),(0,i.jsx)(b.Z,{collectionSlug:"deal-of-the-day"}),(0,i.jsxs)("div",{className:"ps-product-box",children:[(0,i.jsx)(_,{}),(0,i.jsx)(P,{heading:{icon:"icon-laundry",title:"Consumer Electronic"},categorySlug:"clothing-and-parel",links:["TV Televisions","Air Conditioner","Washing Machine","Refrigerator","Microwave"],banners:(0,i.jsx)(C,{type:"electronic"})}),(0,i.jsx)(P,{heading:{icon:"icon-shirt",title:"Clothings & Apparel"},categorySlug:"clothing-and-parel",links:e,banners:(0,i.jsx)(C,{type:"clothing"})}),(0,i.jsx)(P,{heading:{icon:"icon-home6",title:"Clothings & Apparel"},categorySlug:"garden-and-kitchen",links:e,banners:(0,i.jsx)(C,{type:"garden"})})]})]})})})}},76890:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/market-place-3",function(){return r(10960)}])}},function(e){e.O(0,[4885,1382,6114,6066,2879,889,7069,5992,2658,9896,9774,2888,179],(function(){return s=76890,e(e.s=s);var s}));var s=e.O();_N_E=s}]);