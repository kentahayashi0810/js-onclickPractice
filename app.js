let sum = 0;
window.onload = function () {
  const input = document.getElementById("input");
  const input2 = document.getElementById("input2");
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
  sum2 = 0;
  input2.value = sum2;
  total = 0;
}

let sum2 = 0;
let total = 0;

function add(btn) {
  if (sum2 == 0) {
    sum2 = btn.value;
  } else {
    sum2 += btn.value;
  }
  input2.value = sum2;
}

function addValue() {
  total += parseInt(sum2);
  calculate();
  console.log(total);
}

function calculate() {
  total += parseInt(sum2);

  sum2 = 0;
  input2.value = sum2;
  input2.value = total;
}
