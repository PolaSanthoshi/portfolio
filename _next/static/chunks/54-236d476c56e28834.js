(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{5986:function(e,t,n){"use strict";n.d(t,{ZP:function(){return j}});let r={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},i=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{};class o{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let a=async(e,t,n={})=>{let i=await fetch(r.origin+e,{method:"POST",headers:n,body:t}),a=await i.text(),l=new o(i.status,a);if(i.ok)return l;throw l},l=(e,t,n)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!=typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},s=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},u=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new o(451,"Unavailable For Headless Browser"),d=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},f=e=>!e.list?.length||!e.watchVariable,m=(e,t)=>e instanceof FormData?e.get(t):e[t],p=(e,t)=>{if(f(e))return!1;d(e.list,e.watchVariable);let n=m(t,e.watchVariable);return"string"==typeof n&&e.list.includes(n)},g=()=>new o(403,"Forbidden"),y=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},h=async(e,t,n)=>{let r=Number(await n.get(e)||0);return t-Date.now()+r},v=async(e,t,n)=>{if(!t.throttle||!n)return!1;y(t.throttle,t.id);let r=t.id||e;return await h(r,t.throttle,n)>0||(await n.set(r,Date.now().toString()),!1)},b=()=>new o(429,"Too Many Requests"),w=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},S=e=>"string"==typeof e?document.querySelector(e):e;var j={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let n=i(e);r.publicKey=n.publicKey,r.blockHeadless=n.blockHeadless,r.storageProvider=n.storageProvider,r.blockList=n.blockList,r.limitRate=n.limitRate,r.origin=n.origin||t},send:async(e,t,n,o)=>{let d=i(o),f=d.publicKey||r.publicKey,m=d.blockHeadless||r.blockHeadless,y=r.storageProvider||d.storageProvider,h={...r.blockList,...d.blockList},w={...r.limitRate,...d.limitRate};return m&&u(navigator)?Promise.reject(c()):(l(f,e,t),s(n),n&&p(h,n))?Promise.reject(g()):await v(location.pathname,w,y)?Promise.reject(b()):a("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.1",user_id:f,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},sendForm:async(e,t,n,o)=>{let s=i(o),d=s.publicKey||r.publicKey,f=s.blockHeadless||r.blockHeadless,m=r.storageProvider||s.storageProvider,y={...r.blockList,...s.blockList},h={...r.limitRate,...s.limitRate};if(f&&u(navigator))return Promise.reject(c());let j=S(n);l(d,e,t),w(j);let P=new FormData(j);return p(y,P)?Promise.reject(g()):await v(location.pathname,h,m)?Promise.reject(b()):(P.append("lib_version","4.3.1"),P.append("service_id",e),P.append("template_id",t),P.append("user_id",d),a("/api/v1.0/email/send-form",P))}}},2862:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(t),o=r(n);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var c=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],d=function(e,t){var r,a=e.animationData,d=e.loop,f=e.autoplay,m=e.initialSegment,p=e.onComplete,g=e.onLoopComplete,y=e.onEnterFrame,h=e.onSegmentStart,v=e.onConfigReady,b=e.onDataReady,w=e.onDataFailed,S=e.onLoadedImages,j=e.onDOMLoaded,P=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var _=s(e,c),O=function(e){if(Array.isArray(e))return e}(r=n.useState(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}(r,2)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=O[0],E=O[1],C=n.useRef(),R=n.useRef(null),A=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(R.current){null===(t=C.current)||void 0===t||t.destroy();var r=l(l(l({},e),n),{},{container:R.current});return C.current=i.default.loadAnimation(r),E(!!C.current),function(){var e;null===(e=C.current)||void 0===e||e.destroy(),C.current=void 0}}};return n.useEffect(function(){var e=A();return function(){return null==e?void 0:e()}},[a,d]),n.useEffect(function(){C.current&&(C.current.autoplay=!!f)},[f]),n.useEffect(function(){if(C.current){if(!m){C.current.resetSegments(!0);return}Array.isArray(m)&&m.length&&((C.current.currentRawFrame<m[0]||C.current.currentRawFrame>m[1])&&(C.current.currentRawFrame=m[0]),C.current.setSegment(m[0],m[1]))}},[m]),n.useEffect(function(){var e=[{name:"complete",handler:p},{name:"loopComplete",handler:g},{name:"enterFrame",handler:y},{name:"segmentStart",handler:h},{name:"config_ready",handler:v},{name:"data_ready",handler:b},{name:"data_failed",handler:w},{name:"loaded_images",handler:S},{name:"DOMLoaded",handler:j},{name:"destroy",handler:P}].filter(function(e){return null!=e.handler});if(e.length){var t=e.map(function(e){var t;return null===(t=C.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=C.current)||void 0===t||t.removeEventListener(e.name,e.handler)}});return function(){t.forEach(function(e){return e()})}}},[p,g,y,h,v,b,w,S,j,P]),{View:o.default.createElement("div",l({style:t,ref:R},_)),play:function(){var e;null===(e=C.current)||void 0===e||e.play()},stop:function(){var e;null===(e=C.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=C.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=C.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var n;null===(n=C.current)||void 0===n||n.goToAndStop(e,t)},goToAndPlay:function(e,t){var n;null===(n=C.current)||void 0===n||n.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=C.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var n;null===(n=C.current)||void 0===n||n.playSegments(e,t)},setSubframe:function(e){var t;null===(t=C.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=C.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=C.current)||void 0===e||e.destroy(),C.current=void 0},animationContainerRef:R,animationLoaded:x,animationItem:C.current}},f=function(e){var t=e.wrapperRef,r=e.animationItem,i=e.mode,o=e.actions;n.useEffect(function(){var e,n,a,l,s,u=t.current;if(u&&r&&o.length)switch(r.stop(),i){case"scroll":return e=null,n=function(){var t,n,i,a=(n=(t=u.getBoundingClientRect()).top,i=t.height,(window.innerHeight-n)/(window.innerHeight+i)),l=o.find(function(e){var t=e.visibility;return t&&a>=t[0]&&a<=t[1]});if(l){if("seek"===l.type&&l.visibility&&2===l.frames.length){var s=l.frames[0]+Math.ceil((a-l.visibility[0])/(l.visibility[1]-l.visibility[0])*l.frames[1]);r.goToAndStop(s-r.firstFrame-1,!0)}"loop"===l.type&&(null===e?(r.playSegments(l.frames,!0),e=l.frames):e!==l.frames?(r.playSegments(l.frames,!0),e=l.frames):r.isPaused&&(r.playSegments(l.frames,!0),e=l.frames)),"play"===l.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===l.type&&r.goToAndStop(l.frames[0]-r.firstFrame-1,!0)}},document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)};case"cursor":return a=function(e,t){var n=e,i=t;if(-1!==n&&-1!==i){var a,l,s,c,d=(a=n,l=i,c=(s=u.getBoundingClientRect()).top,{x:(a-s.left)/s.width,y:(l-c)/s.height});n=d.x,i=d.y}var f=o.find(function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?n>=t.x[0]&&n<=t.x[1]&&i>=t.y[0]&&i<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&n===t.x&&i===t.y});if(f){if("seek"===f.type&&f.position&&Array.isArray(f.position.x)&&Array.isArray(f.position.y)&&2===f.frames.length){var m=(n-f.position.x[0])/(f.position.x[1]-f.position.x[0]),p=(i-f.position.y[0])/(f.position.y[1]-f.position.y[0]);r.playSegments(f.frames,!0),r.goToAndStop(Math.ceil((m+p)/2*(f.frames[1]-f.frames[0])),!0)}"loop"===f.type&&r.playSegments(f.frames,!0),"play"===f.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(f.frames)),"stop"===f.type&&r.goToAndStop(f.frames[0],!0)}},l=function(e){a(e.clientX,e.clientY)},s=function(){a(-1,-1)},u.addEventListener("mousemove",l),u.addEventListener("mouseout",s),function(){u.removeEventListener("mousemove",l),u.removeEventListener("mouseout",s)}}},[i,r])},m=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,i=r.animationItem,o=r.View;return f({actions:t,animationItem:i,mode:n,wrapperRef:r.animationContainerRef}),o},p=["style","interactivity"];Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return i.default}}),e.default=function(e){var t,r,i,o=e.style,a=e.interactivity,l=d(s(e,p),o),u=l.View,c=l.play,f=l.stop,g=l.pause,y=l.setSpeed,h=l.goToAndStop,v=l.goToAndPlay,b=l.setDirection,w=l.playSegments,S=l.setSubframe,j=l.getDuration,P=l.destroy,_=l.animationContainerRef,O=l.animationLoaded,x=l.animationItem;return n.useEffect(function(){e.lottieRef&&(e.lottieRef.current={play:c,stop:f,pause:g,setSpeed:y,goToAndPlay:v,goToAndStop:h,setDirection:b,playSegments:w,setSubframe:S,getDuration:j,destroy:P,animationContainerRef:_,animationLoaded:O,animationItem:x})},[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),m({lottieObj:{View:u,play:c,stop:f,pause:g,setSpeed:y,goToAndStop:h,goToAndPlay:v,setDirection:b,playSegments:w,setSubframe:S,getDuration:j,destroy:P,animationContainerRef:_,animationLoaded:O,animationItem:x},actions:null!==(r=null==a?void 0:a.actions)&&void 0!==r?r:[],mode:null!==(i=null==a?void 0:a.mode)&&void 0!==i?i:"scroll"})},e.useLottie=d,e.useLottieInteractivity=m,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(4698),n(2265))},1749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(6921),i=n(1884),o=n(7437),a=i._(n(2265)),l=r._(n(4887)),s=r._(n(2251)),u=n(8630),c=n(6906),d=n(337);n(6184);let f=n(6993),m=r._(n(536)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,i,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function y(e){let[t,n]=a.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:s,decoding:u,className:c,style:d,fetchPriority:f,placeholder:m,loading:p,unoptimized:h,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:j,onLoad:P,onError:_,...O}=e;return(0,o.jsx)("img",{...O,...y(f),loading:p,width:s,height:l,decoding:u,"data-nimg":v?"fill":"1",className:c,style:d,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&g(e,m,b,w,S,h))},[n,m,b,w,S,_,h,t]),onLoad:e=>{g(e.currentTarget,m,b,w,S,h)},onError:e=>{j(!0),"empty"!==m&&S(!0),_&&_(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...y(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(d.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=p||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let y=(0,a.useRef)(s);(0,a.useEffect)(()=>{y.current=s},[s]);let[b,w]=(0,a.useState)(!1),[S,j]=(0,a.useState)(!1),{props:P,meta:_}=(0,u.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:b,showAltText:S});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{...P,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:g,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:j,ref:t}),_.priority?(0,o.jsx)(v,{isAppRouter:!n,imgAttributes:P}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(6921)._(n(2265)).default.createContext({})},3044:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(6184);let r=n(7160),i=n(6906);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:y,width:h,height:v,fill:b=!1,style:w,onLoad:S,onLoadingComplete:j,placeholder:P="empty",blurDataURL:_,fetchPriority:O,layout:x,objectFit:E,objectPosition:C,lazyBoundary:R,lazyRoot:A,...k}=e,{imgConf:M,showAltText:D,blurComplete:I,defaultLoader:L}=t,T=M||i.imageConfigDefault;if("allSizes"in T)l=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);l={...T,allSizes:e,deviceSizes:t}}let z=k.loader||L;delete k.loader,delete k.srcSet;let N="__next_img_default"in z;if(N){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:n,...r}=t;return e(r)}}if(x){"fill"===x&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!d&&(d=t)}let F="",H=a(h),V=a(v);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,_=_||e.blurDataURL,F=e.src,!b){if(H||V){if(H&&!V){let t=H/e.width;V=Math.round(e.height*t)}else if(!H&&V){let t=V/e.height;H=Math.round(e.width*t)}}else H=e.width,V=e.height}}let q=!m&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,q=!1),l.unoptimized&&(f=!0),N&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(O="high");let B=a(y),U=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:C}:{},D?{}:{color:"transparent"},w),G=I||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:H,heightInt:V,blurWidth:s,blurHeight:u,blurDataURL:_||"",objectFit:U.objectFit})+'")':'url("'+P+'")',K=G?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},W=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:n,quality:o,width:s[c]})}}({config:l,src:c,unoptimized:f,width:H,quality:B,sizes:d,loader:z});return{props:{...k,loading:q?"lazy":p,fetchPriority:O,width:H,height:V,decoding:"async",className:g,style:{...U,...K},sizes:W.sizes,srcSet:W.srcSet,src:W.src},meta:{unoptimized:f,priority:m,placeholder:P,fill:b}}}},2251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return g}});let r=n(6921),i=n(1884),o=n(7437),a=i._(n(2265)),l=r._(n(7392)),s=n(5827),u=n(7484),c=n(3044);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6184);let m=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7160:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,s=i?40*i:n,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(6921)._(n(2265)),i=n(6906),o=r.default.createContext(i.imageConfigDefault)},6906:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},536:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2265),i=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let o=r.forwardRef(function(e,t){let{style:n={},className:o="",autoFill:a=!1,play:l=!0,pauseOnHover:s=!1,pauseOnClick:u=!1,direction:c="left",speed:d=50,delay:f=0,loop:m=0,gradient:p=!1,gradientColor:g="white",gradientWidth:y=200,onFinish:h,onCycleComplete:v,onMount:b,children:w}=e,[S,j]=r.useState(0),[P,_]=r.useState(0),[O,x]=r.useState(1),[E,C]=r.useState(!1),R=r.useRef(null),A=t||R,k=r.useRef(null),M=r.useCallback(()=>{if(k.current&&A.current){let e=A.current.getBoundingClientRect(),t=k.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===c||"down"===c)&&(n=e.height,r=t.height),a&&n&&r?x(r<n?Math.ceil(n/r):1):x(1),j(n),_(r)}},[a,A,c]);r.useEffect(()=>{if(E&&(M(),k.current&&A.current)){let e=new ResizeObserver(()=>M());return e.observe(A.current),e.observe(k.current),()=>{e&&e.disconnect()}}},[M,A,E]),r.useEffect(()=>{M()},[M,w]),r.useEffect(()=>{C(!0)},[]),r.useEffect(()=>{"function"==typeof b&&b()},[]);let D=r.useMemo(()=>a?P*O/d:P<S?S/d:P/d,[a,S,P,O,d]),I=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||s?"paused":"running","--pause-on-click":!l||s&&!u||u?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"}),[n,l,s,u,c]),L=r.useMemo(()=>({"--gradient-color":g,"--gradient-width":"number"==typeof y?"".concat(y,"px"):y}),[g,y]),T=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":"".concat(D,"s"),"--delay":"".concat(f,"s"),"--iteration-count":m?"".concat(m):"infinite","--min-width":a?"auto":"100%"}),[l,c,D,f,m,a]),z=r.useMemo(()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"}),[c]),N=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(w,e=>i.default.createElement("div",{style:z,className:"rfm-child"},e)))),[z,w]);return E?i.default.createElement("div",{ref:A,style:I,className:"rfm-marquee-container "+o},p&&i.default.createElement("div",{style:L,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:T,onAnimationIteration:v,onAnimationEnd:h},i.default.createElement("div",{className:"rfm-initial-child-container",ref:k},r.Children.map(w,e=>i.default.createElement("div",{style:z,className:"rfm-child"},e))),N(O-1)),i.default.createElement("div",{className:"rfm-marquee",style:T},N(O))):null});t.default=o}}]);