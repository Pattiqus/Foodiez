

const signupFormHandler = async (event) => {
    console.log(event, "sign up form handler");
    event.preventDefault();

    const firstName = document.querySelector('#first-name-signup').value.trim();
    const lastName = document.querySelector('#last-name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const repeatPassword = document.querySelector("#repeat-password-signup").value.trim();
    const obj = {firstName, lastName, username, email, password, repeatPassword};
    console.log(obj);
    if (firstName && lastName && username && email && password && repeatPassword) {
        if (password !== repeatPassword) {
            console.error( {message: 'Please ensure both password field entries are the same'})
        } else {
            const response = await fetch('./api/user', {
                method: 'POST',
                body: JSON.stringify({ first_name: firstName,
                      last_name: lastName,
                      username: username,
                      email: email,
                      password: password }),
                headers: { 'Content-Type': 'application/json'},
            });
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert(response.statusText);
            }
        }

    }
};

document.querySelector('#signupSubmit').addEventListener('click', signupFormHandler);

