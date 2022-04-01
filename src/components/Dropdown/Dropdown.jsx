const Dropdown = (props) => {
    const servicetype = props.serviceChangeHandler;
    return (
        <select className={props.class} onChange={servicetype} style={props.style}>
            <option value="">Select an option</option>
            <option value="20">Excellent</option>
            <option value="10">Good</option>
            <option value="5">Average</option>
        </select>
    )
}

export default Dropdown;