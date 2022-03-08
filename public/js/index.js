const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

const loginFormHandler = async (event) => {
    event.preventDefault();

window.location.replace('/profile');
  }
  

document
  .querySelector(".signup-form")
  .addEventListener("submit", loginFormHandler);


  function signUpHandler() {

    window.location.replace('/signup');
  }





