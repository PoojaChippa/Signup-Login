function signup(userName) {
  let users = ["pooja", "rahul", "sita", "amit"];

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

console.log(signup("pooja"));
console.log(signup("newUser"));
