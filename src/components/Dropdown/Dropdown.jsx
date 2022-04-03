const Dropdown = (props) => {
    const servicetype = props.value;
    return (
        <select className="form-select" onChange={props.serviceChangeHandler} style={props.style} value={servicetype}>
            <option value="-1" >Select an option</option>
            <option value='20' >Excellent</option>
            <option value='10' >Good</option>
            <option value='5'>Average</option>
        </select>
    )
}

export default Dropdown;