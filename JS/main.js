const search = document.querySelector(".search");
const input = document.querySelector(".search input");

search.addEventListener("click", function(){ input.focus(); });

input.addEventListener("focus", function() {

search.classList.add("focused");
input.setAttribute('placeholder', "통합검색");

});
input.addEventListener("blur", function() {

    search.classList.remove("focused");
    input.setAttribute('placeholder', "");
    
    });
