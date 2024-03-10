const email = document.getElementById("text");
const message = document.getElementById("hold");
const send_button = document.getElementById("send");

send_button.addEventListener('click', (e) => {
    e.preventDefault();
    send();
});

function send() {
    const messageData = {
        email: email.value,
        message: message.value
    };
    console.log(messageData);
    const api = `https://my-server-vfg8.onrender.com/API/v1/message/addMessage`;
    const postman = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
    };
    fetch(api, postman)
    .then(response => {
        console.log(response.status)
        if (response.status == "404"){
            alert (`message failed: enter valid email`)
        }else if (response.status == "200"){
            alert (`message sent successfully`)
            window.location.href = `contact.html`
        }
        return response.json();
    }) 
    // .catch((error) =>{
    //     console.error("Error while logging in:", error);
    // });

    }
