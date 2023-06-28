// signup
const createAccountForm = document.querySelector('#createAccount-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const text = createAccountForm['signup-Username'].value;
  const email = createAccountForm['signup-Email'].value;
  const password = createAccountForm['signup-Password'].value
 
  console.log(username, email, password)
})
