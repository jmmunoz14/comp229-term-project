import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export default function EditSurveyAgreeDisagree({ surveyTitle, id }) {


    //set max quzntity to  10 question
    const MAX_QUESTIONS = 10

    //Hooks => useState  
    const [question, setQuestion] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [buttonVisibility, setButtonVisibility] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        setQuestionCount(questionCount);
    }, [questionCount])

    // helper function
    let createQuestionSet = (containerId, numOfQuestions) => {

        for (let i = 0; i < numOfQuestions; i++) {

            //html
            let questionPrompt = document.createElement("p");
            let questionField = document.createElement("input");
            let questionSaveButton = document.createElement("button");
            let nodeText = document.createTextNode(`Question ${i + 1}`);

            questionPrompt.setAttribute("id", `prompt${i}`);
            questionField.setAttribute("id", `field${i}`);
            questionSaveButton.setAttribute("id", `saveBtn${i}`);

            questionSaveButton.onclick = function () {
                let newQuestion = {
                    questionId: i,
                    question: questionField.value,
                }

                setQuestion(arr => [...arr, newQuestion]);

                //alert(`Successfully added Question ${i + 1} to Survey`)
            }

            questionPrompt.appendChild(nodeText);
            questionSaveButton.appendChild(document.createTextNode("Save Question"));

            containerId.appendChild(questionPrompt);
            containerId.appendChild(questionField);
            containerId.appendChild(questionSaveButton)
        }
    }

    //when click on add append to the array
    function renderQuestionSet() {

        let numOfQuestions = parseInt(document.getElementById("numOfQuestions").value);
        let questionContainer = document.getElementById("questionContainer");

        //alert(numOfQuestions)

        if (numOfQuestions > 0 && numOfQuestions <= MAX_QUESTIONS) {
            setButtonVisibility(false)
            createQuestionSet(questionContainer, numOfQuestions);
        }

        setQuestionCount(() => numOfQuestions);
    }

    //onProcessForm
    function onProcessForm() {
        let dataPreprocessing = question //this (surveyForm) is immutable
 
        console.log(dataPreprocessing)
 
        // fetch('http://localhost:4000/surveys', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(surveyForm)
        // })

        navigate('/surveys')
    }

    return (

        <div className='container'>
            <h1>{surveyTitle}</h1>
            {/* <p>{id}</p> */}

            {buttonVisibility &&
                <div>
                    <p>Input # of Questions</p>
                    <label><input
                        id="numOfQuestions"
                        type="number"
                        className='form-element'

                    /></label>

                    <button
                        className='btn'
                        onClick={renderQuestionSet}>Add</button>
                </div>
            }

            <div id="questionContainer"></div>

            {!buttonVisibility &&

                <div>
                    Question Count: {questionCount}

                    <div className="" id="currentQuestionSet">
                        List of Questions:

                        {question.map((q, index) => {
                            return (
                                <div key={index}>
                                    Question {q.questionId + 1}: {q.question}
                                </div>
                            )
                        })}

                    </div>
                    <div>
                        <button className='btn' onClick={onProcessForm}>submit</button>
                    </div>
                </div>
            }
        </div>
    );
}