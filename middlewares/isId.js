import jsonBooksData from "../utils/readBooksData.js"

export default async function isId(req, res, next) {
  const booksData = await jsonBooksData()

  const bookId = req.params.id
  for (const book of booksData) {
    if (book.id == bookId) {
      next()
      return
    }
  }
  res.send({ error: `there's no id: ${bookId} in books library` });
}