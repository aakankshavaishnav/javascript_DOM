const title = document.getElementById("title");
const button = document.getElementById("changeBtn");
const info = document.getElementById("info");

button.addEventListener("click", function() {
  title.innerHTML = "Title Changed by External JS!";
  title.style.color = "green";
  info.innerHTML = "This message comes from an external file.";
});