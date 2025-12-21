const options = document.querySelectorAll(".portfolio__option");
const items = document.querySelectorAll(".gallery__item");

options.forEach(option => {
  option.addEventListener("click", e => {
    e.preventDefault();

    // estado activo
    options.forEach(o =>
      o.classList.remove("portfolio__option--active")
    );
    option.classList.add("portfolio__option--active");

    const filter = option.dataset.filter;

    items.forEach(item => {
      const categories = item.dataset.category
        .split(",");

      const match =
        filter === "todo" || categories.includes(filter);

      item.style.display = match ? "block" : "none";
    });
  });
});
