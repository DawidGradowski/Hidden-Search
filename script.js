const search = document.getElementsByClassName("search-container")[0];
const search_input = document.querySelector(".search-input");
const search_btn = document.getElementById("search-btn");


search_btn.addEventListener("click", () => {
    search.classList.toggle("active");
    search_input.focus();
});
