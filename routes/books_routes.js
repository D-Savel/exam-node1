import express from "express";
const router = express.Router();
import { books, bookById, addBook, updateBook, deleteBook } from "../controllers/books_controllers.js"
import isId from "../middlewares/isId.js"
import isUser from "../middlewares/isUser.js"


router.get("/books", books);
router.get("/books/:id", isId, bookById);
router.post("/books", addBook);
router.put("/books", updateBook);
router.delete("/books/:id", isId, isUser, deleteBook);


export default router;