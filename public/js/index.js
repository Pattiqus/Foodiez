// const {myAlert} =require('./helper.js')




const loginFormHandler = async () => {
    // event.preventDefault();


const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

const obj={
  
  "email": email,
  "password": password
}

if (email &&  password) {
  // # Send: Post request to API endpoint
  const response = await fetch('./api/user/login', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: { 'Content-Type': 'application/json'},
});

  if (response.ok) {
      // # IF: Successful, then redirect browser to profile/dashboard
      
      window.location.replace('/profile');

  } else {
    alertify.set('notifier','position', 'top-right');
    alertify.error(response.statusText);
  }
}

else{

  // myAlert('error','top-right','Please verify username and password');
  alertify.set('notifier','position', 'top-right');
  alertify.warning('Please verify username and password');

}
  }
  



  function signUpHandler() {

    window.location.replace('/signup');
  }


  async function logout(){
 
      const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
 
  }

  function addnewForm(){
    window.location.replace('/add-recipe');
  }



  // document
  // .querySelector(".signin-form")
  // .addEventListener("submit", loginFormHandler);




