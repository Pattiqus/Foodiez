const loginFormHandler = async (event) => {
    event.preventDefault();

    // # Retreive: values from login page
    const loginIdenifier = document.querySelector('#email/username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (loginIdenifier &&  password) {
        // # Send: Post request to API endpoint
        const response = await fetch('./api/users/login', {
            method: 'POST',
            body: JSON.stringify({loginIdenifier, password}),
            headers: { 'Centent-Type': 'application/json'},
        });

        if (response.ok) {
            // # IF: Successful, then redirect browser to profile/dashboard
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#first-name-signup').value.trim();
    const lastName = document.querySelector('#last-name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (firstName && lastName && username && email && password) {
        const response = await fetch('./api/users', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, username, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
