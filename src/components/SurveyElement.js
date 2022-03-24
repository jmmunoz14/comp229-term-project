const SurveyElement = ( { title, id} ) => {


    let takeSurvey = () => { alert(`the id is: ${id}`)}



    return (
        <div key={id} >
            <p >{title}</p>    
            <button onClick={takeSurvey} > Take </button>         
        </div>
    );
}

export default SurveyElement;
