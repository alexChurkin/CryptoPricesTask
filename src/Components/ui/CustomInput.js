import styles from './CustomInput.module.css';

const CustomInput = (props) => {
    return (
        <input
            className={`form-control ${styles.customInput} mt-3 mb-3`}
            {...props}
        />
    )
}

export default CustomInput;