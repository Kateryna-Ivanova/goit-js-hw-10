import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h,i as a}from"./assets/vendor-651d7991.js";const r=document.querySelector("[data-start]"),s=document.querySelector("#datetime-picker"),g=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");r.addEventListener("click",b);let i;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0],o=e.getTime()-new Date().getTime();c(o),e<new Date?(a.error({position:"topRight",message:"Please choose a date in the future",backgroundColor:"red"}),r.setAttribute("disabled",!0)):(r.removeAttribute("disabled"),i=e)}};h(s,y);function b(){const t=i.getTime();s.setAttribute("disabled",!0),r.setAttribute("disabled",!0);const e=setInterval(()=>{let o=t-Date.now();const n=c(o);o<=0?(a.info({position:"topRight",message:"Time is up",backgroundColor:"green"}),clearInterval(e)):(g.textContent=`${n.days}`,S.textContent=`${n.hours}`,f.textContent=`${n.minutes}`,p.textContent=`${n.seconds}`)},1e3)}function c(t){const u=Math.floor(t/864e5).toString().padStart(2,"0"),d=Math.floor(t%864e5/36e5).toString().padStart(2,"0"),l=Math.floor(t%864e5%36e5/6e4).toString().padStart(2,"0"),m=Math.floor(t%864e5%36e5%6e4/1e3).toString().padStart(2,"0");return{days:u,hours:d,minutes:l,seconds:m}}s.value="";console.log("6");
//# sourceMappingURL=commonHelpers.js.map
