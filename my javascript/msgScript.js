const table = document.getElementById('message_body')

let loading = `            <tr>
<td>Loading....</td>
<td></td><td></td>
</tr>`;

function getAllmessages() {
  const api = `http://localhost:8080/API/v1/message/getMessages`;
  const postman = {
      method: 'GET'
  };
  fetch(api, postman)
  .then(response => {
    console.log (response.status)
    // if(response.status == "401"){
    //   alert (`messages not found`)
    // }
    return response.json();
}).then((data) => {
  const allMessages = data.data
  if(allMessages.length > 0 ){
    table.innerHTML = "";
    for(let i =0; i < allMessages.length; i++){
      console.log("index", i)
      const row = document.createElement("tr");
      row.innerHTML = `<td>${allMessages[i].email}</td>
                       <td>${allMessages[i].message}</td>
                       <td>bubtton</a></td>
                       <td>bubtton</a></td>`
      table.appendChild(row)
    }

  }
  console.log(allMessages)
})
}