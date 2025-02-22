
function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name1.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    let details = {
        name: name,
       phone: phone,
        email:email
    };
    axios
        .post(
            "http://localhost:3001/user/add-user",
            details
        )
        .then((response) => {renderDetails(response.data.newUserDetail)
    console.log(response.data)})
        .catch((error) => console.log(error));
    document.getElementById("name1").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

function renderDetails(details) {
    console.log(details)
    const id = details.id;
    const users = document.querySelector('.list-group');
    const newLi = document.createElement('li');
    newLi.textContent = `${details.name} - ${details.phone} - ${details.email}`;
    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.id="edit"
    const deleteBtn = document.createElement('button');
   deleteBtn.innerHTML = 'Delete';
    deleteBtn.id="edit"
    editBtn.className = "btn btn-primary";
    deleteBtn.className = "btn btn-primary";
    users.id = "list";
    newLi.id = "newLi";
    editBtn.addEventListener('click', () => {
         axios.get(`http://localhost:3001/user/get-userbyId/${id}`)
         .then((response)=>{
            document.getElementById("name1").value = response.data.name;
            document.getElementById("phone").value = response.data.phone;
            document.getElementById("email").value = response.data.email;
            return axios.delete(`http://localhost:3001/user/delete-user/${id}`)
         })
         .then((response)=>{
            console.log("Deleted");
        users.removeChild(newLi);
         })
        .catch((err)=>{
            console.log(err);
        })
    });
    deleteBtn.addEventListener('click', ()=>{
     axios.delete(`http://localhost:3001/user/delete-user/${id}`)
     .then((response)=>{
        console.log("Deleted");
        users.removeChild(newLi);
     })
     .catch((err)=>{
console.log(err);
     })
    })
    newLi.appendChild(editBtn);
    newLi.appendChild(deleteBtn);
    newLi.className = "newLi";
    users.appendChild(newLi);
}

window.addEventListener("DOMContentLoaded", () => {
console.log("loaded")
    axios.get("http://localhost:3001/user/get-user")
        .then((response) => {
            console.log("called")
            console.log(response.data.allUsers)
            for (var i = 0; i < response.data.allUsers.length; i++) {
                renderDetails(response.data.allUsers[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });   
});


