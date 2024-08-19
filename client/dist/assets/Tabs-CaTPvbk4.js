import{k as ft,i as pt,s as j,a8 as Pt,a9 as Nt,_ as b,r as d,l as ht,m as rt,n as L,j as m,o as vt,aa as Qt,ab as Lt,ac as kt,ad as Ft,ae as Zt,af as te,ag as lt,u as ee,ah as ut,ai as oe}from"./index-CxJtQRLb.js";let U;function $t(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function le(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch($t()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function re(t){return pt("MuiTab",t)}const N=ft("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),ne=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],se=t=>{const{classes:e,textColor:r,fullWidth:a,wrapped:s,icon:c,label:h,selected:p,disabled:u}=t,x={root:["root",c&&h&&"labelIcon",`textColor${Nt(r)}`,a&&"fullWidth",s&&"wrapped",p&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return vt(x,re,e)},ae=j(Pt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Nt(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped,{[`& .${N.iconWrapper}`]:e.iconWrapper}]}})(({theme:t,ownerState:e})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${N.iconWrapper}`]:b({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${N.selected}`]:{opacity:1},[`&.${N.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${N.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${N.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${N.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${N.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),Me=d.forwardRef(function(e,r){const a=ht({props:e,name:"MuiTab"}),{className:s,disabled:c=!1,disableFocusRipple:h=!1,fullWidth:p,icon:u,iconPosition:x="top",indicator:B,label:y,onChange:v,onClick:w,onFocus:k,selected:I,selectionFollowsFocus:g,textColor:H="inherit",value:M,wrapped:nt=!1}=a,D=rt(a,ne),Y=b({},a,{disabled:c,disableFocusRipple:h,selected:I,icon:!!u,iconPosition:x,label:!!y,fullWidth:p,textColor:H,wrapped:nt}),X=se(Y),F=u&&y&&d.isValidElement(u)?d.cloneElement(u,{className:L(X.iconWrapper,u.props.className)}):u,J=R=>{!I&&v&&v(R,M),w&&w(R)},_=R=>{g&&!I&&v&&v(R,M),k&&k(R)};return m.jsxs(ae,b({focusRipple:!h,className:L(X.root,s),ref:r,role:"tab","aria-selected":I,disabled:c,onClick:J,onFocus:_,ownerState:Y,tabIndex:I?0:-1},D,{children:[x==="top"||x==="start"?m.jsxs(d.Fragment,{children:[F,y]}):m.jsxs(d.Fragment,{children:[y,F]}),B]}))});function ie(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function ce(t,e,r,a={},s=()=>{}){const{ease:c=ie,duration:h=300}=a;let p=null;const u=e[t];let x=!1;const B=()=>{x=!0},y=v=>{if(x){s(new Error("Animation cancelled"));return}p===null&&(p=v);const w=Math.min(1,(v-p)/h);if(e[t]=c(w)*(r-u)+u,w>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(y)};return u===r?(s(new Error("Element already at target position")),B):(requestAnimationFrame(y),B)}const de=["onChange"],ue={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function be(t){const{onChange:e}=t,r=rt(t,de),a=d.useRef(),s=d.useRef(null),c=()=>{a.current=s.current.offsetHeight-s.current.clientHeight};return Qt(()=>{const h=Lt(()=>{const u=a.current;c(),u!==a.current&&e(a.current)}),p=kt(s.current);return p.addEventListener("resize",h),()=>{h.clear(),p.removeEventListener("resize",h)}},[e]),d.useEffect(()=>{c(),e(a.current)},[e]),m.jsx("div",b({style:ue,ref:s},r))}function fe(t){return pt("MuiTabScrollButton",t)}const pe=ft("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),he=["className","slots","slotProps","direction","orientation","disabled"],ve=t=>{const{classes:e,orientation:r,disabled:a}=t;return vt({root:["root",r,a&&"disabled"]},fe,e)},Se=j(Pt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${pe.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),me=d.forwardRef(function(e,r){var a,s;const c=ht({props:e,name:"MuiTabScrollButton"}),{className:h,slots:p={},slotProps:u={},direction:x}=c,B=rt(c,he),y=Ft(),v=b({isRtl:y},c),w=ve(v),k=(a=p.StartScrollButtonIcon)!=null?a:Zt,I=(s=p.EndScrollButtonIcon)!=null?s:te,g=lt({elementType:k,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),H=lt({elementType:I,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return m.jsx(Se,b({component:"div",className:L(w.root,h),ref:r,role:null,ownerState:v,tabIndex:null},B,{children:x==="left"?m.jsx(k,b({},g)):m.jsx(I,b({},H))}))});function xe(t){return pt("MuiTabs",t)}const bt=ft("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ge=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Rt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Wt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,ot=(t,e,r)=>{let a=!1,s=r(t,e);for(;s;){if(s===t.firstChild){if(a)return;a=!0}const c=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||c)s=r(t,s);else{s.focus();return}}},ye=t=>{const{vertical:e,fixed:r,hideScrollbar:a,scrollableX:s,scrollableY:c,centered:h,scrollButtonsHideMobile:p,classes:u}=t;return vt({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",a&&"hideScrollbar",s&&"scrollableX",c&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},xe,u)},Ce=j("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${bt.scrollButtons}`]:e.scrollButtons},{[`& .${bt.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${bt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Be=j("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),we=j("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Ie=j("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Te=j(be)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),zt={},Re=d.forwardRef(function(e,r){const a=ht({props:e,name:"MuiTabs"}),s=ee(),c=Ft(),{"aria-label":h,"aria-labelledby":p,action:u,centered:x=!1,children:B,className:y,component:v="div",allowScrollButtonsMobile:w=!1,indicatorColor:k="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:H=me,scrollButtons:M="auto",selectionFollowsFocus:nt,slots:D={},slotProps:Y={},TabIndicatorProps:X={},TabScrollButtonProps:F={},textColor:J="primary",value:_,variant:R="standard",visibleScrollbar:st=!1}=a,Ot=rt(a,ge),T=R==="scrollable",C=g==="vertical",V=C?"scrollTop":"scrollLeft",Q=C?"top":"left",Z=C?"bottom":"right",at=C?"clientHeight":"clientWidth",K=C?"height":"width",$=b({},a,{component:v,allowScrollButtonsMobile:w,indicatorColor:k,orientation:g,vertical:C,scrollButtons:M,textColor:J,variant:R,visibleScrollbar:st,fixed:!T,hideScrollbar:T&&!st,scrollableX:T&&!C,scrollableY:T&&C,centered:x&&!T,scrollButtonsHideMobile:!w}),z=ye($),At=lt({elementType:D.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:$}),jt=lt({elementType:D.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:$}),[St,Ht]=d.useState(!1),[O,mt]=d.useState(zt),[xt,Dt]=d.useState(!1),[gt,Xt]=d.useState(!1),[yt,_t]=d.useState(!1),[Ct,Ut]=d.useState({overflow:"hidden",scrollbarWidth:0}),Bt=new Map,W=d.useRef(null),A=d.useRef(null),wt=()=>{const o=W.current;let l;if(o){const n=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:le(o,c?"rtl":"ltr"),scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}let i;if(o&&_!==!1){const n=A.current.children;if(n.length>0){const f=n[Bt.get(_)];i=f?f.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:i}},q=ut(()=>{const{tabsMeta:o,tabMeta:l}=wt();let i=0,n;if(C)n="top",l&&o&&(i=l.top-o.top+o.scrollTop);else if(n=c?"right":"left",l&&o){const S=c?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(c?-1:1)*(l[n]-o[n]+S)}const f={[n]:i,[K]:l?l[K]:0};if(isNaN(O[n])||isNaN(O[K]))mt(f);else{const S=Math.abs(O[n]-f[n]),E=Math.abs(O[K]-f[K]);(S>=1||E>=1)&&mt(f)}}),it=(o,{animation:l=!0}={})=>{l?ce(V,W.current,o,{duration:s.transitions.duration.standard}):W.current[V]=o},It=o=>{let l=W.current[V];C?l+=o:(l+=o*(c?-1:1),l*=c&&$t()==="reverse"?-1:1),it(l)},Tt=()=>{const o=W.current[at];let l=0;const i=Array.from(A.current.children);for(let n=0;n<i.length;n+=1){const f=i[n];if(l+f[at]>o){n===0&&(l=o);break}l+=f[at]}return l},Yt=()=>{It(-1*Tt())},Vt=()=>{It(Tt())},Kt=d.useCallback(o=>{Ut({overflow:null,scrollbarWidth:o})},[]),qt=()=>{const o={};o.scrollbarSizeListener=T?m.jsx(Te,{onChange:Kt,className:L(z.scrollableX,z.hideScrollbar)}):null;const i=T&&(M==="auto"&&(xt||gt)||M===!0);return o.scrollButtonStart=i?m.jsx(H,b({slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:At},orientation:g,direction:c?"right":"left",onClick:Yt,disabled:!xt},F,{className:L(z.scrollButtons,F.className)})):null,o.scrollButtonEnd=i?m.jsx(H,b({slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:jt},orientation:g,direction:c?"left":"right",onClick:Vt,disabled:!gt},F,{className:L(z.scrollButtons,F.className)})):null,o},Et=ut(o=>{const{tabsMeta:l,tabMeta:i}=wt();if(!(!i||!l)){if(i[Q]<l[Q]){const n=l[V]+(i[Q]-l[Q]);it(n,{animation:o})}else if(i[Z]>l[Z]){const n=l[V]+(i[Z]-l[Z]);it(n,{animation:o})}}}),tt=ut(()=>{T&&M!==!1&&_t(!yt)});d.useEffect(()=>{const o=Lt(()=>{W.current&&q()});let l;const i=S=>{S.forEach(E=>{E.removedNodes.forEach(G=>{var P;(P=l)==null||P.unobserve(G)}),E.addedNodes.forEach(G=>{var P;(P=l)==null||P.observe(G)})}),o(),tt()},n=kt(W.current);n.addEventListener("resize",o);let f;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(A.current.children).forEach(S=>{l.observe(S)})),typeof MutationObserver<"u"&&(f=new MutationObserver(i),f.observe(A.current,{childList:!0})),()=>{var S,E;o.clear(),n.removeEventListener("resize",o),(S=f)==null||S.disconnect(),(E=l)==null||E.disconnect()}},[q,tt]),d.useEffect(()=>{const o=Array.from(A.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&T&&M!==!1){const i=o[0],n=o[l-1],f={root:W.current,threshold:.99},S=dt=>{Dt(!dt[0].isIntersecting)},E=new IntersectionObserver(S,f);E.observe(i);const G=dt=>{Xt(!dt[0].isIntersecting)},P=new IntersectionObserver(G,f);return P.observe(n),()=>{E.disconnect(),P.disconnect()}}},[T,M,yt,B==null?void 0:B.length]),d.useEffect(()=>{Ht(!0)},[]),d.useEffect(()=>{q()}),d.useEffect(()=>{Et(zt!==O)},[Et,O]),d.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:tt}),[q,tt]);const Mt=m.jsx(Ie,b({},X,{className:L(z.indicator,X.className),ownerState:$,style:b({},O,X.style)}));let et=0;const Gt=d.Children.map(B,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?et:o.props.value;Bt.set(l,et);const i=l===_;return et+=1,d.cloneElement(o,b({fullWidth:R==="fullWidth",indicator:i&&!St&&Mt,selected:i,selectionFollowsFocus:nt,onChange:I,textColor:J,value:l},et===1&&_===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Jt=o=>{const l=A.current,i=oe(l).activeElement;if(i.getAttribute("role")!=="tab")return;let f=g==="horizontal"?"ArrowLeft":"ArrowUp",S=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&c&&(f="ArrowRight",S="ArrowLeft"),o.key){case f:o.preventDefault(),ot(l,i,Wt);break;case S:o.preventDefault(),ot(l,i,Rt);break;case"Home":o.preventDefault(),ot(l,null,Rt);break;case"End":o.preventDefault(),ot(l,null,Wt);break}},ct=qt();return m.jsxs(Ce,b({className:L(z.root,y),ownerState:$,ref:r,as:v},Ot,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,m.jsxs(Be,{className:z.scroller,ownerState:$,style:{overflow:Ct.overflow,[C?`margin${c?"Left":"Right"}`:"marginBottom"]:st?void 0:-Ct.scrollbarWidth},ref:W,children:[m.jsx(we,{"aria-label":h,"aria-labelledby":p,"aria-orientation":g==="vertical"?"vertical":null,className:z.flexContainer,ownerState:$,onKeyDown:Jt,ref:A,role:"tablist",children:Gt}),St&&Mt]}),ct.scrollButtonEnd]}))});export{Re as T,Me as a};
