const CreateSurvey = () => {

    return (
        <form className="add-form">
            <div className="task">
                <div className="radio">
                    <div className="radio-button">
                        <label>
                            <input type="radio" value="ad" checked={false} />
                            Agree / Disagree
                        </label>
                    </div>
                    <div className="radio-button">
                        <label>
                            <input type="radio" value="mc" checked={false} />
                            Multiple Choice
                        </label>
                    </div>
                </div>

            </div>
        </form>

    );
}

export default CreateSurvey;
