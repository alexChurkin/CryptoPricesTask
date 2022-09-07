import styles from './LoadSpinner.module.css';

const LoadSpinner = (props) => (
    <div
        className={`spinner-border text-success ${styles.bigSpinner}`}
        role="status" {...props}/>
);

export default LoadSpinner;