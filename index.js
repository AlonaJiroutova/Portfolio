document.querySelectorAll(".project-preview-carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-item");
  const btnHtml = Array.from(items, () => {
    return `<span class="carousel-nav-item"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
     <div class="carousel-nav">
     ${btnHtml.join("")}
     </div>`
  );
  const buttons = carousel.querySelectorAll(".carousel-nav-item");

  buttons.forEach((button, i) => {
     button.addEventListener("click", ()=>{
        items.forEach((item) =>
          item.classList.remove("carousel-item-selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel-nav-item-selected")
        );

        items[i].classList.add("carousel-item-selected");
        button.classList.add("carousel-nav-item-selected");

     });
  });
  
  items[0].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-nav-item-selected");


});

const year = new Date().getFullYear();

document.querySelector("#copyright").innerHTML = "Copyright " + year;
