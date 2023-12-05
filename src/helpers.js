import Book from "./models/Book";
import favoriteBooks from "./models/bookList";

export function buildBooks(dataList) {
  let bookList = [];
  // const keys = Object.keys(dataList);
  dataList.map((book, index) => {
    const newBook = new Book(
        dataList[index].volumeInfo.title,
        dataList[index].volumeInfo.authors,
        dataList[index].volumeInfo.categories,
        dataList[index].volumeInfo.averageRating,
        );
    bookList.push(newBook);
  });
  return bookList;
}

export function addToFavorites(title, bookList) {
  bookList.map(book => {
    if (book.title === title) {
      favoriteBooks.push(book);
      // return;
    }
  });
  return favoriteBooks;
};
