function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l={form:document.querySelector(".form"),delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]")};function u(e,o){const t=Math.random()>.3,n=l.step.value;return new Promise((()=>{setTimeout((()=>{t?console.log(`✅ Fulfilled promise ${e} in ${o}ms`):console.log(`❌ Rejected promise ${e} in ${o}ms`)}),n)}))}l.form.addEventListener("submit",(function(o){o.preventDefault();const t=l.amount.value,n=l.delay.value;for(let o=1;o<=t;o+=1){u(o,n).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}o.target.reset()}));
//# sourceMappingURL=03-promises.0c408292.js.map