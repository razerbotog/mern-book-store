import express, {Router} from "express";
import { Book } from "../models/book.model.js";

const bookRouter = Router()


// route to save a new book
bookRouter.post("/", async (req, res)=>{
    try {
        if(!req.body.title || !req.body.author ||  !req.body.publishYear){
            return res.status(400).send({message: "All fields required"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook);
        return res.status(201).send({message: "Book Created successfully", createdBook: book})
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message})
        
    }
})

// route to fetch book
bookRouter.get("/", async(req, res)=>{
    try {
        const books = await Book.find({})
        console.log(books);
        return res.status(200).json({count:books.length, data : books })
    } catch (error) {
       console.log(error.message);
       return res.status(500).send({message: error.message}) 
    }
})

// route to fetch a book by id
// POST requests are typically used for creating new resources, not for retrieving existing ones. Stick to using GET for read operations, and POST for write operations when following RESTful principles.
bookRouter.get("/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const book = await Book.findById(id)
        console.log(book);
        return res.status(200).json(book)
    } catch (error) {
       console.log(error.message);
       return res.status(500).send({message: error.message}) 
    }
})
// route to update a book by id
bookRouter.put("/:id", async(req, res)=>{
    try {
        if(!req.body.title || !req.body.author ||  !req.body.publishYear){
            return res.
            status(400).send({message: "All fields required"})
        }
        const {id} = req.params
        console.log("req.body", req.body);
        const result = await Book.findByIdAndUpdate(id, req.body, {new: true})
        if (!result) {
            return res.status(404).json({message: "Book not found"}) 
        }
        console.log("result", result);
        return res.status(200).json(result)
    } catch (error) {
        console.log(error.message);
       return res.status(500).send({message: error.message}) 
    }
})
// route to delete a book by id
bookRouter.delete("/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).json({message: "Book not found"}) 
        }
        return res.status(200).json(result)
    } catch (error) {
        console.log(error.message);
       return res.status(500).send({message: error.message}) 
    }
})

export default bookRouter;