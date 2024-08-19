import{i as G,k as Z,s as H,a8 as xe,_ as u,aL as ne,r as b,m as Q,ak as ge,aM as ae,j as e,n as q,a9 as z,o as J,al as K,am as be,l as ie,aN as fe,T as v,S as le,aO as M,u as je,a as ce,b as Ce,G as o,A as ee,g as _,B as S,D as U,R as te,F as W,I as se,O as oe,e as O,f as ke,L as V,h as ye}from"./index-CxJtQRLb.js";import{F as ve,c as we,a as re,d as Pe,b as Ie,A as Be,e as Fe}from"./VisibilityOff-soBePwLB.js";import{I as Re}from"./InputAdornment-Df2-mKqN.js";function Le(t){return G("PrivateSwitchBase",t)}Z("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Se=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ze=t=>{const{classes:s,checked:n,disabled:l,edge:a}=t,i={root:["root",n&&"checked",l&&"disabled",a&&`edge${z(a)}`],input:["input"]};return J(i,Le,s)},$e=H(xe)(({ownerState:t})=>u({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),Me=H("input",{shouldForwardProp:ne})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ee=b.forwardRef(function(s,n){const{autoFocus:l,checked:a,checkedIcon:i,className:h,defaultChecked:w,disabled:f,disableFocusRipple:m=!1,edge:d=!1,icon:F,id:C,inputProps:P,inputRef:R,name:k,onBlur:r,onChange:c,onFocus:p,readOnly:$,required:E=!1,tabIndex:j,type:x,value:g}=s,I=Q(s,Se),[L,de]=ge({controlled:a,default:!!w,name:"SwitchBase",state:"checked"}),B=ae(),ue=y=>{p&&p(y),B&&B.onFocus&&B.onFocus(y)},me=y=>{r&&r(y),B&&B.onBlur&&B.onBlur(y)},pe=y=>{if(y.nativeEvent.defaultPrevented)return;const Y=y.target.checked;de(Y),c&&c(y,Y)};let N=f;B&&typeof N>"u"&&(N=B.disabled);const he=x==="checkbox"||x==="radio",D=u({},s,{checked:L,disabled:N,disableFocusRipple:m,edge:d}),X=ze(D);return e.jsxs($e,u({component:"span",className:q(X.root,h),centerRipple:!0,focusRipple:!m,disabled:N,tabIndex:null,role:void 0,onFocus:ue,onBlur:me,ownerState:D,ref:n},I,{children:[e.jsx(Me,u({autoFocus:l,checked:a,defaultChecked:w,className:X.input,disabled:N,id:he?C:void 0,name:k,onChange:pe,readOnly:$,ref:R,required:E,ownerState:D,tabIndex:j,type:x},x==="checkbox"&&g===void 0?{}:{value:g},P)),L?i:F]}))}),Ne=K(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ae=K(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),He=K(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function qe(t){return G("MuiCheckbox",t)}const T=Z("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),De=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],_e=t=>{const{classes:s,indeterminate:n,color:l,size:a}=t,i={root:["root",n&&"indeterminate",`color${z(l)}`,`size${z(a)}`]},h=J(i,qe,s);return u({},s,h)},We=H(Ee,{shouldForwardProp:t=>ne(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.indeterminate&&s.indeterminate,s[`size${z(n.size)}`],n.color!=="default"&&s[`color${z(n.color)}`]]}})(({theme:t,ownerState:s})=>u({color:(t.vars||t).palette.text.secondary},!s.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${s.color==="default"?t.vars.palette.action.activeChannel:t.vars.palette[s.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:be(s.color==="default"?t.palette.action.active:t.palette[s.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(t.vars||t).palette[s.color].main},[`&.${T.disabled}`]:{color:(t.vars||t).palette.action.disabled}})),Oe=e.jsx(Ae,{}),Te=e.jsx(Ne,{}),Ue=e.jsx(He,{}),Ve=b.forwardRef(function(s,n){var l,a;const i=ie({props:s,name:"MuiCheckbox"}),{checkedIcon:h=Oe,color:w="primary",icon:f=Te,indeterminate:m=!1,indeterminateIcon:d=Ue,inputProps:F,size:C="medium",className:P}=i,R=Q(i,De),k=m?d:f,r=m?d:h,c=u({},i,{color:w,indeterminate:m,size:C}),p=_e(c);return e.jsx(We,u({type:"checkbox",inputProps:u({"data-indeterminate":m},F),icon:b.cloneElement(k,{fontSize:(l=k.props.fontSize)!=null?l:C}),checkedIcon:b.cloneElement(r,{fontSize:(a=r.props.fontSize)!=null?a:C}),ownerState:c,ref:n,className:q(p.root,P)},R,{classes:p}))});function Ge(t){return G("MuiFormControlLabel",t)}const A=Z("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Ze=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Qe=t=>{const{classes:s,disabled:n,labelPlacement:l,error:a,required:i}=t,h={root:["root",n&&"disabled",`labelPlacement${z(l)}`,a&&"error",i&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",a&&"error"]};return J(h,Ge,s)},Je=H("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[{[`& .${A.label}`]:s.label},s.root,s[`labelPlacement${z(n.labelPlacement)}`]]}})(({theme:t,ownerState:s})=>u({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${A.disabled}`]:{cursor:"default"}},s.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},s.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},s.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${A.label}`]:{[`&.${A.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})),Ke=H("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(t,s)=>s.asterisk})(({theme:t})=>({[`&.${A.error}`]:{color:(t.vars||t).palette.error.main}})),Xe=b.forwardRef(function(s,n){var l,a;const i=ie({props:s,name:"MuiFormControlLabel"}),{className:h,componentsProps:w={},control:f,disabled:m,disableTypography:d,label:F,labelPlacement:C="end",required:P,slotProps:R={}}=i,k=Q(i,Ze),r=ae(),c=(l=m??f.props.disabled)!=null?l:r==null?void 0:r.disabled,p=P??f.props.required,$={disabled:c,required:p};["checked","name","onChange","value","inputRef"].forEach(L=>{typeof f.props[L]>"u"&&typeof i[L]<"u"&&($[L]=i[L])});const E=fe({props:i,muiFormControl:r,states:["error"]}),j=u({},i,{disabled:c,labelPlacement:C,required:p,error:E.error}),x=Qe(j),g=(a=R.typography)!=null?a:w.typography;let I=F;return I!=null&&I.type!==v&&!d&&(I=e.jsx(v,u({component:"span"},g,{className:q(x.label,g==null?void 0:g.className),children:I}))),e.jsxs(Je,u({className:q(x.root,h),ownerState:j,ref:n},k,{children:[b.cloneElement(f,$),p?e.jsxs(le,{display:"block",children:[I,e.jsxs(Ke,{ownerState:j,"aria-hidden":!0,className:x.asterisk,children:[" ","*"]})]}):I]}))}),Ye="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.06129%2013.2253L4.31871%2015.9975L1.60458%2016.0549C0.793457%2014.5504%200.333374%2012.8292%200.333374%2011C0.333374%209.23119%200.763541%207.56319%201.52604%206.09448H1.52662L3.94296%206.53748L5.00146%208.93932C4.77992%209.58519%204.65917%2010.2785%204.65917%2011C4.65925%2011.783%204.80108%2012.5332%205.06129%2013.2253Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M21.4804%209.00732C21.6029%209.65257%2021.6668%2010.3189%2021.6668%2011C21.6668%2011.7637%2021.5865%2012.5086%2021.4335%2013.2271C20.9143%2015.6722%2019.5575%2017.8073%2017.678%2019.3182L17.6774%2019.3177L14.6339%2019.1624L14.2031%2016.4734C15.4503%2015.742%2016.425%2014.5974%2016.9384%2013.2271H11.2346V9.00732H17.0216H21.4804Z'%20fill='%23518EF8'/%3e%3cpath%20d='M17.6772%2019.3176L17.6777%2019.3182C15.8498%2020.7875%2013.5277%2021.6666%2011%2021.6666C6.93783%2021.6666%203.40612%2019.3962%201.60449%2016.0549L5.0612%2013.2253C5.96199%2015.6294%208.28112%2017.3408%2011%2017.3408C12.1686%2017.3408%2013.2634%2017.0249%2014.2029%2016.4734L17.6772%2019.3176Z'%20fill='%2328B446'/%3e%3cpath%20d='M17.8085%202.78892L14.353%205.61792C13.3807%205.01017%2012.2313%204.65908%2011%204.65908C8.21963%204.65908%205.85713%206.44896%205.00146%208.93925L1.52658%206.09442H1.526C3.30125%202.67171%206.8775%200.333252%2011%200.333252C13.5881%200.333252%2015.9612%201.25517%2017.8085%202.78892Z'%20fill='%23F14336'/%3e%3c/svg%3e",et=t=>new RegExp(/[0-9]/).test(t),tt=t=>new RegExp(/[a-z]/).test(t)&&new RegExp(/[A-Z]/).test(t),st=t=>new RegExp(/[!#@$%^&*)(+=._-]/).test(t),ot=t=>t<2?{label:"Poor",color:M.errorMain}:t<3?{label:"Weak",color:M.warningDark}:t<4?{label:"Normal",color:M.orangeMain}:t<5?{label:"Good",color:M.successMain}:t<6?{label:"Strong",color:M.successDark}:{label:"Poor",color:M.errorMain},rt=t=>{let s=0;return t.length>5&&(s+=1),t.length>7&&(s+=1),et(t)&&(s+=1),st(t)&&(s+=1),tt(t)&&(s+=1),s},nt=({...t})=>{const s=je(),n=ce(s.breakpoints.down("md")),l=Ce(r=>r.customization),[a,i]=b.useState(!1),[h,w]=b.useState(!0),[f,m]=b.useState(0),[d,F]=b.useState(),C=async()=>{console.error("Register")},P=()=>{i(!a)},R=r=>{r.preventDefault()},k=r=>{const c=rt(r);m(c),F(ot(c))};return b.useEffect(()=>{k("123456")},[]),e.jsxs(e.Fragment,{children:[e.jsxs(o,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(ee,{children:e.jsxs(_,{variant:"outlined",fullWidth:!0,onClick:C,size:"large",sx:{color:"grey.700",backgroundColor:s.palette.grey[50],borderColor:s.palette.grey[100]},children:[e.jsx(S,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:Ye,alt:"google",width:16,height:16,style:{marginRight:n?8:16}})}),"Sign up with Google"]})})}),e.jsx(o,{item:!0,xs:12,children:e.jsxs(S,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(U,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(_,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${s.palette.grey[100]} !important`,color:`${s.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${l.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(U,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(o,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(S,{sx:{mb:2},children:e.jsx(v,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),e.jsx(ve,{initialValues:{email:"",password:"",submit:null},validationSchema:we().shape({email:re().email("Must be a valid email").max(255).required("Email is required"),password:re().max(255).required("Password is required")}),children:({errors:r,handleBlur:c,handleChange:p,handleSubmit:$,isSubmitting:E,touched:j,values:x})=>e.jsxs("form",{noValidate:!0,onSubmit:$,...t,children:[e.jsxs(o,{container:!0,spacing:n?0:2,children:[e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(te,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...s.typography.customInput}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(te,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...s.typography.customInput}})})]}),e.jsxs(W,{fullWidth:!0,error:!!(j.email&&r.email),sx:{...s.typography.customInput},children:[e.jsx(se,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),e.jsx(oe,{id:"outlined-adornment-email-register",type:"email",value:x.email,name:"email",onBlur:c,onChange:p,inputProps:{}}),j.email&&r.email&&e.jsx(O,{error:!0,id:"standard-weight-helper-text--register",children:r.email})]}),e.jsxs(W,{fullWidth:!0,error:!!(j.password&&r.password),sx:{...s.typography.customInput},children:[e.jsx(se,{htmlFor:"outlined-adornment-password-register",children:"Password"}),e.jsx(oe,{id:"outlined-adornment-password-register",type:a?"text":"password",value:x.password,name:"password",label:"Password",onBlur:c,onChange:g=>{p(g),k(g.target.value)},endAdornment:e.jsx(Re,{position:"end",children:e.jsx(ke,{"aria-label":"toggle password visibility",onClick:P,onMouseDown:R,edge:"end",size:"large",children:a?e.jsx(Pe,{}):e.jsx(Ie,{})})}),inputProps:{}}),j.password&&r.password&&e.jsx(O,{error:!0,id:"standard-weight-helper-text-password-register",children:r.password})]}),f!==0&&e.jsx(W,{fullWidth:!0,children:e.jsx(S,{sx:{mb:2},children:e.jsxs(o,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(o,{item:!0,children:e.jsx(S,{style:{backgroundColor:d==null?void 0:d.color},sx:{width:85,height:8,borderRadius:"7px"}})}),e.jsx(o,{item:!0,children:e.jsx(v,{variant:"subtitle1",fontSize:"0.75rem",children:d==null?void 0:d.label})})]})})}),e.jsx(o,{container:!0,alignItems:"center",justifyContent:"space-between",children:e.jsx(o,{item:!0,children:e.jsx(Xe,{control:e.jsx(Ve,{checked:h,onChange:g=>w(g.target.checked),name:"checked",color:"primary"}),label:e.jsxs(v,{variant:"subtitle1",children:["Agree with  ",e.jsx(v,{variant:"subtitle1",component:V,to:"#",children:"Terms & Condition."})]})})})}),r.submit&&e.jsx(S,{sx:{mt:3},children:e.jsx(O,{error:!0,children:r.submit})}),e.jsx(S,{sx:{mt:2},children:e.jsx(ee,{children:e.jsx(_,{disableElevation:!0,disabled:E,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})})]})},ct=()=>{const t=ce(s=>s.breakpoints.down("md"));return e.jsx(Be,{children:e.jsxs(o,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(o,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(o,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(Fe,{children:e.jsxs(o,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(o,{item:!0,sx:{mb:3},children:e.jsx(V,{to:"#","aria-label":"theme logo",children:e.jsx(ye,{})})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(o,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(o,{item:!0,children:e.jsxs(le,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(v,{color:"secondary.main",gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),e.jsx(v,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(nt,{})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(U,{})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(o,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(v,{component:V,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),e.jsx(o,{item:!0,xs:12,sx:{m:3,mt:1}})]})})};export{ct as default};
