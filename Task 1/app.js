// Task #1

let name = prompt("Enter Your Name");
let phone = prompt("Enter Your Phone Number");
let email = prompt("Enter Your Email");
let password = prompt("Enter Your Password");
let confirm = prompt("Confirm Your Password");

/*

*/

if (
  name !== "" ||
  phone !== "" ||
  email !== "" ||
  password !== "" ||
  confirm !== ""
) {
  if (password === confirm) {
    Swal.fire({
      icon: "success",
      title: "Successfull",
      text: "Successfully Registered",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Not match",
      text: "Please check your confirm password",
    });
  }
} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Plaese Fill The Form",
  });
}

console.log(name);
