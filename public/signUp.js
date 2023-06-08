const signUp = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const userDetails = { name, email, password };

  axios
    .post("http://54.234.247.161:3000/user/add-user", userDetails)
    .then((res) => {
      window.alert("you are registered successfully!");
      window.location.href = "http://54.234.247.161:3000/public/logIn.html";
    })
    .catch((err) => console.log(err));
};
