import React, { useState, useRef, useEffect } from 'react'


export default function EditSurveyAgreeDisagree({ surveyTitle, id }) {


    //set max quzntity to  10 question

    //Hooks => useState  
    const [question, setQuestion] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        setQuestionCount(questionCount);
    }, [questionCount])

    // helper function
    let createQuestionSet = (containerId, numOfQuestions) => {
        for (let i = 0; i<numOfQuestions; i++) {
            let questionPrompt = document.createElement("p");
            let questionField = document.createElement("input");
            let questionSaveButton = document.createElement("button");
            let nodeText = document.createTextNode(`Question ${i+1}`);

            questionPrompt.setAttribute("id", `prompt${i}`);
            questionField.setAttribute("id", `field${i}`);
            questionSaveButton.setAttribute("id", `saveBtn${i}`);

            questionSaveButton.onclick = function() {
                let newQuestion = {
                    questionId: i,
                    question: questionField.value,
                }
                setQuestion(arr => [...arr, newQuestion]);
                alert(`Successfully added Question ${i+1} to Survey`)
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

        if (numOfQuestions <= 0) {
            alert("Please enter at least 1 (or more) questions");
        } else if (numOfQuestions > 10) { 
            alert("You have inputted too many questions. Please enter a maximum of 10 questions")
        } else {
            // refer to helper function above
            createQuestionSet(questionContainer, numOfQuestions);
        }

        setQuestionCount(() => numOfQuestions);
    }

    return (

        <div className='container'>
            <h1>{surveyTitle}</h1>
            <p>{id}</p>
            <p>Input # of Questions</p>
            <label><input id="numOfQuestions" type="text"  /></label>            
            <button className='btn' onClick={renderQuestionSet}>Add</button>

            <div id="questionContainer">
            </div>

            <div>
                Question Count: {questionCount}
            </div>
            <div className="" id="currentQuestionSet">
                List of Questions: 
                {question.map((q, index) => {
                    return (
                        <div key={index}>
                        Question {q.questionId+1}: {q.question}
                        </div>
                    )
                })}
            </div>
            <div>
                <button className='btn'>submit</button>
            </div>
        </div>


    );
}