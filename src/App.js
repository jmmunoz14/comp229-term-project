import './App.css';
import Header from './components/Header';
import Content from './components/Content'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  //attributes





  //RENDER
  return (
    <Router>
      <Header />

      <Routes>

        <Route
          path='/'
          element={<Content />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
