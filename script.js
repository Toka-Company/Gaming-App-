// Back to top
window.addEventListener("scroll", () => {
  if (window.scrollY < 300) {
    document.getElementById("back-to-top").classList.remove("active");
  } else {
    document.getElementById("back-to-top").classList.add("active");
  }
});
