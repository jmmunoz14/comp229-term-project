const SurveyElement = ({ surveyTitle, id }) => {

    let takeSurvey = () => {
        alert(`the id is: ${id}`)
    }

    return (
        <div key={id}>
            <table>
                <tbody>
                    <tr>
                        <td align="right"><button
                            className="btn"
                            onClick={takeSurvey}
                        > Take </button></td>
                        <td>{surveyTitle}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SurveyElement;
