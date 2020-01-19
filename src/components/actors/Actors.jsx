import React, { useState, useEffect } from "react";
import Actor from "./Actor";

function Actors() {
  const [hasError, setErrors] = useState(false);
  const [actors, setActors] = useState([]);
  const [newActor, setNewActor] = useState();

  const fetchData = async () => {
    const res = await fetch("https://swapi.co/api/people/");
    res
      .json()
      .then(res => setActors(res.results))
      .catch(err => setErrors(err));
  };

  const handleChangeNewActor = event => {
    setNewActor({ name: event.target.value });
  };

  const handleAddActor = () => {
    let list = actors.concat(newActor);
    setActors(list);
  };

  const handleDeleteActor = name => {
    //лучше было по id, но его нету в api
    let list = actors.filter(actor => {
      return actor.name !== name;
    });
    setActors(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input type="text" onChange={handleChangeNewActor}></input>{" "}
      <button onClick={handleAddActor}>Add actor</button>
      {actors.map((item, index) => {
        return <Actor key={index} handleDeleteActor={handleDeleteActor} item={item} />;
      })}
    </div>
  );
}

export default Actors;