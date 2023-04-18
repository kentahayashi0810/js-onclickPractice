let sum = 0;
window.onload = function () {
  const input = document.getElementById("input");
};

function showValue(btn) {
  sum += parseInt(btn.value);
  input.value = sum;
  if (btn.value == 1) {
    console.log(`You clicked ${btn.value}st button!`);
  } else if (btn.value == 2) {
    console.log(`You clicked ${btn.value}nd button!`);
  } else if (btn.value == 3) {
    console.log(`You clicked ${btn.value}rd button!`);
  } else {
    console.log(`You clicked ${btn.value}th button!`);
  }
}

function clearValue() {
  sum = 0;
  input.value = sum;
}
