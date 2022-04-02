import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import CreateSurveyView from './views/CreateSurveyView';
import ListSurveysView from './views/ListSurveysView'
import AnalyticsView from './views/AnalyticsView'
import EditSurveyView from './views/EditSurveyView'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/surveys' element={<ListSurveysView />} />
        <Route path='/createSurvey' element={<CreateSurveyView />} />
        <Route path='/editSurvey' element={<EditSurveyView />} />
        <Route path='/analytics' element={<AnalyticsView />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

//this is a test

