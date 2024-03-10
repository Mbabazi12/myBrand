async function getSingleBlog() {
    let link = window.location.href;
    let url = new URL(link);
    let id = url.searchParams.get('id');
    console.log(id);
    let req = await fetch("https://my-server-vfg8.onrender.com/API/v1/blog/" + id);
    let res = await req.json();
    console.log(res);
    if (res.data) {
        blogForm.id.value = id
        blogForm.photo.value = res.data.blogImage
        blogForm.description.value = res.data.blogDescription
        blogForm.title.value = res.data.blogTitle
    }
}
getSingleBlog();
async function update() {
    let data = {
        "blogTitle": blogForm.title.value,
        "blogDescription": blogForm.description.value,
        "blogImage": blogForm.photo.value
    }
    id = blogForm.id.value
    console.log(JSON.stringify(data));

    let req = await fetch("https://my-server-vfg8.onrender.com/API/v1/blog/"+id, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWViODVmNzM0MTdjZjhlZWQzNDA0OTciLCJlbWFpbCI6Im1iYWJhemkwNjlAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA5OTkyMzIxfQ.AQTzZZkPQucK-u7QsLAMec9C5MvZ4cMhije_lnvNdRM`
        },
        body: JSON.stringify(data)
    });
    let res = await req.json();
    if(res.data){
        window.location = "blogsDash.html";
    }
}