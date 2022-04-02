import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import CreateSurveyView from './views/CreateSurveyView';
import ListSurveysView from './views/ListSurveysView'
import AnalyticsView from './views/AnalyticsView'
import EditSurveyView from './views/EditSurveyView'
import { LoginView } from './views/LoginView';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { SignupView } from './views/SignupView';


function App() {

  var token = localStorage.getItem("token")
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/surveys' element={<ListSurveysView />} />
        <Route path='/createSurvey' element={token ? <CreateSurveyView /> : <Navigate to="/" replace />} />
        <Route path='/editSurvey' element={<EditSurveyView />} />
        <Route path='/analytics' element={<AnalyticsView />} />
        <Route path='/login' element={token ? <Navigate to="/" replace /> : <LoginView />} />
        <Route path='/signup' element={<SignupView />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
