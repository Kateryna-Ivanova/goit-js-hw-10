import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as r}from"./assets/vendor-651d7991.js";const t=document.querySelector(".form");document.querySelector("button");t.addEventListener("submit",m);function m(s){s.preventDefault();const o=t.elements.delay.value,i=t.elements.state.value;s.target.reset(),new Promise((e,n)=>{setTimeout(()=>{i==="fulfilled"?e(`✅ Fulfilled promise in ${o}ms`):n(`❌ Rejected promise in ${o}ms`)},o)}).then(e=>{r.success({position:"topRight",message:`${e}`,backgroundColor:"#59A10D",messageColor:"#FFFFFF"})}).catch(e=>{r.error({position:"topRight",message:`${e}`,backgroundColor:"#EF4040",messageColor:"#FFFFFF"})})}
//# sourceMappingURL=commonHelpers2.js.map
