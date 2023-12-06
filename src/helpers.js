import Book from "./models/Book";
import favoriteBooks from "./models/bookList";

export function buildBooks(dataList) {
  let bookList = [];

  dataList.map((book, index) => {
    // Verify if image and amount exist in fetched data
    let image;
    let amount;
    if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail) {
      image = book.volumeInfo.imageLinks.smallThumbnail;
    } else image = 'No image';
    if (book.saleInfo.listPrice && book.saleInfo.listPrice.amount) {
      amount = book.saleInfo.listPrice.amount;
    } else amount = 'Value not available';

    const newBook = new Book(
        book.volumeInfo.title,
        book.volumeInfo.authors,
        book.volumeInfo.averageRating,
        image,
        amount,
        book.volumeInfo.infoLink
        );
    bookList.push(newBook);
  });
  return bookList;
}

export function addToFavorites(title, bookList) {
  if (favoriteBooks.some(book => book.title === title)) {
    return favoriteBooks;
  }

  bookList.map(book => {
    if (book.title === title) {
      favoriteBooks.push(book);
    }
  });
  return favoriteBooks;
};
