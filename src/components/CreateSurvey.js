import React, { useState, useRef } from 'react'
import RadioButton from './RadioButton'
const { v4: uuidv4 } = require('uuid')



const CreateSurvey = () => {

    //attributes
    const initialValues = {
        id: null,
        surveyTitle: 'Survey title goes here',
        surveyType: {
            agreeDisagree: false,
            multipleChoise: false,
        }
    }

    //Hooks => useState useRef
    const [surveyForm, setSurveyForm] = useState(initialValues)
    const surveyTitleFieldRef = useRef()
    const agreeDisagreeRadioButtonRef = useRef()
    const multipleChoiceRadioButtonRef = useRef()


    //functions - onChanges
    function onChangeSurveyTitle() {
        const surveyTitleValue = surveyTitleFieldRef.current.value
        let data = surveyForm //this (surveyForm) is immutable

        data.surveyTitle = surveyTitleValue
        //console.log(data)
        setSurveyForm(data)
    }

    function onChangesRadioButton() {
        const agreeDisagreeValue = agreeDisagreeRadioButtonRef.current.checked
        const multipleChoiceValue = multipleChoiceRadioButtonRef.current.checked
        let dataPreprocessing = surveyForm //this (surveyForm) is immutable

        //console.log(dataPreprocessing)

        if (agreeDisagreeValue) {
            dataPreprocessing.surveyType.agreeDisagree = true
            dataPreprocessing.surveyType.multipleChoise = false
            setSurveyForm(dataPreprocessing)
        }

        if (multipleChoiceValue) {
            dataPreprocessing.surveyType.agreeDisagree = false
            dataPreprocessing.surveyType.multipleChoise = true
            setSurveyForm(dataPreprocessing)
        }
    }


    function onSubmitSurvey() {
        alert('submitting')
        let dataPreprocessing = surveyForm //this (surveyForm) is immutable
        dataPreprocessing.id = uuidv4()

        console.log(dataPreprocessing)
        setSurveyForm(dataPreprocessing)
    }

    //return
    return (
        <form className="add-form">
            <h2>Create Survey</h2>
            <div className="element">

                <div className='form-element'>
                    <p>Survey title</p>
                    <input type="text"
                        name="name"
                        ref={surveyTitleFieldRef}
                        placeholder={surveyForm.surveyTitle}
                        onChange={onChangeSurveyTitle}
                    />
                </div>

                <div className='form-element'>
                    <p>Survey type</p>
                    <div className='flexbox-container-multiple-choice'>
                        <label>
                            <input type="radio"
                                className="radio-button"
                                name="name"
                                ref={agreeDisagreeRadioButtonRef}
                                onChange={onChangesRadioButton}
                            />Multiple Choice
                        </label>
                        <label>
                            <input type="radio"
                                className="radio-button"
                                name="name"
                                ref={multipleChoiceRadioButtonRef}
                                onChange={onChangesRadioButton}
                            />
                            Agree or Disagree
                        </label>
                    </div>
                </div>

            </div>

            <button className="btn" onClick={onSubmitSurvey}>Submit</button>
            <button className="btn">Cancel</button>
        </form>

    );

}

export default CreateSurvey;
