import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  //attributes
 
  //eventHandlers
  function onClick() {
    console.log('here')
  }



  //RENDER
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Body onClick={onClick} />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
