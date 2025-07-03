import express from "express";
import {createNote , deleteNote,getNotebyId,  getAllnotes, updateNote } from "../controllers/notescontroller.js";


const router = express.Router();

router.get("/",getAllnotes);
router.get("/:id",getNotebyId);
router.post("/",createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
export default router;