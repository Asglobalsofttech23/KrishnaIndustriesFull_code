import{b0 as i}from"./index-BHisX-em.js";function n(r,t){if(i(r)!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(i(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function m(r){var t=n(r,"string");return i(t)=="symbol"?t:t+""}export{m as t};
