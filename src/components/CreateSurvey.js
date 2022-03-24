import React, { useState, useRef, useEffect } from 'react'
import RadioButton from './RadioButton'
const { v4: uuidv4 } = require('uuid')



const CreateSurvey = () => {

    const initializeSurveyFromType = {
        id: null,
        surveyTitle: 'Survey title goes here',
        surveyType: {
            agreeDisagree: false,
            multipleChoise: false,
        }
    }

    const [surveyFormType, setSurveyFormType] = useState(initializeSurveyFromType)


    function handleChange() {
        alert('here')
    }
    function submitSurvey() {
        let surveyTitleField = document.getElementById('surveyTitleFieldId')
        let agreeDisagreeRadioButton = document.getElementById('agreeDisagreeRadioButtonId')
        let multipleChoiseRadioButton = document.getElementById('multipleChoiseRadioButtonId')

        alert('submitting')


        setSurveyFormType({
            id: uuidv4(),
            surveyTitle: surveyTitleField.value,
            surveyType: {
                agreeDisagree: agreeDisagreeRadioButton.value,
                multipleChoise: multipleChoiseRadioButton.value,
            }
        })

        console.log(surveyFormType)
    }

    return (
        <form className="add-form">
            <h2>Create Survey</h2>
            <div className="element">
                <input id='surveyTitleFieldId' type="text" name="name" placeholder={surveyFormType.surveyTitle} />

                <p>Survey type:</p>
                <div className="radio-button" id='agreeDisagreeRadioButtonId'>
                    <RadioButton
                        label="Agree / Disagree"
                        value={surveyFormType.surveyType.agreeDisagree}
                        onChange={handleChange}
                    />
                </div>
                <div className="radio-button" id='multipleChoiseRadioButtonId'>
                    <RadioButton
                        label="Multiple Choice"
                        value={surveyFormType.surveyType.multipleChoise}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button className="btn" onClick={submitSurvey}>Submit</button>
            <button className="btn">Cancel</button>
        </form>

    );



    function submitButtonOnClick(e) {
        console.log(e)
    }

    function cancelButtonOnClick(e) {
        console.log(e)
    }


}

export default CreateSurvey;
