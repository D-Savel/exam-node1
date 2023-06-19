import { readFile } from "fs/promises";

const FILEPATH = "/home/savel/Documents/3wa/exam-node1/data/library.json"

export default async function jsonBooksData() {
  try {
    const booksData = await readFile(FILEPATH, "utf8")
    const books = JSON.parse(booksData)
    return books
  } catch (err) {
    console.log(err.message);
  }
}
