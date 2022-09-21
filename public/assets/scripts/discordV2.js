const socket = io()

//get serverList via ID 
const serverList = document.getElementById('serverList');
//channelList
const channelList = document.getElementById('channelList');

const login = document.getElementById('login');

//clicks 
serverList.addEventListener('click', (e) => {
    console.log(e.target.innerText);
})
channelList.addEventListener('click', (e) => {
    console.log(e.target.innerText);
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}

//Done clicks

//check brower storage for token
if (localStorage.getItem('token') === null) {
    login.style.display = 'block';
} else {
    //load the chats n stuff 
}

const messages = document.getElementById('messages');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.getElementById('input');
    if (message.value) {
    messages.innerHTML += `<li>${message.value}</li>`;
    message.value = '';
    } else {
        alert("No message value!")
    }
})