const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.4
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.style.opacity = "1";
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(80px)";
  section.style.transition = "all 1s ease";
  observer.observe(section);
});
