const Username = document.getElementById("user");
const Password = document.getElementById("Pass");
const Loginbtn = document.getElementById("Login-btn");
const erroruser = document.getElementById("UsernameError");
const errorpass = document.getElementById("PasswordError");

Loginbtn.addEventListener("click", function(event) {
    event.preventDefault();
    let valid = true;
    erroruser.textContent = "";
    errorpass.textContent = "";


 if(Username.value.trim() === "") {
    erroruser.textContent = "USername is required";
    valid = false;
}
 if(Password.value.trim() === "")
  {
    errorpass.textContent = "Password is required";
    valid = false;
}

if (valid) {
    window.location.href = "../Home/Home.html";
}
});

