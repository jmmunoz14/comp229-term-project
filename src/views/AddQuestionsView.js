import React, { useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import MultipleChoice from '../components/formMultipleChoice'
import AgreeDisagree from '../components/formAgreeDisagree'

export default function AnalyticsView() {
  const location = useLocation()

  console.log(location.state)

  return (
    <div>
      {location.state.surveyType.agreeDisagree && (
        <AgreeDisagree
          surveyTitle={location.state.surveyTitle}
          surveyId={location.state.id}
        />
      )}

      {location.state.surveyType.multipleChoice && (
        <MultipleChoice
          surveyTitle={location.state.surveyTitle}
          surveyId={location.state.id}
        />
      )}
    </div>
  )
}
