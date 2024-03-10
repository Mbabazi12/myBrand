
const container = document.getElementById('container')

    let link = window.location.href;
    let url = new URL(link);
    let id = url.searchParams.get('id');
    console.log(id);
    // let req = await fetch(`https://my-server-vfg8.onrender.com/API/v1/blog/${id}`);
    // let res = await req.json();
    // console.log(res);


function getOneBlog() {
    const api = `https://my-server-vfg8.onrender.com/API/v1/blog/${id}`;
    const postman = {
        method: 'GET'
    };
    fetch(api, postman)
    .then(response => {return response.json()})
    .then(data => {
        const blog = data.data;
        container.innerHTML = "";
        const blogDiv = document.createElement("div");
        // const blogTitle = "this is title"
        // const blogImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-"
        // const blogDescription = "this is the description"

        blogDiv.innerHTML = `
            <div class="BlogContainer">
               <h2>${blog.blogTitle}</h2>
               <img src="${blog.blogImage}" alt="" class="image">
               <p>${blog.blogDescription}</p>
           </div> 
           `
        // blogDiv.innerHTML = `
        //  <div class="BlogContainer">
        //     <h2>${blogTitle}</h2>
        //     <img src="${blogImage}" alt="" class="image">
        //     <p>${blogDescription}</p>
        // </div> 
        // `
        container.appendChild(blogDiv)   
        console.log(blog)

    //   console.log (response.status)
    //   if(response.status == "404"){
    //     alert (`blog not found`)
    //   }
    //   console.log(response.message)
    }) 
//         container.append(blogDiv)
//       }
  
//     }
//     console.log(oneBlog)
}
  getOneBlog();