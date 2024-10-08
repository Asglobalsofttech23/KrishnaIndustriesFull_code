import{i as E,k as U,s as j,z as ee,_ as l,aZ as W,r as B,m as H,aI as oe,aX as J,j as r,n as N,az as x,o as O,aJ as T,t as te,l as X,a_ as ae,T as A,S as se}from"./index-BHisX-em.js";function ne(e){return E("PrivateSwitchBase",e)}U("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const re=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],le=e=>{const{classes:o,checked:t,disabled:n,edge:s}=e,a={root:["root",t&&"checked",n&&"disabled",s&&`edge${x(s)}`],input:["input"]};return O(a,ne,o)},ce=j(ee)(({ownerState:e})=>l({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ie=j("input",{shouldForwardProp:W})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=B.forwardRef(function(o,t){const{autoFocus:n,checked:s,checkedIcon:a,className:i,defaultChecked:v,disabled:m,disableFocusRipple:c=!1,edge:P=!1,icon:R,id:k,inputProps:y,inputRef:$,name:I,onBlur:d,onChange:h,onFocus:p,readOnly:M,required:_=!1,tabIndex:z,type:b,value:F}=o,f=H(o,re),[g,Z]=oe({controlled:s,default:!!v,name:"SwitchBase",state:"checked"}),C=J(),G=u=>{p&&p(u),C&&C.onFocus&&C.onFocus(u)},K=u=>{d&&d(u),C&&C.onBlur&&C.onBlur(u)},Q=u=>{if(u.nativeEvent.defaultPrevented)return;const V=u.target.checked;Z(V),h&&h(u,V)};let L=m;C&&typeof L>"u"&&(L=C.disabled);const Y=b==="checkbox"||b==="radio",w=l({},o,{checked:g,disabled:L,disableFocusRipple:c,edge:P}),D=le(w);return r.jsxs(ce,l({component:"span",className:N(D.root,i),centerRipple:!0,focusRipple:!c,disabled:L,tabIndex:null,role:void 0,onFocus:G,onBlur:K,ownerState:w,ref:t},f,{children:[r.jsx(ie,l({autoFocus:n,checked:s,defaultChecked:v,className:D.input,disabled:L,id:Y?k:void 0,name:I,onChange:Q,readOnly:M,ref:$,required:_,ownerState:w,tabIndex:z,type:b},b==="checkbox"&&F===void 0?{}:{value:F},y)),g?a:R]}))}),pe=T(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ue=T(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),me=T(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function he(e){return E("MuiCheckbox",e)}const q=U("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),be=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],fe=e=>{const{classes:o,indeterminate:t,color:n,size:s}=e,a={root:["root",t&&"indeterminate",`color${x(n)}`,`size${x(s)}`]},i=O(a,he,o);return l({},o,i)},Ce=j(de,{shouldForwardProp:e=>W(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${x(t.size)}`],t.color!=="default"&&o[`color${x(t.color)}`]]}})(({theme:e,ownerState:o})=>l({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:te(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${q.checked}, &.${q.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${q.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ke=r.jsx(ue,{}),ge=r.jsx(pe,{}),xe=r.jsx(me,{}),Re=B.forwardRef(function(o,t){var n,s;const a=X({props:o,name:"MuiCheckbox"}),{checkedIcon:i=ke,color:v="primary",icon:m=ge,indeterminate:c=!1,indeterminateIcon:P=xe,inputProps:R,size:k="medium",className:y}=a,$=H(a,be),I=c?P:m,d=c?P:i,h=l({},a,{color:v,indeterminate:c,size:k}),p=fe(h);return r.jsx(Ce,l({type:"checkbox",inputProps:l({"data-indeterminate":c},R),icon:B.cloneElement(I,{fontSize:(n=I.props.fontSize)!=null?n:k}),checkedIcon:B.cloneElement(d,{fontSize:(s=d.props.fontSize)!=null?s:k}),ownerState:h,ref:t,className:N(p.root,y)},$,{classes:p}))});function ve(e){return E("MuiFormControlLabel",e)}const S=U("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Pe=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],ye=e=>{const{classes:o,disabled:t,labelPlacement:n,error:s,required:a}=e,i={root:["root",t&&"disabled",`labelPlacement${x(n)}`,s&&"error",a&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",s&&"error"]};return O(i,ve,o)},Ie=j("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${S.label}`]:o.label},o.root,o[`labelPlacement${x(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>l({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${S.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${S.label}`]:{[`&.${S.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Fe=j("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${S.error}`]:{color:(e.vars||e).palette.error.main}})),$e=B.forwardRef(function(o,t){var n,s;const a=X({props:o,name:"MuiFormControlLabel"}),{className:i,componentsProps:v={},control:m,disabled:c,disableTypography:P,label:R,labelPlacement:k="end",required:y,slotProps:$={}}=a,I=H(a,Pe),d=J(),h=(n=c??m.props.disabled)!=null?n:d==null?void 0:d.disabled,p=y??m.props.required,M={disabled:h,required:p};["checked","name","onChange","value","inputRef"].forEach(g=>{typeof m.props[g]>"u"&&typeof a[g]<"u"&&(M[g]=a[g])});const _=ae({props:a,muiFormControl:d,states:["error"]}),z=l({},a,{disabled:h,labelPlacement:k,required:p,error:_.error}),b=ye(z),F=(s=$.typography)!=null?s:v.typography;let f=R;return f!=null&&f.type!==A&&!P&&(f=r.jsx(A,l({component:"span"},F,{className:N(b.label,F==null?void 0:F.className),children:f}))),r.jsxs(Ie,l({className:N(b.root,i),ownerState:z,ref:t},I,{children:[B.cloneElement(m,M),p?r.jsxs(se,{display:"block",children:[f,r.jsxs(Fe,{ownerState:z,"aria-hidden":!0,className:b.asterisk,children:[" ","*"]})]}):f]}))});export{Re as C,$e as F};
