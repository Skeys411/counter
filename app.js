let count = 0;

function counter(adjust) {
  count = count + adjust;
  document.getElementById("adjustCount").innerText = count;
}

function resetCount() {
  count = 0;
  document.getElementById("adjustCount").innerText = count;
}
