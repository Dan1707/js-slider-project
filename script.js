const sliderLine = document.querySelector(".slider__item-line");
const prevBtn = document.querySelector(`#prev`);
const nextBtn = document.querySelector(`#next`);

let sliderWidth = 0;

nextBtn.addEventListener("click", () => {
  sliderWidth = sliderWidth - 700;
  if (sliderWidth <= -2100) {
    sliderWidth = 0;
  }
  sliderLine.setAttribute("style", `left: ${sliderWidth}px`);
});

prevBtn.addEventListener("click", () => {
  sliderWidth = sliderWidth + 700;
  if (sliderWidth > 0) {
    sliderWidth = -1400;
  }
  sliderLine.setAttribute("style", `left: ${sliderWidth}px`);
});
