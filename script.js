const sliderContainer = document.querySelector(".slider__item-content");
const sliderLine = document.querySelector(".slider__item-line");
const sliderWidthWrapper = document.querySelector(".slider__item-wrapper");
const prevBtn = document.querySelector(`#prev`);
const nextBtn = document.querySelector(`#next`);

const sliderArray = [
  {
    color: `df4343`,
    text: `1`,
  },
  {
    color: `00ff00`,
    text: `2`,
  },
  {
    color: `4400ff`,
    text: `3`,
  },
];

function sliderBuilder() {
  let html = "";
  sliderArray.forEach((el) => {
    html += `<div class="slider__item" style="background-color:#${el.color};">${el.text}</div>`;
  });
  sliderContainer.innerHTML = html;
}

sliderBuilder();

const sliderWidth = window
  .getComputedStyle(sliderWidthWrapper, null)
  .getPropertyValue("width");

const sliderWidthNumber = parseFloat(sliderWidth);

let sliderGap = 0;

nextBtn.addEventListener("click", () => {
  sliderGap = sliderGap - sliderWidthNumber;
  if (sliderGap <= -sliderWidthNumber * sliderArray.length) {
    sliderGap = 0;
  }
  sliderLine.style.left = `${sliderGap}px`;
});

prevBtn.addEventListener("click", () => {
  sliderGap = sliderGap + sliderWidthNumber;
  if (sliderGap > 0) {
    sliderGap = -sliderWidthNumber * sliderArray.length + sliderWidthNumber;
  }
  sliderLine.style.left = `${sliderGap}px`;
});
