(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5,6,7,8],{431:function(t,e,n){},432:function(t,e,n){},433:function(t,e,n){"use strict";n.r(e);var s=n(298),r=n.n(s),i={props:{item:{required:!0}},computed:{link:function(){return this.item.path},postDate:function(){return this.item.lastModified?r()(1e3*this.item.lastModified):r()(this.item.frontmatter.lastModified)},formattedPostDate:function(){return this.postDate.format("Y-MM-DD")},humanizedPostDate:function(){return r.a.duration(r()().diff(this.postDate)).humanize()}}},a=n(42),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-preview"},[n("h2",{staticClass:"post-title"},[n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:"/"===t.link}},[t._v("\n        "+t._s(t.item.title)+"\n    ")])],1),t._v(" "),n("p",{staticClass:"post-meta",attrs:{title:t.formattedPostDate}},[t._v("\n    "+t._s(t.humanizedPostDate)+"\n  ")])])}),[],!1,null,null,null);e.default=o.exports},434:function(t,e,n){"use strict";var s=n(1),r=n(44).some,i=n(43),a=n(21),o=i("some"),u=a("some");s({target:"Array",proto:!0,forced:!o||!u},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},435:function(t,e,n){"use strict";var s=n(1),r=n(20),i=n(10),a=n(2),o=n(43),u=[],l=u.sort,c=a((function(){u.sort(void 0)})),f=a((function(){u.sort(null)})),d=o("sort");s({target:"Array",proto:!0,forced:c||!f||!d},{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},436:function(t,e,n){var s={"./af":299,"./af.js":299,"./ar":300,"./ar-dz":301,"./ar-dz.js":301,"./ar-kw":302,"./ar-kw.js":302,"./ar-ly":303,"./ar-ly.js":303,"./ar-ma":304,"./ar-ma.js":304,"./ar-sa":305,"./ar-sa.js":305,"./ar-tn":306,"./ar-tn.js":306,"./ar.js":300,"./az":307,"./az.js":307,"./be":308,"./be.js":308,"./bg":309,"./bg.js":309,"./bm":310,"./bm.js":310,"./bn":311,"./bn.js":311,"./bo":312,"./bo.js":312,"./br":313,"./br.js":313,"./bs":314,"./bs.js":314,"./ca":315,"./ca.js":315,"./cs":316,"./cs.js":316,"./cv":317,"./cv.js":317,"./cy":318,"./cy.js":318,"./da":319,"./da.js":319,"./de":320,"./de-at":321,"./de-at.js":321,"./de-ch":322,"./de-ch.js":322,"./de.js":320,"./dv":323,"./dv.js":323,"./el":324,"./el.js":324,"./en-au":325,"./en-au.js":325,"./en-ca":326,"./en-ca.js":326,"./en-gb":327,"./en-gb.js":327,"./en-ie":328,"./en-ie.js":328,"./en-il":329,"./en-il.js":329,"./en-in":330,"./en-in.js":330,"./en-nz":331,"./en-nz.js":331,"./en-sg":332,"./en-sg.js":332,"./eo":333,"./eo.js":333,"./es":334,"./es-do":335,"./es-do.js":335,"./es-us":336,"./es-us.js":336,"./es.js":334,"./et":337,"./et.js":337,"./eu":338,"./eu.js":338,"./fa":339,"./fa.js":339,"./fi":340,"./fi.js":340,"./fil":341,"./fil.js":341,"./fo":342,"./fo.js":342,"./fr":343,"./fr-ca":344,"./fr-ca.js":344,"./fr-ch":345,"./fr-ch.js":345,"./fr.js":343,"./fy":346,"./fy.js":346,"./ga":347,"./ga.js":347,"./gd":348,"./gd.js":348,"./gl":349,"./gl.js":349,"./gom-deva":350,"./gom-deva.js":350,"./gom-latn":351,"./gom-latn.js":351,"./gu":352,"./gu.js":352,"./he":353,"./he.js":353,"./hi":354,"./hi.js":354,"./hr":355,"./hr.js":355,"./hu":356,"./hu.js":356,"./hy-am":357,"./hy-am.js":357,"./id":358,"./id.js":358,"./is":359,"./is.js":359,"./it":360,"./it-ch":361,"./it-ch.js":361,"./it.js":360,"./ja":362,"./ja.js":362,"./jv":363,"./jv.js":363,"./ka":364,"./ka.js":364,"./kk":365,"./kk.js":365,"./km":366,"./km.js":366,"./kn":367,"./kn.js":367,"./ko":368,"./ko.js":368,"./ku":369,"./ku.js":369,"./ky":370,"./ky.js":370,"./lb":371,"./lb.js":371,"./lo":372,"./lo.js":372,"./lt":373,"./lt.js":373,"./lv":374,"./lv.js":374,"./me":375,"./me.js":375,"./mi":376,"./mi.js":376,"./mk":377,"./mk.js":377,"./ml":378,"./ml.js":378,"./mn":379,"./mn.js":379,"./mr":380,"./mr.js":380,"./ms":381,"./ms-my":382,"./ms-my.js":382,"./ms.js":381,"./mt":383,"./mt.js":383,"./my":384,"./my.js":384,"./nb":385,"./nb.js":385,"./ne":386,"./ne.js":386,"./nl":387,"./nl-be":388,"./nl-be.js":388,"./nl.js":387,"./nn":389,"./nn.js":389,"./oc-lnc":390,"./oc-lnc.js":390,"./pa-in":391,"./pa-in.js":391,"./pl":392,"./pl.js":392,"./pt":393,"./pt-br":394,"./pt-br.js":394,"./pt.js":393,"./ro":395,"./ro.js":395,"./ru":396,"./ru.js":396,"./sd":397,"./sd.js":397,"./se":398,"./se.js":398,"./si":399,"./si.js":399,"./sk":400,"./sk.js":400,"./sl":401,"./sl.js":401,"./sq":402,"./sq.js":402,"./sr":403,"./sr-cyrl":404,"./sr-cyrl.js":404,"./sr.js":403,"./ss":405,"./ss.js":405,"./sv":406,"./sv.js":406,"./sw":407,"./sw.js":407,"./ta":408,"./ta.js":408,"./te":409,"./te.js":409,"./tet":410,"./tet.js":410,"./tg":411,"./tg.js":411,"./th":412,"./th.js":412,"./tl-ph":413,"./tl-ph.js":413,"./tlh":414,"./tlh.js":414,"./tr":415,"./tr.js":415,"./tzl":416,"./tzl.js":416,"./tzm":417,"./tzm-latn":418,"./tzm-latn.js":418,"./tzm.js":417,"./ug-cn":419,"./ug-cn.js":419,"./uk":420,"./uk.js":420,"./ur":421,"./ur.js":421,"./uz":422,"./uz-latn":423,"./uz-latn.js":423,"./uz.js":422,"./vi":424,"./vi.js":424,"./x-pseudo":425,"./x-pseudo.js":425,"./yo":426,"./yo.js":426,"./zh-cn":427,"./zh-cn.js":427,"./zh-hk":428,"./zh-hk.js":428,"./zh-mo":429,"./zh-mo.js":429,"./zh-tw":430,"./zh-tw.js":430};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id=436},437:function(t,e,n){"use strict";n.r(e);n(167),n(28),n(64),n(434),n(435),n(92),n(63),n(91);var s=n(29),r=n(433),i=n(298),a=n.n(i),o={components:{NavLink:r.default},computed:{userNav:function(){return this.$site.pages||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var a,o=e[s],u=i[s]&&i[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),r.some((function(t){return t.path===a}))||(a=s)),{text:u,link:a}}))};return[].concat(Object(s.a)(this.userNav),[a])}return this.userNav},userLinks:function(){var t=this;return(this.nav||[]).filter((function(t){return"/"!==t.path})).sort((function(e,n){return a.a.duration(t.postDate(n).diff(t.postDate(e)))}))}},methods:{postDate:function(t){return a()(t.lastModified?1e3*t.lastModified:t.frontmatter.lastModified)}}},u=n(42),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length?n("nav",t._l(t.userLinks,(function(e){return"page"!==e.frontmatter.type?n("div",{key:e.link},["page"!==e.type?n("NavLink",{attrs:{item:e}}):t._e(),t._v(" "),n("hr")],1):t._e()})),0):t._e()}),[],!1,null,null,null);e.default=l.exports},438:function(t,e,n){"use strict";var s=n(431);n.n(s).a},439:function(t,e,n){"use strict";var s=n(164),r=n(6),i=n(14),a=n(24),o=n(165),u=n(166);s("match",1,(function(t,e,n){return[function(e){var n=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,n):new RegExp(e)[t](String(n))},function(t){var s=n(e,t,this);if(s.done)return s.value;var a=r(t),l=String(this);if(!a.global)return u(a,l);var c=a.unicode;a.lastIndex=0;for(var f,d=[],p=0;null!==(f=u(a,l));){var h=String(f[0]);d[p]=h,""===h&&(a.lastIndex=o(l,i(a.lastIndex),c)),p++}return 0===p?null:d}]}))},440:function(t,e,n){"use strict";var s=n(164),r=n(168),i=n(6),a=n(24),o=n(95),u=n(165),l=n(14),c=n(166),f=n(65),d=n(2),p=[].push,h=Math.min,m=!d((function(){return!RegExp(4294967295,"y")}));s("split",2,(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[s];if(!r(t))return e.call(s,t,i);for(var o,u,l,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,d+"g");(o=f.call(m,s))&&!((u=m.lastIndex)>h&&(c.push(s.slice(h,o.index)),o.length>1&&o.index<s.length&&p.apply(c,o.slice(1)),l=o[0].length,h=u,c.length>=i));)m.lastIndex===o.index&&m.lastIndex++;return h===s.length?!l&&m.test("")||c.push(""):c.push(s.slice(h)),c.length>i?c.slice(0,i):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,r,n):s.call(String(r),e,n)},function(t,r){var a=n(s,t,this,r,s!==e);if(a.done)return a.value;var f=i(t),d=String(this),p=o(f,RegExp),v=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),j=new p(m?f:"^(?:"+f.source+")",g),k=void 0===r?4294967295:r>>>0;if(0===k)return[];if(0===d.length)return null===c(j,d)?[d]:[];for(var b=0,y=0,_=[];y<d.length;){j.lastIndex=m?y:0;var $,x=c(j,m?d:d.slice(y));if(null===x||($=h(l(j.lastIndex+(m?0:y)),d.length))===b)y=u(d,y,v);else{if(_.push(d.slice(b,y)),_.length===k)return _;for(var C=1;C<=x.length-1;C++)if(_.push(x[C]),_.length===k)return _;y=b=$}}return _.push(d.slice(b)),_}]}),!m)},441:function(t,e,n){"use strict";var s=n(432);n.n(s).a},442:function(t,e,n){},443:function(t,e,n){},444:function(t,e,n){},445:function(t,e,n){},446:function(t,e,n){},447:function(t,e,n){},448:function(t,e,n){"use strict";n.r(e);n(63),n(91),n(28),n(93),n(170),n(96),n(169),n(64),n(439),n(440),n(94);var s=/#.*$/,r=/\.(md|html)$/,i=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(r,"")}function u(t){return a.test(t)}function l(t){if(u(t))return t;var e=t.match(s),n=e?e[0]:"",r=o(t);return i.test(r)?t:r+".html"+n}function c(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var o=i[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var s=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===s)return Object.assign({},t[r],{type:"page",path:l(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}var f=n(298),d=n.n(f),p={computed:{postDate:function(){return this.$page.lastModified?d()(1e3*this.$page.lastModified).format("MMM DD, Y"):d()(this.$page.frontmatter.lastModified).format("MMM DD, Y")},prev:function(){var t=this.$page.frontmatter.prev;if(!1!==t)return t?c(this.$site.pages,t,this.$route.path):void 0},next:function(){var t=this.$page.frontmatter.next;if(!1!==t)return t?c(this.$site.pages,t,this.$route.path):void 0},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,s=t.docsDir,r=void 0===s?"":s,u=t.docsBranch,l=void 0===u?"master":u,c=t.docsRepo,f=void 0===c?e:c,d=o(this.$page.path);if(i.test(d)?d+="README.md":d+=".md",f&&n)return(a.test(f)?f:"https://github.com/".concat(f)).replace(i,"")+"/edit/".concat(l)+(""!==r?"/"+r.replace(i,""):"")+d}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}}},h=(n(441),n(42)),m=Object(h.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("article",[n("p",{staticClass:"post-page-meta"},[t._v(t._s(t.postDate))]),t._v(" "),n("hr"),t._v(" "),n("Content",{attrs:{custom:!1}})],1),t._v(" "),t.prev||t.next?n("div",{staticClass:"content page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ← "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v(" →\n      ")],1):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=m.exports},449:function(t,e,n){"use strict";n.r(e);var s={props:{links:Array}},r=(n(438),n(42)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.links.length>0?n("div",{attrs:{id:"header-menu"}},t._l(t.links,(function(e){return n("router-link",{key:e.href,attrs:{to:e.href}},[t._v("\n     "+t._s(e.title)+" \n  ")])})),1):t._e()}),[],!1,null,null,null);e.default=i.exports},450:function(t,e,n){"use strict";n.r(e);var s={components:{NavLinks:n(437).default},computed:{data:function(){return this.$page.frontmatter}}},r=n(42),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("NavLinks",{staticClass:"can-hide"})}),[],!1,null,null,null);e.default=i.exports},451:function(t,e,n){var s,r;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(r="function"==typeof(s=function(){var t,e,n={version:"0.2.0"},s=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function r(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(s[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=r(t,s.minimum,1),n.status=1===t?null:t;var u=n.render(!e),l=u.querySelector(s.barSelector),c=s.speed,f=s.easing;return u.offsetWidth,a((function(e){""===s.positionUsing&&(s.positionUsing=n.getPositioningCSS()),o(l,function(t,e,n){var r;return(r="translate3d"===s.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===s.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+e+"ms "+n,r}(t,c,f)),1===t?(o(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){o(u,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){n.remove(),e()}),c)}),c)):setTimeout(e,c)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout((function(){n.status&&(n.trickle(),t())}),s.trickleSpeed)};return s.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*r(Math.random()*e,.1,.95)),e=r(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*s.trickleRate)},t=0,e=0,n.promise=function(s){return s&&"resolved"!==s.state()?(0===e&&n.start(),t++,e++,s.always((function(){0==--e?(t=0,n.done()):n.set((t-e)/t)})),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=s.template;var r,a=e.querySelector(s.barSelector),u=t?"-100":i(n.status||0),c=document.querySelector(s.parent);return o(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),s.showSpinner||(r=e.querySelector(s.spinnerSelector))&&d(r),c!=document.body&&l(c,"nprogress-custom-parent"),c.appendChild(e),e},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(s.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&d(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var a=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),o=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var s,r=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((s=t[r]+i)in n)return s;return e}(n))}function s(t,e,s){e=n(e),t.style[e]=s}return function(t,e){var n,r,i=arguments;if(2==i.length)for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&s(t,n,r);else s(t,i[1],i[2])}}();function u(t,e){return("string"==typeof t?t:f(t)).indexOf(" "+e+" ")>=0}function l(t,e){var n=f(t),s=n+e;u(n,e)||(t.className=s.substring(1))}function c(t,e){var n,s=f(t);u(t,e)&&(n=s.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function f(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function d(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?s.call(e,n,e,t):s)||(t.exports=r)},452:function(t,e,n){"use strict";var s=n(442);n.n(s).a},453:function(t,e,n){"use strict";var s=n(443);n.n(s).a},454:function(t,e,n){"use strict";var s=n(444);n.n(s).a},455:function(t,e,n){"use strict";var s=n(445);n.n(s).a},456:function(t,e,n){"use strict";var s=n(446);n.n(s).a},457:function(t,e,n){"use strict";var s=n(447);n.n(s).a},458:function(t,e,n){"use strict";n.r(e);n(45),n(46),n(167),n(93),n(64),n(92),n(94);var s=n(29),r=n(0),i=n(298),a=n.n(i),o=n(451),u=n.n(o),l=n(450),c=n(449),f=n(448);n(63),n(91);function d(t,e){if(e&&e.forEach((function(t){document.head.removeChild(t)})),t)return t.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),document.head.appendChild(e),e}))}var p={components:{Home:l.default,Page:f.default,HeaderMenu:c.default},created:function(){this.$ssrContext&&(this.$ssrContext.title=this.$title,this.$ssrContext.lang=this.$lang,this.$ssrContext.description=this.$page.description||this.$description)},mounted:function(){var t=this;this.currentMetaTags=[];var e=function(){document.title=t.$title,document.documentElement.lang=t.$lang;var e=[{name:"description",content:t.$description}].concat(Object(s.a)(t.$page.frontmatter.meta||[]));t.currentMetaTags=d(e,t.currentMetaTags)};this.$watch("$page",e),e(),u.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,n){var s;t.path===e.path||r.a.component("/"===(s=t.path).charAt(s.length-1)?"page".concat(s.replace(/\//g,"-")+"index"):"page".concat(s.replace(/\//g,"-").replace(/\.html$/,"")))||u.a.start(),n()})),this.$router.afterEach((function(){u.a.done()}))},computed:{year:function(){return a.a.utc().format("Y")}},beforeDestroy:function(){d(null,this.currentMetaTags)}},h=(n(452),n(453),n(454),n(455),n(456),n(457),n(42)),m=Object(h.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"head-c"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"offset-lg-2 col-lg-8 offset-md-1 col-md-10"},[n("h1",{attrs:{id:"blog-name"}},[n("router-link",{attrs:{to:"/"}},[t._v("\n                "+t._s(t.$siteTitle)+"\n            ")])],1),t._v(" "),t._l(t.$site.themeConfig.usefulLinks,(function(t){return n("a",{key:t.href,staticClass:"social",attrs:{href:t.href,target:"_blank"}},[n("i",{class:t.cssIcon})])})),t._v(" "),n("header-menu",{attrs:{links:t.$site.themeConfig.headerMenu}})],2)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"offset-lg-2 col-lg-8 offset-md-1 col-md-10"},[t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page",[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)]),t._v(" "),n("center",[n("hr",{attrs:{width:"50%"}}),t._v(" "),n("span",{attrs:{id:"subtitle"}},[t._v(t._s(t.$description))]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"offset-lg-2 col-lg-8 offset-md-1 col-md-10"},[n("p",{staticClass:"small"},[t._v("© "+t._s(t.year)+" "+t._s(t.$siteTitle)+". Code released under the "),n("a",{attrs:{href:"https://opensource.org/licenses/MIT",target:"_blank"}},[t._v("MIT License")])])])])])],1)}),[],!1,null,null,null);e.default=m.exports}}]);