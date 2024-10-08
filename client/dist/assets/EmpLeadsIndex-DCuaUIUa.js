import{r as n,c as T,d as U,j as e,Q as ne,G as u,g as x,F as ae,ac as oe,aa as le,a1 as re,a2 as ie,a3 as ce,a4 as de,a5 as _,a6 as t,a7 as he,S as xe,ab as fe,ae as ge,Z as W,$ as P,a0 as k,a8 as Q,s as je}from"./index-BHisX-em.js";import{h as m}from"./moment-G82_0lEo.js";import{S as ue}from"./Search-nZNVpvCb.js";import{A as me,m as Ee}from"./AddFollowingLeads-BDNEnkS7.js";import{C as Se}from"./ConvertCustomer-jA0DSWXZ.js";import{P as pe}from"./Pagination-QMDpzdN5.js";import"./toPropertyKey-B-aP7C6Y.js";const ye=Ee(r=>({tableContainer:{maxHeight:"600px"},stickyAction:{position:"sticky",right:0,justifyItems:"center",alignItems:"center",backgroundColor:"#fff",zIndex:1},actionColumnHeader:{position:"sticky",right:0,alignItems:"center",justifyContent:"center",zIndex:2}})),De=r=>{const a=new Date(r),E=a.getDate().toString().padStart(2,"0"),i=(a.getMonth()+1).toString().padStart(2,"0"),S=a.getFullYear();let o=a.getHours();const p=a.getMinutes().toString().padStart(2,"0"),y=o>=12?"PM":"AM";o=o%12,o=o||12;const c=o.toString().padStart(2,"0");return`${E}/${i}/${S} ${c}:${p} ${y}`},Ye=()=>{const r=ye(),[a,E]=n.useState([]),[i,S]=n.useState([]),[o,p]=n.useState([]),[y,c]=n.useState(!1),[v,D]=n.useState(!1),[F,I]=n.useState(""),[O,H]=n.useState("success"),[f,$]=n.useState(5),[b,N]=n.useState(1),[M,g]=n.useState([]),[B,j]=n.useState(!1),[G,q]=n.useState(),[z,R]=n.useState(!1),[V,be]=n.useState([]),[C,Z]=n.useState(!0);n.useEffect(()=>{c(!0),J(),L()},[]);const J=()=>{T.get(`${U.apiUrl}/leads/getleads`).then(s=>{s.data.data.length>0&&E(s.data.data),c(!1)}).catch(s=>{I("An error occurred while fetching leads data."),D(!0),c(!1)})},L=()=>{T.get(`${U.apiUrl}/leads/getFollowingLeadsMobile`).then(s=>{S(s.data),console.log(s.data)}).catch(s=>{console.log("Error: Couldn't fetch following leads data.")})};n.useEffect(()=>{if(a.length>0&&i.length>0){const s=i.map(h=>h.leads_id),l=a.filter(h=>!s.includes(h.UNIQUE_QUERY_ID));p(l);const d=m().format("YYYY-MM-DD"),se=l.filter(h=>m(h.QUERY_TIME).format("YYYY-MM-DD")===d);g(se)}},[a,i]);const Y=()=>{D(!1)},K=()=>{if(C)g(o);else{const s=m().format("YYYY-MM-DD"),l=o.filter(d=>m(d.QUERY_TIME).format("YYYY-MM-DD")===s);g(l)}Z(!C),N(1)},w=(b-1)*f,X=b*f,A=M.slice(w,X),ee=s=>{if(a.length>0){const l=a.find(d=>d.UNIQUE_QUERY_ID===s);l&&(q(l),j(!0))}},te=()=>{j(!1),L(),H("success"),I("Lead followed successfully!"),D(!0)};return e.jsxs("div",{children:[e.jsx("h1",{className:"text-center",children:"Leads Index"}),y?e.jsxs("div",{style:{textAlign:"center",marginTop:"20px"},children:[e.jsx(ne,{}),e.jsx("p",{children:"Processing... Please wait."})]}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(u,{item:!0,xs:3,children:e.jsx(ue,{data:o,setData:g})}),e.jsx(u,{item:!0,xs:3,children:e.jsx(x,{variant:"contained",onClick:K,children:C?"Show All Unfollowed Leads":"Show Today Unfollowed Leads"})}),e.jsx(u,{item:!0,xs:3,children:e.jsx(ae,{children:e.jsx(oe,{value:f,onChange:s=>$(s.target.value),children:[5,10,15,20].map(s=>e.jsxs(le,{value:s,children:[s," per page"]},s))})})})]}),e.jsx(re,{component:ie,style:{marginTop:"20px"},children:e.jsxs(ce,{children:[e.jsx(de,{children:e.jsxs(_,{children:[e.jsx(t,{style:{fontWeight:"bold"},children:"S.No"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Unique Query ID"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Query Type"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Query Time"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Name"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Mobile No"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Email"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Company Name"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Address"}),e.jsx(t,{style:{fontWeight:"bold"},children:"City"}),e.jsx(t,{style:{fontWeight:"bold"},children:"State"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Pincode"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Country ISO"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Mobile Alt"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Phone"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Phone Alt"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Email Alt"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Product Name"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Message"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Category Name"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Call Duration"}),e.jsx(t,{style:{fontWeight:"bold"},children:"Receiver Mobile"}),e.jsx(t,{className:r.actionColumnHeader,children:"Actions"})]})}),e.jsx(he,{children:A.length>0?A.map((s,l)=>e.jsxs(_,{children:[e.jsx(t,{children:l+1+w}),e.jsx(t,{children:s.UNIQUE_QUERY_ID}),e.jsx(t,{children:s.QUERY_TYPE}),e.jsx(t,{children:De(s.QUERY_TIME)}),e.jsx(t,{children:s.SENDER_NAME}),e.jsx(t,{children:s.SENDER_MOBILE}),e.jsx(t,{children:s.SENDER_EMAIL}),e.jsx(t,{children:s.SENDER_COMPANY}),e.jsx(t,{children:s.SENDER_ADDRESS}),e.jsx(t,{children:s.SENDER_CITY}),e.jsx(t,{children:s.SENDER_STATE}),e.jsx(t,{children:s.SENDER_PINCODE}),e.jsx(t,{children:s.SENDER_COUNTRY_ISO}),e.jsx(t,{children:s.SENDER_MOBILE_ALT}),e.jsx(t,{children:s.SENDER_PHONE}),e.jsx(t,{children:s.SENDER_PHONE_ALT}),e.jsx(t,{children:s.SENDER_EMAIL_ALT}),e.jsx(t,{children:s.QUERY_PRODUCT_NAME}),e.jsx(t,{children:s.QUERY_MESSAGE}),e.jsx(t,{children:s.QUERY_MCAT_NAME}),e.jsx(t,{children:s.CALL_DURATION}),e.jsx(t,{children:s.RECEIVER_MOBILE}),e.jsx(t,{className:r.stickyAction,children:e.jsx(x,{onClick:()=>ee(s.UNIQUE_QUERY_ID),children:"Follow"})})]},s.UNIQUE_QUERY_ID)):e.jsx(_,{children:e.jsx(t,{colSpan:23,style:{textAlign:"center"},children:"No leads found."})})})]})}),e.jsx(xe,{spacing:2,style:{marginTop:"20px"},children:e.jsx(pe,{count:Math.ceil(M.length/f),page:b,onChange:(s,l)=>N(l),variant:"outlined",shape:"rounded",color:"primary"})})]}),e.jsx(fe,{open:v,autoHideDuration:3e3,onClose:Y,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(ge,{onClose:Y,severity:O,sx:{width:"100%"},children:F})}),e.jsxs(W,{open:B,onClose:()=>j(!1),fullWidth:!0,maxWidth:"md",children:[e.jsx(P,{children:"Follow Lead"}),e.jsx(k,{children:e.jsx(me,{leadData:G,onSuccess:te})}),e.jsx(Q,{children:e.jsx(x,{onClick:()=>j(!1),color:"primary",children:"Cancel"})})]}),e.jsxs(W,{open:z,onClose:()=>R(!1),fullWidth:!0,maxWidth:"md",children:[e.jsx(P,{children:"Convert Lead to Customer"}),e.jsx(k,{children:e.jsx(Se,{leadData:V})}),e.jsx(Q,{children:e.jsx(x,{onClick:()=>R(!1),color:"primary",children:"Cancel"})})]})]})};je(x)(({theme:r})=>({backgroundColor:"#3f51b5",color:"#ffffff",borderRadius:"8px",padding:"10px 20px",textTransform:"none",boxShadow:"0 3px 5px 2px rgba(63, 81, 181, .3)","&:hover":{backgroundColor:"#303f9f",boxShadow:"0 6px 8px 3px rgba(63, 81, 181, .3)"}}));export{Ye as default};
