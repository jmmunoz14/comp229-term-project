import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SurveyElement from "./SurveyElement"


const SurveyList = () => {

    const [surveyData, setSurveyData] = useState([])
    const navigate = useNavigate();

    const surveysData = async () => {
        const res = await fetch('https://surveymeanbackend.herokuapp.com/survey/list_attend')
        const data = await res.json()

        let output = data.map((e) => {
            return {
                "id": e._id,
                "surveyTitle": e.title,
                "surveyType": {
                    "agreeDisagree": (e.type === 'Multiple Choice') ? true : false,
                    "multipleChoice": (e.type === 'Agree or Disagree') ? true : false
                }
            }
        })

        return output
    }


    useEffect(() => {
        const getSurveys = async () => {
            const dataFromServer = await surveysData()
            setSurveyData(dataFromServer)
        }

        getSurveys()
    }, [])

    return (
        <div className="container-surveylist">
            <h2>Surveys</h2>
            {surveyData.map((dataElement) => {
                return (
                    <div className="element" key={dataElement.id} >
                        <SurveyElement
                            surveyTitle={dataElement.surveyTitle}
                            id={dataElement.id}
                            surveyType={dataElement.surveyType}
                        />
                    </div>
                )

            })}
            <button className="btn" onClick={() => { navigate('/') }}> Back </button>
        </div>
    )
}

export default SurveyList;
