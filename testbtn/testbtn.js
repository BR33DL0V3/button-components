const box = document.querySelector("#box");
const testbtn1 = document.querySelector("#testbtn1");

testbtn1.addEventListener("click", function() {
  console.log("Button clicked!");
  box.classList.toggle("new-color");
});
