//Asynkron javascript

//Alternativ 1
// let data = fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(response => response.json())
//     .then(json => console.log(json))

// Alternativ 2

let getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data
}


//Alternativ 1
// getData('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => {
//     console.log(data)
//     let h2 = document.createElement("h2");
//     h2.innerText = data.title;
//     document.body.append(h2);
// })

//async await
let renderPage = async () => {
    let todo = await getData("https://jsonplaceholder.typicode.com/todos/1")
    
    let user = await getData("https://jsonplaceholder.typicode.com/users/1")
    
    let posts = await getData("https://jsonplaceholder.typicode.com/posts")

    //Ritar ut i DOM:en
    //Skriver ut TODO
    let h2 = document.createElement("h2");
    h2.innerText = todo.title;

    //Skriver ut USER
    let h3 = document.createElement("h3");
    h3.innerText = user.name;
    document.body.append(h2,h3);

    //Rita ut från array
    // Skriver ut POSTS
    posts.forEach((post) => {

        let p = document.createElement("p");
        p.innerText = "#" + post.id + "- " + post.title;
        document.body.append(p);

    })

}

renderPage()