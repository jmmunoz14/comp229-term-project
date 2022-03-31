import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import SurveyElement from "./SurveyElement";


const SurveyList = () => {

    const [surveyData, setSurveyData] = useState([])
    //Hooks => useNavigate
    const navigate = useNavigate();

    // Fetch surveysData
    const surveysData = async () => {
        // const res = await fetch('http://localhost:4000/surveys')
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

        // console.log(output)

        //   [
        //     {
        // "id": "3046f572-d7e2-4447-a922-c4132f9ee8e5",
        //     "surveyTitle": "Good places to live🍁",
        //         "surveyType": {
        //     "agreeDisagree": true,
        //         "multipleChoice": false
        //       }
        //     },
        //     {
        //       "id": "4df712bd-67b6-457b-bf75-3f6037ade639",
        //       "surveyTitle": "⭐⭐ Jailene is beautiful",
        //       "surveyType": {
        //         "agreeDisagree": true,
        //         "multipleChoice": false
        //       }
        //     },
        //     {
        //       "id": "3f1d77b6-7006-472f-82c9-2ec41138625b",
        //       "surveyTitle": "Sample",
        //       "surveyType": {
        //         "agreeDisagree": true,
        //         "multipleChoice": false
        //       }
        //     }
        //   ],

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
        <div className="container">
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
            <button className="btn-back" onClick={() => { navigate('/') }}> Back </button>
        </div>
    )
}

export default SurveyList;
