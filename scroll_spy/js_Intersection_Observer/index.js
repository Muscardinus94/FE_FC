import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);

const scrollSpyObserver = new IntersectionObserver(
  entries => {
    // 최초에는 observe가 다 되지만
    // 추후에는 intersect가 되는 el, 이제 안 되는 el 두개만 나온다.
    const { target } = entries.find(entry => entry.isIntersecting) || {};
    const index = contentItems.indexOf(target);
    Array.from(navElem.children).forEach((c, i) => {
      if (i === index) c.classList.add("on");
      else c.classList.remove("on");
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
    // 50%만 보여도 true
  }
);
contentItems.forEach(item => scrollSpyObserver.observe(item));

navElem.addEventListener("click", e => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }
});
