import React, { useState, useRef, useEffect } from 'react'


const EditSurveyAgreeDisagree = ({ surveyTitle, id }) => {


    //set max quzntity to  10 question

    const questionRef = useRef()

    //Hooks => useState  
    const [question, setQuestion] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
  
    }, [question])


//when click on add append to the array
    function renderNewQuestion() {

        
    }


    return (

        <div>
            <button onClick={renderNewQuestion}>Add</button>

            <p>Question </p>
            <label><input type="text"  /></label>




            <div>
                <button>submit</button>
            </div>
        </div>


    );
}

export default EditSurveyAgreeDisagree;
