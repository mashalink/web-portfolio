const toTop = document.getElementById("toTop");
if (toTop) {
  const toggleBtn = () => {
    if (window.scrollY > 100) {
      toTop.classList.add("show");
    } else {
      toTop.classList.remove("show");
    }
  };
  window.addEventListener("scroll", toggleBtn);
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  toggleBtn();
}
