
document.getElementById("year").textContent =
  new Date().getFullYear();

const sections = document.querySelectorAll(
  ".hero, .section, .project-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
