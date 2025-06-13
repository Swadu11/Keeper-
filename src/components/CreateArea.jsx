import React, {useState} from "react";

function CreateArea({onAdd}) {

  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (note.title || note.content) {
      onAdd(note);
      setNote({ title: "", content: "" });

    }
  };






  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
