import Book from "./models/Book";

export default function buildBooks(dataList) {
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
