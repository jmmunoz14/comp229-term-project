import { useNavigate } from 'react-router-dom'


const SurveyElement = ({ surveyTitle, id, surveyType }) => {
    const navigate = useNavigate();
    let takeSurvey = () => { navigate('/surveys/' + id) }
    let editSurvey = () => { navigate('/editSurvey', { state: { surveyTitle, id, surveyType } }) }
    let addQuestions = () => { navigate('/addQuestions', { state: { surveyTitle, id, surveyType } }) }

    return (
        <div key={id}>
            <table>
                <tbody>
                    <tr>
                        <td><button className="btn" onClick={takeSurvey}> Take </button></td>
                        <td><button className="btn" onClick={editSurvey}>Edit</button></td>
                        <td><button className="btn-add" onClick={addQuestions}>Add</button></td>
                        <td style={{ justifyContent: 'flex-end' }}><button className="btn-delete">Delete</button></td>

                        {surveyType.agreeDisagree &&
                            <td>{surveyTitle} - Agree or Disagree</td>
                        }

                        {surveyType.multipleChoice &&
                            <td>{surveyTitle} - Multiple Choice</td>
                        }

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SurveyElement;
