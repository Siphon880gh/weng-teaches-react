import "./JSONCard.css"
import {useState, useEffect} from "react"

function JSONCard(props) {
    function quake() 
    { 
        setAnimateQuake("top-right");
        setTimeout(()=>{
            setAnimateQuake("bottom-right");
        }, 100)
        setTimeout(()=>{
            setAnimateQuake("bottom-left");
        }, 100)
        setTimeout(()=>{
            setAnimateQuake("top-left");
        }, 100)
    }

    const [animateQuake, setAnimateQuake] = useState("")


    const {
        q,
        choices,
        correctChoice,
        explanation,

        parentSetCurrentQuestionIndex,
        parentCurrentQuestionIndex,
        parentLastQuestionIndex
    } = props; 

    let [result, setResult] = useState("")

    function picked(event) {
        if(result.length) {
            quake();
            setTimeout(()=>{
                alert("You're not allowed to change your answer :P")
            }, 350)
            return;
        }

        console.log(event.target.id)
        if(event.target.id===correctChoice) {
            setResult("1")
        } else {
            setResult("0")
        }
    }

    return (
        <div className={"card " + animateQuake}>
            <p>{q}</p>
            <div className="choice" id="a" onClick={picked}>{choices[0]}</div>
            <div className="choice" id="b" onClick={picked}>{choices[1]}</div>
            <div className="choice" id="c" onClick={picked}>{choices[2]}</div>
            <div className="choice" id="d" onClick={picked}>{choices[3]}</div>

            {
                result.length&&(parentCurrentQuestionIndex+1<=parentLastQuestionIndex)?(
                    
                    <div className={"result "+(result==="1"?"correct":"failed")}>
                        {result==="0" ? "Incorrect!" : "Correct! " + explanation}
                        <button onClick={()=>{setResult(""); parentSetCurrentQuestionIndex(parentCurrentQuestionIndex+1)}}>Next question</button>
                    </div>
                ):
                result.length&&(parentCurrentQuestionIndex+1>parentLastQuestionIndex)?(
                    
                    <div className={"result "+(result==="1"?"correct":"failed")}>
                        {result==="0" ? "Incorrect!" : "Correct! " + explanation}
                        <button onClick={()=>{alert("Coming soon!")}}>No more questions!<br/>Click for scores (Coming soon!)</button>
                    </div>
                ):""

            }
        </div>
    )
}

export default JSONCard;