import{r as b,R as Gr,u as J,j as L,g as Gg,m as Kr,t as Kg,a as Qg,c as Yg}from"./index-Ci12DeJz.js";var Xg={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},Jg={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},Zg={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},ty={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};const Tf=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ps=b.createContext({}),xs=b.createContext(null),Ss=typeof document<"u",Ga=Ss?b.useLayoutEffect:b.useEffect,Ef=b.createContext({strict:!1}),Ka=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),ey="framerAppearId",wf="data-"+Ka(ey),bf={skipAnimations:!1,useManualTiming:!1};class Nc{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function ny(e){let t=new Nc,n=new Nc,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const h=u&&i,f=h?t:n;return c&&o.add(l),f.add(l)&&h&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const u=t.order[c];o.has(u)&&(a.schedule(u),e()),u(l)}i=!1,s&&(s=!1,a.process(l))}};return a}const vi=["prepare","read","update","preRender","render","postRender"],ry=40;function Af(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=vi.reduce((h,f)=>(h[f]=ny(()=>n=!0),h),{}),o=h=>{s[h].process(i)},a=()=>{const h=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(h-i.timestamp,ry),1),i.timestamp=h,i.isProcessing=!0,vi.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:vi.reduce((h,f)=>{const d=s[f];return h[f]=(m,p=!1,g=!1)=>(n||l(),d.schedule(m,p,g)),h},{}),cancel:h=>vi.forEach(f=>s[f].cancel(h)),state:i,steps:s}}const{schedule:Qa,cancel:zx}=Af(queueMicrotask,!1);function iy(e,t,n,r){const{visualElement:i}=b.useContext(Ps),s=b.useContext(Ef),o=b.useContext(xs),a=b.useContext(Tf).reducedMotion,l=b.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;b.useInsertionEffect(()=>{c&&c.update(n,o)});const u=b.useRef(!!(n[wf]&&!window.HandoffComplete));return Ga(()=>{c&&(Qa.postRender(c.render),u.current&&c.animationState&&c.animationState.animateChanges())}),b.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function gn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function sy(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):gn(n)&&(n.current=r))},[t])}function Er(e){return typeof e=="string"||Array.isArray(e)}function Rs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ya=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xa=["initial",...Ya];function Cs(e){return Rs(e.animate)||Xa.some(t=>Er(e[t]))}function If(e){return!!(Cs(e)||e.variants)}function oy(e,t){if(Cs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Er(n)?n:void 0,animate:Er(r)?r:void 0}}return e.inherit!==!1?t:{}}function ay(e){const{initial:t,animate:n}=oy(e,b.useContext(Ps));return b.useMemo(()=>({initial:t,animate:n}),[Lc(t),Lc(n)])}function Lc(e){return Array.isArray(e)?e.join(" "):e}const Fc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},wr={};for(const e in Fc)wr[e]={isEnabled:t=>Fc[e].some(n=>!!t[n])};function ly(e){for(const t in e)wr[t]={...wr[t],...e[t]}}const Ja=b.createContext({}),Pf=b.createContext({}),cy=Symbol.for("motionComponentSymbol");function uy({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&ly(e);function s(a,l){let c;const u={...b.useContext(Tf),...a,layoutId:hy(a)},{isStatic:h}=u,f=ay(a),d=r(a,h);if(!h&&Ss){f.visualElement=iy(i,d,u,t);const m=b.useContext(Pf),p=b.useContext(Ef).strict;f.visualElement&&(c=f.visualElement.loadFeatures(u,p,e,m))}return b.createElement(Ps.Provider,{value:f},c&&f.visualElement?b.createElement(c,{visualElement:f.visualElement,...u}):null,n(i,a,sy(d,f.visualElement,l),d,h,f.visualElement))}const o=b.forwardRef(s);return o[cy]=i,o}function hy({layoutId:e}){const t=b.useContext(Ja).id;return t&&e!==void 0?t+"-"+e:e}function fy(e){function t(r,i={}){return uy(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const dy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Za(e){return typeof e!="string"||e.includes("-")?!1:!!(dy.indexOf(e)>-1||/[A-Z]/.test(e))}const Ki={};function my(e){Object.assign(Ki,e)}const Qr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],sn=new Set(Qr);function xf(e,{layout:t,layoutId:n}){return sn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ki[e]||e==="opacity")}const kt=e=>!!(e&&e.getVelocity),py={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gy=Qr.length;function yy(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<gy;o++){const a=Qr[o];if(e[a]!==void 0){const l=py[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}const Sf=e=>t=>typeof t=="string"&&t.startsWith(e),Rf=Sf("--"),vy=Sf("var(--"),Qi=e=>vy(e)&&_y.test(e),_y=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,Ty=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ae=(e,t,n)=>n>t?t:n<e?e:n,Bn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},cr={...Bn,transform:e=>Ae(0,1,e)},_i={...Bn,default:1},ur=e=>Math.round(e*1e5)/1e5,tl=/(-)?([\d]*\.?[\d])+/g,Ey=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,wy=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Yr(e){return typeof e=="string"}const Xr=e=>({test:t=>Yr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ve=Xr("deg"),Qt=Xr("%"),V=Xr("px"),by=Xr("vh"),Ay=Xr("vw"),jc={...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)},Bc={...Bn,transform:Math.round},Cf={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,radius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,size:V,top:V,right:V,bottom:V,left:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,rotate:ve,rotateX:ve,rotateY:ve,rotateZ:ve,scale:_i,scaleX:_i,scaleY:_i,scaleZ:_i,skew:ve,skewX:ve,skewY:ve,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:cr,originX:jc,originY:jc,originZ:V,zIndex:Bc,fillOpacity:cr,strokeOpacity:cr,numOctaves:Bc};function el(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=e;let l=!1,c=!1,u=!0;for(const h in t){const f=t[h];if(Rf(h)){s[h]=f;continue}const d=Cf[h],m=Ty(f,d);if(sn.has(h)){if(l=!0,o[h]=m,!u)continue;f!==(d.default||0)&&(u=!1)}else h.startsWith("origin")?(c=!0,a[h]=m):i[h]=m}if(t.transform||(l||r?i.transform=yy(e.transform,n,u,r):i.transform&&(i.transform="none")),c){const{originX:h="50%",originY:f="50%",originZ:d=0}=a;i.transformOrigin=`${h} ${f} ${d}`}}const nl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vf(e,t,n){for(const r in t)!kt(t[r])&&!xf(r,n)&&(e[r]=t[r])}function Iy({transformTemplate:e},t,n){return b.useMemo(()=>{const r=nl();return el(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Py(e,t,n){const r=e.style||{},i={};return Vf(i,r,e),Object.assign(i,Iy(e,t,n)),i}function xy(e,t,n){const r={},i=Py(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Sy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Yi(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Sy.has(e)}let kf=e=>!Yi(e);function Ry(e){e&&(kf=t=>t.startsWith("on")?!Yi(t):e(t))}try{Ry(require("@emotion/is-prop-valid").default)}catch{}function Cy(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(kf(i)||n===!0&&Yi(i)||!t&&!Yi(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Uc(e,t,n){return typeof e=="string"?e:V.transform(t+n*e)}function Vy(e,t,n){const r=Uc(t,e.x,e.width),i=Uc(n,e.y,e.height);return`${r} ${i}`}const ky={offset:"stroke-dashoffset",array:"stroke-dasharray"},Dy={offset:"strokeDashoffset",array:"strokeDasharray"};function Oy(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?ky:Dy;e[s.offset]=V.transform(-r);const o=V.transform(t),a=V.transform(n);e[s.array]=`${o} ${a}`}function rl(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h,f){if(el(e,c,u,f),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:m,dimensions:p}=e;d.transform&&(p&&(m.transform=d.transform),delete d.transform),p&&(i!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=Vy(p,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),o!==void 0&&Oy(d,o,a,l,!1)}const Df=()=>({...nl(),attrs:{}}),il=e=>typeof e=="string"&&e.toLowerCase()==="svg";function My(e,t,n,r){const i=b.useMemo(()=>{const s=Df();return rl(s,t,{enableHardwareAcceleration:!1},il(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Vf(s,e.style,e),i.style={...s,...i.style}}return i}function Ny(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Za(n)?My:xy)(r,s,o,n),u={...Cy(r,typeof n=="string",e),...l,ref:i},{children:h}=r,f=b.useMemo(()=>kt(h)?h.get():h,[h]);return b.createElement(n,{...u,children:f})}}function Of(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Mf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Nf(e,t,n,r){Of(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Mf.has(i)?i:Ka(i),t.attrs[i])}function sl(e,t){const{style:n}=e,r={};for(const i in n)(kt(n[i])||t.style&&kt(t.style[i])||xf(i,e))&&(r[i]=n[i]);return r}function Lf(e,t){const n=sl(e,t);for(const r in e)if(kt(e[r])||kt(t[r])){const i=Qr.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function ol(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Ff(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Xi=e=>Array.isArray(e),Ly=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Fy=e=>Xi(e)?e[e.length-1]||0:e;function Bi(e){const t=kt(e)?e.get():e;return Ly(t)?t.toValue():t}function jy({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:By(r,i,s,e),renderState:t()};return n&&(o.mount=a=>n(r,a,o)),o}const jf=e=>(t,n)=>{const r=b.useContext(Ps),i=b.useContext(xs),s=()=>jy(e,t,r,i);return n?s():Ff(s)};function By(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=Bi(s[f]);let{initial:o,animate:a}=e;const l=Cs(e),c=If(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;return h&&typeof h!="boolean"&&!Rs(h)&&(Array.isArray(h)?h:[h]).forEach(d=>{const m=ol(e,d);if(!m)return;const{transitionEnd:p,transition:g,...E}=m;for(const v in E){let y=E[v];if(Array.isArray(y)){const w=u?y.length-1:0;y=y[w]}y!==null&&(i[v]=y)}for(const v in p)i[v]=p[v]}),i}const lt=e=>e,{schedule:X,cancel:ce,state:yt,steps:uo}=Af(typeof requestAnimationFrame<"u"?requestAnimationFrame:lt,!0),Uy={useVisualState:jf({scrapeMotionValuesFromProps:Lf,createRenderState:Df,onMount:(e,t,{renderState:n,latestValues:r})=>{X.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),X.render(()=>{rl(n,r,{enableHardwareAcceleration:!1},il(t.tagName),e.transformTemplate),Nf(t,n)})}})},$y={useVisualState:jf({scrapeMotionValuesFromProps:sl,createRenderState:nl})};function zy(e,{forwardMotionProps:t=!1},n,r){return{...Za(e)?Uy:$y,preloadedFeatures:n,useRender:Ny(t),createVisualElement:r,Component:e}}function ne(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Bf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Vs(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const qy=e=>t=>Bf(t)&&e(t,Vs(t));function ie(e,t,n,r){return ne(e,t,qy(n),r)}const Wy=(e,t)=>n=>t(e(n)),se=(...e)=>e.reduce(Wy);function Uf(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const $c=Uf("dragHorizontal"),zc=Uf("dragVertical");function $f(e){let t=!1;if(e==="y")t=zc();else if(e==="x")t=$c();else{const n=$c(),r=zc();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function zf(){const e=$f(!0);return e?(e(),!1):!0}class ke{constructor(t){this.isMounted=!1,this.node=t}update(){}}function qc(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||zf())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&X.update(()=>a[r](s,o))};return ie(e.current,n,i,{passive:!e.getProps()[r]})}class Hy extends ke{mount(){this.unmount=se(qc(this.node,!0),qc(this.node,!1))}unmount(){}}class Gy extends ke{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=se(ne(this.node.current,"focus",()=>this.onFocus()),ne(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const qf=(e,t)=>t?e===t?!0:qf(e,t.parentElement):!1;function ho(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Vs(n))}class Ky extends ke{constructor(){super(...arguments),this.removeStartListeners=lt,this.removeEndListeners=lt,this.removeAccessibleListeners=lt,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=ie(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps();X.update(()=>{!h&&!qf(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=ie(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=se(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||ho("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&X.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=ne(this.node.current,"keyup",o),ho("down",(a,l)=>{this.startPress(a,l)})},n=ne(this.node.current,"keydown",t),r=()=>{this.isPressing&&ho("cancel",(s,o)=>this.cancelPress(s,o))},i=ne(this.node.current,"blur",r);this.removeAccessibleListeners=se(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&X.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!zf()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&X.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=ie(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=ne(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=se(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const qo=new WeakMap,fo=new WeakMap,Qy=e=>{const t=qo.get(e.target);t&&t(e)},Yy=e=>{e.forEach(Qy)};function Xy({root:e,...t}){const n=e||document;fo.has(n)||fo.set(n,{});const r=fo.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Yy,{root:e,...t})),r[i]}function Jy(e,t,n){const r=Xy(t);return qo.set(e,n),r.observe(e),()=>{qo.delete(e),r.unobserve(e)}}const Zy={some:0,all:1};class tv extends ke{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Zy[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=c?u:h;f&&f(l)};return Jy(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(ev(t,n))&&this.startObserver()}unmount(){}}function ev({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const nv={inView:{Feature:tv},tap:{Feature:Ky},focus:{Feature:Gy},hover:{Feature:Hy}};function Wf(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function rv(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function iv(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ks(e,t,n){const r=e.getProps();return ol(r,t,n!==void 0?n:r.custom,rv(e),iv(e))}let al=lt;const Qe=e=>e*1e3,oe=e=>e/1e3,sv={current:!1},Hf=e=>Array.isArray(e)&&typeof e[0]=="number";function Gf(e){return!!(!e||typeof e=="string"&&Kf[e]||Hf(e)||Array.isArray(e)&&e.every(Gf))}const rr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Kf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:rr([0,.65,.55,1]),circOut:rr([.55,0,1,.45]),backIn:rr([.31,.01,.66,-.59]),backOut:rr([.33,1.53,.69,.99])};function Qf(e){if(e)return Hf(e)?rr(e):Array.isArray(e)?e.map(Qf):Kf[e]}function ov(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const u=Qf(a);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function av(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Yf=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,lv=1e-7,cv=12;function uv(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=Yf(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>lv&&++a<cv);return o}function Jr(e,t,n,r){if(e===t&&n===r)return lt;const i=s=>uv(s,0,1,e,n);return s=>s===0||s===1?s:Yf(i(s),t,r)}const hv=Jr(.42,0,1,1),fv=Jr(0,0,.58,1),Xf=Jr(.42,0,.58,1),dv=e=>Array.isArray(e)&&typeof e[0]!="number",Jf=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Zf=e=>t=>1-e(1-t),ll=e=>1-Math.sin(Math.acos(e)),td=Zf(ll),mv=Jf(ll),ed=Jr(.33,1.53,.69,.99),cl=Zf(ed),pv=Jf(cl),gv=e=>(e*=2)<1?.5*cl(e):.5*(2-Math.pow(2,-10*(e-1))),yv={linear:lt,easeIn:hv,easeInOut:Xf,easeOut:fv,circIn:ll,circInOut:mv,circOut:td,backIn:cl,backInOut:pv,backOut:ed,anticipate:gv},Wc=e=>{if(Array.isArray(e)){al(e.length===4);const[t,n,r,i]=e;return Jr(t,n,r,i)}else if(typeof e=="string")return yv[e];return e},br=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},tt=(e,t,n)=>e+(t-e)*n;function mo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function vv({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=mo(l,a,e+1/3),s=mo(l,a,e),o=mo(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const ul=(e,t)=>n=>!!(Yr(n)&&wy.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),nd=(e,t,n)=>r=>{if(!Yr(r))return r;const[i,s,o,a]=r.match(tl);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},_v=e=>Ae(0,255,e),po={...Bn,transform:e=>Math.round(_v(e))},$e={test:ul("rgb","red"),parse:nd("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+po.transform(e)+", "+po.transform(t)+", "+po.transform(n)+", "+ur(cr.transform(r))+")"};function Tv(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Wo={test:ul("#"),parse:Tv,transform:$e.transform},yn={test:ul("hsl","hue"),parse:nd("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Qt.transform(ur(t))+", "+Qt.transform(ur(n))+", "+ur(cr.transform(r))+")"},go=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ev=[Wo,$e,yn],wv=e=>Ev.find(t=>t.test(e));function Hc(e){const t=wv(e);let n=t.parse(e);return t===yn&&(n=vv(n)),n}const Gc=(e,t)=>{const n=Hc(e),r=Hc(t),i={...n};return s=>(i.red=go(n.red,r.red,s),i.green=go(n.green,r.green,s),i.blue=go(n.blue,r.blue,s),i.alpha=tt(n.alpha,r.alpha,s),$e.transform(i))},At={test:e=>$e.test(e)||Wo.test(e)||yn.test(e),parse:e=>$e.test(e)?$e.parse(e):yn.test(e)?yn.parse(e):Wo.parse(e),transform:e=>Yr(e)?e:e.hasOwnProperty("red")?$e.transform(e):yn.transform(e)};function bv(e){var t,n;return isNaN(e)&&Yr(e)&&(((t=e.match(tl))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Ey))===null||n===void 0?void 0:n.length)||0)>0}const rd="number",id="color",Av="var",Iv="var(",Kc="${}",Qc=/(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;function Ji(e){const t=e.toString(),n=t.match(Qc)||[],r=[],i={color:[],number:[],var:[]},s=[];for(let l=0;l<n.length;l++){const c=n[l];At.test(c)?(i.color.push(l),s.push(id),r.push(At.parse(c))):c.startsWith(Iv)?(i.var.push(l),s.push(Av),r.push(c)):(i.number.push(l),s.push(rd),r.push(parseFloat(c)))}const a=t.replace(Qc,Kc).split(Kc);return{values:r,split:a,indexes:i,types:s}}function sd(e){return Ji(e).values}function od(e){const{split:t,types:n}=Ji(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===rd?s+=ur(i[o]):a===id?s+=At.transform(i[o]):s+=i[o]}return s}}const Pv=e=>typeof e=="number"?0:e;function xv(e){const t=sd(e);return od(e)(t.map(Pv))}const Ie={test:bv,parse:sd,createTransformer:od,getAnimatableNone:xv};function Ho(e,t){return n=>n>0?t:e}function Sv(e,t){return n=>tt(e,t,n)}function hl(e){return typeof e=="number"?Sv:typeof e=="string"?Qi(e)?Ho:At.test(e)?Gc:Vv:Array.isArray(e)?ad:typeof e=="object"?At.test(e)?Gc:Rv:Ho}function ad(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>hl(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function Rv(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=hl(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function Cv(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const Vv=(e,t)=>{const n=Ie.createTransformer(t),r=Ji(e),i=Ji(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?se(ad(Cv(r,i),i.values),n):Ho(e,t)};function ld(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?tt(e,t,n):hl(e)(e,t)}function kv(e,t,n){const r=[],i=n||ld,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||lt:t;a=se(l,a)}r.push(a)}return r}function Dv(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(al(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=kv(t,r,i),a=o.length,l=c=>{let u=0;if(a>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const h=br(e[u],e[u+1],c);return o[u](h)};return n?c=>l(Ae(e[0],e[s-1],c)):l}function Ov(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=br(0,t,r);e.push(tt(n,1,i))}}function Mv(e){const t=[0];return Ov(t,e.length-1),t}function Nv(e,t){return e.map(n=>n*t)}function Lv(e,t){return e.map(()=>t||Xf).splice(0,e.length-1)}function Zi({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=dv(r)?r.map(Wc):Wc(r),s={done:!1,value:t[0]},o=Nv(n&&n.length===t.length?n:Mv(t),e),a=Dv(o,t,{ease:Array.isArray(i)?i:Lv(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}function cd(e,t){return t?e*(1e3/t):0}const Fv=5;function ud(e,t,n){const r=Math.max(t-Fv,0);return cd(n-e(r),t-r)}const yo=.001,jv=.01,Bv=10,Uv=.05,$v=1;function zv({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s,o=1-t;o=Ae(Uv,$v,o),e=Ae(jv,Bv,oe(e)),o<1?(i=c=>{const u=c*o,h=u*e,f=u-n,d=Go(c,o),m=Math.exp(-h);return yo-f/d*m},s=c=>{const h=c*o*e,f=h*n+n,d=Math.pow(o,2)*Math.pow(c,2)*e,m=Math.exp(-h),p=Go(Math.pow(c,2),o);return(-i(c)+yo>0?-1:1)*((f-d)*m)/p}):(i=c=>{const u=Math.exp(-c*e),h=(c-n)*e+1;return-yo+u*h},s=c=>{const u=Math.exp(-c*e),h=(n-c)*(e*e);return u*h});const a=5/e,l=Wv(i,s,a);if(e=Qe(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const qv=12;function Wv(e,t,n){let r=n;for(let i=1;i<qv;i++)r=r-e(r)/t(r);return r}function Go(e,t){return e*Math.sqrt(1-t*t)}const Hv=["duration","bounce"],Gv=["stiffness","damping","mass"];function Yc(e,t){return t.some(n=>e[n]!==void 0)}function Kv(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Yc(e,Gv)&&Yc(e,Hv)){const n=zv(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function hd({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:f}=Kv({...r,velocity:-oe(r.velocity||0)}),d=h||0,m=l/(2*Math.sqrt(a*c)),p=s-i,g=oe(Math.sqrt(a/c)),E=Math.abs(p)<5;n||(n=E?.01:2),t||(t=E?.005:.5);let v;if(m<1){const y=Go(g,m);v=w=>{const x=Math.exp(-m*g*w);return s-x*((d+m*g*p)/y*Math.sin(y*w)+p*Math.cos(y*w))}}else if(m===1)v=y=>s-Math.exp(-g*y)*(p+(d+g*p)*y);else{const y=g*Math.sqrt(m*m-1);v=w=>{const x=Math.exp(-m*g*w),F=Math.min(y*w,300);return s-x*((d+m*g*p)*Math.sinh(F)+y*p*Math.cosh(F))/y}}return{calculatedDuration:f&&u||null,next:y=>{const w=v(y);if(f)o.done=y>=u;else{let x=d;y!==0&&(m<1?x=ud(v,y,w):x=0);const F=Math.abs(x)<=n,B=Math.abs(s-w)<=t;o.done=F&&B}return o.value=o.done?s:w,o}}}function Xc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=e[0],f={done:!1,value:h},d=N=>a!==void 0&&N<a||l!==void 0&&N>l,m=N=>a===void 0?l:l===void 0||Math.abs(a-N)<Math.abs(l-N)?a:l;let p=n*t;const g=h+p,E=o===void 0?g:o(g);E!==g&&(p=E-h);const v=N=>-p*Math.exp(-N/r),y=N=>E+v(N),w=N=>{const j=v(N),pt=y(N);f.done=Math.abs(j)<=c,f.value=f.done?E:pt};let x,F;const B=N=>{d(f.value)&&(x=N,F=hd({keyframes:[f.value,m(f.value)],velocity:ud(y,N,f.value),damping:i,stiffness:s,restDelta:c,restSpeed:u}))};return B(0),{calculatedDuration:null,next:N=>{let j=!1;return!F&&x===void 0&&(j=!0,w(N),B(N)),x!==void 0&&N>x?F.next(N-x):(!j&&w(N),f)}}}let Ui;function Qv(){Ui=void 0}const Ye={now:()=>(Ui===void 0&&Ye.set(yt.isProcessing||bf.useManualTiming?yt.timestamp:performance.now()),Ui),set:e=>{Ui=e,queueMicrotask(Qv)}},Yv=e=>{const t=({timestamp:n})=>e(n);return{start:()=>X.update(t,!0),stop:()=>ce(t),now:()=>yt.isProcessing?yt.timestamp:Ye.now()}},Jc=2e4;function Zc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Jc;)t+=n,r=e.next(t);return t>=Jc?1/0:t}const Xv={decay:Xc,inertia:Xc,tween:Zi,keyframes:Zi,spring:hd},Jv=e=>e/100;function ts({autoplay:e=!0,delay:t=0,driver:n=Yv,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:h,...f}){let d=1,m=!1,p,g;const E=()=>{g=new Promise(Z=>{p=Z})};E();let v;const y=Xv[i]||Zi;let w;y!==Zi&&typeof r[0]!="number"&&(w=se(Jv,ld(r[0],r[1])),r=[0,100]);const x=y({...f,keyframes:r});let F;a==="mirror"&&(F=y({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let B="idle",N=null,j=null,pt=null;x.calculatedDuration===null&&s&&(x.calculatedDuration=Zc(x));const{calculatedDuration:cn}=x;let Ut=1/0,ee=1/0;cn!==null&&(Ut=cn+o,ee=Ut*(s+1)-o);let Ct=0;const un=Z=>{if(j===null)return;d>0&&(j=Math.min(j,Z)),d<0&&(j=Math.min(Z-ee/d,j)),N!==null?Ct=N:Ct=Math.round(Z-j)*d;const Yn=Ct-t*(d>=0?1:-1),kc=d>=0?Yn<0:Yn>ee;Ct=Math.max(Yn,0),B==="finished"&&N===null&&(Ct=ee);let Dc=Ct,Oc=x;if(s){const co=Math.min(Ct,ee)/Ut;let yi=Math.floor(co),Me=co%1;!Me&&co>=1&&(Me=1),Me===1&&yi--,yi=Math.min(yi,s+1),!!(yi%2)&&(a==="reverse"?(Me=1-Me,o&&(Me-=o/Ut)):a==="mirror"&&(Oc=F)),Dc=Ae(0,1,Me)*Ut}const Xn=kc?{done:!1,value:r[0]}:Oc.next(Dc);w&&(Xn.value=w(Xn.value));let{done:Mc}=Xn;!kc&&cn!==null&&(Mc=d>=0?Ct>=ee:Ct<=0);const Hg=N===null&&(B==="finished"||B==="running"&&Mc);return h&&h(Xn.value),Hg&&Qn(),Xn},gt=()=>{v&&v.stop(),v=void 0},ge=()=>{B="idle",gt(),p(),E(),j=pt=null},Qn=()=>{B="finished",u&&u(),gt(),p()},hn=()=>{if(m)return;v||(v=n(un));const Z=v.now();l&&l(),N!==null?j=Z-N:(!j||B==="finished")&&(j=Z),B==="finished"&&E(),pt=j,N=null,B="running",v.start()};e&&hn();const Vc={then(Z,Yn){return g.then(Z,Yn)},get time(){return oe(Ct)},set time(Z){Z=Qe(Z),Ct=Z,N!==null||!v||d===0?N=Z:j=v.now()-Z/d},get duration(){const Z=x.calculatedDuration===null?Zc(x):x.calculatedDuration;return oe(Z)},get speed(){return d},set speed(Z){Z===d||!v||(d=Z,Vc.time=oe(Ct))},get state(){return B},play:hn,pause:()=>{B="paused",N=Ct},stop:()=>{m=!0,B!=="idle"&&(B="idle",c&&c(),ge())},cancel:()=>{pt!==null&&un(pt),ge()},complete:()=>{B="finished"},sample:Z=>(j=0,un(Z))};return Vc}function Zv(e){let t;return()=>(t===void 0&&(t=e()),t)}const t_=Zv(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),e_=new Set(["opacity","clipPath","filter","transform"]),Ti=10,n_=2e4,r_=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Gf(t.ease);function i_(e,t,{onUpdate:n,onComplete:r,...i}){if(!(t_()&&e_.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(y=>{a=y})};u();let{keyframes:h,duration:f=300,ease:d,times:m}=i;if(r_(t,i)){const y=ts({...i,repeat:0,delay:0});let w={done:!1,value:h[0]};const x=[];let F=0;for(;!w.done&&F<n_;)w=y.sample(F),x.push(w.value),F+=Ti;m=void 0,h=x,f=F-Ti,d="linear"}const p=ov(e.owner.current,t,h,{...i,duration:f,ease:d,times:m}),g=()=>{c=!1,p.cancel()},E=()=>{c=!0,X.update(g),a(),u()};return p.onfinish=()=>{c||(e.set(av(h,i)),r&&r(),E())},{then(y,w){return l.then(y,w)},attachTimeline(y){return p.timeline=y,p.onfinish=null,lt},get time(){return oe(p.currentTime||0)},set time(y){p.currentTime=Qe(y)},get speed(){return p.playbackRate},set speed(y){p.playbackRate=y},get duration(){return oe(f)},play:()=>{o||(p.play(),ce(g))},pause:()=>p.pause(),stop:()=>{if(o=!0,p.playState==="idle")return;const{currentTime:y}=p;if(y){const w=ts({...i,autoplay:!1});e.setWithVelocity(w.sample(y-Ti).value,w.sample(y).value,Ti)}E()},complete:()=>{c||p.finish()},cancel:E}}function s_({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:lt,pause:lt,stop:lt,then:s=>(s(),Promise.resolve()),cancel:lt,complete:lt});return t?ts({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const o_={type:"spring",stiffness:500,damping:25,restSpeed:10},a_=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),l_={type:"keyframes",duration:.8},c_={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},u_=(e,{keyframes:t})=>t.length>2?l_:sn.has(e)?e.startsWith("scale")?a_(t[1]):o_:c_,Ko=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ie.test(t)||t==="0")&&!t.startsWith("url(")),h_=new Set(["brightness","contrast","saturate","opacity"]);function f_(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(tl)||[];if(!r)return e;const i=n.replace(r,"");let s=h_.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const d_=/([a-z-]*)\(.*?\)/g,Qo={...Ie,getAnimatableNone:e=>{const t=e.match(d_);return t?t.map(f_).join(" "):e}},m_={...Cf,color:At,backgroundColor:At,outlineColor:At,fill:At,stroke:At,borderColor:At,borderTopColor:At,borderRightColor:At,borderBottomColor:At,borderLeftColor:At,filter:Qo,WebkitFilter:Qo},fl=e=>m_[e];function fd(e,t){let n=fl(e);return n!==Qo&&(n=Ie),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const dd=e=>/^0[^.\s]+$/.test(e);function p_(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||dd(e)}function g_(e,t,n,r){const i=Ko(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:e.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),p_(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(i&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];s[u]=fd(t,a)}return s}function y_({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function dl(e,t){return e[t]||e.default||e}const ml=(e,t,n,r={})=>i=>{const s=dl(r,e)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Qe(o);const l=g_(t,e,n,s),c=l[0],u=l[l.length-1],h=Ko(e,c),f=Ko(e,u);let d={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:m=>{t.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(y_(s)||(d={...d,...u_(e,d)}),d.duration&&(d.duration=Qe(d.duration)),d.repeatDelay&&(d.repeatDelay=Qe(d.repeatDelay)),!h||!f||sv.current||s.type===!1||bf.skipAnimations)return s_(d);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const m=i_(t,e,d);if(m)return m}return ts(d)};function es(e){return!!(kt(e)&&e.add)}const md=e=>/^\-?\d*\.?\d+$/.test(e);function pl(e,t){e.indexOf(t)===-1&&e.push(t)}function gl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class yl{constructor(){this.subscriptions=[]}add(t){return pl(this.subscriptions,t),()=>gl(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tu=30,v_=e=>!isNaN(parseFloat(e));class __{constructor(t,n={}){this.version="11.0.5",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Ye.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.canTrackVelocity=v_(this.current),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ye.now()}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new yl);const r=this.events[t].add(n);return t==="change"?()=>{r(),X.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ye.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>tu)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,tu);return cd(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Rn(e,t){return new __(e,t)}const pd=e=>t=>t.test(e),T_={test:e=>e==="auto",parse:e=>e},gd=[Bn,V,Qt,ve,Ay,by,T_],Jn=e=>gd.find(pd(e)),E_=[...gd,At,Ie],w_=e=>E_.find(pd(e));function b_(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Rn(n))}function A_(e,t){const n=ks(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=Fy(s[o]);b_(e,o,a)}}function I_(e,t,n){var r,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=t[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(md(u)||dd(u))?u=parseFloat(u):!w_(u)&&Ie.test(c)&&(u=fd(l,c)),e.addValue(l,Rn(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function P_(e,t){return t?(t[e]||t.default||t).from:void 0}function x_(e,t,n){const r={};for(const i in e){const s=P_(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function S_({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function R_(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function yd(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const h in a){const f=e.getValue(h),d=a[h];if(!f||d===void 0||u&&S_(u,h))continue;const m={delay:n,elapsed:0,...dl(s||{},h)};if(window.HandoffAppearAnimations){const E=e.getProps()[wf];if(E){const v=window.HandoffAppearAnimations(E,h,f,X);v!==null&&(m.elapsed=v,m.isHandoff=!0)}}let p=!m.isHandoff&&!R_(f,d);if(m.type==="spring"&&(f.getVelocity()||m.velocity)&&(p=!1),f.animation&&(p=!1),p)continue;f.start(ml(h,f,d,e.shouldReduceMotion&&sn.has(h)?{type:!1}:m));const g=f.animation;es(l)&&(l.add(h),g.then(()=>l.remove(h))),c.push(g)}return o&&Promise.all(c).then(()=>{o&&A_(e,o)}),c}function Yo(e,t,n={}){const r=ks(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(yd(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:h}=i;return C_(e,t,c+l,u,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function C_(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(V_).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(Yo(c,t,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function V_(e,t){return e.sortNodePosition(t)}function k_(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Yo(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Yo(e,t,n);else{const i=typeof t=="function"?ks(e,t,n.custom):t;r=Promise.all(yd(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const D_=[...Ya].reverse(),O_=Ya.length;function M_(e){return t=>Promise.all(t.map(({animation:n,options:r})=>k_(e,n,r)))}function N_(e){let t=M_(e);const n=F_();let r=!0;const i=(l,c)=>{const u=ks(e,c);if(u){const{transition:h,transitionEnd:f,...d}=u;l={...l,...d,...f}}return l};function s(l){t=l(e)}function o(l,c){const u=e.getProps(),h=e.getVariantContext(!0)||{},f=[],d=new Set;let m={},p=1/0;for(let E=0;E<O_;E++){const v=D_[E],y=n[v],w=u[v]!==void 0?u[v]:h[v],x=Er(w),F=v===c?y.isActive:null;F===!1&&(p=E);let B=w===h[v]&&w!==u[v]&&x;if(B&&r&&e.manuallyAnimateOnMount&&(B=!1),y.protectedKeys={...m},!y.isActive&&F===null||!w&&!y.prevProp||Rs(w)||typeof w=="boolean")continue;let j=L_(y.prevProp,w)||v===c&&y.isActive&&!B&&x||E>p&&x,pt=!1;const cn=Array.isArray(w)?w:[w];let Ut=cn.reduce(i,{});F===!1&&(Ut={});const{prevResolvedValues:ee={}}=y,Ct={...ee,...Ut},un=gt=>{j=!0,d.has(gt)&&(pt=!0,d.delete(gt)),y.needsAnimating[gt]=!0};for(const gt in Ct){const ge=Ut[gt],Qn=ee[gt];if(m.hasOwnProperty(gt))continue;let hn=!1;Xi(ge)&&Xi(Qn)?hn=!Wf(ge,Qn):hn=ge!==Qn,hn?ge!==void 0?un(gt):d.add(gt):ge!==void 0&&d.has(gt)?un(gt):y.protectedKeys[gt]=!0}y.prevProp=w,y.prevResolvedValues=Ut,y.isActive&&(m={...m,...Ut}),r&&e.blockInitialAnimation&&(j=!1),j&&(!B||pt)&&f.push(...cn.map(gt=>({animation:gt,options:{type:v,...l}})))}if(d.size){const E={};d.forEach(v=>{const y=e.getBaseTarget(v);y!==void 0&&(E[v]=y)}),f.push({animation:E})}let g=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(f):Promise.resolve()}function a(l,c,u){var h;if(n[l].isActive===c)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),n[l].isActive=c;const f=o(u,l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function L_(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Wf(t,e):!1}function Ne(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function F_(){return{animate:Ne(!0),whileInView:Ne(),whileHover:Ne(),whileTap:Ne(),whileDrag:Ne(),whileFocus:Ne(),exit:Ne()}}class j_ extends ke{constructor(t){super(t),t.animationState||(t.animationState=N_(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Rs(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let B_=0;class U_ extends ke{constructor(){super(...arguments),this.id=B_++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const $_={animation:{Feature:j_},exit:{Feature:U_}},eu=(e,t)=>Math.abs(e-t);function z_(e,t){const n=eu(e.x,t.x),r=eu(e.y,t.y);return Math.sqrt(n**2+r**2)}class vd{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=_o(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,d=z_(h.offset,{x:0,y:0})>=3;if(!f&&!d)return;const{point:m}=h,{timestamp:p}=yt;this.history.push({...m,timestamp:p});const{onStart:g,onMove:E}=this.handlers;f||(g&&g(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=vo(f,this.transformPagePoint),X.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:d,onSessionEnd:m,resumeAnimation:p}=this.handlers;if(this.dragSnapToOrigin&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=_o(h.type==="pointercancel"?this.lastMoveEventInfo:vo(f,this.transformPagePoint),this.history);this.startEvent&&d&&d(h,g),m&&m(h,g)},!Bf(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Vs(t),a=vo(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=yt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,_o(a,this.history)),this.removeListeners=se(ie(this.contextWindow,"pointermove",this.handlePointerMove),ie(this.contextWindow,"pointerup",this.handlePointerUp),ie(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ce(this.updatePoint)}}function vo(e,t){return t?{point:t(e.point)}:e}function nu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function _o({point:e},t){return{point:e,delta:nu(e,_d(t)),offset:nu(e,q_(t)),velocity:W_(t,.1)}}function q_(e){return e[0]}function _d(e){return e[e.length-1]}function W_(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=_d(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Qe(t)));)n--;if(!r)return{x:0,y:0};const s=oe(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Dt(e){return e.max-e.min}function Xo(e,t=0,n=.01){return Math.abs(e-t)<=n}function ru(e,t,n,r=.5){e.origin=r,e.originPoint=tt(t.min,t.max,e.origin),e.scale=Dt(n)/Dt(t),(Xo(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=tt(n.min,n.max,e.origin)-e.originPoint,(Xo(e.translate)||isNaN(e.translate))&&(e.translate=0)}function hr(e,t,n,r){ru(e.x,t.x,n.x,r?r.originX:void 0),ru(e.y,t.y,n.y,r?r.originY:void 0)}function iu(e,t,n){e.min=n.min+t.min,e.max=e.min+Dt(t)}function H_(e,t,n){iu(e.x,t.x,n.x),iu(e.y,t.y,n.y)}function su(e,t,n){e.min=t.min-n.min,e.max=e.min+Dt(t)}function fr(e,t,n){su(e.x,t.x,n.x),su(e.y,t.y,n.y)}function G_(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?tt(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?tt(n,e,r.max):Math.min(e,n)),e}function ou(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function K_(e,{top:t,left:n,bottom:r,right:i}){return{x:ou(e.x,n,i),y:ou(e.y,t,r)}}function au(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Q_(e,t){return{x:au(e.x,t.x),y:au(e.y,t.y)}}function Y_(e,t){let n=.5;const r=Dt(e),i=Dt(t);return i>r?n=br(t.min,t.max-r,e.min):r>i&&(n=br(e.min,e.max-i,t.min)),Ae(0,1,n)}function X_(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Jo=.35;function J_(e=Jo){return e===!1?e=0:e===!0&&(e=Jo),{x:lu(e,"left","right"),y:lu(e,"top","bottom")}}function lu(e,t,n){return{min:cu(e,t),max:cu(e,n)}}function cu(e,t){return typeof e=="number"?e:e[t]||0}const uu=()=>({translate:0,scale:1,origin:0,originPoint:0}),vn=()=>({x:uu(),y:uu()}),hu=()=>({min:0,max:0}),st=()=>({x:hu(),y:hu()});function Lt(e){return[e("x"),e("y")]}function Td({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Z_({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function t0(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function To(e){return e===void 0||e===1}function Zo({scale:e,scaleX:t,scaleY:n}){return!To(e)||!To(t)||!To(n)}function Le(e){return Zo(e)||Ed(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Ed(e){return fu(e.x)||fu(e.y)}function fu(e){return e&&e!=="0%"}function ns(e,t,n){const r=e-n,i=t*r;return n+i}function du(e,t,n,r,i){return i!==void 0&&(e=ns(e,i,r)),ns(e,n,r)+t}function ta(e,t=0,n=1,r,i){e.min=du(e.min,t,n,r,i),e.max=du(e.max,t,n,r,i)}function wd(e,{x:t,y:n}){ta(e.x,t.translate,t.scale,t.originPoint),ta(e.y,n.translate,n.scale,n.originPoint)}function e0(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&_n(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,wd(e,o)),r&&Le(s.latestValues)&&_n(e,s.latestValues))}t.x=mu(t.x),t.y=mu(t.y)}function mu(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function _e(e,t){e.min=e.min+t,e.max=e.max+t}function pu(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=tt(e.min,e.max,s);ta(e,t[n],t[r],o,t.scale)}const n0=["x","scaleX","originX"],r0=["y","scaleY","originY"];function _n(e,t){pu(e.x,t,n0),pu(e.y,t,r0)}function bd(e,t){return Td(t0(e.getBoundingClientRect(),t))}function i0(e,t,n){const r=bd(e,n),{scroll:i}=t;return i&&(_e(r.x,i.offset.x),_e(r.y,i.offset.y)),r}const Ad=({current:e})=>e?e.ownerDocument.defaultView:null,s0=new WeakMap;class o0{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=st(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Vs(u,"page").point)},s=(u,h)=>{const{drag:f,dragPropagation:d,onDragStart:m}=this.getProps();if(f&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=$f(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Lt(g=>{let E=this.getAxisMotionValue(g).get()||0;if(Qt.test(E)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[g];y&&(E=Dt(y)*(parseFloat(E)/100))}}this.originPoint[g]=E}),m&&X.update(()=>m(u,h),!1,!0);const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:f,dragDirectionLock:d,onDirectionLock:m,onDrag:p}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:g}=h;if(d&&this.currentDirection===null){this.currentDirection=a0(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",h.point,g),this.updateAxis("y",h.point,g),this.visualElement.render(),p&&p(u,h)},a=(u,h)=>this.stop(u,h),l=()=>Lt(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new vd(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Ad(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&X.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ei(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=G_(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&gn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=K_(i.layoutBox,n):this.constraints=!1,this.elastic=J_(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Lt(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=X_(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!gn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=i0(r,i.root,this.visualElement.getTransformPagePoint());let o=Q_(i.layout.layoutBox,s);if(n){const a=n(Z_(o));this.hasMutatedConstraints=!!a,a&&(o=Td(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Lt(u=>{if(!Ei(u,n,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const f=i?200:1e6,d=i?40:1e7,m={type:"inertia",velocity:r?t[u]:0,bounceStiffness:f,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(ml(t,r,0,n))}stopAnimation(){Lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Lt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Lt(n=>{const{drag:r}=this.getProps();if(!Ei(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-tt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!gn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Lt(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=Y_({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Lt(o=>{if(!Ei(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(tt(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;s0.set(this.visualElement,this);const t=this.visualElement.current,n=ie(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();gn(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=ne(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Lt(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Jo,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ei(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function a0(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class l0 extends ke{constructor(t){super(t),this.removeGroupControls=lt,this.removeListeners=lt,this.controls=new o0(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||lt}unmount(){this.removeGroupControls(),this.removeListeners()}}const gu=e=>(t,n)=>{e&&X.update(()=>e(t,n))};class c0 extends ke{constructor(){super(...arguments),this.removePointerDownListener=lt}onPointerDown(t){this.session=new vd(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ad(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:gu(t),onStart:gu(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&X.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=ie(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function u0(){const e=b.useContext(xs);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const $i={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function yu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Zn={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(V.test(e))e=parseFloat(e);else return e;const n=yu(e,t.target.x),r=yu(e,t.target.y);return`${n}% ${r}%`}},h0={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Ie.parse(e);if(i.length>5)return r;const s=Ie.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const c=tt(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class f0 extends Gr.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;my(d0),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),$i.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||X.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Qa.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Id(e){const[t,n]=u0(),r=b.useContext(Ja);return Gr.createElement(f0,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Pf),isPresent:t,safeToRemove:n})}const d0={borderRadius:{...Zn,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zn,borderTopRightRadius:Zn,borderBottomLeftRadius:Zn,borderBottomRightRadius:Zn,boxShadow:h0},Pd=["TopLeft","TopRight","BottomLeft","BottomRight"],m0=Pd.length,vu=e=>typeof e=="string"?parseFloat(e):e,_u=e=>typeof e=="number"||V.test(e);function p0(e,t,n,r,i,s){i?(e.opacity=tt(0,n.opacity!==void 0?n.opacity:1,g0(r)),e.opacityExit=tt(t.opacity!==void 0?t.opacity:1,0,y0(r))):s&&(e.opacity=tt(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<m0;o++){const a=`border${Pd[o]}Radius`;let l=Tu(t,a),c=Tu(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||_u(l)===_u(c)?(e[a]=Math.max(tt(vu(l),vu(c),r),0),(Qt.test(c)||Qt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=tt(t.rotate||0,n.rotate||0,r))}function Tu(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const g0=xd(0,.5,td),y0=xd(.5,.95,lt);function xd(e,t,n){return r=>r<e?0:r>t?1:n(br(e,t,r))}function Eu(e,t){e.min=t.min,e.max=t.max}function Nt(e,t){Eu(e.x,t.x),Eu(e.y,t.y)}function wu(e,t,n,r,i){return e-=t,e=ns(e,1/n,r),i!==void 0&&(e=ns(e,1/i,r)),e}function v0(e,t=0,n=1,r=.5,i,s=e,o=e){if(Qt.test(t)&&(t=parseFloat(t),t=tt(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=tt(s.min,s.max,r);e===s&&(a-=t),e.min=wu(e.min,t,n,a,i),e.max=wu(e.max,t,n,a,i)}function bu(e,t,[n,r,i],s,o){v0(e,t[n],t[r],t[i],t.scale,s,o)}const _0=["x","scaleX","originX"],T0=["y","scaleY","originY"];function Au(e,t,n,r){bu(e.x,t,_0,n?n.x:void 0,r?r.x:void 0),bu(e.y,t,T0,n?n.y:void 0,r?r.y:void 0)}function Iu(e){return e.translate===0&&e.scale===1}function Sd(e){return Iu(e.x)&&Iu(e.y)}function E0(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Rd(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Pu(e){return Dt(e.x)/Dt(e.y)}class w0{constructor(){this.members=[]}add(t){pl(this.members,t),t.scheduleRender()}remove(t){if(gl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function xu(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),u&&(r+=`rotateY(${u}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const b0=(e,t)=>e.depth-t.depth;class A0{constructor(){this.children=[],this.isDirty=!1}add(t){pl(this.children,t),this.isDirty=!0}remove(t){gl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(b0),this.isDirty=!1,this.children.forEach(t)}}function I0(e,t){const n=Ye.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(ce(r),e(s-t))};return X.read(r,!0),()=>ce(r)}function P0(e){window.MotionDebug&&window.MotionDebug.record(e)}function x0(e){return e instanceof SVGElement&&e.tagName!=="svg"}function S0(e,t,n){const r=kt(e)?e:Rn(e);return r.start(ml("",r,t,n)),r.animation}const Su=["","X","Y","Z"],R0={visibility:"hidden"},Ru=1e3;let C0=0;const Fe={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Cd({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=C0++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Fe.totalNodes=Fe.resolvedTargetDeltas=Fe.recalculatedProjection=0,this.nodes.forEach(D0),this.nodes.forEach(F0),this.nodes.forEach(j0),this.nodes.forEach(O0),P0(Fe)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new A0)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new yl),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=x0(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let h;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=I0(f,250),$i.hasAnimatedSinceResize&&($i.hasAnimatedSinceResize=!1,this.nodes.forEach(Vu))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:d,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||u.getDefaultTransition()||q0,{onLayoutAnimationStart:g,onLayoutAnimationComplete:E}=u.getProps(),v=!this.targetLayout||!Rd(this.targetLayout,m)||d,y=!f&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const w={...dl(p,"layout"),onPlay:g,onComplete:E};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Vu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ce(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(B0),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cu);return}this.isUpdating||this.nodes.forEach(N0),this.isUpdating=!1,this.nodes.forEach(L0),this.nodes.forEach(V0),this.nodes.forEach(k0),this.clearAllSnapshots();const a=Ye.now();yt.delta=Ae(0,1e3/60,a-yt.timestamp),yt.timestamp=a,yt.isProcessing=!0,uo.update.process(yt),uo.preRender.process(yt),uo.render.process(yt),yt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qa.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(M0),this.sharedNodes.forEach(U0)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,X.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){X.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=st(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Sd(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Le(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),W0(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return st();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(_e(a.x,l.offset.x),_e(a.y,l.offset.y)),a}removeElementScroll(o){const a=st();Nt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:h}=c;if(c!==this.root&&u&&h.layoutScroll){if(u.isRoot){Nt(a,o);const{scroll:f}=this.root;f&&(_e(a.x,-f.offset.x),_e(a.y,-f.offset.y))}_e(a.x,u.offset.x),_e(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=st();Nt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&_n(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Le(u.latestValues)&&_n(l,u.latestValues)}return Le(this.latestValues)&&_n(l,this.latestValues),l}removeTransform(o){const a=st();Nt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Le(c.latestValues))continue;Zo(c.latestValues)&&c.updateSnapshot();const u=st(),h=c.measurePageBox();Nt(u,h),Au(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Le(this.latestValues)&&Au(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==yt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=yt.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=st(),this.relativeTargetOrigin=st(),fr(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),Nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=st(),this.targetWithTransforms=st()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),H_(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Nt(this.target,this.layout.layoutBox),wd(this.target,this.targetDelta)):Nt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=st(),this.relativeTargetOrigin=st(),fr(this.relativeTargetOrigin,this.target,d.target),Nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Fe.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zo(this.parent.latestValues)||Ed(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===yt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;Nt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;e0(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=st());const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=vn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=vn(),this.projectionDeltaWithTransform=vn());const p=this.projectionTransform;hr(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=xu(this.projectionDelta,this.treeScale),(this.projectionTransform!==p||this.treeScale.x!==f||this.treeScale.y!==d)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Fe.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=vn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=st(),d=l?l.source:void 0,m=this.layout?this.layout.source:void 0,p=d!==m,g=this.getStack(),E=!g||g.members.length<=1,v=!!(p&&!E&&this.options.crossfade===!0&&!this.path.some(z0));this.animationProgress=0;let y;this.mixTargetDelta=w=>{const x=w/1e3;ku(h.x,o.x,x),ku(h.y,o.y,x),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fr(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$0(this.relativeTarget,this.relativeTargetOrigin,f,x),y&&E0(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=st()),Nt(y,this.relativeTarget)),p&&(this.animationValues=u,p0(u,c,this.latestValues,x,v,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ce(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=X.update(()=>{$i.hasAnimatedSinceResize=!0,this.currentAnimation=S0(0,Ru,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ru),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Vd(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||st();const h=Dt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const f=Dt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Nt(a,l),_n(a,u),hr(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new w0),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<Su.length;u++){const h="rotate"+Su[u];l[h]&&(c[h]=l[h],o.setStaticValue(h,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return R0;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Bi(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Bi(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Le(this.latestValues)&&(p.transform=u?u({},""):"none",this.hasProjected=!1),p}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=xu(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:d,y:m}=this.projectionDelta;c.transformOrigin=`${d.origin*100}% ${m.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const p in Ki){if(f[p]===void 0)continue;const{correct:g,applyTo:E}=Ki[p],v=c.transform==="none"?f[p]:g(f[p],h);if(E){const y=E.length;for(let w=0;w<y;w++)c[E[w]]=v}else c[p]=v}return this.options.layoutId&&(c.pointerEvents=h===this?Bi(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Cu),this.root.sharedNodes.clear()}}}function V0(e){e.updateLayout()}function k0(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Lt(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],d=Dt(f);f.min=r[h].min,f.max=f.min+d}):Vd(s,n.layoutBox,r)&&Lt(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],d=Dt(r[h]);f.max=f.min+d,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+d)});const a=vn();hr(a,r,n.layoutBox);const l=vn();o?hr(l,e.applyTransform(i,!0),n.measuredBox):hr(l,r,n.layoutBox);const c=!Sd(a);let u=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:d}=h;if(f&&d){const m=st();fr(m,n.layoutBox,f.layoutBox);const p=st();fr(p,r,d.layoutBox),Rd(m,p)||(u=!0),h.options.layoutRoot&&(e.relativeTarget=p,e.relativeTargetOrigin=m,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function D0(e){Fe.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function O0(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function M0(e){e.clearSnapshot()}function Cu(e){e.clearMeasurements()}function N0(e){e.isLayoutDirty=!1}function L0(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Vu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function F0(e){e.resolveTargetDelta()}function j0(e){e.calcProjection()}function B0(e){e.resetRotation()}function U0(e){e.removeLeadSnapshot()}function ku(e,t,n){e.translate=tt(t.translate,0,n),e.scale=tt(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Du(e,t,n,r){e.min=tt(t.min,n.min,r),e.max=tt(t.max,n.max,r)}function $0(e,t,n,r){Du(e.x,t.x,n.x,r),Du(e.y,t.y,n.y,r)}function z0(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const q0={duration:.45,ease:[.4,0,.1,1]},Ou=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Mu=Ou("applewebkit/")&&!Ou("chrome/")?Math.round:lt;function Nu(e){e.min=Mu(e.min),e.max=Mu(e.max)}function W0(e){Nu(e.x),Nu(e.y)}function Vd(e,t,n){return e==="position"||e==="preserve-aspect"&&!Xo(Pu(t),Pu(n),.2)}const H0=Cd({attachResizeListener:(e,t)=>ne(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Eo={current:void 0},kd=Cd({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Eo.current){const e=new H0({});e.mount(window),e.setOptions({layoutScroll:!0}),Eo.current=e}return Eo.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),G0={pan:{Feature:c0},drag:{Feature:l0,ProjectionNode:kd,MeasureLayout:Id}},K0=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Q0(e){const t=K0.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function ea(e,t,n=1){const[r,i]=Q0(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return md(o)?parseFloat(o):o}else return Qi(i)?ea(i,t,n+1):i}function Y0(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!Qi(s))return;const o=ea(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!Qi(s))continue;const o=ea(s,r);o&&(t[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const X0=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Dd=e=>X0.has(e),J0=e=>Object.keys(e).some(Dd),Lu=e=>e===Bn||e===V,Fu=(e,t)=>parseFloat(e.split(", ")[t]),ju=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Fu(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?Fu(s[1],e):0}},Z0=new Set(["x","y","z"]),tT=Qr.filter(e=>!Z0.has(e));function eT(e){const t=[];return tT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Cn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ju(4,13),y:ju(5,14)};Cn.translateX=Cn.x;Cn.translateY=Cn.y;const nT=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{a[c]=Cn[c](r,s)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const u=t.getValue(c);u&&u.jump(a[c]),e[c]=Cn[c](l,s)}),e},rT=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Dd);let s=[],o=!1;const a=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let u=n[l],h=Jn(u);const f=t[l];let d;if(Xi(f)){const m=f.length,p=f[0]===null?1:0;u=f[p],h=Jn(u);for(let g=p;g<m&&f[g]!==null;g++)d?al(Jn(f[g])===d):d=Jn(f[g])}else d=Jn(f);if(h!==d)if(Lu(h)&&Lu(d)){const m=c.get();typeof m=="string"&&c.set(parseFloat(m)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&d===V&&(t[l]=f.map(parseFloat))}else h!=null&&h.transform&&(d!=null&&d.transform)&&(u===0||f===0)?u===0?c.set(d.transform(u)):t[l]=h.transform(f):(o||(s=eT(e),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],c.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=nT(t,e,a);return s.length&&s.forEach(([u,h])=>{e.getValue(u).set(h)}),e.render(),Ss&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function iT(e,t,n,r){return J0(t)?rT(e,t,n,r):{target:t,transitionEnd:r}}const sT=(e,t,n,r)=>{const i=Y0(e,t,r);return t=i.target,r=i.transitionEnd,iT(e,t,n,r)},na={current:null},Od={current:!1};function oT(){if(Od.current=!0,!!Ss)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>na.current=e.matches;e.addListener(t),t()}else na.current=!1}function aT(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(kt(s))e.addValue(i,s),es(r)&&r.add(i);else if(kt(o))e.addValue(i,Rn(s,{owner:e})),es(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,Rn(a!==void 0?a:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Bu=new WeakMap,Md=Object.keys(wr),lT=Md.length,Uu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],cT=Xa.length;class uT{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>X.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Cs(n),this.isVariantNode=If(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const h in u){const f=u[h];a[h]!==void 0&&kt(f)&&(f.set(a[h],!1),es(c)&&c.add(h))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Bu.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Od.current||oT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:na.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Bu.delete(this.current),this.projection&&this.projection.unmount(),ce(this.notifyUpdate),ce(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=sn.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&X.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s){let o,a;for(let l=0;l<lT;l++){const c=Md[l],{isEnabled:u,Feature:h,ProjectionNode:f,MeasureLayout:d}=wr[c];f&&(o=f),u(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),d&&(a=d))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:h,layoutScroll:f,layoutRoot:d}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||h&&gn(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:d})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):st()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Uu.length;r++){const i=Uu[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=aT(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<cT;r++){const i=Xa[r],s=this.props[i];(Er(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Rn(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=ol(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!kt(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new yl),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Nd extends uT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},i){const s=x_(r,t||{},this);if(i){I_(this,r,s);const o=sT(this,r,s,n);n=o.transitionEnd,r=o.target}return{transition:t,transitionEnd:n,...r}}}function hT(e){return window.getComputedStyle(e)}class fT extends Nd{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(sn.has(n)){const r=fl(n);return r&&r.default||0}else{const r=hT(t),i=(Rf(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return bd(t,n)}build(t,n,r,i){el(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return sl(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;kt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Of(t,n,r,i)}}class dT extends Nd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(sn.has(n)){const r=fl(n);return r&&r.default||0}return n=Mf.has(n)?n:Ka(n),t.getAttribute(n)}measureInstanceViewportBox(){return st()}scrapeMotionValuesFromProps(t,n){return Lf(t,n)}build(t,n,r,i){rl(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Nf(t,n,r,i)}mount(t){this.isSVGTag=il(t.tagName),super.mount(t)}}const mT=(e,t)=>Za(e)?new dT(t,{enableHardwareAcceleration:!1}):new fT(t,{enableHardwareAcceleration:!0}),pT={layout:{ProjectionNode:kd,MeasureLayout:Id}},gT={...$_,...nv,...G0,...pT},Ld=fy((e,t)=>zy(e,t,gT,mT));function Fd(){const e=b.useRef(!1);return Ga(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function yT(){const e=Fd(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>X.postRender(r),[r]),t]}class vT extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function _T({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),b.createElement(vT,{isPresent:t,childRef:r,sizeRef:i},b.cloneElement(e,{ref:r}))}const wo=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=Ff(TT),l=b.useId(),c=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u=>{a.set(u,!0);for(const h of a.values())if(!h)return;r&&r()},register:u=>(a.set(u,!1),()=>a.delete(u))}),s?void 0:[n]);return b.useMemo(()=>{a.forEach((u,h)=>a.set(h,!1))},[n]),b.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=b.createElement(_T,{isPresent:n},e)),b.createElement(xs.Provider,{value:c},e)};function TT(){return new Map}function ET(e){return b.useEffect(()=>()=>e(),[])}const je=e=>e.key||"";function wT(e,t){e.forEach(n=>{const r=je(n);t.set(r,n)})}function bT(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const AT=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=b.useContext(Ja).forceRender||yT()[0],l=Fd(),c=bT(e);let u=c;const h=b.useRef(new Map).current,f=b.useRef(u),d=b.useRef(new Map).current,m=b.useRef(!0);if(Ga(()=>{m.current=!1,wT(c,d),f.current=u}),ET(()=>{m.current=!0,d.clear(),h.clear()}),m.current)return b.createElement(b.Fragment,null,u.map(v=>b.createElement(wo,{key:je(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},v)));u=[...u];const p=f.current.map(je),g=c.map(je),E=p.length;for(let v=0;v<E;v++){const y=p[v];g.indexOf(y)===-1&&!h.has(y)&&h.set(y,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((v,y)=>{if(g.indexOf(y)!==-1)return;const w=d.get(y);if(!w)return;const x=p.indexOf(y);let F=v;if(!F){const B=()=>{h.delete(y);const N=Array.from(d.keys()).filter(j=>!g.includes(j));if(N.forEach(j=>d.delete(j)),f.current=c.filter(j=>{const pt=je(j);return pt===y||N.includes(pt)}),!h.size){if(l.current===!1)return;a(),r&&r()}};F=b.createElement(wo,{key:je(w),isPresent:!1,onExitComplete:B,custom:t,presenceAffectsLayout:s,mode:o},w),h.set(y,F)}u.splice(x,0,F)}),u=u.map(v=>{const y=v.key;return h.has(y)?v:b.createElement(wo,{key:je(v),isPresent:!0,presenceAffectsLayout:s,mode:o},v)}),b.createElement(b.Fragment,null,h.size?u:u.map(v=>b.cloneElement(v)))},IT=J(Ld.a)`
  display: block;
  border: 4px solid ${({theme:e})=>e.linkBackground};
  background: ${({theme:e})=>e.linkBackground};
  color: ${({theme:e})=>e.linkForeground};
  border-radius: 16px;
  width: 100%;
  text-decoration: none;
  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;

  &:hover {
    background: ${({theme:e})=>e.linkBackgroundHover};
    color: ${({theme:e})=>e.linkForegroundHover};
  }
`,PT=J.p`
  font-weight: 800;
  font-size: 18px;
  font-family: Merriweather;
`,xT={hidden:{y:-20,opacity:0},visible:{y:0,opacity:1}};function ST({title:e,url:t}){return L.jsx(IT,{href:t,target:"_blank",rel:"noreferrer",variants:xT,children:L.jsx(PT,{children:e})})}function $u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$u(Object(n),!0).forEach(function(r){ht(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$u(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rs(e){"@babel/helpers - typeof";return rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rs(e)}function RT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function CT(e,t,n){return t&&zu(e.prototype,t),n&&zu(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ht(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vl(e,t){return kT(e)||OT(e,t)||jd(e,t)||NT()}function Zr(e){return VT(e)||DT(e)||jd(e)||MT()}function VT(e){if(Array.isArray(e))return ra(e)}function kT(e){if(Array.isArray(e))return e}function DT(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function OT(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function jd(e,t){if(e){if(typeof e=="string")return ra(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ra(e,t)}}function ra(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function MT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qu=function(){},_l={},Bd={},Ud=null,$d={mark:qu,measure:qu};try{typeof window<"u"&&(_l=window),typeof document<"u"&&(Bd=document),typeof MutationObserver<"u"&&(Ud=MutationObserver),typeof performance<"u"&&($d=performance)}catch{}var LT=_l.navigator||{},Wu=LT.userAgent,Hu=Wu===void 0?"":Wu,Pe=_l,Y=Bd,Gu=Ud,wi=$d;Pe.document;var pe=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",zd=~Hu.indexOf("MSIE")||~Hu.indexOf("Trident/"),bi,Ai,Ii,Pi,xi,ue="___FONT_AWESOME___",ia=16,qd="fa",Wd="svg-inline--fa",Je="data-fa-i2svg",sa="data-fa-pseudo-element",FT="data-fa-pseudo-element-pending",Tl="data-prefix",El="data-icon",Ku="fontawesome-i2svg",jT="async",BT=["HTML","HEAD","STYLE","SCRIPT"],Hd=function(){try{return!0}catch{return!1}}(),K="classic",nt="sharp",wl=[K,nt];function ti(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Ar=ti((bi={},ht(bi,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ht(bi,nt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bi)),Ir=ti((Ai={},ht(Ai,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ht(Ai,nt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ai)),Pr=ti((Ii={},ht(Ii,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ht(Ii,nt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ii)),UT=ti((Pi={},ht(Pi,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ht(Pi,nt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Pi)),$T=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Gd="fa-layers-text",zT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qT=ti((xi={},ht(xi,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ht(xi,nt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xi)),Kd=[1,2,3,4,5,6,7,8,9,10],WT=Kd.concat([11,12,13,14,15,16,17,18,19,20]),HT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ze={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xr=new Set;Object.keys(Ir[K]).map(xr.add.bind(xr));Object.keys(Ir[nt]).map(xr.add.bind(xr));var GT=[].concat(wl,Zr(xr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ze.GROUP,ze.SWAP_OPACITY,ze.PRIMARY,ze.SECONDARY]).concat(Kd.map(function(e){return"".concat(e,"x")})).concat(WT.map(function(e){return"w-".concat(e)})),dr=Pe.FontAwesomeConfig||{};function KT(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function QT(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var YT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];YT.forEach(function(e){var t=vl(e,2),n=t[0],r=t[1],i=QT(KT(n));i!=null&&(dr[r]=i)})}var Qd={styleDefault:"solid",familyDefault:"classic",cssPrefix:qd,replacementClass:Wd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dr.familyPrefix&&(dr.cssPrefix=dr.familyPrefix);var Vn=P(P({},Qd),dr);Vn.autoReplaceSvg||(Vn.observeMutations=!1);var S={};Object.keys(Qd).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Vn[e]=n,mr.forEach(function(r){return r(S)})},get:function(){return Vn[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Vn.cssPrefix=t,mr.forEach(function(n){return n(S)})},get:function(){return Vn.cssPrefix}});Pe.FontAwesomeConfig=S;var mr=[];function XT(e){return mr.push(e),function(){mr.splice(mr.indexOf(e),1)}}var ye=ia,Ht={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function JT(e){if(!(!e||!pe)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Y.head.insertBefore(t,r),e}}var ZT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sr(){for(var e=12,t="";e-- >0;)t+=ZT[Math.random()*62|0];return t}function Un(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bl(e){return e.classList?Un(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Yd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Yd(e[n]),'" ')},"").trim()}function Ds(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Al(e){return e.size!==Ht.size||e.x!==Ht.x||e.y!==Ht.y||e.rotate!==Ht.rotate||e.flipX||e.flipY}function e1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function n1(e){var t=e.transform,n=e.width,r=n===void 0?ia:n,i=e.height,s=i===void 0?ia:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&zd?l+="translate(".concat(t.x/ye-r/2,"em, ").concat(t.y/ye-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/ye,"em), calc(-50% + ").concat(t.y/ye,"em)) "):l+="translate(".concat(t.x/ye,"em, ").concat(t.y/ye,"em) "),l+="scale(".concat(t.size/ye*(t.flipX?-1:1),", ").concat(t.size/ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var r1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xd(){var e=qd,t=Wd,n=S.cssPrefix,r=S.replacementClass,i=r1;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Qu=!1;function bo(){S.autoAddCss&&!Qu&&(JT(Xd()),Qu=!0)}var i1={mixout:function(){return{dom:{css:Xd,insertCss:bo}}},hooks:function(){return{beforeDOMElementCreation:function(){bo()},beforeI2svg:function(){bo()}}}},he=Pe||{};he[ue]||(he[ue]={});he[ue].styles||(he[ue].styles={});he[ue].hooks||(he[ue].hooks={});he[ue].shims||(he[ue].shims=[]);var $t=he[ue],Jd=[],s1=function e(){Y.removeEventListener("DOMContentLoaded",e),is=1,Jd.map(function(t){return t()})},is=!1;pe&&(is=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),is||Y.addEventListener("DOMContentLoaded",s1));function o1(e){pe&&(is?setTimeout(e,0):Jd.push(e))}function ei(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Yd(e):"<".concat(t," ").concat(t1(r),">").concat(s.map(ei).join(""),"</").concat(t,">")}function Yu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var a1=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Ao=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?a1(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,t[c],c,t);return u};function l1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function oa(e){var t=l1(e);return t.length===1?t[0].toString(16):null}function c1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Xu(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function aa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Xu(t);typeof $t.hooks.addPack=="function"&&!i?$t.hooks.addPack(e,Xu(t)):$t.styles[e]=P(P({},$t.styles[e]||{}),s),e==="fas"&&aa("fa",t)}var Si,Ri,Ci,Tn=$t.styles,u1=$t.shims,h1=(Si={},ht(Si,K,Object.values(Pr[K])),ht(Si,nt,Object.values(Pr[nt])),Si),Il=null,Zd={},tm={},em={},nm={},rm={},f1=(Ri={},ht(Ri,K,Object.keys(Ar[K])),ht(Ri,nt,Object.keys(Ar[nt])),Ri);function d1(e){return~GT.indexOf(e)}function m1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!d1(i)?i:null}var im=function(){var t=function(s){return Ao(Tn,function(o,a,l){return o[l]=Ao(a,s,{}),o},{})};Zd=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),tm=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),rm=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Tn||S.autoFetchSvg,r=Ao(u1,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});em=r.names,nm=r.unicodes,Il=Os(S.styleDefault,{family:S.familyDefault})};XT(function(e){Il=Os(e.styleDefault,{family:S.familyDefault})});im();function Pl(e,t){return(Zd[e]||{})[t]}function p1(e,t){return(tm[e]||{})[t]}function qe(e,t){return(rm[e]||{})[t]}function sm(e){return em[e]||{prefix:null,iconName:null}}function g1(e){var t=nm[e],n=Pl("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xe(){return Il}var xl=function(){return{prefix:null,iconName:null,rest:[]}};function Os(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,i=Ar[r][e],s=Ir[r][e]||Ir[r][i],o=e in $t.styles?e:null;return s||o||null}var Ju=(Ci={},ht(Ci,K,Object.keys(Pr[K])),ht(Ci,nt,Object.keys(Pr[nt])),Ci);function Ms(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ht(t,K,"".concat(S.cssPrefix,"-").concat(K)),ht(t,nt,"".concat(S.cssPrefix,"-").concat(nt)),t),o=null,a=K;(e.includes(s[K])||e.some(function(c){return Ju[K].includes(c)}))&&(a=K),(e.includes(s[nt])||e.some(function(c){return Ju[nt].includes(c)}))&&(a=nt);var l=e.reduce(function(c,u){var h=m1(S.cssPrefix,u);if(Tn[u]?(u=h1[a].includes(u)?UT[a][u]:u,o=u,c.prefix=u):f1[a].indexOf(u)>-1?(o=u,c.prefix=Os(u,{family:a})):h?c.iconName=h:u!==S.replacementClass&&u!==s[K]&&u!==s[nt]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var f=o==="fa"?sm(c.iconName):{},d=qe(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Tn.far&&Tn.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},xl());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===nt&&(Tn.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=qe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=xe()||"fas"),l}var y1=function(){function e(){RT(this,e),this.definitions={}}return CT(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=P(P({},n.definitions[a]||{}),o[a]),aa(a,o[a]);var l=Pr[K][a];l&&aa(l,o[a]),im()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),e}(),Zu=[],En={},An={},v1=Object.keys(An);function _1(e,t){var n=t.mixoutsTo;return Zu=e,En={},Object.keys(An).forEach(function(r){v1.indexOf(r)===-1&&delete An[r]}),Zu.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),rs(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){En[o]||(En[o]=[]),En[o].push(s[o])})}r.provides&&r.provides(An)}),n}function la(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=En[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=En[e]||[];i.forEach(function(s){s.apply(null,n)})}function fe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return An[e]?An[e].apply(null,t):void 0}function ca(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xe();if(t)return t=qe(n,t)||t,Yu(om.definitions,n,t)||Yu($t.styles,n,t)}var om=new y1,T1=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,Ze("noAuto")},E1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pe?(Ze("beforeI2svg",t),fe("pseudoElements2svg",t),fe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,o1(function(){b1({autoReplaceSvgRoot:n}),Ze("watch",t)})}},w1={icon:function(t){if(t===null)return null;if(rs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:qe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Os(t[0]);return{prefix:r,iconName:qe(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match($T))){var i=Ms(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||xe(),iconName:qe(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=xe();return{prefix:s,iconName:qe(s,t)||t}}}},Mt={noAuto:T1,config:S,dom:E1,parse:w1,library:om,findIconDefinition:ca,toHtml:ei},b1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Y:n;(Object.keys($t.styles).length>0||S.autoFetchSvg)&&pe&&S.autoReplaceSvg&&Mt.dom.i2svg({node:r})};function Ns(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ei(r)})}}),Object.defineProperty(e,"node",{get:function(){if(pe){var r=Y.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function A1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Al(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Ds(P(P({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function I1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:o}),children:r}]}]}function Sl(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,h=e.extra,f=e.watchable,d=f===void 0?!1:f,m=r.found?r:n,p=m.width,g=m.height,E=i==="fak",v=[S.replacementClass,s?"".concat(S.cssPrefix,"-").concat(s):""].filter(function(j){return h.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(h.classes).join(" "),y={children:[],attributes:P(P({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})},w=E&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(y.attributes[Je]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(u||Sr())},children:[l]}),delete y.attributes.title);var x=P(P({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:P(P({},w),h.styles)}),F=r.found&&n.found?fe("generateAbstractMask",x)||{children:[],attributes:{}}:fe("generateAbstractIcon",x)||{children:[],attributes:{}},B=F.children,N=F.attributes;return x.children=B,x.attributes=N,a?I1(x):A1(x)}function th(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,c=P(P(P({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Je]="");var u=P({},o.styles);Al(i)&&(u.transform=n1({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Ds(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function P1(e){var t=e.content,n=e.title,r=e.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ds(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Io=$t.styles;function ua(e){var t=e[0],n=e[1],r=e.slice(4),i=vl(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ze.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ze.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ze.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var x1={found:!1,width:512,height:512};function S1(e,t){!Hd&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=xe()),new Promise(function(r,i){if(fe("missingIconAbstract"),n==="fa"){var s=sm(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Io[t]&&Io[t][e]){var o=Io[t][e];return r(ua(o))}S1(e,t),r(P(P({},x1),{},{icon:S.showMissingIcons&&e?fe("missingIconAbstract")||{}:{}}))})}var eh=function(){},fa=S.measurePerformance&&wi&&wi.mark&&wi.measure?wi:{mark:eh,measure:eh},ir='FA "6.5.1"',R1=function(t){return fa.mark("".concat(ir," ").concat(t," begins")),function(){return am(t)}},am=function(t){fa.mark("".concat(ir," ").concat(t," ends")),fa.measure("".concat(ir," ").concat(t),"".concat(ir," ").concat(t," begins"),"".concat(ir," ").concat(t," ends"))},Rl={begin:R1,end:am},zi=function(){};function nh(e){var t=e.getAttribute?e.getAttribute(Je):null;return typeof t=="string"}function C1(e){var t=e.getAttribute?e.getAttribute(Tl):null,n=e.getAttribute?e.getAttribute(El):null;return t&&n}function V1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function k1(){if(S.autoReplaceSvg===!0)return qi.replace;var e=qi[S.autoReplaceSvg];return e||qi.replace}function D1(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function O1(e){return Y.createElement(e)}function lm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?D1:O1:n;if(typeof e=="string")return Y.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(lm(o,{ceFn:r}))}),i}function M1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var qi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(lm(i),n)}),n.getAttribute(Je)===null&&S.keepOriginalSource){var r=Y.createComment(M1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~bl(n).indexOf(S.replacementClass))return qi.replace(t);var i=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===S.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ei(a)}).join(`
`);n.setAttribute(Je,""),n.innerHTML=o}};function rh(e){e()}function cm(e,t){var n=typeof t=="function"?t:zi;if(e.length===0)n();else{var r=rh;S.mutateApproach===jT&&(r=Pe.requestAnimationFrame||rh),r(function(){var i=k1(),s=Rl.begin("mutate");e.map(i),s(),n()})}}var Cl=!1;function um(){Cl=!0}function da(){Cl=!1}var ss=null;function ih(e){if(Gu&&S.observeMutations){var t=e.treeCallback,n=t===void 0?zi:t,r=e.nodeCallback,i=r===void 0?zi:r,s=e.pseudoElementsCallback,o=s===void 0?zi:s,a=e.observeMutationsRoot,l=a===void 0?Y:a;ss=new Gu(function(c){if(!Cl){var u=xe();Un(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!nh(h.addedNodes[0])&&(S.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&S.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&nh(h.target)&&~HT.indexOf(h.attributeName))if(h.attributeName==="class"&&C1(h.target)){var f=Ms(bl(h.target)),d=f.prefix,m=f.iconName;h.target.setAttribute(Tl,d||u),m&&h.target.setAttribute(El,m)}else V1(h.target)&&i(h.target)})}}),pe&&ss.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function N1(){ss&&ss.disconnect()}function L1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function F1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ms(bl(e));return i.prefix||(i.prefix=xe()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=p1(i.prefix,e.innerText)||Pl(i.prefix,oa(e.innerText))),!i.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function j1(e){var t=Un(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||Sr()):(t["aria-hidden"]="true",t.focusable="false")),t}function B1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ht,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=F1(e),r=n.iconName,i=n.prefix,s=n.rest,o=j1(e),a=la("parseNodeAttributes",{},e),l=t.styleParser?L1(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ht,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var U1=$t.styles;function hm(e){var t=S.autoReplaceSvg==="nest"?sh(e,{styleParser:!1}):sh(e);return~t.extra.classes.indexOf(Gd)?fe("generateLayersText",e,t):fe("generateSvgReplacementMutation",e,t)}var Se=new Set;wl.map(function(e){Se.add("fa-".concat(e))});Object.keys(Ar[K]).map(Se.add.bind(Se));Object.keys(Ar[nt]).map(Se.add.bind(Se));Se=Zr(Se);function oh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pe)return Promise.resolve();var n=Y.documentElement.classList,r=function(h){return n.add("".concat(Ku,"-").concat(h))},i=function(h){return n.remove("".concat(Ku,"-").concat(h))},s=S.autoFetchSvg?Se:wl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(U1));s.includes("fa")||s.push("fa");var o=[".".concat(Gd,":not([").concat(Je,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Je,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Un(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Rl.begin("onTree"),c=a.reduce(function(u,h){try{var f=hm(h);f&&u.push(f)}catch(d){Hd||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){cm(f,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(f){l(),h(f)})})}function $1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hm(e).then(function(n){n&&cm([n],t)})}function z1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ca(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ca(i||{})),e(r,P(P({},n),{},{mask:i}))}}var q1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ht:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,m=d===void 0?null:d,p=n.classes,g=p===void 0?[]:p,E=n.attributes,v=E===void 0?{}:E,y=n.styles,w=y===void 0?{}:y;if(t){var x=t.prefix,F=t.iconName,B=t.icon;return Ns(P({type:"icon"},t),function(){return Ze("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(f?v["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(m||Sr()):(v["aria-hidden"]="true",v.focusable="false")),Sl({icons:{main:ua(B),mask:l?ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:F,transform:P(P({},Ht),i),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:v,styles:w,classes:g}})})}},W1={mixout:function(){return{icon:z1(q1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oh,n.nodeCallback=$1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Y:r,s=n.callback,o=s===void 0?function(){}:s;return oh(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(d,m){Promise.all([ha(i,a),u.iconName?ha(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var g=vl(p,2),E=g[0],v=g[1];d([n,Sl({icons:{main:E,mask:v},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ds(a);l.length>0&&(i.style=l);var c;return Al(o)&&(c=fe("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},H1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ns({type:"layer"},function(){Ze("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(Zr(s)).join(" ")},children:o}]})}}}},G1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return Ns({type:"counter",content:n},function(){return Ze("beforeDOMElementCreation",{content:n,params:r}),P1({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(Zr(a))}})})}}}},K1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ht:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,f=r.styles,d=f===void 0?{}:f;return Ns({type:"text",content:n},function(){return Ze("beforeDOMElementCreation",{content:n,params:r}),th({content:n,transform:P(P({},Ht),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(S.cssPrefix,"-layers-text")].concat(Zr(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(zd){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return S.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,th({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Q1=new RegExp('"',"ug"),ah=[1105920,1112319];function Y1(e){var t=e.replace(Q1,""),n=c1(t,0),r=n>=ah[0]&&n<=ah[1],i=t.length===2?t[0]===t[1]:!1;return{value:oa(i?t[0]:t),isSecondary:r||i}}function lh(e,t){var n="".concat(FT).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Un(e.children),o=s.filter(function(B){return B.getAttribute(sa)===t})[0],a=Pe.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(zT),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?nt:K,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ir[f][l[2].toLowerCase()]:qT[f][c],m=Y1(h),p=m.value,g=m.isSecondary,E=l[0].startsWith("FontAwesome"),v=Pl(d,p),y=v;if(E){var w=g1(p);w.iconName&&w.prefix&&(v=w.iconName,d=w.prefix)}if(v&&!g&&(!o||o.getAttribute(Tl)!==d||o.getAttribute(El)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var x=B1(),F=x.extra;F.attributes[sa]=t,ha(v,d).then(function(B){var N=Sl(P(P({},x),{},{icons:{main:B,mask:xl()},prefix:d,iconName:y,extra:F,watchable:!0})),j=Y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=N.map(function(pt){return ei(pt)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function X1(e){return Promise.all([lh(e,"::before"),lh(e,"::after")])}function J1(e){return e.parentNode!==document.head&&!~BT.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(sa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ch(e){if(pe)return new Promise(function(t,n){var r=Un(e.querySelectorAll("*")).filter(J1).map(X1),i=Rl.begin("searchPseudoElements");um(),Promise.all(r).then(function(){i(),da(),t()}).catch(function(){i(),da(),n()})})}var Z1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ch,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Y:r;S.searchPseudoElements&&ch(i)}}},uh=!1,tE={mixout:function(){return{dom:{unwatch:function(){um(),uh=!0}}}},hooks:function(){return{bootstrap:function(){ih(la("mutationObserverCallbacks",{}))},noAuto:function(){N1()},watch:function(n){var r=n.observeMutationsRoot;uh?da():ih(la("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},hh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},eE={mixout:function(){return{parse:{transform:function(n){return hh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=hh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:P({},d.outer),children:[{tag:"g",attributes:P({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),d.path)}]}]}}}},Po={x:0,y:0,width:"100%",height:"100%"};function fh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nE(e){return e.tag==="g"?e.children:[e]}var rE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ms(i.split(" ").map(function(o){return o.trim()})):xl();return s.prefix||(s.prefix=xe()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,f=o.icon,d=e1({transform:l,containerWidth:h,iconWidth:c}),m={tag:"rect",attributes:P(P({},Po),{},{fill:"white"})},p=u.children?{children:u.children.map(fh)}:{},g={tag:"g",attributes:P({},d.inner),children:[fh(P({tag:u.tag,attributes:P(P({},u.attributes),d.path)},p))]},E={tag:"g",attributes:P({},d.outer),children:[g]},v="mask-".concat(a||Sr()),y="clip-".concat(a||Sr()),w={tag:"mask",attributes:P(P({},Po),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,E]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:nE(f)},w]};return r.push(x,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},Po)}),{children:r,attributes:i}}}},iE={provides:function(t){var n=!1;Pe.matchMedia&&(n=Pe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:P(P({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},sE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},oE=[i1,W1,H1,G1,K1,Z1,tE,eE,rE,iE,sE];_1(oE,{mixoutsTo:Mt});Mt.noAuto;Mt.config;Mt.library;Mt.dom;var ma=Mt.parse;Mt.findIconDefinition;Mt.toHtml;var aE=Mt.icon;Mt.layer;Mt.text;Mt.counter;var fm={exports:{}},lE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cE=lE,uE=cE;function dm(){}function mm(){}mm.resetWarningCache=dm;var hE=function(){function e(r,i,s,o,a,l){if(l!==uE){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mm,resetWarningCache:dm};return n.PropTypes=n,n};fm.exports=hE();var fE=fm.exports;const U=Gg(fE);function dh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dh(Object(n),!0).forEach(function(r){wn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function os(e){"@babel/helpers - typeof";return os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},os(e)}function wn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mE(e,t){if(e==null)return{};var n=dE(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pa(e){return pE(e)||gE(e)||yE(e)||vE()}function pE(e){if(Array.isArray(e))return ga(e)}function gE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yE(e,t){if(e){if(typeof e=="string")return ga(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ga(e,t)}}function ga(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _E(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,h=e.pulse,f=e.fixedWidth,d=e.inverse,m=e.border,p=e.listItem,g=e.flip,E=e.size,v=e.rotation,y=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":f,"fa-inverse":d,"fa-border":m,"fa-li":p,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},wn(t,"fa-".concat(E),typeof E<"u"&&E!==null),wn(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),wn(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),wn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(x){return w[x]?x:null}).filter(function(x){return x})}function TE(e){return e=e-0,e===e}function pm(e){return TE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var EE=["style"];function wE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function bE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=pm(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[wE(i)]=s:t[i]=s,t},{})}function gm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return gm(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=bE(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[pm(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=mE(n,EE);return i.attrs.style=Te(Te({},i.attrs.style),o),e.apply(void 0,[t.tag,Te(Te({},i.attrs),a)].concat(pa(r)))}var ym=!1;try{ym=!0}catch{}function AE(){if(!ym&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function mh(e){if(e&&os(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ma.icon)return ma.icon(e);if(e===null)return null;if(e&&os(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?wn({},e,t):{}}var ni=Gr.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,s=e.className,o=e.title,a=e.titleId,l=e.maskId,c=mh(n),u=xo("classes",[].concat(pa(_E(e)),pa(s.split(" ")))),h=xo("transform",typeof e.transform=="string"?ma.transform(e.transform):e.transform),f=xo("mask",mh(r)),d=aE(c,Te(Te(Te(Te({},u),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!d)return AE("Could not find icon",c),null;var m=d.abstract,p={ref:t};return Object.keys(e).forEach(function(g){ni.defaultProps.hasOwnProperty(g)||(p[g]=e[g])}),IE(m[0],p)});ni.displayName="FontAwesomeIcon";ni.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};ni.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var IE=gm.bind(null,Gr.createElement);const PE=J.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  font-size: 36px;
  color: ${({theme:e})=>e.primary};
  transition: background 150ms ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;function Vi({icon:e,link:t}){return L.jsx(PE,{href:t,target:"_blank",rel:"noreferrer",children:L.jsx(ni,{icon:e})})}var ph={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},_m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new SE;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const m=c<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class SE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RE=function(e){const t=vm(e);return _m.encodeByteArray(t,!0)},as=function(e){return RE(e).replace(/\./g,"")},CE=function(e){try{return _m.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=()=>VE().__FIREBASE_DEFAULTS__,DE=()=>{if(typeof process>"u"||typeof ph>"u")return;const e=ph.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},OE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&CE(e[1]);return t&&JSON.parse(t)},Vl=()=>{try{return kE()||DE()||OE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ME=e=>{var t,n;return(n=(t=Vl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},NE=e=>{const t=ME(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Tm=()=>{var e;return(e=Vl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[as(JSON.stringify(n)),as(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jE(){var e;const t=(e=Vl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BE(){return!jE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Em(){try{return typeof indexedDB=="object"}catch{return!1}}function UE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="FirebaseError";class $n extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$E,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wm.prototype.create)}}class wm{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?zE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,r)}}function zE(e,t){return e.replace(qE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const qE=/\{\$([^}]+)}/g;function ya(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(gh(s)&&gh(o)){if(!ya(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e){return e&&e._delegate?e._delegate:e}class Rr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new LE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(GE(t))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Be){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Be){return this.instances.has(t)}getOptions(t=Be){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Be){return this.component?this.component.multipleInstances?t:Be:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HE(e){return e===Be?void 0:e}function GE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new WE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));const QE={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},YE=q.INFO,XE={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},JE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=XE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bm{constructor(t){this.name=t,this._logLevel=YE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?QE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const ZE=(e,t)=>t.some(n=>e instanceof n);let yh,vh;function tw(){return yh||(yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ew(){return vh||(vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Am=new WeakMap,va=new WeakMap,Im=new WeakMap,So=new WeakMap,kl=new WeakMap;function nw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(we(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Am.set(n,e)}).catch(()=>{}),kl.set(t,e),t}function rw(e){if(va.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});va.set(e,t)}let _a={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return va.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Im.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return we(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function iw(e){_a=e(_a)}function sw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ro(this),t,...n);return Im.set(r,t.sort?t.sort():[t]),we(r)}:ew().includes(e)?function(...t){return e.apply(Ro(this),t),we(Am.get(this))}:function(...t){return we(e.apply(Ro(this),t))}}function ow(e){return typeof e=="function"?sw(e):(e instanceof IDBTransaction&&rw(e),ZE(e,tw())?new Proxy(e,_a):e)}function we(e){if(e instanceof IDBRequest)return nw(e);if(So.has(e))return So.get(e);const t=ow(e);return t!==e&&(So.set(e,t),kl.set(t,e)),t}const Ro=e=>kl.get(e);function aw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=we(o);return r&&o.addEventListener("upgradeneeded",l=>{r(we(o.result),l.oldVersion,l.newVersion,we(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const lw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],Co=new Map;function _h(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Co.get(t))return Co.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=cw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Co.set(t,s),s}iw(e=>({...e,get:(t,n,r)=>_h(t,n)||e.get(t,n,r),has:(t,n)=>!!_h(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ta="@firebase/app",Th="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new bm("@firebase/app"),fw="@firebase/app-compat",dw="@firebase/analytics-compat",mw="@firebase/analytics",pw="@firebase/app-check-compat",gw="@firebase/app-check",yw="@firebase/auth",vw="@firebase/auth-compat",_w="@firebase/database",Tw="@firebase/database-compat",Ew="@firebase/functions",ww="@firebase/functions-compat",bw="@firebase/installations",Aw="@firebase/installations-compat",Iw="@firebase/messaging",Pw="@firebase/messaging-compat",xw="@firebase/performance",Sw="@firebase/performance-compat",Rw="@firebase/remote-config",Cw="@firebase/remote-config-compat",Vw="@firebase/storage",kw="@firebase/storage-compat",Dw="@firebase/firestore",Ow="@firebase/firestore-compat",Mw="firebase",Nw="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]",Lw={[Ta]:"fire-core",[fw]:"fire-core-compat",[mw]:"fire-analytics",[dw]:"fire-analytics-compat",[gw]:"fire-app-check",[pw]:"fire-app-check-compat",[yw]:"fire-auth",[vw]:"fire-auth-compat",[_w]:"fire-rtdb",[Tw]:"fire-rtdb-compat",[Ew]:"fire-fn",[ww]:"fire-fn-compat",[bw]:"fire-iid",[Aw]:"fire-iid-compat",[Iw]:"fire-fcm",[Pw]:"fire-fcm-compat",[xw]:"fire-perf",[Sw]:"fire-perf-compat",[Rw]:"fire-rc",[Cw]:"fire-rc-compat",[Vw]:"fire-gcs",[kw]:"fire-gcs-compat",[Dw]:"fire-fst",[Ow]:"fire-fst-compat","fire-js":"fire-js",[Mw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Map,wa=new Map;function Fw(e,t){try{e.container.addComponent(t)}catch(n){tn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function hs(e){const t=e.name;if(wa.has(t))return tn.debug(`There were multiple attempts to register component ${t}.`),!1;wa.set(t,e);for(const n of us.values())Fw(n,e);return!0}function jw(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},be=new wm("app","Firebase",Bw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=Nw;function Pm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ea,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw be.create("bad-app-name",{appName:String(i)});if(n||(n=Tm()),!n)throw be.create("no-options");const s=us.get(i);if(s){if(ya(n,s.options)&&ya(r,s.config))return s;throw be.create("duplicate-app",{appName:i})}const o=new KE(i);for(const l of wa.values())o.addComponent(l);const a=new Uw(n,r,o);return us.set(i,a),a}function zw(e=Ea){const t=us.get(e);if(!t&&e===Ea&&Tm())return Pm();if(!t)throw be.create("no-app",{appName:e});return t}function In(e,t,n){var r;let i=(r=Lw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}hs(new Rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="firebase-heartbeat-database",Ww=1,Cr="firebase-heartbeat-store";let Vo=null;function xm(){return Vo||(Vo=aw(qw,Ww,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Cr)}catch(n){console.warn(n)}}}}).catch(e=>{throw be.create("idb-open",{originalErrorMessage:e.message})})),Vo}async function Hw(e){try{const n=(await xm()).transaction(Cr),r=await n.objectStore(Cr).get(Sm(e));return await n.done,r}catch(t){if(t instanceof $n)tn.warn(t.message);else{const n=be.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tn.warn(n.message)}}}async function Eh(e,t){try{const r=(await xm()).transaction(Cr,"readwrite");await r.objectStore(Cr).put(t,Sm(e)),await r.done}catch(n){if(n instanceof $n)tn.warn(n.message);else{const r=be.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function Sm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=1024,Kw=30*24*60*60*1e3;class Qw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Kw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wh(),{heartbeatsToSend:r,unsentEntries:i}=Yw(this._heartbeatsCache.heartbeats),s=as(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function wh(){return new Date().toISOString().substring(0,10)}function Yw(e,t=Gw){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Em()?UE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bh(e){return as(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){hs(new Rr("platform-logger",t=>new uw(t),"PRIVATE")),hs(new Rr("heartbeat",t=>new Qw(t),"PRIVATE")),In(Ta,Th,e),In(Ta,Th,"esm2017"),In("fire-js","")}Jw("");var Zw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,Dl=Dl||{},k=Zw||self;function Ls(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ri(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function tb(e){return Object.prototype.hasOwnProperty.call(e,ko)&&e[ko]||(e[ko]=++eb)}var ko="closure_uid_"+(1e9*Math.random()>>>0),eb=0;function nb(e,t,n){return e.call.apply(e.bind,arguments)}function rb(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function xt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=nb:xt=rb,xt.apply(null,arguments)}function ki(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function mt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function De(){this.s=this.s,this.o=this.o}var ib=0;De.prototype.s=!1;De.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ib!=0)&&tb(this)};De.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rm=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ol(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ah(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ls(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function St(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var sb=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};k.addEventListener("test",n,t),k.removeEventListener("test",n,t)}catch{}return e}();function Vr(e){return/^[\s\xa0]*$/.test(e)}function Fs(){var e=k.navigator;return e&&(e=e.userAgent)?e:""}function Wt(e){return Fs().indexOf(e)!=-1}function Ml(e){return Ml[" "](e),e}Ml[" "]=function(){};function ob(e,t){var n=Jb;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var ab=Wt("Opera"),kn=Wt("Trident")||Wt("MSIE"),Cm=Wt("Edge"),ba=Cm||kn,Vm=Wt("Gecko")&&!(Fs().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),lb=Fs().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function km(){var e=k.document;return e?e.documentMode:void 0}var Aa;t:{var Do="",Oo=function(){var e=Fs();if(Vm)return/rv:([^\);]+)(\)|;)/.exec(e);if(Cm)return/Edge\/([\d\.]+)/.exec(e);if(kn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(lb)return/WebKit\/(\S+)/.exec(e);if(ab)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Oo&&(Do=Oo?Oo[1]:""),kn){var Mo=km();if(Mo!=null&&Mo>parseFloat(Do)){Aa=String(Mo);break t}}Aa=Do}var Ia;if(k.document&&kn){var Ih=km();Ia=Ih||parseInt(Aa,10)||void 0}else Ia=void 0;var cb=Ia;function kr(e,t){if(St.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vm){t:{try{Ml(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ub[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&kr.$.h.call(this)}}mt(kr,St);var ub={2:"touch",3:"pen",4:"mouse"};kr.prototype.h=function(){kr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ii="closure_listenable_"+(1e6*Math.random()|0),hb=0;function fb(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++hb,this.fa=this.ia=!1}function js(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Nl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function db(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Dm(e){const t={};for(const n in e)t[n]=e[n];return t}const Ph="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Om(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Ph.length;s++)n=Ph[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Bs(e){this.src=e,this.g={},this.h=0}Bs.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=xa(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new fb(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Pa(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Rm(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(js(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function xa(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ll="closure_lm_"+(1e6*Math.random()|0),No={};function Mm(e,t,n,r,i){if(r&&r.once)return Lm(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Mm(e,t[s],n,r,i);return null}return n=Bl(n),e&&e[ii]?e.O(t,n,ri(r)?!!r.capture:!!r,i):Nm(e,t,n,!1,r,i)}function Nm(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ri(i)?!!i.capture:!!i,a=jl(e);if(a||(e[Ll]=a=new Bs(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=mb(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)sb||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(jm(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mb(){function e(n){return t.call(e.src,e.listener,n)}const t=pb;return e}function Lm(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Lm(e,t[s],n,r,i);return null}return n=Bl(n),e&&e[ii]?e.P(t,n,ri(r)?!!r.capture:!!r,i):Nm(e,t,n,!0,r,i)}function Fm(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Fm(e,t[s],n,r,i);else r=ri(r)?!!r.capture:!!r,n=Bl(n),e&&e[ii]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=xa(s,n,r,i),-1<n&&(js(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=jl(e))&&(t=e.g[t.toString()],e=-1,t&&(e=xa(t,n,r,i)),(n=-1<e?t[e]:null)&&Fl(n))}function Fl(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ii])Pa(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(jm(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=jl(t))?(Pa(n,e),n.h==0&&(n.src=null,t[Ll]=null)):js(e)}}}function jm(e){return e in No?No[e]:No[e]="on"+e}function pb(e,t){if(e.fa)e=!0;else{t=new kr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Fl(e),e=n.call(r,t)}return e}function jl(e){return e=e[Ll],e instanceof Bs?e:null}var Lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bl(e){return typeof e=="function"?e:(e[Lo]||(e[Lo]=function(t){return e.handleEvent(t)}),e[Lo])}function dt(){De.call(this),this.i=new Bs(this),this.S=this,this.J=null}mt(dt,De);dt.prototype[ii]=!0;dt.prototype.removeEventListener=function(e,t,n,r){Fm(this,e,t,n,r)};function Et(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new St(t,e);else if(t instanceof St)t.target=t.target||e;else{var i=t;t=new St(r,e),Om(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Di(o,r,!0,t)&&i}if(o=t.g=e,i=Di(o,r,!0,t)&&i,i=Di(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Di(o,r,!1,t)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)js(n[r]);delete e.g[t],e.h--}}this.J=null};dt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};dt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Di(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Pa(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ul=k.JSON.stringify;class gb{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function yb(){var e=$l;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class vb{constructor(){this.h=this.g=null}add(t,n){const r=Bm.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Bm=new gb(()=>new _b,e=>e.reset());class _b{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Tb(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Eb(e){k.setTimeout(()=>{throw e},0)}let Dr,Or=!1,$l=new vb,Um=()=>{const e=k.Promise.resolve(void 0);Dr=()=>{e.then(wb)}};var wb=()=>{for(var e;e=yb();){try{e.h.call(e.g)}catch(n){Eb(n)}var t=Bm;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Or=!1};function Us(e,t){dt.call(this),this.h=e||1,this.g=t||k,this.j=xt(this.qb,this),this.l=Date.now()}mt(Us,dt);I=Us.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(zl(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zl(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){Us.$.N.call(this),zl(this),delete this.g};function ql(e,t,n){if(typeof e=="function")n&&(e=xt(e,n));else if(e&&typeof e.handleEvent=="function")e=xt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:k.setTimeout(e,t||0)}function $m(e){e.g=ql(()=>{e.g=null,e.i&&(e.i=!1,$m(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class bb extends De{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$m(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(e){De.call(this),this.h=e,this.g={}}mt(Mr,De);var xh=[];function zm(e,t,n,r){Array.isArray(n)||(n&&(xh[0]=n.toString()),n=xh);for(var i=0;i<n.length;i++){var s=Mm(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function qm(e){Nl(e.g,function(t,n){this.g.hasOwnProperty(n)&&Fl(t)},e),e.g={}}Mr.prototype.N=function(){Mr.$.N.call(this),qm(this)};Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $s(){this.g=!0}$s.prototype.Ea=function(){this.g=!1};function Ab(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Ib(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function bn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+xb(e,n)+(r?" "+r:"")})}function Pb(e,t){e.info(function(){return"TIMEOUT: "+t})}$s.prototype.info=function(){};function xb(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ul(n)}catch{return t}}var on={},Sh=null;function zs(){return Sh=Sh||new dt}on.Ta="serverreachability";function Wm(e){St.call(this,on.Ta,e)}mt(Wm,St);function Nr(e){const t=zs();Et(t,new Wm(t))}on.STAT_EVENT="statevent";function Hm(e,t){St.call(this,on.STAT_EVENT,e),this.stat=t}mt(Hm,St);function Vt(e){const t=zs();Et(t,new Hm(t,e))}on.Ua="timingevent";function Gm(e,t){St.call(this,on.Ua,e),this.size=t}mt(Gm,St);function si(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){e()},t)}var qs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Km={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wl(){}Wl.prototype.h=null;function Rh(e){return e.h||(e.h=e.i())}function Qm(){}var oi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hl(){St.call(this,"d")}mt(Hl,St);function Gl(){St.call(this,"c")}mt(Gl,St);var Sa;function Ws(){}mt(Ws,Wl);Ws.prototype.g=function(){return new XMLHttpRequest};Ws.prototype.i=function(){return{}};Sa=new Ws;function ai(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Mr(this),this.P=Sb,e=ba?125:void 0,this.V=new Us(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ym}function Ym(){this.i=null,this.g="",this.h=!1}var Sb=45e3,Xm={},Ra={};I=ai.prototype;I.setTimeout=function(e){this.P=e};function Ca(e,t,n){e.L=1,e.A=Gs(de(t)),e.u=n,e.S=!0,Jm(e,null)}function Jm(e,t){e.G=Date.now(),li(e),e.B=de(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),op(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Ym,e.g=xp(e.l,n?t:null,!e.u),0<e.O&&(e.M=new bb(xt(e.Pa,e,e.g),e.O)),zm(e.U,e.g,"readystatechange",e.nb),t=e.I?Dm(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Nr(),Ab(e.j,e.v,e.B,e.m,e.W,e.u)}I.nb=function(e){e=e.target;const t=this.M;t&&Gt(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)t:{const u=Gt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ba||this.g&&(this.h.h||this.g.ja()||Dh(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Nr(3):Nr(2)),Hs(this);var n=this.g.da();this.ca=n;e:if(Zm(this)){var r=Dh(this.g);e="";var i=r.length,s=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){We(this),pr(this);var o="";break e}this.h.i=new k.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ib(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vr(a)){var c=a;break e}}c=null}if(n=c)bn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Va(this,n);else{this.i=!1,this.s=3,Vt(12),We(this),pr(this);break t}}this.S?(tp(this,u,o),ba&&this.i&&u==3&&(zm(this.U,this.V,"tick",this.mb),this.V.start())):(bn(this.j,this.m,o,null),Va(this,o)),u==4&&We(this),this.i&&!this.J&&(u==4?bp(this.l,this):(this.i=!1,li(this)))}else Qb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),We(this),pr(this)}}}catch{}finally{}};function Zm(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function tp(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Rb(e,n),i==Ra){t==4&&(e.s=4,Vt(14),r=!1),bn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Xm){e.s=4,Vt(15),bn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else bn(e.j,e.m,i,null),Va(e,i);Zm(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Vt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zl(t),t.M=!0,Vt(11))):(bn(e.j,e.m,n,"[Invalid Chunked Response]"),We(e),pr(e))}I.mb=function(){if(this.g){var e=Gt(this.g),t=this.g.ja();this.o<t.length&&(Hs(this),tp(this,e,t),this.i&&e!=4&&li(this))}};function Rb(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Ra:(n=Number(t.substring(n,r)),isNaN(n)?Xm:(r+=1,r+n>t.length?Ra:(t=t.slice(r,r+n),e.o=r+n,t)))}I.cancel=function(){this.J=!0,We(this)};function li(e){e.Y=Date.now()+e.P,ep(e,e.P)}function ep(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=si(xt(e.lb,e),t)}function Hs(e){e.C&&(k.clearTimeout(e.C),e.C=null)}I.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Pb(this.j,this.B),this.L!=2&&(Nr(),Vt(17)),We(this),this.s=2,pr(this)):ep(this,this.Y-e)};function pr(e){e.l.H==0||e.J||bp(e.l,e)}function We(e){Hs(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,zl(e.V),qm(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Va(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ka(n.i,e))){if(!e.K&&ka(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)ms(n),Xs(n);else break t;Jl(n),Vt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=si(xt(n.ib,n),6e3));if(1>=cp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else He(n,11)}else if((e.K||n.g==e)&&ms(n),!Vr(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Kl(s,s.h),s.h=null))}if(r.F){const p=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,Q(r.I,r.F,p))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Pp(r,r.J?r.pa:null,r.Y),o.K){up(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Hs(a),li(a)),r.g=o}else Ep(r);0<n.j.length&&Js(n)}else c[0]!="stop"&&c[0]!="close"||He(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?He(n,7):Xl(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Nr(4)}catch{}}function Cb(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ls(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Vb(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ls(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function np(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ls(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Vb(e),r=Cb(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kb(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xe(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Xe){this.h=e.h,fs(this,e.j),this.s=e.s,this.g=e.g,ds(this,e.m),this.l=e.l;var t=e.i,n=new Lr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ch(this,n),this.o=e.o}else e&&(t=String(e).match(rp))?(this.h=!1,fs(this,t[1]||"",!0),this.s=sr(t[2]||""),this.g=sr(t[3]||"",!0),ds(this,t[4]),this.l=sr(t[5]||"",!0),Ch(this,t[6]||"",!0),this.o=sr(t[7]||"")):(this.h=!1,this.i=new Lr(null,this.h))}Xe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(or(t,Vh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(or(t,Vh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(or(n,n.charAt(0)=="/"?Mb:Ob,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",or(n,Lb)),e.join("")};function de(e){return new Xe(e)}function fs(e,t,n){e.j=n?sr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ds(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ch(e,t,n){t instanceof Lr?(e.i=t,Fb(e.i,e.h)):(n||(t=or(t,Nb)),e.i=new Lr(t,e.h))}function Q(e,t,n){e.i.set(t,n)}function Gs(e){return Q(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function sr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function or(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Db),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Db(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Vh=/[#\/\?@]/g,Ob=/[#\?:]/g,Mb=/[#\?]/g,Nb=/[#\?@]/g,Lb=/#/g;function Lr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Oe(e){e.g||(e.g=new Map,e.h=0,e.i&&kb(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=Lr.prototype;I.add=function(e,t){Oe(this),this.i=null,e=zn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ip(e,t){Oe(e),t=zn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sp(e,t){return Oe(e),t=zn(e,t),e.g.has(t)}I.forEach=function(e,t){Oe(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){Oe(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};I.Z=function(e){Oe(this);let t=[];if(typeof e=="string")sp(this,e)&&(t=t.concat(this.g.get(zn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return Oe(this),this.i=null,e=zn(this,e),sp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function op(e,t,n){ip(e,t),0<n.length&&(e.i=null,e.g.set(zn(e,t),Ol(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function zn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Fb(e,t){t&&!e.j&&(Oe(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ip(this,r),op(this,i,n))},e)),e.j=t}var jb=class{constructor(e,t){this.g=e,this.map=t}};function ap(e){this.l=e||Bb,k.PerformanceNavigationTiming?(e=k.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bb=10;function lp(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function cp(e){return e.h?1:e.g?e.g.size:0}function ka(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Kl(e,t){e.g?e.g.add(t):e.h=t}function up(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ap.prototype.cancel=function(){if(this.i=hp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function hp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ol(e.i)}var Ub=class{stringify(e){return k.JSON.stringify(e,void 0)}parse(e){return k.JSON.parse(e,void 0)}};function $b(){this.g=new Ub}function zb(e,t,n){const r=n||"";try{np(e,function(i,s){let o=i;ri(i)&&(o=Ul(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function qb(e,t){const n=new $s;if(k.Image){const r=new Image;r.onload=ki(Oi,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ki(Oi,n,r,"TestLoadImage: error",!1,t),r.onabort=ki(Oi,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ki(Oi,n,r,"TestLoadImage: timeout",!1,t),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Oi(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Ks(e){this.l=e.ec||null,this.j=e.ob||!1}mt(Ks,Wl);Ks.prototype.g=function(){return new Qs(this.l,this.j)};Ks.prototype.i=function(e){return function(){return e}}({});function Qs(e,t){dt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ql,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(Qs,dt);var Ql=0;I=Qs.prototype;I.open=function(e,t){if(this.readyState!=Ql)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fr(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||k).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=Ql};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fp(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function fp(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ci(this):Fr(this),this.readyState==3&&fp(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,ci(this))};I.Ya=function(e){this.g&&(this.response=e,ci(this))};I.ka=function(){this.g&&ci(this)};function ci(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fr(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Fr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Wb=k.JSON.parse;function it(e){dt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dp,this.L=this.M=!1}mt(it,dt);var dp="",Hb=/^https?$/i,Gb=["POST","PUT"];I=it.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sa.g(),this.C=this.u?Rh(this.u):Rh(Sa),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){kh(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&e instanceof k.FormData,!(0<=Rm(Gb,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{gp(this),0<this.B&&((this.L=Kb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=ql(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){kh(this,s)}};function Kb(e){return kn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof Dl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function kh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,mp(e),Ys(e)}function mp(e){e.F||(e.F=!0,Et(e,"complete"),Et(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Et(this,"complete"),Et(this,"abort"),Ys(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ys(this,!0)),it.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?pp(this):this.kb())};I.kb=function(){pp(this)};function pp(e){if(e.h&&typeof Dl<"u"&&(!e.C[1]||Gt(e)!=4||e.da()!=2)){if(e.v&&Gt(e)==4)ql(e.La,0,e);else if(Et(e,"readystatechange"),Gt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(rp)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!Hb.test(i?i.toLowerCase():"")}n=r}if(n)Et(e,"complete"),Et(e,"success");else{e.m=6;try{var s=2<Gt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",mp(e)}}finally{Ys(e)}}}}function Ys(e,t){if(e.g){gp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Et(e,"ready");try{n.onreadystatechange=r}catch{}}}function gp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(k.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function Gt(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Wb(t)}};function Dh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case dp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Qb(e){const t={};e=(e.g&&2<=Gt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Vr(e[r]))continue;var n=Tb(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}db(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yp(e){let t="";return Nl(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Yl(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=yp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Q(e,t,n))}function tr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vp(e){this.Ga=0,this.j=[],this.l=new $s,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=tr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=tr("baseRetryDelayMs",5e3,e),this.hb=tr("retryDelaySeedMs",1e4,e),this.eb=tr("forwardChannelMaxRetries",2,e),this.xa=tr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ap(e&&e.concurrentRequestLimit),this.Ja=new $b,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=vp.prototype;I.ra=8;I.H=1;function Xl(e){if(_p(e),e.H==3){var t=e.W++,n=de(e.I);if(Q(n,"SID",e.K),Q(n,"RID",t),Q(n,"TYPE","terminate"),ui(e,n),t=new ai(e,e.l,t),t.L=2,t.A=Gs(de(n)),n=!1,k.navigator&&k.navigator.sendBeacon)try{n=k.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&k.Image&&(new Image().src=t.A,n=!0),n||(t.g=xp(t.l,null),t.g.ha(t.A)),t.G=Date.now(),li(t)}Ip(e)}function Xs(e){e.g&&(Zl(e),e.g.cancel(),e.g=null)}function _p(e){Xs(e),e.u&&(k.clearTimeout(e.u),e.u=null),ms(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&k.clearTimeout(e.m),e.m=null)}function Js(e){if(!lp(e.i)&&!e.m){e.m=!0;var t=e.Na;Dr||Um(),Or||(Dr(),Or=!0),$l.add(t,e),e.C=0}}function Yb(e,t){return cp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=si(xt(e.Na,e,t),Ap(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ai(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Dm(s),Om(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Tp(this,i,t),n=de(this.I),Q(n,"RID",e),Q(n,"CVER",22),this.F&&Q(n,"X-HTTP-Session-Id",this.F),ui(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(yp(s)))+"&"+t:this.o&&Yl(n,this.o,s)),Kl(this.i,i),this.bb&&Q(n,"TYPE","init"),this.P?(Q(n,"$req",t),Q(n,"SID","null"),i.aa=!0,Ca(i,n,null)):Ca(i,n,t),this.H=2}}else this.H==3&&(e?Oh(this,e):this.j.length==0||lp(this.i)||Oh(this))};function Oh(e,t){var n;t?n=t.m:n=e.W++;const r=de(e.I);Q(r,"SID",e.K),Q(r,"RID",n),Q(r,"AID",e.V),ui(e,r),e.o&&e.s&&Yl(r,e.o,e.s),n=new ai(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Tp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Kl(e.i,n),Ca(n,r,t)}function ui(e,t){e.na&&Nl(e.na,function(n,r){Q(t,r,n)}),e.h&&np({},function(n,r){Q(t,r,n)})}function Tp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?xt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{zb(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ep(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Dr||Um(),Or||(Dr(),Or=!0),$l.add(t,e),e.A=0}}function Jl(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=si(xt(e.Ma,e),Ap(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,wp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=si(xt(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Vt(10),Xs(this),wp(this))};function Zl(e){e.B!=null&&(k.clearTimeout(e.B),e.B=null)}function wp(e){e.g=new ai(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=de(e.wa);Q(t,"RID","rpc"),Q(t,"SID",e.K),Q(t,"AID",e.V),Q(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Q(t,"TO",e.qa),Q(t,"TYPE","xmlhttp"),ui(e,t),e.o&&e.s&&Yl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Gs(de(t)),n.u=null,n.S=!0,Jm(n,e)}I.ib=function(){this.v!=null&&(this.v=null,Xs(this),Jl(this),Vt(19))};function ms(e){e.v!=null&&(k.clearTimeout(e.v),e.v=null)}function bp(e,t){var n=null;if(e.g==t){ms(e),Zl(e),e.g=null;var r=2}else if(ka(e.i,t))n=t.F,up(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=zs(),Et(r,new Gm(r,n)),Js(e)}else Ep(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Yb(e,t)||r==2&&Jl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:He(e,5);break;case 4:He(e,10);break;case 3:He(e,6);break;default:He(e,2)}}}function Ap(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function He(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=xt(e.pb,e);n||(n=new Xe("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||fs(n,"https"),Gs(n)),qb(n.toString(),r)}else Vt(2);e.H=0,e.h&&e.h.za(t),Ip(e),_p(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Vt(2)):(this.l.info("Failed to ping google.com"),Vt(1))};function Ip(e){if(e.H=0,e.ma=[],e.h){const t=hp(e.i);(t.length!=0||e.j.length!=0)&&(Ah(e.ma,t),Ah(e.ma,e.j),e.i.i.length=0,Ol(e.j),e.j.length=0),e.h.ya()}}function Pp(e,t,n){var r=n instanceof Xe?de(n):new Xe(n);if(r.g!="")t&&(r.g=t+"."+r.g),ds(r,r.m);else{var i=k.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Xe(null);r&&fs(s,r),t&&(s.g=t),i&&ds(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Q(r,n,t),Q(r,"VER",e.ra),ui(e,r),r}function xp(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new it(new Ks({ob:n})):new it(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function Sp(){}I=Sp.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function ps(){if(kn&&!(10<=Number(cb)))throw Error("Environmental error: no available transport.")}ps.prototype.g=function(e,t){return new Ot(e,t)};function Ot(e,t){dt.call(this),this.g=new vp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Vr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Vr(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new qn(this)}mt(Ot,dt);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Vt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Pp(e,null,e.Y),Js(e)};Ot.prototype.close=function(){Xl(this.g)};Ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ul(e),e=n);t.j.push(new jb(t.fb++,e)),t.H==3&&Js(t)};Ot.prototype.N=function(){this.g.h=null,delete this.j,Xl(this.g),delete this.g,Ot.$.N.call(this)};function Rp(e){Hl.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}mt(Rp,Hl);function Cp(){Gl.call(this),this.status=1}mt(Cp,Gl);function qn(e){this.g=e}mt(qn,Sp);qn.prototype.Ba=function(){Et(this.g,"a")};qn.prototype.Aa=function(e){Et(this.g,new Rp(e))};qn.prototype.za=function(e){Et(this.g,new Cp)};qn.prototype.ya=function(){Et(this.g,"b")};function Xb(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}mt(qt,Xb);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Fo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}qt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Fo(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Fo(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Fo(this,r),i=0;break}}this.h=i,this.i+=t};qt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function H(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Jb={};function tc(e){return-128<=e&&128>e?ob(e,function(t){return new H([t|0],0>t?-1:0)}):new H([e|0],0>e?-1:0)}function Kt(e){if(isNaN(e)||!isFinite(e))return Pn;if(0>e)return _t(Kt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Da;return new H(t,0)}function Vp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return _t(Vp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kt(Math.pow(t,8)),r=Pn,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Kt(Math.pow(t,s)),r=r.R(s).add(Kt(o))):(r=r.R(n),r=r.add(Kt(o)))}return r}var Da=4294967296,Pn=tc(0),Oa=tc(1),Mh=tc(16777216);I=H.prototype;I.ea=function(){if(Ft(this))return-_t(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Da+r)*t,t*=Da}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(re(this))return"0";if(Ft(this))return"-"+_t(this).toString(e);for(var t=Kt(Math.pow(e,6)),n=this,r="";;){var i=ys(n,t).g;n=gs(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,re(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function re(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ft(e){return e.h==-1}I.X=function(e){return e=gs(this,e),Ft(e)?-1:re(e)?0:1};function _t(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new H(n,~e.h).add(Oa)}I.abs=function(){return Ft(this)?_t(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new H(n,n[n.length-1]&-2147483648?-1:0)};function gs(e,t){return e.add(_t(t))}I.R=function(e){if(re(this)||re(e))return Pn;if(Ft(this))return Ft(e)?_t(this).R(_t(e)):_t(_t(this).R(e));if(Ft(e))return _t(this.R(_t(e)));if(0>this.X(Mh)&&0>e.X(Mh))return Kt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Mi(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Mi(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Mi(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Mi(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new H(n,0)};function Mi(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function er(e,t){this.g=e,this.h=t}function ys(e,t){if(re(t))throw Error("division by zero");if(re(e))return new er(Pn,Pn);if(Ft(e))return t=ys(_t(e),t),new er(_t(t.g),_t(t.h));if(Ft(t))return t=ys(e,_t(t)),new er(_t(t.g),t.h);if(30<e.g.length){if(Ft(e)||Ft(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Oa,r=t;0>=r.X(e);)n=Nh(n),r=Nh(r);var i=fn(n,1),s=fn(r,1);for(r=fn(r,2),n=fn(n,2);!re(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=fn(r,1),n=fn(n,1)}return t=gs(e,i.R(t)),new er(i,t)}for(i=Pn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Kt(n),o=s.R(t);Ft(o)||0<o.X(e);)n-=r,s=Kt(n),o=s.R(t);re(s)&&(s=Oa),i=i.add(s),e=gs(e,o)}return new er(i,e)}I.gb=function(e){return ys(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new H(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new H(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new H(n,this.h^e.h)};function Nh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new H(n,e.h)}function fn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new H(i,e.h)}ps.prototype.createWebChannel=ps.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;qs.NO_ERROR=0;qs.TIMEOUT=8;qs.HTTP_ERROR=6;Km.COMPLETE="complete";Qm.EventType=oi;oi.OPEN="a";oi.CLOSE="b";oi.ERROR="c";oi.MESSAGE="d";dt.prototype.listen=dt.prototype.O;it.prototype.listenOnce=it.prototype.P;it.prototype.getLastError=it.prototype.Sa;it.prototype.getLastErrorCode=it.prototype.Ia;it.prototype.getStatus=it.prototype.da;it.prototype.getResponseJson=it.prototype.Wa;it.prototype.getResponseText=it.prototype.ja;it.prototype.send=it.prototype.ha;it.prototype.setWithCredentials=it.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;H.prototype.add=H.prototype.add;H.prototype.multiply=H.prototype.R;H.prototype.modulo=H.prototype.gb;H.prototype.compare=H.prototype.X;H.prototype.toNumber=H.prototype.ea;H.prototype.toString=H.prototype.toString;H.prototype.getBits=H.prototype.D;H.fromNumber=Kt;H.fromString=Vp;var Zb=function(){return new ps},tA=function(){return zs()},jo=qs,eA=Km,nA=on,Lh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ni=Qm,rA=it,iA=qt,xn=H;const Fh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new bm("@firebase/firestore");function nr(){return en.logLevel}function A(e,...t){if(en.logLevel<=q.DEBUG){const n=t.map(ec);en.debug(`Firestore (${Wn}): ${e}`,...n)}}function Jt(e,...t){if(en.logLevel<=q.ERROR){const n=t.map(ec);en.error(`Firestore (${Wn}): ${e}`,...n)}}function Dn(e,...t){if(en.logLevel<=q.WARN){const n=t.map(ec);en.warn(`Firestore (${Wn}): ${e}`,...n)}}function ec(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e="Unexpected state"){const t=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: `+e;throw Jt(t),new Error(t)}function G(e,t){e||D()}function M(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends $n{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class oA{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aA{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ae,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ae)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new kp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new It(t)}}class lA{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cA{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new lA(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hA{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(G(typeof n.token=="string"),this.R=n.token,new uA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=fA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function W(e,t){return e<t?-1:e>t?1:0}function On(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ut.fromMillis(Date.now())}static fromDate(t){return ut.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new ut(0,0))}static max(){return new O(new ut(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,n,r){n===void 0?n=0:n>t.length&&D(),r===void 0?r=t.length-n:r>t.length-n&&D(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return jr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof jr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class rt extends jr{construct(t,n,r){return new rt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const dA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends jr{construct(t,n,r){return new Tt(t,n,r)}static isValidIdentifier(t){return dA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new R(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.path=t}static fromPath(t){return new C(rt.fromString(t))}static fromName(t){return new C(rt.fromString(t).popFirst(5))}static empty(){return new C(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return rt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new C(new rt(t.slice()))}}function mA(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=O.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Re(i,C.empty(),t)}function pA(e){return new Re(e.readTime,e.key,-1)}class Re{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Re(O.min(),C.empty(),-1)}static max(){return new Re(O.max(),C.empty(),-1)}}function gA(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=C.comparator(e.documentKey,t.documentKey),n!==0?n:W(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==yA)throw e;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):_.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):_.reject(n)}static resolve(t){return new _((n,r)=>{n(t)})}static reject(t){return new _((n,r)=>{r(t)})}static waitFor(t){return new _((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=_.resolve(!1);for(const r of t)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new _((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new _((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new ae,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new gr(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=rc(r.target.error);this.V.reject(new gr(t,i))}}static open(t,n,r,i){try{return new nc(n,t.transaction(i,r))}catch(s){throw new gr(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(A("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new TA(n)}}class Ge{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Ge.S(ls())===12.2&&Jt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return A("SimpleDb","Removing database:",t),Ue(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Em())return!1;if(Ge.C())return!0;const t=ls(),n=Ge.S(t),r=0<n&&n<10,i=Ge.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new gr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new gr(t,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=nc.open(this.db,t,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),_.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class _A{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Ue(this.k.delete())}}class gr extends R{constructor(t,n){super(T.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function fi(e){return e.name==="IndexedDbTransactionError"}class TA{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Ue(r)}add(t){return A("SimpleDb","ADD",this.store.name,t,t),Ue(this.store.add(t))}get(t){return Ue(this.store.get(t)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return A("SimpleDb","DELETE",this.store.name,t),Ue(this.store.delete(t))}count(){return A("SimpleDb","COUNT",this.store.name),Ue(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new _((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=rc(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new _((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new _A(a),c=n(a.primaryKey,a.value,l);if(c instanceof _){const u=c.catch(h=>(l.done(),_.reject(h)));r.push(u)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>_.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Ue(e){return new _((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=rc(r.target.error);n(i)}})}let jh=!1;function rc(e){const t=Ge.S(ls());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return jh||(jh=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ic._e=-1;function Zs(e){return e==null}function vs(e){return e===0&&1/e==-1/0}function EA(e){return typeof e=="number"&&Number.isInteger(e)&&!vs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Hn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Op(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){this.comparator=t,this.root=n||vt.EMPTY}insert(t,n){return new et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Li(this.root,t,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Li(this.root,t,this.comparator,!0)}}class Li{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??vt.RED,this.left=i??vt.EMPTY,this.right=s??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new vt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const t=this.left.check();if(t!==this.right.check())throw D();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,n,r,i,s){return this}insert(t,n,r){return new vt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uh(this.data.getIterator())}getIteratorFrom(t){return new Uh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof wt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new wt(this.comparator);return n.data=t,n}}class Uh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new zt([])}unionWith(t){let n=new wt(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new zt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return On(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Mp("Invalid base64 string: "+s):s}}(t);return new Rt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Rt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const wA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ce(e){if(G(!!e),typeof e=="string"){let t=0;const n=wA.exec(e);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(e.seconds),nanos:at(e.nanos)}}function at(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function nn(e){return typeof e=="string"?Rt.fromBase64String(e):Rt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function oc(e){const t=e.mapValue.fields.__previous_value__;return sc(t)?oc(t):t}function Br(e){const t=Ce(e.mapValue.fields.__local_write_time__.timestampValue);return new ut(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(t,n,r,i,s,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ur{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ur&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sc(e)?4:AA(e)?9007199254740991:10:D()}function Zt(e,t){if(e===t)return!0;const n=rn(e);if(n!==rn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Br(e).isEqual(Br(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ce(i.timestampValue),a=Ce(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return nn(i.bytesValue).isEqual(nn(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),a=at(s.doubleValue);return o===a?vs(o)===vs(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return On(e.arrayValue.values||[],t.arrayValue.values||[],Zt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Bh(o)!==Bh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Zt(o[l],a[l])))return!1;return!0}(e,t);default:return D()}}function $r(e,t){return(e.values||[]).find(n=>Zt(n,t))!==void 0}function Mn(e,t){if(e===t)return 0;const n=rn(e),r=rn(t);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),l=at(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return $h(e.timestampValue,t.timestampValue);case 4:return $h(Br(e),Br(t));case 5:return W(e.stringValue,t.stringValue);case 6:return function(s,o){const a=nn(s),l=nn(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=W(a[c],l[c]);if(u!==0)return u}return W(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=W(at(s.latitude),at(o.latitude));return a!==0?a:W(at(s.longitude),at(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Mn(a[c],l[c]);if(u)return u}return W(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Fi.mapValue&&o===Fi.mapValue)return 0;if(s===Fi.mapValue)return 1;if(o===Fi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=W(l[h],u[h]);if(f!==0)return f;const d=Mn(a[l[h]],c[u[h]]);if(d!==0)return d}return W(l.length,u.length)}(e.mapValue,t.mapValue);default:throw D()}}function $h(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return W(e,t);const n=Ce(e),r=Ce(t),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function Nn(e){return Ma(e)}function Ma(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ce(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return nn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return C.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ma(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ma(n.fields[o])}`;return i+"}"}(e.mapValue):D()}function Na(e){return!!e&&"integerValue"in e}function ac(e){return!!e&&"arrayValue"in e}function zh(e){return!!e&&"nullValue"in e}function qh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Wi(e){return!!e&&"mapValue"in e}function yr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Hn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=yr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=yr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function AA(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Wi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=yr(n)}setAll(t){let n=Tt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Wi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Zt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Wi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Hn(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new jt(yr(this.value))}}function Np(e){const t=[];return Hn(e.fields,(n,r)=>{const i=new Tt([n]);if(Wi(r)){const s=Np(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new zt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Pt(t,0,O.min(),O.min(),O.min(),jt.empty(),0)}static newFoundDocument(t,n,r,i){return new Pt(t,1,n,O.min(),r,i,0)}static newNoDocument(t,n){return new Pt(t,2,n,O.min(),O.min(),jt.empty(),0)}static newUnknownDocument(t,n){return new Pt(t,3,n,O.min(),O.min(),jt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,n){this.position=t,this.inclusive=n}}function Wh(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=C.comparator(C.fromName(o.referenceValue),n.key):r=Mn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Zt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,n="asc"){this.field=t,this.dir=n}}function IA(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{}class ct extends Lp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new xA(t,n,r):n==="array-contains"?new CA(t,r):n==="in"?new VA(t,r):n==="not-in"?new kA(t,r):n==="array-contains-any"?new DA(t,r):new ct(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new SA(t,r):new RA(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mn(n,this.value)):n!==null&&rn(this.value)===rn(n)&&this.matchesComparison(Mn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends Lp{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new te(t,n)}matches(t){return Fp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Fp(e){return e.op==="and"}function jp(e){return PA(e)&&Fp(e)}function PA(e){for(const t of e.filters)if(t instanceof te)return!1;return!0}function La(e){if(e instanceof ct)return e.field.canonicalString()+e.op.toString()+Nn(e.value);if(jp(e))return e.filters.map(t=>La(t)).join(",");{const t=e.filters.map(n=>La(n)).join(",");return`${e.op}(${t})`}}function Bp(e,t){return e instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&Zt(r.value,i.value)}(e,t):e instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Bp(o,i.filters[a]),!0):!1}(e,t):void D()}function Up(e){return e instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Nn(n.value)}`}(e):e instanceof te?function(n){return n.op.toString()+" {"+n.getFilters().map(Up).join(" ,")+"}"}(e):"Filter"}class xA extends ct{constructor(t,n,r){super(t,n,r),this.key=C.fromName(r.referenceValue)}matches(t){const n=C.comparator(t.key,this.key);return this.matchesComparison(n)}}class SA extends ct{constructor(t,n){super(t,"in",n),this.keys=$p("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class RA extends ct{constructor(t,n){super(t,"not-in",n),this.keys=$p("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function $p(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>C.fromName(r.referenceValue))}class CA extends ct{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ac(n)&&$r(n.arrayValue,this.value)}}class VA extends ct{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&$r(this.value.arrayValue,n)}}class kA extends ct{constructor(t,n){super(t,"not-in",n)}matches(t){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!$r(this.value.arrayValue,n)}}class DA extends ct{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$r(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Gh(e,t=null,n=[],r=[],i=null,s=null,o=null){return new OA(e,t,n,r,i,s,o)}function lc(e){const t=M(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>La(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Nn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Nn(r)).join(",")),t.ce=n}return t.ce}function cc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!IA(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Hh(e.startAt,t.startAt)&&Hh(e.endAt,t.endAt)}function Fa(e){return C.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function MA(e,t,n,r,i,s,o,a){return new to(e,t,n,r,i,s,o,a)}function uc(e){return new to(e)}function Kh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function NA(e){return e.collectionGroup!==null}function vr(e){const t=M(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new wt(Tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new Ts(s,r))}),n.has(Tt.keyField().canonicalString())||t.le.push(new Ts(Tt.keyField(),r))}return t.le}function Yt(e){const t=M(e);return t.he||(t.he=LA(t,vr(e))),t.he}function LA(e,t){if(e.limitType==="F")return Gh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ts(i.field,s)});const n=e.endAt?new _s(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new _s(e.startAt.position,e.startAt.inclusive):null;return Gh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ja(e,t,n){return new to(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function eo(e,t){return cc(Yt(e),Yt(t))&&e.limitType===t.limitType}function zp(e){return`${lc(Yt(e))}|lt:${e.limitType}`}function dn(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Up(i)).join(", ")}]`),Zs(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Nn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Nn(i)).join(",")),`Target(${r})`}(Yt(e))}; limitType=${e.limitType})`}function no(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):C.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of vr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Wh(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,vr(r),i)||r.endAt&&!function(o,a,l){const c=Wh(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,vr(r),i))}(e,t)}function FA(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qp(e){return(t,n)=>{let r=!1;for(const i of vr(e)){const s=jA(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jA(e,t,n){const r=e.field.isKeyField()?C.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Mn(l,c):D()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return D()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Hn(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Op(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new et(C.comparator);function me(){return BA}const Wp=new et(C.comparator);function ar(...e){let t=Wp;for(const n of e)t=t.insert(n.key,n);return t}function Hp(e){let t=Wp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ke(){return _r()}function Gp(){return _r()}function _r(){return new Gn(e=>e.toString(),(e,t)=>e.isEqual(t))}const UA=new et(C.comparator),$A=new wt(C.comparator);function $(...e){let t=$A;for(const n of e)t=t.add(n);return t}const zA=new wt(W);function qA(){return zA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vs(t)?"-0":t}}function Qp(e){return{integerValue:""+e}}function WA(e,t){return EA(t)?Qp(t):Kp(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this._=void 0}}function HA(e,t,n){return e instanceof Es?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sc(s)&&(s=oc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof zr?Xp(e,t):e instanceof qr?Jp(e,t):function(i,s){const o=Yp(i,s),a=Qh(o)+Qh(i.Ie);return Na(o)&&Na(i.Ie)?Qp(a):Kp(i.serializer,a)}(e,t)}function GA(e,t,n){return e instanceof zr?Xp(e,t):e instanceof qr?Jp(e,t):n}function Yp(e,t){return e instanceof ws?function(r){return Na(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Es extends ro{}class zr extends ro{constructor(t){super(),this.elements=t}}function Xp(e,t){const n=Zp(t);for(const r of e.elements)n.some(i=>Zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class qr extends ro{constructor(t){super(),this.elements=t}}function Jp(e,t){let n=Zp(t);for(const r of e.elements)n=n.filter(i=>!Zt(i,r));return{arrayValue:{values:n}}}class ws extends ro{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Qh(e){return at(e.integerValue||e.doubleValue)}function Zp(e){return ac(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function KA(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof zr&&i instanceof zr||r instanceof qr&&i instanceof qr?On(r.elements,i.elements,Zt):r instanceof ws&&i instanceof ws?Zt(r.Ie,i.Ie):r instanceof Es&&i instanceof Es}(e.transform,t.transform)}class QA{constructor(t,n){this.version=t,this.transformResults=n}}class le{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new le}static exists(t){return new le(void 0,t)}static updateTime(t){return new le(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class io{}function tg(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ng(e.key,le.none()):new di(e.key,e.data,le.none());{const n=e.data,r=jt.empty();let i=new wt(Tt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new an(e.key,r,new zt(i.toArray()),le.none())}}function YA(e,t,n){e instanceof di?function(i,s,o){const a=i.value.clone(),l=Xh(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof an?function(i,s,o){if(!Hi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Xh(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(eg(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Tr(e,t,n,r){return e instanceof di?function(s,o,a,l){if(!Hi(s.precondition,o))return a;const c=s.value.clone(),u=Jh(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof an?function(s,o,a,l){if(!Hi(s.precondition,o))return a;const c=Jh(s.fieldTransforms,l,o),u=o.data;return u.setAll(eg(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Hi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function XA(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Yp(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Yh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&On(r,i,(s,o)=>KA(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class di extends io{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class an extends io{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Xh(e,t,n){const r=new Map;G(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,GA(o,a,n[i]))}return r}function Jh(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HA(s,o,t))}return r}class ng extends io{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JA extends io{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&YA(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Tr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Tr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Gp();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=tg(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),$())}isEqual(t){return this.batchId===t.batchId&&On(this.mutations,t.mutations,(n,r)=>Yh(n,r))&&On(this.baseMutations,t.baseMutations,(n,r)=>Yh(n,r))}}class hc{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){G(t.mutations.length===r.length);let i=function(){return UA}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hc(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,z;function nI(e){switch(e){default:return D();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function rg(e){if(e===void 0)return Jt("GRPC error has no .code"),T.UNKNOWN;switch(e){case ot.OK:return T.OK;case ot.CANCELLED:return T.CANCELLED;case ot.UNKNOWN:return T.UNKNOWN;case ot.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ot.INTERNAL:return T.INTERNAL;case ot.UNAVAILABLE:return T.UNAVAILABLE;case ot.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ot.NOT_FOUND:return T.NOT_FOUND;case ot.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ot.ABORTED:return T.ABORTED;case ot.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ot.DATA_LOSS:return T.DATA_LOSS;default:return D()}}(z=ot||(ot={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new xn([4294967295,4294967295],0);function Zh(e){const t=rI().encode(e),n=new iA;return n.update(t),new Uint8Array(n.digest())}function tf(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new xn([n,r],0),new xn([i,s],0)]}class fc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lr(`Invalid padding: ${n}`);if(r<0)throw new lr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new lr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new lr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=xn.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(xn.fromNumber(r)));return i.compare(iI)===1&&(i=new xn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Zh(t),[r,i]=tf(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new fc(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Zh(t),[r,i]=tf(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,mi.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new so(O.min(),i,new et(W),me(),$())}}class mi{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new mi(r,n,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class ig{constructor(t,n){this.targetId=t,this.fe=n}}class sg{constructor(t,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ef{constructor(){this.ge=0,this.pe=rf(),this.ye=Rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=$(),n=$(),r=$();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:D()}}),new mi(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=rf()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,G(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class sI{constructor(t){this.Le=t,this.ke=new Map,this.qe=me(),this.Qe=nf(),this.Ke=new et(W)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:D()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Fa(s))if(r===0){const o=new C(s.path);this.We(n,o,Pt.newNoDocument(o,O.min()))}else G(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=nn(r).toUint8Array()}catch(l){if(l instanceof Mp)return Dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new fc(o,i,s)}catch(l){return Dn(l instanceof lr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Fa(a.target)){const l=new C(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Pt.newNoDocument(l,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=$();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new so(t,n,this.Ke,this.qe,r);return this.qe=me(),this.Qe=nf(),this.Ke=new et(W),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new ef,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new wt(W),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||A("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new ef),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function nf(){return new et(C.comparator)}function rf(){return new et(C.comparator)}const oI={asc:"ASCENDING",desc:"DESCENDING"},aI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lI={and:"AND",or:"OR"};class cI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ba(e,t){return e.useProto3Json||Zs(t)?t:{value:t}}function bs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function og(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function uI(e,t){return bs(e,t.toTimestamp())}function Xt(e){return G(!!e),O.fromTimestamp(function(n){const r=Ce(n);return new ut(r.seconds,r.nanos)}(e))}function dc(e,t){return Ua(e,t).canonicalString()}function Ua(e,t){const n=function(i){return new rt(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function ag(e){const t=rt.fromString(e);return G(fg(t)),t}function $a(e,t){return dc(e.databaseId,t.path)}function Bo(e,t){const n=ag(t);if(n.get(1)!==e.databaseId.projectId)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new C(cg(n))}function lg(e,t){return dc(e.databaseId,t)}function hI(e){const t=ag(e);return t.length===4?rt.emptyPath():cg(t)}function za(e){return new rt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function cg(e){return G(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function sf(e,t,n){return{name:$a(e,t),fields:n.value.mapValue.fields}}function fI(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:D()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(G(u===void 0||typeof u=="string"),Rt.fromBase64String(u||"")):(G(u===void 0||u instanceof Uint8Array),Rt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:rg(c.code);return new R(u,c.message||"")}(o);n=new sg(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bo(e,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):O.min(),a=new jt({mapValue:{fields:r.document.fields}}),l=Pt.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Gi(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Bo(e,r.document),s=r.readTime?Xt(r.readTime):O.min(),o=Pt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Gi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Bo(e,r.document),s=r.removedTargetIds||[];n=new Gi([],s,i,null)}else{if(!("filter"in t))return D();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new eI(i,s),a=r.targetId;n=new ig(a,o)}}return n}function dI(e,t){let n;if(t instanceof di)n={update:sf(e,t.key,t.value)};else if(t instanceof ng)n={delete:$a(e,t.key)};else if(t instanceof an)n={update:sf(e,t.key,t.data),updateMask:wI(t.fieldMask)};else{if(!(t instanceof JA))return D();n={verify:$a(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Es)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ws)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw D()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:uI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:D()}(e,t.precondition)),n}function mI(e,t){return e&&e.length>0?(G(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Xt(i.updateTime):Xt(s);return o.isEqual(O.min())&&(o=Xt(s)),new QA(o,i.transformResults||[])}(n,t))):[]}function pI(e,t){return{documents:[lg(e,t.path)]}}function gI(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lg(e,i);const s=function(c){if(c.length!==0)return hg(te.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(f){return{field:mn(f.field),direction:_I(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ba(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:i}}function yI(e){let t=hI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){G(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const f=ug(h);return f instanceof te&&jp(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new Ts(pn(m.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Zs(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new _s(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new _s(d,f)}(n.endAt)),MA(t,i,o,s,a,"F",l,c)}function vI(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return D()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ug(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pn(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pn(n.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pn(n.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pn(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(e):e.fieldFilter!==void 0?function(n){return ct.create(pn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return te.create(n.compositeFilter.filters.map(r=>ug(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return D()}}(n.compositeFilter.op))}(e):D()}function _I(e){return oI[e]}function TI(e){return aI[e]}function EI(e){return lI[e]}function mn(e){return{fieldPath:e.canonicalString()}}function pn(e){return Tt.fromServerFormat(e.fieldPath)}function hg(e){return e instanceof ct?function(n){if(n.op==="=="){if(qh(n.value))return{unaryFilter:{field:mn(n.field),op:"IS_NAN"}};if(zh(n.value))return{unaryFilter:{field:mn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qh(n.value))return{unaryFilter:{field:mn(n.field),op:"IS_NOT_NAN"}};if(zh(n.value))return{unaryFilter:{field:mn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(n.field),op:TI(n.op),value:n.value}}}(e):e instanceof te?function(n){const r=n.getFilters().map(i=>hg(i));return r.length===1?r[0]:{compositeFilter:{op:EI(n.op),filters:r}}}(e):D()}function wI(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function fg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,n,r,i,s=O.min(),o=O.min(),a=Rt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t){this.ct=t}}function AI(e){const t=yI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ja(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this._n=new PI}addToCollectionParentIndex(t,n){return this._n.add(n),_.resolve()}getCollectionParents(t,n){return _.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return _.resolve()}deleteFieldIndex(t,n){return _.resolve()}deleteAllFieldIndexes(t){return _.resolve()}createTargetIndexes(t,n){return _.resolve()}getDocumentsMatchingTarget(t,n){return _.resolve(null)}getIndexType(t,n){return _.resolve(0)}getFieldIndexes(t,n){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,n){return _.resolve(Re.min())}getMinOffsetFromCollectionGroup(t,n){return _.resolve(Re.min())}updateCollectionGroup(t,n,r){return _.resolve()}updateIndexEntries(t,n){return _.resolve()}}class PI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new wt(rt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new wt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ln(0)}static Bn(){return new Ln(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.changes=new Gn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Tr(r.mutation,i,zt.empty(),ut.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,n,r=$()){const i=Ke();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=ar();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ke();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,$()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=me();const o=_r(),a=function(){return _r()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof an)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Tr(u.mutation,c,u.mutation.getFieldMask(),ut.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new SI(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=_r();let i=new et((o,a)=>o-a),s=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||zt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||$()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Gp();u.forEach(f=>{if(!s.has(f)){const d=tg(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return C.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):NA(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):_.resolve(Ke());let a=-1,l=s;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,$())).next(u=>({batchId:a,changes:Hp(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new C(n)).next(r=>{let i=ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=ar();return this.indexManager.getCollectionParents(t,s).next(a=>_.forEach(a,l=>{const c=function(h,f){return new to(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Pt.newInvalidDocument(u)))});let a=ar();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&Tr(u.mutation,c,zt.empty(),ut.now()),no(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return _.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(n)),_.resolve()}getNamedQuery(t,n){return _.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:AI(i.bundledQuery),readTime:Xt(i.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.overlays=new et(C.comparator),this.hr=new Map}getOverlay(t,n){return _.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ke();return _.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),_.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(t,n,r){const i=Ke(),s=n.length+1,o=new C(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new et((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Ke(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ke(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return _.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tI(n,r));let s=this.hr.get(n);s===void 0&&(s=$(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.Pr=new wt(ft.Ir),this.Tr=new wt(ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new ft(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new ft(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new C(new rt([])),r=new ft(n,t),i=new ft(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new C(new rt([])),r=new ft(n,t),i=new ft(n,t+1);let s=$();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new ft(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return C.comparator(t.key,n.key)||W(t.pr,n.pr)}static Er(t,n){return W(t.pr,n.pr)||C.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new wt(ft.Ir)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new ft(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,n){return _.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new wt(W);return n.forEach(i=>{const s=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;C.isDocumentKey(s)||(s=s.child(""));const o=new ft(new C(s),0);let a=new wt(W);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){G(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(n.mutations,i=>{const s=new ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new ft(n,0),i=this.wr.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t){this.vr=t,this.docs=function(){return new et(C.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(t,n){let r=me();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=me();const o=n.path,a=new C(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gA(pA(u),r)<=0||(i.has(u.key)||no(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(t,n,r,i){D()}Fr(t,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new OI(this)}getSize(t){return _.resolve(this.size)}}class OI extends xI{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),_.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(t){this.persistence=t,this.Mr=new Gn(n=>lc(n),cc),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Or=0,this.Nr=new mc,this.targetCount=0,this.Br=Ln.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),_.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Ln(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,_.resolve()}updateTargetData(t,n){return this.qn(n),_.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return _.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),_.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),_.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return _.resolve(r)}containsKey(t,n){return _.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(t,n){this.Lr={},this.overlays={},this.kr=new ic(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new MI(this),this.indexManager=new II,this.remoteDocumentCache=function(i){return new DI(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new bI(n),this.$r=new CI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new VI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new kI(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){A("MemoryPersistence","Starting transaction:",t);const i=new LI(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return _.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class LI extends vA{constructor(t){super(),this.currentSequenceNumber=t}}class pc{constructor(t){this.persistence=t,this.zr=new mc,this.jr=null}static Hr(t){return new pc(t)}get Jr(){if(this.jr)return this.jr;throw D()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),_.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),_.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const i=C.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,O.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return _.or([()=>_.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=$(),i=$();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gc(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return BE()?8:Ge.v(ls())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new FI;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(nr()<=q.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",dn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_.resolve()):(nr()<=q.DEBUG&&A("QueryEngine","Query:",dn(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(nr()<=q.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",dn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Yt(n))):_.resolve())}ji(t,n){if(Kh(n))return _.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ja(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=$(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(t,ja(n,null,"F")):this.es(t,c,n,l)}))})))}Hi(t,n,r,i){return Kh(n)||i.isEqual(O.min())?_.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?_.resolve(null):(nr()<=q.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dn(n)),this.es(t,o,n,mA(i,-1)).next(a=>a))})}Zi(t,n){let r=new wt(qp(t));return n.forEach((i,s)=>{no(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return nr()<=q.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",dn(n)),this.zi.getDocumentsMatchingQuery(t,n,Re.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new et(W),this.rs=new Gn(s=>lc(s),cc),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new RI(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function UI(e,t,n,r){return new BI(e,t,n,r)}async function dg(e,t){const n=M(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=$();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function $I(e,t){const n=M(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=_.resolve();return f.forEach(m=>{d=d.next(()=>u.getEntry(l,m)).next(p=>{const g=c.docVersions.get(m);G(g!==null),p.version.compareTo(g)<0&&(h.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=$();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function mg(e){const t=M(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function zI(e,t){const n=M(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(Rt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(p,g,E){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,d,u)&&a.push(n.Qr.updateTargetData(s,d))});let l=me(),c=$();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(qI(s,o,t.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(O.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function qI(e,t,n){let r=$(),i=$();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=me();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(O.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function WI(e,t){const n=M(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function HI(e,t){const n=M(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,_.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ee(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function qa(e,t,n){const r=M(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fi(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function of(e,t,n){const r=M(e);let i=O.min(),s=$();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=M(l),f=h.rs.get(u);return f!==void 0?_.resolve(h.ns.get(f)):h.Qr.getTargetData(c,u)}(r,o,Yt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:O.min(),n?s:$())).next(a=>(GI(r,FA(t),a),{documents:a,hs:s})))}function GI(e,t,n){let r=e.ss.get(t)||O.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class af{constructor(){this.activeTargetIds=qA()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class KI{constructor(){this.no=new af,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new af,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji=null;function Uo(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class JI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Uo(),l=this.bo(n,r.toUriEncodedString());A("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,l,c,i).then(u=>(A("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Dn("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=YI[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=Uo();return new Promise((o,a)=>{const l=new rA;l.setWithCredentials(!0),l.listenOnce(eA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jo.NO_ERROR:const u=l.getResponseJson();A(bt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case jo.TIMEOUT:A(bt,`RPC '${t}' ${s} timed out`),a(new R(T.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const h=l.getStatus();if(A(bt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(g){const E=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(E)>=0?E:T.UNKNOWN}(d.status);a(new R(m,d.message))}else a(new R(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new R(T.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{A(bt,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);A(bt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Fo(t,n,r){const i=Uo(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Zb(),a=tA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");A(bt,`Creating RPC '${t}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const m=new XI({lo:g=>{d?A(bt,`Not sending because RPC '${t}' stream ${i} is closed:`,g):(f||(A(bt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),A(bt,`RPC '${t}' stream ${i} sending:`,g),h.send(g))},ho:()=>h.close()}),p=(g,E,v)=>{g.listen(E,y=>{try{v(y)}catch(w){setTimeout(()=>{throw w},0)}})};return p(h,Ni.EventType.OPEN,()=>{d||A(bt,`RPC '${t}' stream ${i} transport opened.`)}),p(h,Ni.EventType.CLOSE,()=>{d||(d=!0,A(bt,`RPC '${t}' stream ${i} transport closed`),m.Vo())}),p(h,Ni.EventType.ERROR,g=>{d||(d=!0,Dn(bt,`RPC '${t}' stream ${i} transport errored:`,g),m.Vo(new R(T.UNAVAILABLE,"The operation could not be completed")))}),p(h,Ni.EventType.MESSAGE,g=>{var E;if(!d){const v=g.data[0];G(!!v);const y=v,w=y.error||((E=y[0])===null||E===void 0?void 0:E.error);if(w){A(bt,`RPC '${t}' stream ${i} received error:`,w);const x=w.status;let F=function(j){const pt=ot[j];if(pt!==void 0)return rg(pt)}(x),B=w.message;F===void 0&&(F=T.INTERNAL,B="Unknown error status: "+x+" with message "+w.message),d=!0,m.Vo(new R(F,B)),h.close()}else A(bt,`RPC '${t}' stream ${i} received:`,v),m.mo(v)}}),p(a,nA.STAT_EVENT,g=>{g.stat===Lh.PROXY?A(bt,`RPC '${t}' stream ${i} detected buffering proxy`):g.stat===Lh.NOPROXY&&A(bt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ro()},0),m}}function $o(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e){return new cI(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,n,r,i,s,o,a,l){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new pg(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new R(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return A("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZI extends gg{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=fI(this.serializer,t),r=function(s){if(!("targetChange"in s))return O.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?O.min():o.readTime?Xt(o.readTime):O.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=za(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Fa(l)?{documents:pI(s,l)}:{query:gI(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=og(s,o.resumeToken);const c=Ba(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(O.min())>0){a.readTime=bs(s,o.snapshotVersion.toTimestamp());const c=Ba(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=vI(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=za(this.serializer),n.removeTarget=t,this.t_(n)}}class tP extends gg{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=mI(t.writeResults,t.commitTime),r=Xt(t.commitTime);return this.listener.T_(r,n)}return G(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=za(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>dI(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,Ua(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(T.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Ua(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new R(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class nP{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Jt(n),this.g_=!1):A("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{ln(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=M(l);c.v_.add(4),await pi(c),c.x_.set("Unknown"),c.v_.delete(4),await ao(c)}(this))})}),this.x_=new nP(r,i)}}async function ao(e){if(ln(e))for(const t of e.F_)await t(!0)}async function pi(e){for(const t of e.F_)await t(!1)}function yg(e,t){const n=M(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),_c(n)?vc(n):Kn(n).Jo()&&yc(n,t))}function vg(e,t){const n=M(e),r=Kn(n);n.C_.delete(t),r.Jo()&&_g(n,t),n.C_.size===0&&(r.Jo()?r.Xo():ln(n)&&n.x_.set("Unknown"))}function yc(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Kn(e).c_(t)}function _g(e,t){e.O_.Oe(t),Kn(e).l_(t)}function vc(e){e.O_=new sI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Kn(e).start(),e.x_.p_()}function _c(e){return ln(e)&&!Kn(e).Ho()&&e.C_.size>0}function ln(e){return M(e).v_.size===0}function Tg(e){e.O_=void 0}async function iP(e){e.C_.forEach((t,n)=>{yc(e,t)})}async function sP(e,t){Tg(e),_c(e)?(e.x_.S_(t),vc(e)):e.x_.set("Unknown")}async function oP(e,t,n){if(e.x_.set("Online"),t instanceof sg&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await As(e,r)}else if(t instanceof Gi?e.O_.$e(t):t instanceof ig?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(O.min()))try{const r=await mg(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.C_.get(c);u&&s.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.C_.get(l);if(!u)return;s.C_.set(l,u.withResumeToken(Rt.EMPTY_BYTE_STRING,u.snapshotVersion)),_g(s,l);const h=new Ee(u.target,l,c,u.sequenceNumber);yc(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await As(e,r)}}async function As(e,t,n){if(!fi(t))throw t;e.v_.add(1),await pi(e),e.x_.set("Offline"),n||(n=()=>mg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await ao(e)})}function Eg(e,t){return t().catch(n=>As(e,n,t))}async function lo(e){const t=M(e),n=Ve(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;aP(t);)try{const i=await WI(t.localStore,r);if(i===null){t.D_.length===0&&n.Xo();break}r=i.batchId,lP(t,i)}catch(i){await As(t,i)}wg(t)&&bg(t)}function aP(e){return ln(e)&&e.D_.length<10}function lP(e,t){e.D_.push(t);const n=Ve(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function wg(e){return ln(e)&&!Ve(e).Ho()&&e.D_.length>0}function bg(e){Ve(e).start()}async function cP(e){Ve(e).d_()}async function uP(e){const t=Ve(e);for(const n of e.D_)t.I_(n.mutations)}async function hP(e,t,n){const r=e.D_.shift(),i=hc.from(r,t,n);await Eg(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await lo(e)}async function fP(e,t){t&&Ve(e).P_&&await async function(r,i){if(function(o){return nI(o)&&o!==T.ABORTED}(i.code)){const s=r.D_.shift();Ve(r).Zo(),await Eg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lo(r)}}(e,t),wg(e)&&bg(e)}async function cf(e,t){const n=M(e);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=ln(n);n.v_.add(3),await pi(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await ao(n)}async function dP(e,t){const n=M(e);t?(n.v_.delete(2),await ao(n)):t||(n.v_.add(2),await pi(n),n.x_.set("Unknown"))}function Kn(e){return e.N_||(e.N_=function(n,r,i){const s=M(n);return s.R_(),new ZI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:iP.bind(null,e),To:sP.bind(null,e),u_:oP.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),_c(e)?vc(e):e.x_.set("Unknown")):(await e.N_.stop(),Tg(e))})),e.N_}function Ve(e){return e.B_||(e.B_=function(n,r,i){const s=M(n);return s.R_(),new tP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:cP.bind(null,e),To:fP.bind(null,e),E_:uP.bind(null,e),T_:hP.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await lo(e)):(await e.B_.stop(),e.D_.length>0&&(A("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Tc(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ec(e,t){if(Jt("AsyncQueue",`${t}: ${e}`),fi(e))return new R(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.comparator=t?(n,r)=>t(n,r)||C.comparator(n.key,r.key):(n,r)=>C.comparator(n.key,r.key),this.keyedMap=ar(),this.sortedSet=new et(this.comparator)}static emptySet(t){return new Sn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Sn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Sn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.L_=new et(C.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):D():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Fn{constructor(t,n,r,i,s,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fn(t,n,Sn.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&eo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.q_=void 0,this.Q_=[]}}class pP{constructor(){this.queries=new Gn(t=>zp(t),eo),this.onlineState="Unknown",this.K_=new Set}}async function gP(e,t){const n=M(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new mP),i)try{s.q_=await n.onListen(r)}catch(o){const a=Ec(o,`Initialization of query '${dn(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&wc(n)}async function yP(e,t){const n=M(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vP(e,t){const n=M(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&wc(n)}function _P(e,t,n){const r=M(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function wc(e){e.K_.forEach(t=>{t.next()})}class TP{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Fn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Fn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t){this.key=t}}class Ig{constructor(t){this.key=t}}class EP{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=$(),this.mutatedKeys=$(),this.ua=qp(t),this.ca=new Sn(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new uf,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const f=i.get(u),d=no(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),p=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?m!==p&&(r.track({type:3,doc:d}),g=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),g=!0,(l&&this.ua(d,l)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),g=!0):f&&!d&&(r.track({type:1,doc:f}),g=!0,(l||c)&&(a=!0)),g&&(d?(o=o.add(d),s=p?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(d,m){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return p(d)-p(m)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new Fn(this.query,t.ca,s,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new uf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=$(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Ig(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Ag(r))}),n}Ra(t){this.oa=t.hs,this.aa=$();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Fn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class wP{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class bP{constructor(t){this.key=t,this.ma=!1}}class AP{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Gn(a=>zp(a),eo),this.pa=new Map,this.ya=new Set,this.wa=new et(C.comparator),this.Sa=new Map,this.ba=new mc,this.Da={},this.Ca=new Map,this.va=Ln.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function IP(e,t){const n=MP(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await HI(n.localStore,Yt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await PP(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&yg(n.remoteStore,o)}return i}async function PP(e,t,n,r,i){e.Ma=(h,f,d)=>async function(p,g,E,v){let y=g.view.ha(E);y.Xi&&(y=await of(p.localStore,g.query,!1).then(({documents:B})=>g.view.ha(B,y)));const w=v&&v.targetChanges.get(g.targetId),x=v&&v.targetMismatches.get(g.targetId)!=null,F=g.view.applyChanges(y,p.isPrimaryClient,w,x);return ff(p,g.targetId,F.da),F.snapshot}(e,h,f,d);const s=await of(e.localStore,t,!0),o=new EP(t,s.hs),a=o.ha(s.documents),l=mi.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,l);ff(e,n,c.da);const u=new wP(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function xP(e,t){const n=M(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!eo(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qa(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vg(n.remoteStore,r.targetId),Wa(n,r.targetId)}).catch(hi)):(Wa(n,r.targetId),await qa(n.localStore,r.targetId,!0))}async function SP(e,t,n){const r=NP(e);try{const i=await function(o,a){const l=M(o),c=ut.now(),u=a.reduce((d,m)=>d.add(m.key),$());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=me(),p=$();return l.os.getEntries(d,u).next(g=>{m=g,m.forEach((E,v)=>{v.isValidDocument()||(p=p.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(g=>{h=g;const E=[];for(const v of a){const y=XA(v,h.get(v.key).overlayedDocument);y!=null&&E.push(new an(v.key,y,Np(y.value.mapValue),le.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,E,a)}).next(g=>{f=g;const E=g.applyToLocalDocumentSet(h,p);return l.documentOverlayCache.saveOverlays(d,g.batchId,E)})}).then(()=>({batchId:f.batchId,changes:Hp(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new et(W)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,n),await gi(r,i.changes),await lo(r.remoteStore)}catch(i){const s=Ec(i,"Failed to persist write");n.reject(s)}}async function Pg(e,t){const n=M(e);try{const r=await zI(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?G(o.ma):i.removedDocuments.size>0&&(G(o.ma),o.ma=!1))}),await gi(n,r,t)}catch(r){await hi(r)}}function hf(e,t,n){const r=M(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=M(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.Q_)f.U_(a)&&(c=!0)}),c&&wc(l)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function RP(e,t,n){const r=M(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new et(C.comparator);o=o.insert(s,Pt.newNoDocument(s,O.min()));const a=$().add(s),l=new so(O.min(),new Map,new et(W),o,a);await Pg(r,l),r.wa=r.wa.remove(s),r.Sa.delete(t),bc(r)}else await qa(r.localStore,t,!1).then(()=>Wa(r,t,n)).catch(hi)}async function CP(e,t){const n=M(e),r=t.batch.batchId;try{const i=await $I(n.localStore,t);Sg(n,r,null),xg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gi(n,i)}catch(i){await hi(i)}}async function VP(e,t,n){const r=M(e);try{const i=await function(o,a){const l=M(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(G(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Sg(r,t,n),xg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await gi(r,i)}catch(i){await hi(i)}}function xg(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function Sg(e,t,n){const r=M(e);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Wa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||Rg(e,r)})}function Rg(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(vg(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),bc(e))}function ff(e,t,n){for(const r of n)r instanceof Ag?(e.ba.addReference(r.key,t),kP(e,r)):r instanceof Ig?(A("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Rg(e,r.key)):D()}function kP(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(A("SyncEngine","New document in limbo: "+n),e.ya.add(r),bc(e))}function bc(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new C(rt.fromString(t)),r=e.va.next();e.Sa.set(r,new bP(n)),e.wa=e.wa.insert(n,r),yg(e.remoteStore,new Ee(Yt(uc(n.path)),r,"TargetPurposeLimboResolution",ic._e))}}async function gi(e,t,n){const r=M(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=gc.Ki(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,c){const u=M(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(c,f=>_.forEach(f.qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>_.forEach(f.Qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!fi(h))throw h;A("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ns.get(f),m=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(m);u.ns=u.ns.insert(f,p)}}}(r.localStore,s))}async function DP(e,t){const n=M(e);if(!n.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const r=await dg(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new R(T.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await gi(n,r.us)}}function OP(e,t){const n=M(e),r=n.Sa.get(t);if(r&&r.ma)return $().add(r.key);{let i=$();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function MP(e){const t=M(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=OP.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=RP.bind(null,t),t.fa.u_=vP.bind(null,t.eventManager),t.fa.xa=_P.bind(null,t.eventManager),t}function NP(e){const t=M(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=CP.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=VP.bind(null,t),t}class df{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=oo(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return UI(this.persistence,new jI,t.initialUser,this.serializer)}createPersistence(t){return new NI(pc.Hr,this.serializer)}createSharedClientState(t){return new KI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LP{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DP.bind(null,this.syncEngine),await dP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pP}()}createDatastore(t){const n=oo(t.databaseInfo.databaseId),r=function(s){return new JI(s)}(t.databaseInfo);return function(s,o,a,l){return new eP(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new rP(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>hf(this.syncEngine,n,0),function(){return lf.D()?new lf:new QI}())}createSyncEngine(t,n){return function(i,s,o,a,l,c,u){const h=new AP(i,s,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=M(r);A("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await pi(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Jt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=Dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ec(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function zo(e,t){e.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dg(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function mf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await UP(e);A("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>cf(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>cf(t.remoteStore,i)),e._onlineComponents=t}function BP(e){return e.name==="FirebaseError"?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function UP(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await zo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!BP(n))throw n;Dn("Error using user provided cache. Falling back to memory cache: "+n),await zo(e,new df)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await zo(e,new df);return e._offlineComponents}async function Cg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await mf(e,e._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await mf(e,new LP))),e._onlineComponents}function $P(e){return Cg(e).then(t=>t.syncEngine)}async function zP(e){const t=await Cg(e),n=t.eventManager;return n.onListen=IP.bind(null,t.syncEngine),n.onUnlisten=xP.bind(null,t.syncEngine),n}function qP(e,t,n={}){const r=new ae;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new FP({next:f=>{o.enqueueAndForget(()=>yP(s,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new R(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new R(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new TP(uc(a.path),u,{includeMetadataChanges:!0,Z_:!0});return gP(s,h)}(await zP(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(e,t,n){if(!n)throw new R(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function HP(e,t,n,r){if(t===!0&&r===!0)throw new R(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function gf(e){if(!C.isDocumentKey(e))throw new R(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ac(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":D()}function Wr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new R(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ac(e);throw new R(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new R(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new R(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}HP("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ic{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sA;switch(r.type){case"firstParty":return new cA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new R(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pf.get(n);r&&(A("ComponentProvider","Removing Datastore"),pf.delete(n),r.terminate())}(this),Promise.resolve()}}function GP(e,t,n,r={}){var i;const s=(e=Wr(e,Ic))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=It.MOCK_USER;else{a=FE(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new R(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new It(c)}e._authCredentials=new oA(new kp(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Pc(this.firestore,t,this._query)}}class Bt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class Hr extends Pc{constructor(t,n,r){super(t,n,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new C(t))}withConverter(t){return new Hr(this.firestore,t,this._path)}}function kg(e,t,...n){if(e=cs(e),arguments.length===1&&(t=Dp.newId()),WP("doc","path",t),e instanceof Ic){const r=rt.fromString(t,...n);return gf(r),new Bt(e,null,new C(r))}{if(!(e instanceof Bt||e instanceof Hr))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rt.fromString(t,...n));return gf(r),new Bt(e.firestore,e instanceof Hr?e.converter:null,new C(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new pg(this,"async_queue_retry"),this._u=()=>{const n=$o();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=$o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=$o();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new ae;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!fi(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Jt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=Tc.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&D()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class xc extends Ic{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new KP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Og(this),this._firestoreClient.terminate()}}function QP(e,t){const n=typeof e=="object"?e:zw(),r=typeof e=="string"?e:t||"(default)",i=jw(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=NE("firestore");s&&GP(i,...s)}return i}function Dg(e){return e._firestoreClient||Og(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Og(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,c,u){return new bA(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Vg(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new jP(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new jn(Rt.fromBase64String(t))}catch(n){throw new R(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new jn(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new R(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new R(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new R(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/^__.*__$/;class XP{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new an(t,this.data,this.fieldMask,n,this.fieldTransforms):new di(t,this.data,n,this.fieldTransforms)}}function Ng(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class Cc{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Cc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Is(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(Ng(this.du)&&YP.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class JP{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||oo(t)}Su(t,n,r,i=!1){return new Cc({du:t,methodName:n,wu:r,path:Tt.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZP(e){const t=e._freezeSettings(),n=oo(e._databaseId);return new JP(e._databaseId,!!t.ignoreUndefinedProperties,n)}function tx(e,t,n,r,i,s={}){const o=e.Su(s.merge||s.mergeFields?2:0,t,n,i);Bg("Data must be an object, but it was:",o,r);const a=Fg(r,o);let l,c;if(s.merge)l=new zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=ex(t,h,n);if(!o.contains(f))throw new R(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);rx(u,f)||u.push(f)}l=new zt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new XP(new jt(a),l,c)}function Lg(e,t){if(jg(e=cs(e)))return Bg("Unsupported field value:",t,e),Fg(e,t);if(e instanceof Mg)return function(r,i){if(!Ng(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Lg(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=cs(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ut.fromDate(r);return{timestampValue:bs(i.serializer,s)}}if(r instanceof ut){const s=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bs(i.serializer,s)}}if(r instanceof Rc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jn)return{bytesValue:og(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Ac(r)}`)}(e,t)}function Fg(e,t){const n={};return Op(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hn(e,(r,i)=>{const s=Lg(i,t.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ut||e instanceof Rc||e instanceof jn||e instanceof Bt||e instanceof Mg)}function Bg(e,t,n){if(!jg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ac(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function ex(e,t,n){if((t=cs(t))instanceof Sc)return t._internalPath;if(typeof t=="string")return Ug(e,t);throw Is("Field path arguments must be of type string or ",e,!1,void 0,n)}const nx=new RegExp("[~\\*/\\[\\]]");function Ug(e,t,n){if(t.search(nx)>=0)throw Is(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sc(...t.split("."))._internalPath}catch{throw Is(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Is(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new R(T.INVALID_ARGUMENT,a+e+l)}function rx(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ix(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(zg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ix extends $g{data(){return super.data()}}function zg(e,t){return typeof t=="string"?Ug(e,t):t instanceof Sc?t._internalPath:t._delegate._internalPath}class sx{convertValue(t,n="none"){switch(rn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(nn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw D()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Hn(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Rc(at(t.latitude),at(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=oc(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Br(t));default:return null}}convertTimestamp(t){const n=Ce(t);return new ut(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=rt.fromString(t);G(fg(r));const i=new Ur(r.get(1),r.get(3)),s=new C(r.popFirst(5));return i.isEqual(n)||Jt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qg extends $g{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new lx(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(zg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lx extends qg{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(e){e=Wr(e,Bt);const t=Wr(e.firestore,xc);return qP(Dg(t),e._key).then(n=>dx(t,e,n))}class ux extends sx{constructor(t){super(),this.firestore=t}convertBytes(t){return new jn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function hx(e,t,n){e=Wr(e,Bt);const r=Wr(e.firestore,xc),i=ox(e.converter,t,n);return fx(r,[tx(ZP(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,le.none())])}function fx(e,t){return function(r,i){const s=new ae;return r.asyncQueue.enqueueAndForget(async()=>SP(await $P(r),i,s)),s.promise}(Dg(e),t)}function dx(e,t,n){const r=n.docs.get(t._key),i=new ux(e);return new qg(e,i,t._key,r,new ax(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Wn=i})($w),hs(new Rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new xc(new aA(r.getProvider("auth-internal")),new hA(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new R(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),In(Fh,"4.4.2",t),In(Fh,"4.4.2","esm2017")})();var mx="firebase",px="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(mx,px,"app");const gx={apiKey:"AIzaSyALC7_uNBF4IFQmr-CXOYa6s3slDka1KYc",authDomain:"dillo-day.firebaseapp.com",projectId:"dillo-day",storageBucket:"dillo-day.appspot.com",messagingSenderId:"1025535388888",appId:"1:1025535388888:web:32c934380d9ce0332cfbad"},yx=Pm(gx),Wg=QP(yx),vx=J.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  transition: height 200ms;
`,_x=J.div`
  padding: 12px;
`,Tx=J.p`
  margin: 0;
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({theme:e})=>e.formTitle};
  text-transform: uppercase;

  ${Kr} {
    text-align: center;
  }
`,Ex=J.p`
  text-align: left;
  margin: 0;
  font-size: 16px;
  font-family: Merriweather;
  color: ${({theme:e})=>e.formText};

  ${Kr} {
    text-align: center;
  }
`,vf=J.p`
  text-align: center;
`,_f=J.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 0;

  ${Kr} {
    flex-direction: column;
    padding: 0 8px;
    box-sizing: border-box;
  }
`,Ha=J.input`
  background: ${({theme:e})=>e.inputBackground};
  color: ${({theme:e})=>e.inputForeground};
  border: none;
  outline: none;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  flex: 1;
  margin: 0 8px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  font-family: Merriweather;

  &::placeholder {
    color: ${({theme:e})=>e.inputPlaceholder};
  }

  &:hover {
    outline: 2px solid ${({theme:e})=>e.inputOutlineHover};
  }

  &:focus {
    outline: 2px solid ${({theme:e})=>e.inputOutlineFocus};
  }

  ${Kr} {
    margin: 8px;
  }
`,wx=J(Ha)`
  flex: 75%;
  font-family: Merriweather;
`,bx=J.button`
  margin: 0 8px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.linkBackground};
  border: 2px solid ${({theme:e})=>e.linkBackground};
  color: ${({theme:e})=>e.linkForeground};
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  width: 100%;
  box-sizing: border-box;
  flex: 25%;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Rye';
  font-size: 16px;

  &:hover {
    background: ${({theme:e})=>e.linkBackgroundHover};
    color: ${({theme:e})=>e.linkForegroundHover};
  }

  ${Kr} {
    margin: 8px;
  }
`;function Ax(){const[e,t]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,a]=b.useState("idle"),l=()=>{a("submitting"),hx(kg(Wg,"members",i),{firstName:e,lastName:n,email:i,createdAt:new Date}).then(()=>a("success")).catch(c=>{console.error(c),a("error")})};return L.jsxs(vx,{onSubmit:c=>{c.preventDefault(),l()},children:[L.jsxs(_x,{children:[L.jsx(Tx,{children:"Join the Dillo Day mailing list!"}),L.jsx(Ex,{children:"Don't miss out on the latest Dillo Day news and exclusive free stuff."})]}),o==="success"?L.jsx(vf,{children:"You've been added to the mailing list. Thanks for joining!"}):o==="error"?L.jsx(vf,{children:"Something went wrong when adding you to the mailing list."}):L.jsxs(L.Fragment,{children:[L.jsxs(_f,{children:[L.jsx(Ha,{type:"text",placeholder:"First Name",autoComplete:"given-name",required:!0,value:e,onChange:c=>t(c.target.value)}),L.jsx(Ha,{type:"text",placeholder:"Last Name",autoComplete:"family-name",required:!0,value:n,onChange:c=>r(c.target.value)})]}),L.jsxs(_f,{children:[L.jsx(wx,{type:"email",placeholder:"Email",autoComplete:"email",required:!0,value:i,onChange:c=>s(c.target.value)}),L.jsx(bx,{type:"submit",disabled:o==="submitting",children:o==="submitting"?"...":"Subscribe"})]})]})]})}const Ix=J(Ld.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 32px 0;
`,Px={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.4,staggerChildren:.08}}};function xx({children:e}){return L.jsx(Ix,{initial:"hidden",animate:"visible",variants:Px,children:e})}const Sx="/image.png",Rx=J.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #2e4595;
  font-family: 'Rye';
`,Cx=J.div`
  position: absolute;
  inset: 0;
  background-color: #2e4595;
  mix-blend-mode: multiply;
  opacity: 0.6;
`,Vx=J.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
`,kx=J.img`
  width: 100%;
  min-height: 240px;
  max-height: 320px;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: 1;
`,Dx=J.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 64px 32px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  color: white;
`,Ox=J.img`
  width: 100%;
  max-width: 120px;
  margin-bottom: 16px;
  border-radius: 50%;
  position: absolute;
  top: -76px;
  border: 8px solid ${({theme:e})=>e.background};
  z-index: 2;
`,Mx=J.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0;
  margin-bottom: 12px;
`,Nx=J.p`
  margin: 0;
  font-size: 1.25rem;
  color: #f6f2a3;
  font-family: Merriweather;
  font-weight: 600;
`,Lx=J.div`
  display: flex;
  margin: 16px 0;
  gap: 4px;
`,Fx=J.p`
  opacity: 0.75;
  height: 256px;
`,jx=J.p`
  font-size: 14px;
  color: ${({theme:e})=>e.footerText};
  margin: 32px 0;
`;function Bx(){const[e,t]=b.useState(""),[n,r]=b.useState(null);return b.useEffect(()=>{cx(kg(Wg,"bio","content")).then(s=>{s.exists()&&r(s.data().links)}).catch(s=>{t(`Error getting links: ${s}`)});const i=setTimeout(()=>{t("Dilloading links...")},2e3);return()=>clearTimeout(i)},[]),L.jsx(Kg,{theme:Qg,children:L.jsx(AT,{children:L.jsxs(Rx,{children:[L.jsx(Cx,{}),L.jsx(Vx,{src:Sx,alt:""}),L.jsx(kx,{src:"/background.jpg"}),L.jsxs(Dx,{children:[L.jsx(Ox,{src:"/pfpblue.png"}),L.jsx(Mx,{src:"/dillodaycarnival@4x.png",alt:"Dillo Day"}),L.jsx(Nx,{children:"The largest student-run music festival in the nation."}),L.jsxs(Lx,{children:[L.jsx(Vi,{icon:ty,link:"https://www.instagram.com/dillo_day/"}),L.jsx(Vi,{icon:Zg,link:"https://www.tiktok.com/@dilloday"}),L.jsx(Vi,{icon:Xg,link:"https://open.spotify.com/user/dillo_day"}),L.jsx(Vi,{icon:Jg,link:"https://twitter.com/Dillo_Day"})]}),n?L.jsx(xx,{children:n.map(i=>L.jsx(ST,{...i},i.title))}):L.jsx(Fx,{children:e}),L.jsx(Ax,{}),L.jsxs(jx,{children:["Copyright © ",new Date().getFullYear()," Mayfest Productions"]})]})]})})})}Yg.createRoot(document.getElementById("root")).render(L.jsx(Gr.StrictMode,{children:L.jsx(Bx,{})}));
