document.getElementById("forgotpwd").addEventListener("click", forgotPwd);

function forgotPwd(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  //console.log(email);
  axios
    .post("http://18.209.24.196:3000/pwd", { email: email })
    .then((res) => {
      console.log(res);
      window.alert("mail sent succesfully!");
    })
    .catch((err) => {
      console.log(err);
    });
}
