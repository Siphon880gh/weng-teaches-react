import logo from './logo.png';
import './App.css';
import JSONCard from "./JSONCard";
import JSONData from "./test.json";
import {useState, useEffect} from "react"

function JSONCards() {
  const [dataArray, setDataArray] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  useEffect(()=>{
    setDataArray(JSONData);
    console.log(dataArray);
  })

  function getArrayChoices(choices) {
    return [ 
      choices.choiceA,
      choices.choiceB,
      choices.choiceC,
      choices.choiceD,
    ]
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          dataArray.length?(
            <JSONCard
              q={dataArray[currentQuestionIndex].q}
              choices={ getArrayChoices(dataArray[currentQuestionIndex]) }
              correctChoice={dataArray[currentQuestionIndex].correctChoice}
              explanation={dataArray[currentQuestionIndex].explanation}
              
              parentSetCurrentQuestionIndex={setCurrentQuestionIndex}
              parentCurrentQuestionIndex={currentQuestionIndex}

              parentLastQuestionIndex={dataArray.length-1}
            ></JSONCard>
          ):""
        }
      </header>
    </div>
  );
}

export default JSONCards;
