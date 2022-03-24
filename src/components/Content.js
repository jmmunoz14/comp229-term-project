import CreateSurvey from "./CreateSurvey";
import SurveyList from "./SurveyList";

const Content = ({ }) => {


    return (

        <div className="container ">

            <div className="flexbox-container-btn-row">
                <button className="btn"  > Create</button>
                <button className="btn"> Surveys</button>
                <button className="btn"> Analytics</button>
            </div>


            {/*SHOW CREATE SURVEY FORM*/}
            <CreateSurvey />

            {/*LIST ALL SURVEYS*/}
            <SurveyList />


        </div>
    );
}

export default Content;