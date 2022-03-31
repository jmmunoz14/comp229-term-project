import React from 'react'
import EditSurveyAgreeDisagree from '../components/EditSurveyAgreeDisagree'
import { useNavigate, useLocation } from 'react-router-dom';


export default function EditSurveyView() {

  //redirected → /editSurvey with { state: { surveyTitle, id, surveyType } }
  const location = useLocation();

  return (
    <div>

      {/* conditional rendering */}
      {location.state.surveyType.agreeDisagree &&
        <EditSurveyAgreeDisagree
          surveyTitle={location.state.surveyTitle}
          surveyId={location.state.id}
        />
      }

      {/* conditional rendering */}
      {location.state.surveyType.multipleChoice &&
         <div>
           renderizar multiple choice
         </div>
      }

    </div>
  )
}