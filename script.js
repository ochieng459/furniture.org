const loginBtn = document.querySelector('.loginBtn');
const signupBtn = document.querySelector('.signupBtn');

loginBtn.onclick = function() {
  window.location.href = 'login.html';
}
signupBtn.onclick = function() {
  window.location.href = 'signup.html';
}
