import CreateSurvey from "./CreateSurvey";

const Body = ({onClick}) => {
    return (

        <div className="container">
            <button className="btn" onClick={onClick}> Create</button>
            <button className="btn"> Surveys</button>
            <button className="btn"> Analytics</button>

            <CreateSurvey/>
        </div>
    );
}

export default Body;