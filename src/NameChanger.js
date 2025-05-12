import React from "react";
import { useState} from "react";

function NameChanger() {
    const [name,setName] = useState("python")
    const changeName = () => setName("java")
    const Revarse = () => setName("python")
     return(
        <div>
            <h2>Name: {name} </h2>
            <button onClick={changeName}>changeName</button>
            <button onClick={Revarse}>Revarse</button>
        </div>
     )
}

export default NameChanger;