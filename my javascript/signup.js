let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signup_button = document.getElementById('btnn');
signup_button.addEventListener('click',  (e)=> {
    e.preventDefault();
    addData();
});
function addData() {
    const userData = {username:username.value,email:email.value,password:password.value};
    console.log(userData);
    const api = `https://my-server-vfg8.onrender.com/API/v1/user/create`;
    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    fetch(api, postman)
    .then(response => {
        console.log(response.status);
        if(response.status == "404"){
            alert('email already exists')
        }else if(response.status == "401"){
            alert('username already exists')
        }else if(response.status == "400"){
            alert('validation error')
        }else if(response.status == "201"){
            alert('usercreate successfully')
            window.location.href = `login.html`
        }
        return response.json();
    })
        // .then(data => {
        //     console.log(data);
        //     if(data){
        //         alert('signed up successfully')
        //         window.location.href = `login.html`
        //       }else{
        //         alert('signup failed')
        //       }
        // })
        .catch(error => {
            console.error('Error:', error);
        });

    }
// function validate(){
//     let username = document.getElementById('username').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     if(email.includes('@gmail.com') && username != "" && password != ""){
//         alert('Signup Successfully');
//     }else{
//         alert('Signup Failed')
//     }
//     localStorage.setItem('myEmail', email);
//     localStorage.setItem('myPassword', password);
// }
