import React, { useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[notes, setNotes]=useState(()=>{
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  })

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAdd=(newNote)=>{
    setNotes([...notes,newNote])
  }

  //   const addNote = (newNote) => {
  //   setNotes((prevNotes) => [...prevNotes, newNote]);
  // };


  // const handleDelete=(index)=>{
  //   const update=[...notes]
  //   update.splice(index,1)
  //   setNotes(update)
  // }

const handleDelete=(id)=>{
setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
}
  


  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd}/>
      {/* <Note key={1} title="Note title" content="Note content" onDelelte={handleDelete}/> */}
      {notes.map((note,index)=>(
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={handleDelete}
        />
      ))}
       {/* {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={handleDelete}
        />
      ))} */}
      <Footer />
    </div>
  );
}

export default App;
