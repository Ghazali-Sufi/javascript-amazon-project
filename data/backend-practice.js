//creates a new Http message
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);  
})

// sets it up
xhr.open("GET", "https://supersimplebackend.dev/");

// sends this message across the internet to a backend computer located at supersimplebackend.dev
xhr.send();
