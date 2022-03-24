import React, { useState, useRef, useEffect } from 'react'
import RadioButton from './RadioButton'


const CreateSurvey = () => {

    //attributes
    let formData = {
        surveyTitle: '',
        surveyType: {
            agreeDisagree: false,
            multipleChoice: false,
        }
    }

    const [value, setValue] = useState(false)
    function handleChange() {
        setValue(!value)
    }

    return (
        <form className="add-form">
            <h2>Create Survey</h2>
            <div className="element">
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder='Survey Title' />
                    </label>
                </div>

                <div className="radio">
                    <div className="radio-button">
 
                        <RadioButton
                            label="Agree / Disagree"
                            value={value}
                            onChange={handleChange}
                        />
                        <RadioButton
                            label="Multiple Choice"
                            value={value}
                            onChange={handleChange}
                        />

                    </div>
                </div>
            </div>
            <button className="btn" onClick={submitButtonOnClick}>Submit</button>
            <button className="btn" onClick={cancelButtonOnClick}>Cancel</button>
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
