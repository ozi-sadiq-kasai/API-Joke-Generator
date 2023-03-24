const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let display = document.querySelector('#display');

let randomJokes = ()=>{
    fetch(URL)
        .then(res => res.json())
        .then(data =>{
            display.innerHTML = `${data.joke}`
        })  
}

document.querySelector('button').addEventListener("click",randomJokes);
// randomJokes()