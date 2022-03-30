const Dropdown = (props) => {
    const servicetype = props.serviceChangeHandler;
    return (
        <select onChange={servicetype}>
            <option value="">Select an option</option>
            <option value="20">Excellent</option>
            <option value="10">Good</option>
            <option value="5">Average</option>
        </select>
    )
}

export default Dropdown;