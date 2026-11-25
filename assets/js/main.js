document.addEventListener("DOMContentLoaded",function(){
  var p=window.location.pathname;
  document.querySelectorAll("nav.site-nav a").forEach(function(a){
    if(a.getAttribute("href")===p && !a.hasAttribute("aria-current")) a.setAttribute("aria-current","page");
  });
});
