let e=document.querySelectorAll(".faqs-section .container .question"),t=document.querySelectorAll(".faqs-section .container .answer");e.forEach((c,s)=>{c.addEventListener("click",()=>{c.classList.toggle("active"),t[s].classList.toggle("active"),t.forEach((t,c)=>{c!==s&&(t.classList.remove("active"),e[c].classList.remove("active"))})})});
//# sourceMappingURL=index.5f0ddd4a.js.map
