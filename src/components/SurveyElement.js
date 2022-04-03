import { useNavigate } from 'react-router-dom';


const SurveyElement = ({ surveyTitle, id, surveyType }) => {
    //hooks
    const navigate = useNavigate();

    let takeSurvey = () => {
        navigate('/surveys/' + id)
    }

    //redirect → /editSurvey with { state: { surveyTitle, id, surveyType } }
    let editSurvey = () => {
        navigate('/editSurvey', { state: { surveyTitle, id, surveyType } })
    }

    let addQuestions = () => {
        navigate('/addQuestions', { state: { surveyTitle, id, surveyType } })
    }


    return (
        <div key={id}>
            <table>
                <tbody>
                    <tr>
                        <td align="right">
                            <button
                                className="btn"
                                onClick={takeSurvey}
                            > Take </button>
                        </td>

                        <td align="right">
                            <button
                                className="btn"
                                onClick={editSurvey}
                            >Edit</button>
                        </td>

                        <td align="right">
                            <button
                                className="btn"
                                onClick={addQuestions}
                            >Add</button>
                        </td>

                        <td>{surveyTitle}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SurveyElement;
