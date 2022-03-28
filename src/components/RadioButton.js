
const RadioButton = ({ label, value, onChange }) => {


    return (
        <div>
            <label><input type="radio" checked={value} onChange={onChange} />{label}</label>
        </div>
    );
}

export default RadioButton;
