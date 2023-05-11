document.getElementById("forgotpwd").addEventListener("click", forgotPwd);

function forgotPwd(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  console.log(email);
  axios
    .post("http://54.89.86.238:4000/forgotpassword", {
      email: email,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
