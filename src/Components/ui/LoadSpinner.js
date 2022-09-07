import styles from './LoadSpinner.module.css';

const LoadSpinner = (props) => (
    <div className={styles.spinnerBlock}>
        <div
            className={`spinner-border text-success ${styles.bigSpinner}`}
            role="status" {...props} />
    </div>

);

export default LoadSpinner;