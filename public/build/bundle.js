var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function l(){return t=" ",document.createTextNode(t);var t}function h(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){t.value=null==e?"":e}let g;function y(t){g=t}function m(){if(!g)throw new Error("Function called outside component initialization");return g}const b=[],v=[];let C=[];const $=[],k=Promise.resolve();let S=!1;function w(t){C.push(t)}const P=new Set;let T=0;function E(){if(0!==T)return;const t=g;do{try{for(;T<b.length;){const t=b[T];T++,y(t),x(t.$$)}}catch(t){throw b.length=0,T=0,t}for(y(null),b.length=0,T=0;v.length;)v.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];P.has(e)||(P.add(e),e())}C.length=0}while(b.length);for(;$.length;)$.pop()();S=!1,P.clear(),y(t)}function x(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const O=new Set;let _;function B(t,e){t&&t.i&&(O.delete(t),t.i(e))}function L(t,n,o,i){const{fragment:a,after_update:u}=t.$$;a&&a.m(n,o),i||w((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(w)}function A(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];C.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),C=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(b.push(t),S||(S=!0,k.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,o,i,a,u,p,l=[-1]){const h=g;y(e);const f=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:r.target||h.$$.root};p&&p(f.root);let d=!1;if(f.ctx=o?o(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&N(e,t)),n})):[],f.update(),d=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();r.intro&&B(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),E()}y(h)}class j{$destroy(){A(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[];function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},D.apply(this,arguments)}var z={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},M=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=D({},z,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),r=s.length;if(r)for(var o=0;o<r;o+=1)t.strings.push(s[o].innerHTML.trim())}for(var i in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[i]=i;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},t}()),F=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s=t.substring(e).charAt(0);if("<"===s||"&"===s){var r;for(r="<"===s?">":";";t.substring(e+1).charAt(0)!==r&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s=t.substring(e).charAt(0);if(">"===s||";"===s){var r;for(r=">"===s?"<":"&";t.substring(e-1).charAt(0)!==r&&!(--e<0););e--}return e},t}()),H=function(){function t(t,e){M.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=F.typeHtmlChars(t,e,n);var s=0,o=t.substring(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var i=1;i+=(o=/\d+/.exec(o)[0]).length,s=parseInt(o),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+i),n.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==t.substring(e+r).charAt(0)&&(r++,!(e+r>t.length)););var a=t.substring(0,e),u=t.substring(a.length+1,e+r),c=t.substring(e+r+1);t=a+u+c,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,e+=n);this.replaceText(s),this.typewrite(t,e)},e.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=F.backSpaceHtmlChars(t,e,n);var s=t.substring(0,e);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&s===r.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),s)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();function R(t){let e;return{c(){e=p("span"),f(e,"id","cursor"),f(e,"class","cursor svelte-epuzfx")},m(t,n){u(t,e,n)},d(t){t&&c(e)}}}function J(e){let n,r,o,i,g,y,m,b,v,C,$,k,S,w,P,T,E=e[1]&&R();return{c(){n=p("main"),r=p("h1"),r.textContent="PsyAI Live Response",o=l(),i=p("div"),g=p("input"),y=l(),m=p("button"),m.textContent="Send",b=l(),v=p("div"),C=p("h2"),C.textContent="Response:",$=l(),k=p("div"),S=p("span"),w=l(),E&&E.c(),f(r,"class","bold non-select svelte-epuzfx"),f(g,"type","text"),f(g,"placeholder","Type your message..."),f(g,"class","svelte-epuzfx"),f(m,"class","svelte-epuzfx"),f(S,"id","response-wrapper"),f(k,"class","terminal-text svelte-epuzfx"),f(n,"class","svelte-epuzfx")},m(t,s){u(t,n,s),a(n,r),a(n,o),a(n,i),a(i,g),d(g,e[0]),a(i,y),a(i,m),a(n,b),a(n,v),a(v,C),a(v,$),a(v,k),a(k,S),a(k,w),E&&E.m(k,null),P||(T=[h(g,"input",e[4]),h(m,"click",e[3])],P=!0)},p(t,[e]){1&e&&g.value!==t[0]&&d(g,t[0]),t[1]?E||(E=R(),E.c(),E.m(k,null)):E&&(E.d(1),E=null)},i:t,o:t,d(t){t&&c(n),E&&E.d(),P=!1,s(T)}}}function U(t,e){return Math.floor(Math.random()*(e-t+1))+t}function Y(e,n,s){let r,a="",u=function(e,n=t){let s;const r=new Set;function i(t){if(o(e,t)&&(e=t,s)){const t=!q.length;for(const t of r)t[1](),q.push(t,e);if(t){for(let t=0;t<q.length;t+=2)q[t][0](q[t+1]);q.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,a=t){const u=[o,a];return r.add(u),1===r.size&&(s=n(i)||t),o(e),()=>{r.delete(u),0===r.size&&s&&(s(),s=null)}}}}("");i(e,u,(t=>s(1,r=t)));let c;var p;let l;p=()=>{c=new EventSource("https://chatapi.louiml.net/api/qhu-1.0/stream"),c.addEventListener("message",f)},m().$$.on_mount.push(p);let h=!0;!function(t){m().$$.after_update.push(t)}((()=>{const t=document.getElementById("cursor");t.style.opacity=h?"1":"0",t.classList.add("cursor-blink"),l&&l.destroy();const e=U(1e3,12e3),n=U(20,140);l=new H("#response-wrapper",{strings:[r],typeSpeed:n,startDelay:e,showCursor:!1,onComplete:()=>{h=!1}}),u.subscribe((t=>{const e=function(t){return(t=(t=(t=(t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")).replace(/^!\[(.*?)\]\(((?!_).+?)\)$/gm,'<img alt="$1" src="$2" height=200 weight=200 /> <br />')).replace(/(^|\s)(https?:\/\/[^\s]+)/g,'$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>')).replace(/_([^_]+)_/g,"<u>$1</u>")).replace(/- (\S+)/g,'<br /> <strong class="bold"><span unselectable="on" onselectstart="return false;">•</span> $1</strong>')}(t);l.reset(),l.strings=[e],l.start()}))}));const f=t=>{const e=JSON.parse(t.data);e.message===a&&""!==e.response&&u.set(e.response)};return function(t){m().$$.on_destroy.push(t)}((()=>{c.close()})),[a,r,u,async()=>{try{const t=await fetch("https://chatapi.louiml.net/api/qhu-1.0",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:a})}),e=await t.json();u.set(e.response)}catch(t){console.error("Error:",t)}},function(){a=this.value,s(0,a)}]}class G extends j{constructor(t){super(),I(this,t,Y,J,o,{})}}function K(e){let n,s;return n=new G({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){L(n,t,e),s=!0},p:t,i(t){s||(B(n.$$.fragment,t),s=!0)},o(t){!function(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),_.c.push((()=>{O.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}(n.$$.fragment,t),s=!1},d(t){A(n,t)}}}return new class extends j{constructor(t){super(),I(this,t,null,K,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map