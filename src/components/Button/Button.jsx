import { Button } from 'reactstrap';
const Buttons = (props) => {
    return (
        // <button onClick={props.clickHandler}>{props.text}</button>
        <Button color={props.color} onClick={props.clickHandler}>{props.text}</Button>
    );
};

export default Buttons;