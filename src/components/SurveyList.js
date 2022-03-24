import SurveyElement from "./SurveyElement";
import { useState, useEffect } from 'react'


const SurveyList = () => {

    const [surveyData, setSurveyData] = useState([])

    // Fetch surveysData
    const surveysData = async () => {
        const res = await fetch('http://localhost:4000/surveys')
        const data = await res.json()

        return data
    }

    
    useEffect(() => {
        const getTasks = async () => {
          const dataFromServer = await surveysData()
          setSurveyData(dataFromServer)
        }
    
        getTasks()
      }, [])
      //console.log(surveyData)

 



    return (
        <div>
            <h2>Surveys</h2>
            {surveyData.map((dataElement) => {

                return (

                    <div className="element" key={dataElement.id} >
                        <SurveyElement title={dataElement.title} id={dataElement.id} />
                    </div>
                )

            })}
        </div>
    )
}

export default SurveyList;
