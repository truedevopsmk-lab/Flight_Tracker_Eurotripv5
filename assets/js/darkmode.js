const toggle = document.getElementById("darkmode-toggle");
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkmode", document.body.classList.contains("dark-mode"));
  };
  if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("dark-mode");
  }
}