import{r as p,aD as Vo,i as Me,k as ke,m as J,ai as Qe,j as u,aE as So,_ as a,as as ce,aa as eo,ag as Do,o as je,s as Y,l as Le,aF as oo,am as $e,T as Fo,a9 as ue,aG as io,n as K,u as ao,ad as Bo,aH as ie,ak as No,aA as Wo,ah as to,aI as ro,aJ as ae,aK as Io,P as B,w as Uo,a8 as zo}from"./index-CxJtQRLb.js";import{i as lo,j as po,p as Ho,e as Zo,a as qo,c as Xo,o as Go,f as Ko,b as Jo,d as Yo,h as Qo}from"./createPopper-DM_rq4rS.js";var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});var co=Ee.default=void 0,et=tt(p),ot=Vo;function uo(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,t=new WeakMap;return(uo=function(r){return r?t:o})(e)}function tt(e,o){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=uo(o);if(t&&t.has(e))return t.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)){var c=i?Object.getOwnPropertyDescriptor(e,n):null;c&&(c.get||c.set)?Object.defineProperty(r,n,c):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function rt(e){return Object.keys(e).length===0}function nt(e=null){const o=et.useContext(ot.ThemeContext);return!o||rt(o)?e:o}co=Ee.default=nt;function st(e){var o=e.state;Object.keys(o.elements).forEach(function(t){var r=o.styles[t]||{},i=o.attributes[t]||{},n=o.elements[t];!lo(n)||!po(n)||(Object.assign(n.style,r),Object.keys(i).forEach(function(c){var l=i[c];l===!1?n.removeAttribute(c):n.setAttribute(c,l===!0?"":l)}))})}function it(e){var o=e.state,t={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,t.popper),o.styles=t,o.elements.arrow&&Object.assign(o.elements.arrow.style,t.arrow),function(){Object.keys(o.elements).forEach(function(r){var i=o.elements[r],n=o.attributes[r]||{},c=Object.keys(o.styles.hasOwnProperty(r)?o.styles[r]:t[r]),l=c.reduce(function(d,y){return d[y]="",d},{});!lo(i)||!po(i)||(Object.assign(i.style,l),Object.keys(n).forEach(function(d){i.removeAttribute(d)}))})}}const at={name:"applyStyles",enabled:!0,phase:"write",fn:st,effect:it,requires:["computeStyles"]};var lt=[Zo,qo,Xo,at,Go,Ko,Jo,Yo,Qo],pt=Ho({defaultModifiers:lt});function ct(e){return Me("MuiPopper",e)}ke("MuiPopper",["root"]);const ut=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],dt=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function ft(e,o){if(o==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Oe(e){return typeof e=="function"?e():e}function mt(e){return e.nodeType!==void 0}const ht=e=>{const{classes:o}=e;return je({root:["root"]},ct,o)},bt={},gt=p.forwardRef(function(o,t){var r;const{anchorEl:i,children:n,direction:c,disablePortal:l,modifiers:d,open:y,placement:P,popperOptions:h,popperRef:v,slotProps:j={},slots:C={},TransitionProps:b}=o,L=J(o,ut),M=p.useRef(null),$=ce(M,t),f=p.useRef(null),g=ce(f,v),O=p.useRef(g);eo(()=>{O.current=g},[g]),p.useImperativeHandle(v,()=>f.current,[]);const x=ft(P,c),[w,E]=p.useState(x),[m,T]=p.useState(Oe(i));p.useEffect(()=>{f.current&&f.current.forceUpdate()}),p.useEffect(()=>{i&&T(Oe(i))},[i]),eo(()=>{if(!m||!y)return;const me=U=>{E(U.placement)};let A=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:U})=>{me(U)}}];d!=null&&(A=A.concat(d)),h&&h.modifiers!=null&&(A=A.concat(h.modifiers));const I=pt(m,M.current,a({placement:x},h,{modifiers:A}));return O.current(I),()=>{I.destroy(),O.current(null)}},[m,l,d,y,h,x]);const Q={placement:w};b!==null&&(Q.TransitionProps=b);const de=ht(o),W=(r=C.root)!=null?r:"div",fe=Do({elementType:W,externalSlotProps:j.root,externalForwardedProps:L,additionalProps:{role:"tooltip",ref:$},ownerState:o,className:de.root});return u.jsx(W,a({},fe,{children:typeof n=="function"?n(Q):n}))}),yt=p.forwardRef(function(o,t){const{anchorEl:r,children:i,container:n,direction:c="ltr",disablePortal:l=!1,keepMounted:d=!1,modifiers:y,open:P,placement:h="bottom",popperOptions:v=bt,popperRef:j,style:C,transition:b=!1,slotProps:L={},slots:M={}}=o,$=J(o,dt),[f,g]=p.useState(!0),O=()=>{g(!1)},x=()=>{g(!0)};if(!d&&!P&&(!b||f))return null;let w;if(n)w=n;else if(r){const T=Oe(r);w=T&&mt(T)?Qe(T).body:Qe(null).body}const E=!P&&d&&(!b||f)?"none":void 0,m=b?{in:P,onEnter:O,onExited:x}:void 0;return u.jsx(So,{disablePortal:l,container:w,children:u.jsx(gt,a({anchorEl:r,direction:c,disablePortal:l,modifiers:y,ref:t,open:b?!f:P,placement:h,popperOptions:v,popperRef:j,slotProps:L,slots:M},$,{style:a({position:"fixed",top:0,left:0,display:E},C),TransitionProps:m,children:i}))})}),Pt=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],vt=Y(yt,{name:"MuiPopper",slot:"Root",overridesResolver:(e,o)=>o.root})({}),fo=p.forwardRef(function(o,t){var r;const i=co(),n=Le({props:o,name:"MuiPopper"}),{anchorEl:c,component:l,components:d,componentsProps:y,container:P,disablePortal:h,keepMounted:v,modifiers:j,open:C,placement:b,popperOptions:L,popperRef:M,transition:$,slots:f,slotProps:g}=n,O=J(n,Pt),x=(r=f==null?void 0:f.root)!=null?r:d==null?void 0:d.Root,w=a({anchorEl:c,container:P,disablePortal:h,keepMounted:v,modifiers:j,open:C,placement:b,popperOptions:L,popperRef:M,transition:$},O);return u.jsx(vt,a({as:l,direction:i==null?void 0:i.direction,slots:{root:x},slotProps:g??y},w,{ref:t}))});function xt(e){return Me("MuiLink",e)}const wt=ke("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),mo={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Tt=e=>mo[e]||e,Rt=({theme:e,ownerState:o})=>{const t=Tt(o.color),r=oo(e,`palette.${t}`,!1)||o.color,i=oo(e,`palette.${t}Channel`);return"vars"in e&&i?`rgba(${i} / 0.4)`:$e(r,.4)},Ot=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Ct=e=>{const{classes:o,component:t,focusVisible:r,underline:i}=e,n={root:["root",`underline${ue(i)}`,t==="button"&&"button",r&&"focusVisible"]};return je(n,xt,o)},Mt=Y(Fo,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`underline${ue(t.underline)}`],t.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:Rt({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${wt.focusVisible}`]:{outline:"auto"}})),no=p.forwardRef(function(o,t){const r=Le({props:o,name:"MuiLink"}),{className:i,color:n="primary",component:c="a",onBlur:l,onFocus:d,TypographyClasses:y,underline:P="always",variant:h="inherit",sx:v}=r,j=J(r,Ot),{isFocusVisibleRef:C,onBlur:b,onFocus:L,ref:M}=io(),[$,f]=p.useState(!1),g=ce(t,M),O=m=>{b(m),C.current===!1&&f(!1),l&&l(m)},x=m=>{L(m),C.current===!0&&f(!0),d&&d(m)},w=a({},r,{color:n,component:c,focusVisible:$,underline:P,variant:h}),E=Ct(w);return u.jsx(Mt,a({color:n,className:K(E.root,i),classes:y,component:c,onBlur:O,onFocus:x,ref:g,ownerState:w,variant:h,sx:[...Object.keys(mo).includes(n)?[]:[{color:n}],...Array.isArray(v)?v:[v]]},j))});function kt(e){return Me("MuiTooltip",e)}const S=ke("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),jt=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Lt(e){return Math.round(e*1e5)/1e5}const $t=e=>{const{classes:o,disableInteractive:t,arrow:r,touch:i,placement:n}=e,c={popper:["popper",!t&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${ue(n.split("-")[0])}`],arrow:["arrow"]};return je(c,kt,o)},Et=Y(fo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.popper,!t.disableInteractive&&o.popperInteractive,t.arrow&&o.popperArrow,!t.open&&o.popperClose]}})(({theme:e,ownerState:o,open:t})=>a({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!t&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${S.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${S.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${S.arrow}`]:a({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${S.arrow}`]:a({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),_t=Y("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.tooltip,t.touch&&o.touch,t.arrow&&o.tooltipArrow,o[`tooltipPlacement${ue(t.placement.split("-")[0])}`]]}})(({theme:e,ownerState:o})=>a({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:$e(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Lt(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${S.popper}[data-popper-placement*="left"] &`]:a({transformOrigin:"right center"},o.isRtl?a({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):a({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${S.popper}[data-popper-placement*="right"] &`]:a({transformOrigin:"left center"},o.isRtl?a({marginRight:"14px"},o.touch&&{marginRight:"24px"}):a({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${S.popper}[data-popper-placement*="top"] &`]:a({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${S.popper}[data-popper-placement*="bottom"] &`]:a({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),At=Y("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:$e(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let le=!1;const so=new Io;let G={x:0,y:0};function pe(e,o){return(t,...r)=>{o&&o(t,...r),e(t,...r)}}const Vt=p.forwardRef(function(o,t){var r,i,n,c,l,d,y,P,h,v,j,C,b,L,M,$,f,g,O;const x=Le({props:o,name:"MuiTooltip"}),{arrow:w=!1,children:E,components:m={},componentsProps:T={},describeChild:Q=!1,disableFocusListener:de=!1,disableHoverListener:W=!1,disableInteractive:fe=!1,disableTouchListener:me=!1,enterDelay:A=100,enterNextDelay:I=0,enterTouchDelay:U=700,followCursor:he=!1,id:ho,leaveDelay:_e=0,leaveTouchDelay:bo=1500,onClose:Ae,onOpen:Ve,open:go,placement:Se="bottom",PopperComponent:be,PopperProps:D={},slotProps:F={},slots:ee={},title:N,TransitionComponent:yo=ro,TransitionProps:Po}=x,De=J(x,jt),V=p.isValidElement(E)?E:u.jsx("span",{children:E}),Fe=ao(),vo=Bo(),[z,Be]=p.useState(),[ge,xo]=p.useState(null),oe=p.useRef(!1),ye=fe||he,Ne=ie(),Pe=ie(),te=ie(),We=ie(),[wo,Ie]=No({controlled:go,default:!1,name:"Tooltip",state:"open"});let _=wo;const ve=Wo(ho),H=p.useRef(),re=to(()=>{H.current!==void 0&&(document.body.style.WebkitUserSelect=H.current,H.current=void 0),We.clear()});p.useEffect(()=>re,[re]);const Ue=s=>{so.clear(),le=!0,Ie(!0),Ve&&!_&&Ve(s)},ne=to(s=>{so.start(800+_e,()=>{le=!1}),Ie(!1),Ae&&_&&Ae(s),Ne.start(Fe.transitions.duration.shortest,()=>{oe.current=!1})}),se=s=>{oe.current&&s.type!=="touchstart"||(z&&z.removeAttribute("title"),Pe.clear(),te.clear(),A||le&&I?Pe.start(le?I:A,()=>{Ue(s)}):Ue(s))},xe=s=>{Pe.clear(),te.start(_e,()=>{ne(s)})},{isFocusVisibleRef:ze,onBlur:To,onFocus:Ro,ref:Oo}=io(),[,He]=p.useState(!1),Ze=s=>{To(s),ze.current===!1&&(He(!1),xe(s))},qe=s=>{z||Be(s.currentTarget),Ro(s),ze.current===!0&&(He(!0),se(s))},Xe=s=>{oe.current=!0;const R=V.props;R.onTouchStart&&R.onTouchStart(s)},Co=s=>{Xe(s),te.clear(),Ne.clear(),re(),H.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",We.start(U,()=>{document.body.style.WebkitUserSelect=H.current,se(s)})},Mo=s=>{V.props.onTouchEnd&&V.props.onTouchEnd(s),re(),te.start(bo,()=>{ne(s)})};p.useEffect(()=>{if(!_)return;function s(R){(R.key==="Escape"||R.key==="Esc")&&ne(R)}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[ne,_]);const ko=ce(V.ref,Oo,Be,t);!N&&N!==0&&(_=!1);const we=p.useRef(),jo=s=>{const R=V.props;R.onMouseMove&&R.onMouseMove(s),G={x:s.clientX,y:s.clientY},we.current&&we.current.update()},Z={},Te=typeof N=="string";Q?(Z.title=!_&&Te&&!W?N:null,Z["aria-describedby"]=_?ve:null):(Z["aria-label"]=Te?N:null,Z["aria-labelledby"]=_&&!Te?ve:null);const k=a({},Z,De,V.props,{className:K(De.className,V.props.className),onTouchStart:Xe,ref:ko},he?{onMouseMove:jo}:{}),q={};me||(k.onTouchStart=Co,k.onTouchEnd=Mo),W||(k.onMouseOver=pe(se,k.onMouseOver),k.onMouseLeave=pe(xe,k.onMouseLeave),ye||(q.onMouseOver=se,q.onMouseLeave=xe)),de||(k.onFocus=pe(qe,k.onFocus),k.onBlur=pe(Ze,k.onBlur),ye||(q.onFocus=qe,q.onBlur=Ze));const Lo=p.useMemo(()=>{var s;let R=[{name:"arrow",enabled:!!ge,options:{element:ge,padding:4}}];return(s=D.popperOptions)!=null&&s.modifiers&&(R=R.concat(D.popperOptions.modifiers)),a({},D.popperOptions,{modifiers:R})},[ge,D]),X=a({},x,{isRtl:vo,arrow:w,disableInteractive:ye,placement:Se,PopperComponentProp:be,touch:oe.current}),Re=$t(X),Ge=(r=(i=ee.popper)!=null?i:m.Popper)!=null?r:Et,Ke=(n=(c=(l=ee.transition)!=null?l:m.Transition)!=null?c:yo)!=null?n:ro,Je=(d=(y=ee.tooltip)!=null?y:m.Tooltip)!=null?d:_t,Ye=(P=(h=ee.arrow)!=null?h:m.Arrow)!=null?P:At,$o=ae(Ge,a({},D,(v=F.popper)!=null?v:T.popper,{className:K(Re.popper,D==null?void 0:D.className,(j=(C=F.popper)!=null?C:T.popper)==null?void 0:j.className)}),X),Eo=ae(Ke,a({},Po,(b=F.transition)!=null?b:T.transition),X),_o=ae(Je,a({},(L=F.tooltip)!=null?L:T.tooltip,{className:K(Re.tooltip,(M=($=F.tooltip)!=null?$:T.tooltip)==null?void 0:M.className)}),X),Ao=ae(Ye,a({},(f=F.arrow)!=null?f:T.arrow,{className:K(Re.arrow,(g=(O=F.arrow)!=null?O:T.arrow)==null?void 0:g.className)}),X);return u.jsxs(p.Fragment,{children:[p.cloneElement(V,k),u.jsx(Ge,a({as:be??fo,placement:Se,anchorEl:he?{getBoundingClientRect:()=>({top:G.y,left:G.x,right:G.x,bottom:G.y,width:0,height:0})}:z,popperRef:we,open:z?_:!1,id:ve,transition:!0},q,$o,{popperOptions:Lo,children:({TransitionProps:s})=>u.jsx(Ke,a({timeout:Fe.transitions.duration.shorter},s,Eo,{children:u.jsxs(Je,a({},_o,{children:[N,w?u.jsx(Ye,a({},Ao,{ref:xo})):null]}))}))}))]})}),Ce=({color:e,outline:o,size:t,sx:r,...i})=>{const n=e&&!o&&{color:"background.paper",bgcolor:`${e}.main`},c=o&&{color:e?`${e}.main`:"primary.main",bgcolor:"background.paper",border:"2px solid",borderColor:e?`${e}.main`:"primary.main"};let l={};switch(t){case"badge":l={width:28,height:28};break;case"xs":l={width:34,height:34};break;case"sm":l={width:40,height:40};break;case"lg":l={width:72,height:72};break;case"xl":l={width:82,height:82};break;case"md":l={width:60,height:60};break;default:l={}}return u.jsx(Uo,{sx:{...n,...c,...l,...r},...i})};Ce.propTypes={color:B.string,outline:B.bool,size:B.string,sx:B.object};const St=({title:e,link:o,icon:t})=>{const r=ao();return u.jsx(Vt,{title:e||"Reference",placement:"left",children:u.jsxs(zo,{children:[!t&&u.jsx(Ce,{component:no,href:o,"aria-label":"redirect pages",target:"_blank",alt:"MUI Logo",size:"badge",outline:!0,children:u.jsxs("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsxs("g",{clipPath:"url(#clip0)",children:[u.jsx("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:r.palette.primary[800]}),u.jsx("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:r.palette.primary.main}),u.jsx("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:r.palette.primary[800]}),u.jsx("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:r.palette.primary.main})]}),u.jsx("defs",{children:u.jsx("clipPath",{id:"clip0",children:u.jsx("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),t&&u.jsx(Ce,{component:no,href:o,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"material-ui",children:t})]})})};St.propTypes={icon:B.node,link:B.string,title:B.string};export{St as C,no as L};
