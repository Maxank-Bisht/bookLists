//Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() { }

//add book UI
UI.prototype.addBookToList = function (book) {
    const bookList = document.getElementById('book-list');
    const bookVal = document.createElement('tr');
    bookVal.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    bookList.appendChild(bookVal);
}
//Clear Field
UI.prototype.clearVal = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listener
document.getElementById('book-form').addEventListener('submit', function (e) {
    //UI element values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    //Instantiate book
    const book = new Book(title, author, isbn);
    
    //Instantiate UI
    const ui = new UI();
    //Add book to list
    ui.addBookToList(book);
    //Clear values from form
    ui.clearVal();

    e.preventDefault();
})