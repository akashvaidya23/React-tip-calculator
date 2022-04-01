import styles from './Form.module.css';
import { useState } from "react";
import Buttons from "../Button/Button";
import CustomerList from "../CustomerList/CustomerList";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Label from "../Label/Label";
import TotalData from '../TotalData/TotalData';

const Form = () => {
    const [bill, getBill] = useState('');
    const billChange = (e) => {
        const billV = e.target.value;
        getBill(billV);
    }

    const services = ['Excellent', 'Good', 'Average'];
    const [service, setService] = useState('');
    const servs = () => {
        setService(services)
    };
    const serviceChange = (e) => {
        const serv = e.target.value;
        setService(serv);
    }

    const [customer, setCustomer] = useState('');
    const customerHandler = (e) => {
        const custom = e.target.value;
        setCustomer(custom);
    }

    const [custName, setCustName] = useState([]);
    const [tip, setTip] = useState([]);

    const [totalAmt, setTotalAmt] = useState('');
    const [totalCustomers, setTotalCustomers] = useState('');
    const btnClick = () => {
        if (bill.trim() && service.trim()) {
            const tipAmount = bill * service / 100;
            const tips = [...tip];
            tips.push(tipAmount);
            setTip(tips);
            const cust = [...custName];
            cust.push(customer);
            setCustName(cust);
            getBill('');
            setService('');
            setCustomer('');
        }
    }

    const totalBtnclick = () => {
        const tipAmount = bill * service / 100;
        const tips = [...tip];
        tips.push(tipAmount);
        const cust = [...custName];
        const tCustomer = cust.length;
        if (tips.length != 0 && cust.length != 0) {
            setTotalCustomers(tCustomer);
            let tAmt = 0;
            for (let i = 0; i < tips.length; i++) {
                tAmt = tAmt + tips[i];
            }
            setTotalAmt(tAmt);
        }
    }

    return (
        <>
            <div style={{ marginBottom: '50px' }}>
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
                <div className='container' style={{ marginTop: '50px', border: '1px solid black', padding: '20px' }}>
                    <div className="row align-items-start">
                        <div className='col' style={{ textAlign: "center" }}>
                            <Label name="How was the service." />
                            <br />
                            <Dropdown class="form-select" servHandler={servs} serviceChangeHandler={serviceChange} style={{ borderColor: 'black' }} />
                        </div>
                        <div className='col' style={{ textAlign: "center" }}>
                            <Label name="Enter customer Name" />
                            <br />
                            <Input type="text" className="form-control" styles={{ borderColor: 'black' }}
                                InputchangeHandler={customerHandler}
                                value={customer} />
                        </div>
                        <div className='col' style={{ textAlign: "center", justifyContent: 'center', marginTop: '10px' }}>
                            <Buttons text="Add Customer" clickHandler={btnClick} color="danger" />
                        </div>
                    </div>
                </div>
                <div className='container' style={{ textAlign: "center", marginTop: '10px', justifyContent: 'center' }}>
                    <CustomerList data={tip} name={custName} />
                </div>
                <div style={{ textAlign: 'center', marginTop: '25px' }}>
                    <Buttons text="Calculate tip and Customer" color="primary" clickHandler={totalBtnclick} />
                </div>
                <div className='container' style={{ border: '1px solid black', textAlign: "center", marginTop: '25px', justifyContent: 'center' }}>
                    <TotalData amount={`The total tip is ${totalAmt}`} cust={`Total no of customers ${totalCustomers}`} />
                </div>
            </div>
        </>
    );
};

export default Form;