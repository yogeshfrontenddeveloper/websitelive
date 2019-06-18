const myheading = document.getElementById("myheading");
const mytextinput = document.getElementById("mytextinput");
const mybutton = document.getElementById("mybutton");

const changebg = document.getElementById("changebg");
const secondinput = document.getElementById("secondinput");

mybutton.addEventListener("click", function() {
  myheading.style.color = mytextinput.value;
});

changebg.addEventListener("click", function() {
  myheading.style.backgroundColor = secondinput.value;
});
