document.getElementById("re").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();

  if (username === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById("wellcome").textContent = "Welcome " + username + "!";
});


let sCount = 0;
let hCount = 0;
let aCount = 0;

document.getElementById("s").addEventListener("click", function () {
  sCount++;
  document.getElementById("s").textContent = "سبحان الله: " + sCount;
});

document.getElementById("h").addEventListener("click", function () {
  hCount++;
  document.getElementById("h").textContent = "الحمد لله: " + hCount;
});

document.getElementById("a").addEventListener("click", function () {
  aCount++;
  document.getElementById("a").textContent = "الله أكبر: " + aCount;
});
