import styles from './Form.module.css';
import { useState } from "react";
import Buttons from "../Button/Button";
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

    const [tip, setTip] = useState([]);
    const btnClick = () => {
        let tipT = [];
        const tipAmount = bill * service / 100;
        tipT.push(tipAmount);
        console.log(tipT);
        setTip(tipT);
        getBill('');
        setService('');
        setCustomer('');
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
                <div className='container' style={{ marginTop: '50px', border: '1px solid black', padding: '10px' }}>
                    <div className="row align-items-start">
                        <div className='col' style={{ textAlign: "center" }}>
                            <Label name="How was the service." />
                            <br />
                            <Dropdown serviceChangeHandler={serviceChange} />
                        </div>
                        <div className='col' style={{ textAlign: "center" }}>
                            <Label name="Enter customer Name" />
                            <br />
                            <Input type="text"
                                InputchangeHandler={customerHandler}
                                value={customer} />
                        </div>
                        <div className='col' style={{ textAlign: "center", justifyContent: 'center', marginTop: '10px' }}>
                            <Buttons text="Add Customer" clickHandler={btnClick} />
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <CustomerList data={tip} name={customer} />
                </div>
            </div>
        </>
    );
};

export default Form;