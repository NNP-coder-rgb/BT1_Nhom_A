let clickBtn = document.getElementById("btn-light");

let theme = localStorage.getItem("theme") || "light";
if (theme === "dark") {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  clickBtn.innerHTML = `🌙`;
}

clickBtn.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    clickBtn.innerHTML = `☀️`;
    localStorage.setItem("theme", "light");
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    clickBtn.innerHTML = `🌙`;
    localStorage.setItem("theme", "dark");
  }
});
