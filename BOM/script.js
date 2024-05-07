window.setInterval(function () {
  console.log("hi");
}, 1000);
window.setTimeout(() => {
  alert("Test");
}, 3000);

alert(window.innerHeight);
alert(window.innerWidth);

window.addEventListener("resize", function () {
  if (window.innerWidth < 800) {
    alert("less than 800px");
  }
});
