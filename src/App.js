import './App.css';
import Header from './components/Header';
import Content from './components/Home'
import Footer from './components/Footer'
import CreateSurveyView from './views/CreateSurveyView';
import ListSurveysView from './views/ListSurveysView'
import AnalyticsView from './views/AnalyticsView'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() { 

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/createSurvey' element={<CreateSurveyView />} />
        <Route path='/surveys' element={<ListSurveysView />} />
        <Route path='/analytics' element={<AnalyticsView />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
