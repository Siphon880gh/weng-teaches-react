import "./Charizard.css"
import {useState, useEffect} from "react"

function Charizard() {
    let [imgTag, setImgTag] = useState("");

    useEffect(()=>{
        async function request() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard").then(response=>response.json())
            window.response = response;
            setImgTag(response.sprites.front_default);
        }
        request();
    });

  return (
    <div className="App">
        <details>

            <summary className="text-center">Charizard!</summary>
            <p>
                {imgTag.length?<img src={imgTag}></img>:""}
            </p>
        </details>
    </div>
  );
}

export default Charizard;
