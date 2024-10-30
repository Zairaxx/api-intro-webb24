let getData = async (url) => {
    let response = await fetch(url)
    let data = await response.json();
    return data;
}
 //Uppgift 1
// let renderPage = async () => {
//      let todos = await getData("https://jsonplaceholder.typicode.com/todos");
//     let ul = document.createElement("ul");
//     document.body.append(ul);

//     todos.forEach((todo) => {
//         let li = document.createElement("li");
//         li.innerText = `# ${todo.id} - ${todo.title}`
//         ul.append(li);
//         if(todo.completed) {
//             li.classList.add("completed");
//         }
//     })
// }
// renderPage()

//Uppgift 2

// let btn = document.querySelector("#getProfiles");

// btn.addEventListener("click", async () => {
//     let profiles = await getData("https://jsonplaceholder.typicode.com/users");
//     console.log(profiles);

//     profiles.forEach(profile => {
//         //de-structuring
//        let {name,email, phone, address} = profile;
//     //    let name = profile.name
//     //    let email = profile.email
//     //    let phone = profile.phone

//        let div = document.createElement("div");
//        div.style.border = "2px solid black";
//        div.innerHTML = `
//         <p>Name: ${name}</p>
//         <p>Email: ${email}</p>
//         <p>Phone number: ${phone}</p>
//         <p>Adress:${address.street}, ${address.city}</p>
//        `
//        document.body.append(div);
//     })
// })

//Uppgift 3

let btn = document.querySelector("#getActivity");
btn.addEventListener("click", async () => {
    let activity = await getData("https://bored.api.lewagon.com/api/activity");

    let {activity:activityName, type} = activity;

    document.querySelector("#activity").innerHTML = `
        <h2>Activity name: ${activityName}</h2>
        <p>Activity type: ${type}</p>`
})