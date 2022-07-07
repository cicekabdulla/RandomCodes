// const username = "Chichak";
// const password = 1234;
function login() {
  const userInput = document.querySelector(".user__input").value;
  const passwordInput = document.querySelector(".password__input").value;

  if (userInput == "Chichak" && passwordInput == 1234) {
    alert("Uğurlu giriş!");
  } else if (userInput == "" || passwordInput == "") {
    alert("Zəhmət olmasa xanaları doldurun");
  } else {
    alert("İstifadəçi adı və ya şifrə yanlışdır...");
  }
}
// const Div = document.createElement("div");
// Div.textContent = "İstifadəçi adı və ya şifrə yalnışdır...";
// document.querySelector("body").appendChild(Div);
