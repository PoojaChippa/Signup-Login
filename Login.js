function login(userName, password) {
  let users = ["pooja", "rahul", "sita", "amit"];

  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else {
    if (password === "Emp@123") {
      return "Login Successful...";
    } else {
      return "Wrong Password....";
    }
  }
}

console.log(login("pooja", "Emp@123"));
console.log(login("pooja", "wrongPass"));
console.log(login("newUser", "Emp@123"));
