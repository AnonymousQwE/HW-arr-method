let btn = document.querySelectorAll("button");
let input = document.querySelector(".input");
let output = document.querySelector(".output");
let arr = [];

btn.forEach((item) => {
  item.addEventListener("click", () => {
    arr[item.innerText.toLowerCase()](input.value);
    input.value = "";
    output.innerText = arr;
  });
});
