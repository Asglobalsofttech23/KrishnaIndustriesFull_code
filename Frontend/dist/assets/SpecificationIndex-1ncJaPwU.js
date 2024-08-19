import{r as h,j as e,G as d,R as v,g as x,c as N,d as E,Z as G,F as H,V as z,U as y,z as J,E as K,H as Q,J as Z,K as O,N as f,Q as L}from"./index-CxJtQRLb.js";import{S as X}from"./Search-BCnfRBZA.js";import{D as U,a as w,b as A}from"./DialogContent-DOuEahYY.js";const Y=({pro_id:u,onClose:C})=>{const[r,j]=h.useState([{pro_id:u,spec_name:"",spec_data:""}]),[c,g]=h.useState([{spec_name:"",spec_data:""}]),b=(s,t)=>{let a="";const n=t&&typeof t=="string"?t.trim():t;switch(s){case"spec_name":n||(a="Specification name is required.");break;case"spec_data":n||(a="Specification Data is required.");break}return a},D=(s,t)=>{const{name:a,value:n}=s.target,o=[...r],m=b(a,n);o[t][a]=n,g([...c.slice(0,t),{...c[t],[a]:m},...c.slice(t+1)]),j(o)},P=s=>{s.preventDefault();let t={};r.forEach((a,n)=>{Object.keys(a).forEach(o=>{const m=a[o],S=b(o,m);S&&(t={...t,[n]:{...t[n],[o]:S}})})}),Object.keys(t).length>0?g(t):N.post(`${E.apiUrl}/product/saveProSpec`,{specifications:r}).then(a=>{console.log("Specification Data :",r),C()}).catch(a=>{console.log("Specification Data is not added.")})},p=()=>{j([...r,{pro_id:u,spec_name:"",spec_data:""}]),g([...c,{spec_name:"",spec_data:""}])},i=s=>{const t=r.filter((n,o)=>o!==s),a=c.filter((n,o)=>o!==s);j(t),g(a)};return e.jsxs("div",{children:[e.jsx("h1",{className:"text-center",children:"Add Specification"}),r.map((s,t)=>{var a,n,o,m;return e.jsxs(d,{container:!0,spacing:3,className:"mt-3",children:[e.jsx(d,{item:!0,xs:6,children:e.jsx(v,{fullWidth:!0,name:"spec_name",label:"Specification name",onChange:S=>D(S,t),value:s.spec_name,error:!!((a=c[t])!=null&&a.spec_name),helperText:(n=c[t])==null?void 0:n.spec_name})}),e.jsx(d,{item:!0,xs:6,children:e.jsx(v,{fullWidth:!0,name:"spec_data",label:"Specification Data",onChange:S=>D(S,t),value:s.spec_data,error:!!((o=c[t])!=null&&o.spec_data),helperText:(m=c[t])==null?void 0:m.spec_data})}),t===r.length-1&&e.jsxs(d,{item:!0,xs:12,display:"flex",justifyContent:"center",children:[e.jsx(x,{onClick:P,children:"Submit"}),e.jsx(x,{onClick:p,children:"Add"}),e.jsx(x,{onClick:()=>i(t),children:"Remove"})]})]},t)})]})},ee=({data:u,onClose:C})=>{const[r,j]=h.useState({spec_name:u?u.spec_name:"",spec_data:u?u.spec_data:""}),[c,g]=h.useState({spec_name:"",spec_data:""}),b=(p,i)=>{let s="";const t=i&&typeof i=="string"?i.trim():i;switch(p){case"spec_name":t||(s="Specification name is required.");break;case"spec_data":t||(s="Specification Data is required.");break}return s},D=p=>{const{name:i,value:s}=p.target,t=b(i,s);g({...c,[i]:t}),j({...r,[i]:s})},P=p=>{p.preventDefault();let i={};Object.keys(r).forEach(s=>{const t=r[s],a=b(s,t);a&&(i=a)}),Object.keys(i).length>0?g(i):N.put(`${E.apiUrl}/product/specUpdate/${u.spec_id}`,r).then(s=>{C()}).catch(s=>{console.log("Specification Data is not added.")})};return e.jsxs("div",{children:[e.jsx("h1",{className:"text-center",children:"Add Specification"}),e.jsxs(d,{container:!0,spacing:3,className:"mt-3",children:[e.jsx(d,{item:!0,xs:6,children:e.jsx(v,{fullWidth:!0,name:"spec_name",label:"Specification name",onChange:D,value:r.spec_name,error:!!c.spec_name,helperText:c.spec_name})}),e.jsx(d,{item:!0,xs:6,children:e.jsx(v,{fullWidth:!0,name:"spec_data",label:"Specification Data",onChange:D,value:r.spec_data,error:!!c.spec_data,helperText:c.spec_data})}),e.jsx(d,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(x,{onClick:P,children:"Submit"})})]})]})},ce=()=>{const{pro_id:u}=G(),[C,r]=h.useState([]),[j,c]=h.useState([]),[g,b]=h.useState(),[D,P]=h.useState(),[p,i]=h.useState(5),[s,t]=h.useState(1),[a,n]=h.useState(!1),[o,m]=h.useState(!1),[S,k]=h.useState(!1);h.useEffect(()=>{N.get(`${E.apiUrl}/product/getProSpec/?pro_id=${u}`).then(l=>{r(l.data),c(l.data)}).catch(l=>{console.log("Error :",l)})},[a,o,S]);const W=l=>{const _=C.find(B=>B.spec_id===l);_&&(b(_),m(!0))},F=l=>{P(l),k(!0)},I=()=>{D&&N.delete(`${E.apiUrl}/product/specDelete/${D}`).then(()=>{k(!1)}).catch(l=>{console.log("Specification Data is not deleted.")})},$=l=>{const _=parseInt(l.target.value,10);_===1?(i(C.length),t(1)):(i(_),t(1))},T=(s-1)*p,R=s*p,V=j.slice(T,R),q=()=>{s<Math.ceil(j.length/p)&&t(s+1)},M=()=>{s>1&&t(s-1)};return e.jsxs("div",{children:[e.jsx("h1",{className:"text-center",children:"Specification Index"}),e.jsxs(d,{container:!0,spacing:3,className:"mt-2",children:[e.jsx(d,{item:!0,xs:4,children:e.jsx(x,{onClick:()=>n(!0),children:"Add New"})}),e.jsx(d,{item:!0,xs:4,children:e.jsx(X,{data:C,setData:c})}),e.jsx(d,{item:!0,xs:4,children:e.jsx(H,{children:e.jsxs(z,{value:p,onChange:$,children:[e.jsx(y,{value:5,children:"5 Per Page"}),e.jsx(y,{value:10,children:"10 Per Page"}),e.jsx(y,{value:15,children:"15 Per Page"}),e.jsx(y,{value:1,children:"All Per Page"})]})})})]}),e.jsx(J,{component:K,className:"mt-4",children:e.jsxs(Q,{children:[e.jsx(Z,{children:e.jsxs(O,{children:[e.jsx(f,{style:{fontWeight:"bold"},children:"S.No"}),e.jsx(f,{style:{fontWeight:"bold"},children:"Project Name"}),e.jsx(f,{style:{fontWeight:"bold"},children:"Specification Name"}),e.jsx(f,{style:{fontWeight:"bold"},children:"Specification Data"}),e.jsx(f,{style:{fontWeight:"bold"},children:"Action"})]})}),e.jsx(L,{children:V.map((l,_)=>e.jsxs(O,{children:[e.jsx(f,{children:_+1+T}),e.jsx(f,{children:l.pro_name}),e.jsx(f,{children:l.spec_name}),e.jsx(f,{children:l.spec_data}),e.jsxs(f,{children:[e.jsx(x,{onClick:()=>W(l.spec_id),children:"Edit"}),e.jsx(x,{onClick:()=>F(l.spec_id),children:"Delete"})]})]},_))})]})}),e.jsxs(d,{container:!0,spacing:2,className:"mt-2",children:[e.jsx(d,{item:!0,xs:6,children:e.jsx(x,{onClick:M,disabled:s===1,children:"Previous"})}),e.jsx(d,{item:!0,xs:6,style:{textAlign:"right"},children:e.jsx(x,{onClick:q,disabled:s===Math.ceil(j.length/p),children:"Next"})})]}),e.jsxs(U,{open:a,onClose:()=>n(!1),children:[e.jsx(w,{children:e.jsx(Y,{pro_id:u,onClose:()=>n(!1)})}),e.jsx(A,{children:e.jsx(x,{onClick:()=>n(!1),children:"Close"})})]}),e.jsxs(U,{open:o,onClose:()=>m(!1),children:[e.jsx(w,{children:e.jsx(ee,{data:g,onClose:()=>m(!1)})}),e.jsx(A,{children:e.jsx(x,{onClick:()=>m(!1),children:"Close"})})]}),e.jsxs(U,{open:S,onClose:()=>k(!1),children:[e.jsx(w,{children:e.jsx("p",{children:"Are you sure do you want to delete this specification?"})}),e.jsxs(A,{children:[e.jsx(x,{style:{backgroundColor:"red",color:"whitesmoke"},onClick:I,children:"Delete"}),e.jsx(x,{style:{backgroundColor:"green",color:"whitesmoke"},onClick:()=>k(!1),children:"Cancel"})]})]})]})};export{ce as default};
