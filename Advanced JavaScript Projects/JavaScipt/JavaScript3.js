function displayName(book){
    var bookTitle = book.getAttribute("data-book-title");
    alert("The " + book.innerHTML + " entry into the Inheritance Cycle is called " + bookTitle);
}