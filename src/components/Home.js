import { useNavigate } from 'react-router-dom'

const Home = ({}) => {
  // window.location.href="/createSurvey"
  //Hooks => useNavigate
  const navigate = useNavigate()

  return (
    <div className="container ">
      <div className="flexbox-container-btn-row">
        <div className="flexbox-container-img-btn">
          <img className="img" src={require('./create.jpg')} />
          <button
            className="btn"
            onClick={() => {
              navigate('/createSurvey') // App.js → path='/createSurvey'
            }}
          >
            {' '}
            Create
          </button>
        </div>

        <div className="flexbox-container-img-btn">
          <img className="img" src={require('./list.jpg')} />
          <button
            className="btn"
            onClick={() => {
              navigate('/surveys')
            }}
          >
            {' '}
            Survey
          </button>
        </div>

        <div className="flexbox-container-img-btn">
          <img className="img" src={require('./graph.png')} />
          <button
            className="btn"
            onClick={() => {
              navigate('/analytics')
            }}
          >
            {' '}
            Analytics
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
