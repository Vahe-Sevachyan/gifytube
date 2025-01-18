const searchField = document.querySelector(".input-field");
const searchBtn = document.querySelector(".search-btn");
const img = document.querySelector(".img");

searchField.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const searchFieldValue = searchField.value;
  }
});
