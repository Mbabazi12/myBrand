const table = document.getElementById('message_body')

let loading = `            <tr>
<td>Loading....</td>
<td></td><td></td>
</tr>`;

function getAllmessages() {
  const api = `https://my-server-vfg8.onrender.com/API/v1/message/getMessages`;
  console.log('loading')
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
                       <td><a href="href=mailto:${allMessages[i].email}">Reply</a></td>
                       <td><a href="#deleteBlog" onclick="messageDelete('${allMessages[i]._id}')">Delete</a></td>`
      table.appendChild(row)
    }

  }
  console.log(allMessages)
})
}
getAllmessages();

async function messageDelete(id){
  table.innerHTML = loading;
  let req = await fetch("https://my-server-vfg8.onrender.com/API/v1/message/"+id,{
    method: 'delete',
    headers:{
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWViODVmNzM0MTdjZjhlZWQzNDA0OTciLCJlbWFpbCI6Im1iYWJhemkwNjlAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA5OTkyMzIxfQ.AQTzZZkPQucK-u7QsLAMec9C5MvZ4cMhije_lnvNdRM`
    }
  });
  let res = await req.json();
  console.log(res);
  getAllmessages();
}