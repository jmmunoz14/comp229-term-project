import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import SurveyElement from "./SurveyElement";


const SurveyList = () => {

    const [surveyData, setSurveyData] = useState([])
    //Hooks => useNavigate
    const navigate = useNavigate();

    // Fetch surveysData
    const surveysData = async () => {
        const res = await fetch('http://localhost:4000/surveys')
        const data = await res.json()

        console.log(data)
        return data
    }


    useEffect(() => {
        const getSurveys = async () => {
            const dataFromServer = await surveysData()
            setSurveyData(dataFromServer)
        }

        getSurveys()
    }, [])

    return (
        <div className="container">
            <h2>Surveys</h2>
            {surveyData.map((dataElement) => {
                return (
                    <div className="element" key={dataElement.id} >
                        <SurveyElement surveyTitle={dataElement.surveyTitle} id={dataElement.id} />
                    </div>
                )

            })}
            <button className="btn-back" onClick={() => { navigate('/') }}> Back </button>

        </div>
    )
}

export default SurveyList;
