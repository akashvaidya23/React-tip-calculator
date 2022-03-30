const Input = (props) => {
    return (
        <input type={props.type} onChange={props.InputchangeHandler} value={props.value} className={props.className} style={props.styles} />
    );
};

export default Input;