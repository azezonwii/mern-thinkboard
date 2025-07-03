import mongoose from "mongoose";


// 1 Create a schema for the note
// model base off of that schema

const noteSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    
    },
    content: {
        type: String,
        required: true
    },
},
 {timestamps:true}  // createdat,updatedat
);


const Note = mongoose.model("Note", noteSchema);
export default Note;



