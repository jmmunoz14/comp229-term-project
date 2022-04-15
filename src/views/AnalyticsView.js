import React from 'react'
import GlobalStatistics from '../components/GlobalStatistics'

export default function AnalyticsView() {
  return (
    <div className='container'>
      <div className="add-form">
        <h1>Global Statistics</h1>
        <div className='form-element'>
          <GlobalStatistics />
        </div>
      </div>
    </div>
  )
}