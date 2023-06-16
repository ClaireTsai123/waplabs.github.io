let books = [];
let idcounter = 1;

module.exports = class Book {

    constructor(id, title, isbn, publishedDate,author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = idcounter++;
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(book => book.id == this.id);
        if (index > -1) {
            const book = books[index];
            if (this.title) {
                book.title = this.title;
            }
            if (this.isbn) {
                book.isbn = this.isbn;
            }
            if (this.publishedDate) {
                book.publishedDate = this.publishedDate;
            }
            if (this.author) {
                book.author = this.author;
            }
        } else {
            throw new Error(`Couldn't find product with id:${id}`);
        }

    }

    static getAll() {
        return books;
    }

    static getBookById(id) {
        const result = books.find(prod => prod.id === parseInt(id))
        if (result) {
            return result;
        } else {
            throw new Error(`Couldn't find book with id:${id}`);
        }
    }

    delete() {
        const index = books.findIndex(prod => prod.id == this.id);
        if (index > -1) {
            books.splice(index, 1);
        } else {
            throw new Error(`Couldn't find book with id: ${id}`);
        }
    }

}