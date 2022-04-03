import styles from './CustomerList.module.css';
const CustomerList = (props) => {
    const tip = props.data;
    const tipAmt = tip.map((amount, index) => {
        return (
            <>
                <li key={index}>
                    Rs. {amount}
                </li>
            </>
        );
    });

    const customers = props.name;
    const customerNames = customers.map((cust, index) => {
        return (
            <>
                <li key={index}>
                    {cust}
                </li>
            </>
        );
    });

    return (
        <div style={{ border: '1px solid black', marginTop: '50px', padding: '10px' }}>
            <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Customers and Tip paid</p>
            <div className={styles.list}>
                <ul>{customerNames}</ul>
                <ul>{tipAmt}</ul>
            </div>
        </div>
    );
};

export default CustomerList;