const email = document.getElementById("email");
const password = document.getElementById("password");
const login_button = document.getElementById("login");

login_button.addEventListener('click', (e) => {
    e.preventDefault();
    login();
});

function login() {
    const userData = {email:email.value,password:password.value};
    console.log(userData);
    const api = `https://my-server-vfg8.onrender.com/API/v1/user/login`;
    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    fetch(api, postman)
    .then(response => {
        console.log(response.status)
        if (response.status == "404"){
          return  alert (`login failed: user not found`)
        }else if (response.status == "401"){
           return alert (`login failed:  invalid password`)
        }else  if (response.status == '404'){
            alert (`login failed: user not found`)
        }else  if (response.status == "500"){
            alert (`internal server error`)
        }else  if (response.status == "200"){
            alert (`login successfully`)
            window.location.href = `Dashboard.html`
        }
        return response.json();
    }) 
    .catch((error) =>{
        console.error("Error while logging in:", error);
    });

    }
