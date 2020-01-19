import React from "react";
import  "./actors.css";

function Actors(props) {
  return (
    <div className="ActorCard">
      <p> name: {props.item.name}</p>
      <button onClick={()=>{debugger; props.handleDeleteActor(props.item.name)}}>Delete</button>
    </div>
  );
}

export default Actors;