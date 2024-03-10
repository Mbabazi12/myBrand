const blog_container = document.getElementById('all_blogs_container');

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
  if(allBlogs.length > 0 ){
    blog_container.innerHTML = "";
    for(let i =0; i < allBlogs.length; i++){
      const blogDiv = document.createElement("div");
      blogDiv.innerHTML = `
      <div class="Blog1Container">
      <h2>${allBlogs[i].blogTitle}</h2>
      <img src=${allBlogs[i].blogImage} alt="" class="image">
      <a href="readMore.html" class="read-more">Read More</a>
  </div>
      `
      blog_container.append(blogDiv)
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