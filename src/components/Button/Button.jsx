import { Button } from 'reactstrap';
const Buttons = (props) => {
    return (
        <Button color={props.color} onClick={props.clickHandler}>{props.text}</Button>
    );
};

export default Buttons;