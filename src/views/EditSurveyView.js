import React from 'react'
import EditSurveyAgreeDisagree from '../components/EditSurveyAgreeDisagree'
import { useNavigate, useLocation } from 'react-router-dom'

export default function EditSurveyView() {
  //redirected → /editSurvey with { state: { surveyTitle, id, surveyType } }
  const location = useLocation()

  return (
    <div>
      {location.state.surveyType.agreeDisagree && (
        <EditSurveyAgreeDisagree
          surveyTitle={location.state.surveyTitle}
          surveyId={location.state.id}
        />
      )}

      {location.state.surveyType.multipleChoice && (
        <EditSurveyAgreeDisagree
          surveyTitle={location.state.surveyTitle}
          surveyId={location.state.id}
        />
      )}
    </div>
  )
}
