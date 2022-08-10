let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");
function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const simbol = "!@#$%^&*()_+=-}{|\][:;/?>.<<~"
  const data = lowerAlphabet + upperAlphabet + numeric + simbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  console.log("generator:", generator);
  return generator;
}
function getPassword() {
  let newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
}
function savePassword() {
  saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya: ${password.value}`));
  saveButton.setAttribute('download', 'PasswordGenerator.txt');
  setTimeout(() => {
    alert('Password anda telah di save');
  }, 1000);
}