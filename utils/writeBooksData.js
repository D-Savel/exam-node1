import { writeFile } from "fs/promises";

const FILEPATH = "/home/savel/Documents/3wa/exam-node1/data/library.json"

export default async function writeBooksData(data) {
  try {
    const dataToWrite = JSON.stringify(data)
    await writeFile(FILEPATH, dataToWrite, "utf8")
  } catch (err) {
    console.log('error', err.message);
  }
}
