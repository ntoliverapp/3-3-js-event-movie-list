const message = document.querySelector("#message")

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
//putting movieTitle within movie element

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul")
//targeting ul - unordered list in html
    list.appendChild(movie)
//list is the parent of everything, movie is parent of movieTitle
    inputField.value = " "  
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = "movieDeleted"
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")) {
        message.textContent = "Movie Watched"
    } else {
        message.textContent = "Movie Added back"
    }
}

function revealMessage(){
    setTimeout(() => {
        message.className = "hide"
    }, 1000);
}


const nameForm = document.querySelector("form")
nameForm.addEventListener("submit", addMovie)
//1. what is it listening for (submit is an event listener JS knows), 2. run that addMovie function


