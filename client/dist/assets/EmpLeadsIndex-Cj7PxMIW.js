import{r as a,j as e,G as r,R as f,U as D,g,c as P,d as U,F as oe,V as de,z as ce,E as he,H as ue,J as me,K as $,N as i,Q as xe,S as fe}from"./index-CxJtQRLb.js";import{h as Y}from"./moment-G82_0lEo.js";import{S as je}from"./Search-BCnfRBZA.js";import{C as Ee}from"./ConvertCustomer-B3busiYY.js";import{P as ge}from"./Pagination-CQtFweVv.js";import{D as O,a as w,b as k}from"./DialogContent-DOuEahYY.js";import{D as De}from"./DialogTitle-Cl70ZkoL.js";const Se=({onFilterChange:_})=>{const[s,l]=a.useState([]),[y,m]=a.useState([]),[d,p]=a.useState(""),[c,R]=a.useState(""),[S,h]=a.useState(null),[n,j]=a.useState(null);a.useEffect(()=>{const u=sessionStorage.getItem("leadsData");if(u){const C=JSON.parse(u),F=[...new Set(C.map(N=>N.SENDER_STATE))];l(F)}},[]),a.useEffect(()=>{if(d){const u=sessionStorage.getItem("leadsData");if(u){const F=JSON.parse(u).filter(N=>N.SENDER_STATE===d).map(N=>N.SENDER_CITY);m([...new Set(F)])}}else m([])},[d]);const b=()=>{_&&_(d,c,S,n)};return e.jsx("div",{children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{select:!0,fullWidth:!0,label:"Select State",value:d,onChange:u=>p(u.target.value),children:s.map((u,C)=>e.jsx(D,{value:u,children:u},C))})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{select:!0,fullWidth:!0,label:"Select City",value:c,onChange:u=>R(u.target.value),disabled:!d,children:y.map((u,C)=>e.jsx(D,{value:u,children:u},C))})}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(g,{variant:"contained",onClick:b,children:"Filter"})})]})})},Ce=({onClose:_,data:s})=>{const[l,y]=a.useState({emp_id:sessionStorage.getItem("emp_id"),leads_id:s.UNIQUE_QUERY_ID,leads_name:s?s.SENDER_NAME:"",leads_mobile:s?s.SENDER_MOBILE:"",leads_email:s?s.SENDER_EMAIL:"",leads_company:s?s.SENDER_COMPANY:"",leads_address:s?s.SENDER_ADDRESS:"",leads_state:s?s.SENDER_STATE:"",leads_city:s?s.SENDER_CITY:"",product_name:s?s.QUERY_PRODUCT_NAME:"",Call_Discussion:"",call_Attended:"",remember:"",reminder_date:""}),[m,d]=a.useState({Call_Discussion:"",call_Attended:"",remember:"",reminder_date:""}),p=(S,h)=>{let n="";const j=h&&typeof h=="string"?h.trim():h;switch(S){case"Call_Discussion":!j&&l.call_Attended==="yes"&&(n="Message is Required");break;case"call_Attended":j||(n="Call Attended status is Required");break;case"remember":!j&&l.call_Attended==="yes"?n="Please Select whether to remember":j==="yes"&&!l.reminder_date&&(n="Reminder Date is Required");break}return n},c=S=>{const{name:h,value:n}=S.target,j=p(h,n);y({...l,[h]:n}),d({...m,[h]:j})},R=S=>{S.preventDefault();let h={};if(Object.keys(l).forEach(n=>{const j=l[n],b=p(n,j);b&&(h[n]=b)}),Object.keys(h).length>0){d(h);return}P.post(`${U.apiUrl}/leads/saveEmpLeads`,l).then(n=>{console.log("Data Added Successfully.",n),_()}).catch(n=>{console.log("Data is not added",n)})};return e.jsxs("div",{children:[e.jsx("h1",{className:"text-center",children:"Follow Leads"}),e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"leads_name",label:"Lead Name",value:l.leads_name,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"leads_mobile",label:"Lead Mobile",value:l.leads_mobile,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"leads_email",label:"Lead Email",value:l.leads_email,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"leads_company",label:"Lead Company",value:l.leads_company,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"leads_address",label:"Lead Address",value:l.leads_address,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"leads_state",label:"Lead State",value:l.leads_state,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"leads_city",label:"Lead City",value:l.leads_city,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"product_name",label:"Product Name",value:l.product_name,onChange:c})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(f,{fullWidth:!0,select:!0,name:"call_Attended",label:"IF Call Attended",value:l.call_Attended,onChange:c,error:!!m.call_Attended,helperText:m.call_Attended,children:[e.jsx(D,{value:"Yes",children:"Yes"}),e.jsx(D,{value:"No",children:"No"})]})}),l.call_Attended==="Yes"&&e.jsxs(e.Fragment,{children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"Call_Discussion",label:"Call_Discussion",value:l.Call_Discussion,onChange:c,error:!!m.Call_Discussion,helperText:m.Call_Discussion})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(f,{fullWidth:!0,select:!0,name:"remember",label:"Next Remember",value:l.remember,onChange:c,error:!!m.remember,helperText:m.remember,children:[e.jsx(D,{value:"Yes",children:"Yes"}),e.jsx(D,{value:"No",children:"No"})]})}),l.remember==="Yes"&&e.jsx(r,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,name:"reminder_date",label:"Reminder Date",type:"date",value:l.reminder_date,onChange:c,error:!!m.reminder_date,helperText:m.reminder_date,InputLabelProps:{shrink:!0}})})]}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(g,{onClick:R,children:"Submit"})})]})]})},_e=_=>{const s=new Date(_),l=s.getDate().toString().padStart(2,"0"),y=(s.getMonth()+1).toString().padStart(2,"0"),m=s.getFullYear();let d=s.getHours();const p=s.getMinutes().toString().padStart(2,"0"),c=d>=12?"PM":"AM";d=d%12,d=d||12;const R=d.toString().padStart(2,"0");return`${l}/${y}/${m} ${R}:${p} ${c}`},Ye=()=>{const _=Y().subtract(1,"days").format("YYYY-MM-DD");Y().format("YYYY-MM-DD");const[s,l]=a.useState([]),[y,m]=a.useState(!1),[d,p]=a.useState(""),[c,R]=a.useState([]),[S,h]=a.useState([]),[n,j]=a.useState(5),[b,u]=a.useState(1),[C,F]=a.useState(Y(`${_} 22:00:00`).format("YYYY-MM-DD HH:mm:ss")),[N,pe]=a.useState(Y().format("YYYY-MM-DD HH:mm:ss")),[v,Q]=a.useState(!1),[T,H]=a.useState(!1),[B,L]=a.useState(!1),[J,q]=a.useState(),[V,z]=a.useState([]),[G,M]=a.useState(!1),[K,X]=a.useState([]);a.useEffect(()=>{T&&Z(C,N)},[C,N,T]),a.useEffect(()=>{if(!v){const t=sessionStorage.getItem("leadsData");t&&(l(JSON.parse(t)),h(JSON.parse(t)))}},[v]),a.useEffect(()=>{P.get(`${U.apiUrl}/leads/getFollowingLeadsMobile`).then(t=>{R(t.data)}).catch(t=>{console.log("Error Following Data Can't be fetched.")})},[]),a.useEffect(()=>{P.get(`${U.apiUrl}/customer/getCustomer`).then(t=>{z(t.data)}).catch(t=>{console.log("Error Customer Data Can't be fetched.")})},[]);const Z=(t,o)=>{P.get(`${U.apiUrl}/leads/leadsData/?startTime=${t}&endTime=${o}`).then(x=>{x.data.data.RESPONSE.length>0&&(sessionStorage.setItem("leadsData",JSON.stringify(x.data.data.RESPONSE)),l(x.data.data.RESPONSE),h(x.data.data.RESPONSE))}).catch(x=>{var A,E;m(!0),p(((E=(A=x.response)==null?void 0:A.data)==null?void 0:E.message)||"An error occurred while fetching leads data"),console.error("Error:",x)})},ee=(t,o,x,A)=>{let E=s;t&&(E=E.filter(I=>I.SENDER_STATE===t)),o&&(E=E.filter(I=>I.SENDER_CITY===o)),x&&A&&(E=E.filter(I=>Y(I.CREATED_DATE).isBetween(x,A))),h(E)},te=()=>{Q(!1),h(s)},W=S.filter(t=>!c.some(o=>o.leads_mobile===t.SENDER_MOBILE)&&!V.some(o=>o.cust_mobile===t.SENDER_MOBILE)),se=t=>{const o=parseInt(t.target.value,10);o===1?(j(W.length),u(1)):(j(o),u(1))},ae=(b-1)*n,le=b*n,ne=W.slice(ae,le),re=t=>{if(s.length>0){const o=s.find(x=>x.UNIQUE_QUERY_ID===t);o&&(q(o),L(!0))}},ie=t=>{if(s.length>0){const o=s.find(x=>x.UNIQUE_QUERY_ID===t);o&&(X(o),M(!0))}};return e.jsxs("div",{children:[v&&!T&&e.jsx("h1",{className:"text-center",children:"Filtered Leads Index"}),!v&&T&&e.jsx("h1",{className:"text-center",children:"Today Leads"}),!v&&!T&&e.jsx("h1",{className:"text-center",children:"Leads Index"}),v?e.jsx(Se,{onFilterChange:ee}):null,e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(je,{data:s,setData:h})}),e.jsx(r,{item:!0,xs:4,display:"flex",justifyContent:"center",children:v?e.jsx(g,{onClick:te,variant:"contained",children:"Cancel Filter"}):e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>Q(!0),variant:"contained",children:"Apply Filter"}),e.jsx(g,{onClick:()=>H(!0),style:{marginLeft:"30px"},variant:"contained",children:"Today Leads"})]})}),e.jsx(r,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(oe,{children:e.jsxs(de,{value:n,onChange:se,children:[e.jsx(D,{value:5,children:"5 Per Page"}),e.jsx(D,{value:10,children:"10 Per Page"}),e.jsx(D,{value:15,children:"15 Per Page"}),e.jsx(D,{value:1,children:"All Per Page"})]})})})]}),e.jsx(ce,{component:he,className:"mt-3",children:e.jsxs(ue,{children:[e.jsx(me,{children:e.jsxs($,{style:{fontWeight:"bold",backgroundColor:"#FFF9C4"},children:[e.jsx(i,{style:{fontWeight:"bold"},children:"S.No"}),e.jsx(i,{style:{fontWeight:"bold"},children:"date and time"}),e.jsx(i,{style:{fontWeight:"bold"},children:"Name"}),e.jsx(i,{style:{fontWeight:"bold"},children:"Mobile Number"}),e.jsx(i,{style:{fontWeight:"bold"},children:"Email"}),e.jsx(i,{style:{fontWeight:"bold"},children:"Company"}),e.jsx(i,{style:{fontWeight:"bold"},children:"Address"}),e.jsx(i,{style:{fontWeight:"bold"},children:"City"}),e.jsx(i,{style:{fontWeight:"bold"},children:"State"}),e.jsx(i,{style:{fontWeight:"bold"},children:"Product Name"}),e.jsx(i,{style:{fontWeight:"bold"},children:"Action"})]})}),e.jsx(xe,{children:ne.map((t,o)=>e.jsxs($,{children:[e.jsx(i,{children:o+1}),e.jsx(i,{children:_e(t.QUERY_TIME)}),e.jsx(i,{children:t.SENDER_NAME}),e.jsx(i,{children:t.SENDER_MOBILE}),e.jsx(i,{children:t.SENDER_EMAIL}),e.jsx(i,{children:t.SENDER_COMPANY}),e.jsx(i,{children:t.SENDER_ADDRESS}),e.jsx(i,{children:t.SENDER_CITY}),e.jsx(i,{children:t.SENDER_STATE}),e.jsx(i,{children:t.QUERY_PRODUCT_NAME}),e.jsxs(i,{children:[e.jsx(g,{onClick:()=>re(t.UNIQUE_QUERY_ID),children:"Follow"}),e.jsx(g,{onClick:()=>ie(t.UNIQUE_QUERY_ID),children:"Convert"})]})]},t.UNIQUE_QUERY_ID))})]})}),e.jsx(r,{container:!0,spacing:2,display:"flex",justifyContent:"center",className:"mt-4",children:e.jsx(fe,{spacing:2,children:e.jsx(ge,{count:Math.ceil(W.length/n),page:b,onChange:(t,o)=>u(o),size:"small",style:{cursor:"pointer"}})})}),e.jsxs(O,{open:y,onClose:()=>m(!1),children:[e.jsx(De,{className:"text-center bg-danger",children:"ERROR"}),e.jsx(w,{className:"mt-3",children:e.jsx("p",{children:d})}),e.jsx(k,{children:e.jsx(g,{onClick:()=>m(!1),children:"Close"})})]}),e.jsxs(O,{open:B,onClose:()=>L(!1),maxWidth:"md",children:[e.jsx(w,{children:e.jsx(Ce,{data:J,onClose:()=>L(!1)})}),e.jsx(k,{children:e.jsx(g,{onClick:()=>L(!1),children:"Close"})})]}),e.jsxs(O,{open:G,onClose:()=>M(!1),maxWidth:"md",children:[e.jsx(w,{children:e.jsx(Ee,{data:K,onClose:()=>M(!1)})}),e.jsx(k,{children:e.jsx(g,{onClick:()=>M(!1),children:"Close"})})]})]})};export{Ye as default};
