let addButton = document.querySelector(".add-button");
let popupBox = document.querySelector(".popup-box");
let popupOverlay = document.querySelector(".popup-overlay");

addButton.addEventListener("click", function(){
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

let cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", function(event){
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

let addBookBtn = document.querySelector(".add-book-btn");
let booksContainer = document.querySelector(".container");
let bookContainer = document.querySelector(".book-container");
let addBookName = document.querySelector(".add-book-name");
let addAuthorName = document.querySelector(".add-author-name");
let bookDescription = document.querySelector(".book-description");

addBookBtn.addEventListener("click", function(event){
    event.preventDefault();
    let div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${addBookName.value}</h2>
    <h5>${addAuthorName.value}</h5>
    <p>${bookDescription.value}</p>
    <button class="del-btn" onclick="deleteBook(event)">Delete</button>`;
    booksContainer.append(div);
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
    addBookName.value = "";
    addAuthorName.value = "";
    bookDescription.value = "";
});

function deleteBook(event) {
    event.target.parentElement.remove();
}