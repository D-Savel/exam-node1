import jsonBooksData from "../utils/readBooksData.js"
import writeBooksData from "../utils/writeBooksData.js"

const booksData = await jsonBooksData()


export function books(req, res) {
  res.send(booksData);
}


export function bookById(req, res) {
  const bookId = req.params.id
  const filteredBooks = booksData.filter(book => book.id == bookId)
  res.send(filteredBooks);
}


export function addBook(req, res) {
  const data = req.body
  let greaterId = 0
  for (const book of booksData) {
    if (book.id > greaterId)
      greaterId = book.id
  }
  data.id = greaterId + 1  // Attribute new id
  const newData = [...booksData, data]  // Add new book data with new id to books
  writeBooksData(newData)
  res.status(200).send({ addedBook: data });
}


export function deleteBook(req, res) {
  const bookId = req.params.id
  let deletedData = {}
  for (const bookIndex in booksData) {
    if (booksData[bookIndex].id == bookId) {
      deletedData = booksData[bookIndex]
      booksData.splice(bookIndex, 1)
    }
  }
  writeBooksData(booksData)
  res.status(200).send({ deletedBook: deletedData });
}


export function updateBook(req, res) {
  const data = req.body
  console.log(data);
  for (const book of booksData) {
    if (book.id == data.id) {
      if (data.author) book.author = data.author
      if (data.year) book.year = data.year
      if (data.title) book.title = data.title
    }
  }
  writeBooksData(booksData)
  res.status(200).send({ updatedBook: data });
}