import styles from './LoadSpinner.module.css';

const LoadSpinner = (props) => (
    <div className={styles.spinnerBlock}>
        <div>
            <div
                className={`spinner-border text-success ${styles.bigSpinner}`}
                role="status" {...props} />
        </div>
    </div>
);

export default LoadSpinner;