const table = document.getElementById('table_body')
// const table_body = document.getElementById('table_body')[0];

let loading = `            <tr>
<td>Loading....</td>
<td></td><td></td><td></td>
</tr>`;

function getAllBlogs() {
  const api = `https://my-server-vfg8.onrender.com/API/v1/blog/get`;
  const postman = {
      method: 'GET'
  };
  fetch(api, postman)
  .then(response => {
    console.log (response.status)
    if(response.status == "401"){
      alert (`blogs not found`)
    }
    return response.json();
}).then((data) => {
  const allBlogs = data.data
  // let newRow = table_body.insertRow(table_body.rows.length)
  // let title = newRow.insertCell(0)
  // let description = newRow.insertCell(1)
  // let image = newRow.insertCell(2)
  if(allBlogs.length > 0 ){
    table.innerHTML = "";
    for(let i =0; i < allBlogs.length; i++){
      console.log("index", i)
      const row = document.createElement("tr");
      row.innerHTML = `<td>${allBlogs[i].blogTitle}</td>
                       <td>${allBlogs[i].blogDescription}</td>
                       <td>${allBlogs[i].CreatedDate}</td>
                       <td><a href="blogUpdate.html?id=${allBlogs[i]._id}">Update</a></td>
                       <td><a href="#deleteBlog" onclick="blogDelete('${allBlogs[i]._id}')">Delete</a></td>`
      table.appendChild(row)
    }

  }
  console.log(allBlogs)
})
}

getAllBlogs();

async function blogDelete(id){
  table.innerHTML = loading;
  let req = await fetch("https://my-server-vfg8.onrender.com/API/v1/blog/"+id,{
    method: 'delete',
    headers:{
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWViODVmNzM0MTdjZjhlZWQzNDA0OTciLCJlbWFpbCI6Im1iYWJhemkwNjlAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA5OTkyMzIxfQ.AQTzZZkPQucK-u7QsLAMec9C5MvZ4cMhije_lnvNdRM`
    }
  });
  let res = await req.json();
  console.log(res);
  getAllBlogs();
}
// function validateForm() {
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//  const image = document.getElementById("image").value;

//   if (title == "") {
//     alert("a title is required");
//     return false;
//   }
//   if (description == "") {
//     alert("please enter a description!");
//     return false;
//   }
//   if (image == "") {
//     alert("enter image url ");
//     return false;
//   }
//   return true;
// }