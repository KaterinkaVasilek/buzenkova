if(document.querySelector(".benefits__social")){const e=document.querySelector(".benefits__social-content"),o=document.querySelector(".benefits__contact"),c=document.querySelector(".benefits__social-links"),s=document.querySelector(".benefits__social-close");function openSocial(){e.classList.toggle("overlay-visible"),c.classList.toggle("benefits__social-links--open")}function closeSocial(){e.classList.remove("overlay-visible"),c.classList.remove("benefits__social-links--open")}o.addEventListener("click",openSocial),s.addEventListener("click",closeSocial)}