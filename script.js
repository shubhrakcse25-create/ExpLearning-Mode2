document.addEventListener("DOMContentLoaded", function() 
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();
if (name === "" || email === "" || message === "") {
alert("Please fill all required fields!");
} else {
alert("Thank you " + name + "! Your inquiry has been submitted.");
this.reset();
}
});
let boxes = document.querySelectorAll(".contact-box");
boxes.forEach(function(box) {
box.addEventListener("click", function() {
alert("You clicked on " + box.querySelector("h3").innerText);
});
});
let details = document.querySelectorAll("details");
details.forEach((target) => {
target.addEventListener("toggle", () => {
if (target.open) {
details.forEach((d) => {
if (d !== target) d.removeAttribute("open");
});
}
});
});

});
