//  function returns the particular element against class

function catchClass(cls) {
  return document.querySelector(cls);
}

catchClass(".container").addEventListener("click", (e) => {
  if (
    e.target == catchClass(".minus-btn") &&
    parseInt(catchClass(".count").innerHTML) > 0
  ) {
    catchClass(".count").innerHTML =
      parseInt(catchClass(".count").innerHTML) -
      parseInt(catchClass(".changeBy").value);
  } else if (e.target == catchClass(".plus-btn")) {
    catchClass(".count").innerHTML =
      parseInt(catchClass(".count").innerHTML) +
      parseInt(catchClass(".changeBy").value);
  } else if (e.target == catchClass(".reset-btn")) {
    catchClass(".count").innerHTML = 0;
    catchClass(".changeBy").value = 1;
  }
});
