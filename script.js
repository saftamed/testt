var subBtn = document.getElementById("submit");
var rstBtn = document.getElementById("rst");
var username = document.getElementById("username");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var error = document.getElementById("alert");
var modal = document.getElementById("modal");
var nn = document.getElementById("nn");
var closeBtn = document.getElementById("cl");

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value.length < 5) {
    showErorr("Name not valid",username)
    return;
  } else if (email.value.toLowerCase().match(/\S+@\S+\.\S+/) === null) {
    showErorr("Email not valid",email)
    return;
  } else if (pwd.value.length < 5) {
    showErorr("Password not valid",pwd)
    return;
  }
  nn.innerText = username.value;
  modal.classList.add("display");
});

rstBtn.addEventListener("click", function () {
  var inputs = document.getElementsByTagName("input");
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].value = "";
  }
});

function showErorr(msg,input) {
    var inputs = document.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].classList.remove("error");
    }
    error.innerText = msg;
    error.classList.add("display");
    input.classList.add("error")
    setTimeout(function () {
      error.classList.remove("display");
    }, 3000);
}

function close () {
    modal.classList.remove("display");

  }
  