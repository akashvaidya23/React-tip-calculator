import styles from './Form.module.css';
import { useState } from "react";
import Button from "../Button/Button";
import CustomerList from "../CustomerList/CustomerList";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Label from "../Label/Label";

const Form = () => {
    const [bill, getBill] = useState('');
    const billChange = (e) => {
        const billV = e.target.value;
        getBill(billV);
    }

    const [service, setService] = useState('');
    const serviceChange = (e) => {
        const serv = e.target.value;
        setService(serv);
    }

    const [customer, setCustomer] = useState('');
    const customerHandler = (e) => {
        const custom = e.target.value;
        setCustomer(custom);
    }

    const [tip, setTip] = useState('');
    const btnClick = () => {
        const tipAmount = bill * service / 100;
        setTip(tipAmount);
        getBill('');
        setService('');
        setCustomer(customer);
    }

    return (
        <>
            <div>
                <div className={styles.head}>
                    <h3>Tip Calculate</h3>
                </div>
                <div className={styles.amt}>
                    <Label name="Enter your bill amount." className={styles.amount} />
                    <br />
                    <Input type="number" className={styles.inputAmount}
                        InputchangeHandler={billChange}
                        value={bill} />
                </div>
                <div className={styles.matter}>
                    <div>
                        <Label name="How was the service." />
                        <br />
                        <Dropdown serviceChangeHandler={serviceChange} />
                    </div>
                    <div>
                        <Label name="Enter customer Name" />
                        <br />
                        <Input type="text"
                            InputchangeHandler={customerHandler}
                            value={customer} />
                    </div>
                    <div>
                        <Button text="Add" clickHandler={btnClick} />
                    </div>
                </div>
                <div>
                    <CustomerList data={tip} name={customer} />
                </div>
            </div>
        </>
    );
};

export default Form;