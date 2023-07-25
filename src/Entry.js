import React from "react";

function Entry(props) {
    function handleDelete() {
      props.onDelete(props.id);
    }
  
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="btn">
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    );
  }
  
  

export default Entry;