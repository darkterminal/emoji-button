(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8lh6":function(e,t){e.exports="import { EmojiButton } from '@joeattardi/emoji-button';\n\nconst picker = new EmojiButton();\nconst trigger = document.querySelector('.trigger');\n\npicker.on('emoji', selection => {\n  trigger.innerHTML = selection.emoji;\n});\n\ntrigger.addEventListener('click', () => picker.togglePicker(trigger));\n"},G86H:function(e,t,n){e.exports={install:"Layout-module--install--3WroZ",main:"Layout-module--main--3NgEk"}},INYr:function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(o)},JPBO:function(e,t,n){e.exports={footer:"Footer-module--footer--1c9am",joe:"Footer-module--joe--3lHfF"}},"Lhx/":function(e,t,n){e.exports={header:"Header-module--header--2skx2",logo:"Header-module--logo--10MlI",badges:"Header-module--badges--2c5bQ",buttons:"Header-module--buttons--2UVOV"}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var r=n("q1tI"),a=n.n(r),o=n("8tEE"),i=n("wHSu"),l=n("wZee"),c=n.n(l),s=n("WDxw"),u=(n("2Spj"),n("9VmF"),n("Tze0"),n("KKXr"),n("DNiP"),n("pIFo"),n("bWfx"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("LK8F"),n("V+eJ"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),n("rE2o"),n("ioFf"),n("7O5W")),m=n("17x9"),f=n.n(m);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function g(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=E(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e}),{})}var v=!1;try{v=!0}catch(Q){}function w(e){return null===e?null:"object"===d(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}function x(e){var t=e.forwardedRef,n=h(e,["forwardedRef"]),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,c=w(r),s=O("classes",[].concat(j(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,l=e.listItem,c=e.flip,s=e.size,u=e.rotation,m=e.pull,f=(p(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(s),null!=s),p(t,"fa-rotate-".concat(u),null!=u&&0!==u),p(t,"fa-pull-".concat(m),null!=m),p(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),j(i.split(" ")))),m=O("transform","string"==typeof n.transform?u.c.transform(n.transform):n.transform),f=O("mask",w(a)),d=Object(u.b)(c,y({},s,{},m,{},f,{symbol:o,title:l}));if(!d)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var b=d.abstract,E={ref:t};return Object.keys(n).forEach((function(e){x.defaultProps.hasOwnProperty(e)||(E[e]=n[e])})),k(b[0],E)}x.displayName="FontAwesomeIcon",x.propTypes={border:f.a.bool,className:f.a.string,mask:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),fixedWidth:f.a.bool,inverse:f.a.bool,flip:f.a.oneOf(["horizontal","vertical","both"]),icon:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),listItem:f.a.bool,pull:f.a.oneOf(["right","left"]),pulse:f.a.bool,rotation:f.a.oneOf([0,90,180,270]),size:f.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:f.a.bool,symbol:f.a.oneOfType([f.a.bool,f.a.string]),title:f.a.string,transform:f.a.oneOfType([f.a.string,f.a.object]),swapOpacity:f.a.bool},x.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var k=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=g(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[E(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,c=h(r,["style"]);return o.attrs.style=y({},o.attrs.style,{},l),t.apply(void 0,[n.tag,y({},o.attrs,{},c)].concat(j(a)))}.bind(null,a.a.createElement),N=n("nj0K"),S=n.n(N);function P(e){var t=e.icon,n=e.title,r=e.children;return a.a.createElement("div",{className:S.a.feature},a.a.createElement("div",{className:S.a.icon},a.a.createElement(x,{icon:t,size:"3x"})),a.a.createElement("div",null,a.a.createElement("h3",null,n),a.a.createElement("p",null,r)))}var A=n("qhky"),F=n("JPBO"),I=n.n(F);function L(){return a.a.createElement("footer",{className:I.a.footer},a.a.createElement("div",{className:I.a.joe},"Created with ♥️ by ",a.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),"."),a.a.createElement("div",null,a.a.createElement("a",{href:"https://github.com/joeattardi/emoji-button"},"GitHub Repository")),a.a.createElement("div",null,"© 2019-2020"," ",a.a.createElement("a",{href:"https://github.com/joeattardi/emoji-button/blob/master/LICENSE"},"MIT License")))}var T=n("Wbzz"),C=n("3aSG"),z=n.n(C),K=n("Lhx/"),B=n.n(K);function H(){return a.a.createElement("header",{className:B.a.header},a.a.createElement("div",{className:B.a.logo},a.a.createElement("img",{src:z.a})),a.a.createElement("h2",null,"Vanilla JavaScript Emoji Picker"),a.a.createElement("div",{className:B.a.badges},a.a.createElement("a",{href:"https://github.com/joeattardi/emoji-button"},a.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/emoji-button?style=for-the-badge"})),a.a.createElement("a",{href:"https://www.npmjs.com/package/@joeattardi/emoji-button"},a.a.createElement("img",{src:"https://img.shields.io/npm/v/@joeattardi/emoji-button?style=for-the-badge"}))),a.a.createElement("div",{className:B.a.buttons},a.a.createElement("a",{href:"https://github.com/joeattardi/emoji-button"},a.a.createElement(x,{icon:o.a})," GitHub Repository"),a.a.createElement(T.a,{to:"/docs"},a.a.createElement(x,{icon:i.a})," Documentation")))}var W=n("G86H"),R=n.n(W);function D(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(A.a,null,a.a.createElement("title",null,"Emoji Button")),a.a.createElement(H,null),a.a.createElement("div",{className:R.a.install},a.a.createElement(x,{icon:o.c,size:"3x"})," ",a.a.createElement("code",null,"npm install @joeattardi/emoji-button")),a.a.createElement("main",{className:R.a.main},t),a.a.createElement(L,null))}var G=n("RgaQ"),J=n("8lh6"),U=n.n(J),X=n("vGFT"),q=n.n(X);function V(){return Object(r.useEffect)((function(){c.a.highlightAll()}),[]),a.a.createElement(D,null,a.a.createElement("div",{className:q.a.index},a.a.createElement("h2",null,"Demo"),a.a.createElement("section",{className:q.a.demo},a.a.createElement("div",null,a.a.createElement(s.a,null)),a.a.createElement("div",{className:q.a.code},a.a.createElement(G.a,{src:U.a}))),a.a.createElement("h2",null,"About"),a.a.createElement("section",null,a.a.createElement("p",null,"Emoji Button lets you add an emoji picker to your website or app with a few simple lines of code. It supports all Unicode emojis up to and including Emoji 12.1, and is fully customizable.")),a.a.createElement("section",null,a.a.createElement(P,{icon:o.b,title:"Vanilla JavaScript"},"Emoji Button doesn't rely on a particular framework, allowing you to use it in any JavaScript app."),a.a.createElement(P,{icon:i.g,title:"Native or Twemoji styles"},"Uses the operating system's built-in emoji characters or the cross-platform ",a.a.createElement("a",{href:"https://twemoji.twitter.com"},"Twemoji")," ","emoji library."),a.a.createElement(P,{icon:i.f,title:"Emoji search"},"Search for emojis by name."),a.a.createElement(P,{icon:i.h,title:"Emoji variations"},"Some emojis support skin tone, or other types of, variations. Emoji Button fully supports these variations."),a.a.createElement(P,{icon:i.c,title:"Recent emojis"},"Remembers the previously/frequently selected emojis."),a.a.createElement(P,{icon:i.d,title:"Keyboard accessible"},"No mouse required! Navigate the picker with the Tab and arrow keys."),a.a.createElement(P,{icon:i.e,title:"Themes"},"Includes a dark and light theme. Also supports automatically setting the theme based on the user's operating system settings."),a.a.createElement(P,{icon:i.b,title:"Custom emojis"},"Add your own custom images and GIFs to the emoji picker.")),a.a.createElement("h2",null,"Compatibility"),a.a.createElement("section",null,a.a.createElement("p",null,"Emoji Button works with all modern browsers. Internet Explorer is not supported."))))}},RgaQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("dKDz"),a=n.n(r),o=n("q1tI"),i=n.n(o);function l(e){var t=e.src;return i.a.createElement("pre",null,i.a.createElement("code",{className:"language-javascript",dangerouslySetInnerHTML:{__html:a()(t)}}))}},SLtz:function(e,t,n){e.exports={emojiButton:"Example-module--emoji-button---ihCG"}},WDxw:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("yLlt"),i=n("SLtz"),l=n.n(i);function c(e){var t=e.initialEmoji,n=void 0===t?"😎":t,i=e.initialImageUrl,c=e.options,s=Object(r.useRef)(),u=Object(r.useState)(null),m=u[0],f=u[1],d=Object(r.useState)(n),p=d[0],b=d[1],y=Object(r.useState)(i),h=y[0],j=y[1];return Object(r.useEffect)((function(){var e=new o.a(c);e.on("emoji",(function(e){b(e.emoji),j(e.url)})),f(e)}),[]),a.a.createElement("button",{className:l.a.emojiButton,ref:s,onClick:function(){m.togglePicker(s.current)}},h?a.a.createElement("img",{alt:p,src:h}):a.a.createElement("span",null,p))}},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},dKDz:function(e,t,n){"use strict";var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,a=r.exec(n);if(!a)return n;var o="",i=0,l=0;for(i=a.index;i<n.length;i++){switch(n.charCodeAt(i)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}l!==i&&(o+=n.substring(l,i)),l=i+1,o+=t}return l!==i?o+n.substring(l,i):o}},dRSK:function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")("find")},jm62:function(e,t,n){var r=n("XKFU"),a=n("mQtv"),o=n("aCFj"),i=n("EemH"),l=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=o(e),c=i.f,s=a(r),u={},m=0;s.length>m;)void 0!==(n=c(r,t=s[m++]))&&l(u,t,n);return u}})},mQtv:function(e,t,n){var r=n("kJMx"),a=n("JiEa"),o=n("y3w9"),i=n("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(o(e)),n=a.f;return n?t.concat(n(e)):t}},nj0K:function(e,t,n){e.exports={feature:"Feature-module--feature--oPxuY",icon:"Feature-module--icon--3XowK"}},vGFT:function(e,t,n){e.exports={emojiButton:"index-module--emoji-button--1doxB",index:"index-module--index--2UCCW",demo:"index-module--demo--3gsQr",code:"index-module--code--39ijX"}}}]);
//# sourceMappingURL=component---src-pages-index-js-5363aebc4d0944832197.js.map