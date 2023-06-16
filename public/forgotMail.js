document.getElementById("forgotpwd").addEventListener("click", forgotPwd);

function forgotPwd(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  console.log(email);
  window.alert("mail sent succesfully!");
  axios
    .post("http://18.209.24.196:3000/pwd", { email: email })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
