import styles from './TotalData.module.css';
const TotalData = (props) => {
    return (
        <div className={styles.listAmountCustomers}>
            <li>{props.amount}</li>
            <li>{props.cust}</li>
        </div>
    );
};

export default TotalData;