import React, { useState } from "react";

function CreateArea(props) {

  const [heading, setHeading]= useState({
    title : "",
    content : ""
  });


  function handleChange(event){

    const {name, value} = event.target;

    setHeading(prevValue => {
        return{
            ...prevValue,
            [name] : value
        };
    })
  }

  function submitNote(event){
    props.onAdd(heading);
    setHeading({
        title : "",
        content : ""
      });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} 
            name="title" 
            value={heading.title}
            placeholder="Title" 
        />
        <textarea onChange={handleChange} 
            name="content" 
            value={heading.content}
            placeholder="Take a note..." 
            rows="3" 
        />

        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;