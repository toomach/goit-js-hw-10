import{f as l,i as f}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s=document.querySelector("button"),m=document.querySelector("#datetime-picker");let a;s.disabled=!0;l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(o){a=o[0],a>new Date?s.disabled=!1:(s.disabled=!0,f.show({title:"Error",message:"Please choose a date in the future!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff"}))}});s.addEventListener("click",()=>{s.disabled===!1&&(setInterval(p,1e3),s.disabled=!0,m.disabled=!0)});function p(){const n=a-new Date;if(n<=0){clearInterval(updateCounter);return}const{days:i,hours:c,minutes:e,seconds:t}=y(n),r=u=>String(u).padStart(2,"0");document.querySelector("[data-days]").textContent=r(i),document.querySelector("[data-hours]").textContent=r(c),document.querySelector("[data-minutes]").textContent=r(e),document.querySelector("[data-seconds]").textContent=r(t)}function y(o){const t=Math.floor(o/864e5),r=Math.floor(o%864e5/36e5),u=Math.floor(o%864e5%36e5/6e4),d=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:r,minutes:u,seconds:d}}
//# sourceMappingURL=commonHelpers.js.map
