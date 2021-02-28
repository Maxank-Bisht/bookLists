//Book constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI constructor
class UI {
    constructor() { }
    //add book UI
    addBookToList(book) {
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
    clearVal() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    showAlert(message, className) {
        //create div element
        const div = document.createElement('div');
        //add class
        div.className = `alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(message));

        //get container
        const container = document.querySelector('.container');
        //get form 
        const form = document.querySelector('#book-form');
        //add div before forms 
        container.insertBefore(div, form);

        //disappear after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);
    }
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

//Event Listener for book
document.getElementById('book-form').addEventListener('submit', function (e) {
    //UI element values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    //Instantiate book
    const book = new Book(title, author, isbn);
    //Instantiate UI
    const ui = new UI();

    //Validate
    if (title === '' || author === '' || isbn === '') {
        //Show alert error message
        ui.showAlert('Please Enter Valid Values', 'error');
    } else {
        //show alert success message
        ui.showAlert('Book Added', 'success');
        //Add book to list
        ui.addBookToList(book);
        //Clear values from form
        ui.clearVal();
    }
    e.preventDefault();
})
//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    //Instantiate UI
    const ui = new UI();
    //delete book
    ui.deleteBook(e.target);
    //show Alert message
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
})