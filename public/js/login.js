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


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
