import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Entry from "./Entry";


function App() {

    const [list, setList] = useState([]);

    function addNote(note) {
        setList(prevValue =>{
            return [...prevValue, note]
        })
    }

    function deleteNote(id) {
        setList(prevValue =>{
            return prevValue.filter((singleNote, index)=>{
                return index !== id;
            });
        });
    }
      
    return (
        <div>
            <Header />
            <CreateArea onAdd = {addNote}/>
            {list.map((singleNote,index) => {
                return (
                    <Entry 
                        key={index} 
                        id ={index}
                        title={singleNote.title} 
                        content={singleNote.content} 
                        
                        onDelete = {deleteNote}
                    />
                );
            })}
            <Footer />
        </div>

    );
}

export default App;