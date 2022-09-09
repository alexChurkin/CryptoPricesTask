import styles from './MsgWithButton.module.css';
import { Button } from 'react-bootstrap';

const MsgWithButton = ({ text, buttonText, onButtonClick, ...props }) => {

    return (
        <div className={styles.wholeBlock} {...props}>
            <div className={`display-5 mb-4 ${styles.messageText}`}>
                {text}<br />
            </div>
            <Button
                variant="outline-primary"
                className={styles.buttonStyle}
                onClick={onButtonClick}>
                {buttonText}
            </Button>
        </div>
    );
}

export default MsgWithButton;