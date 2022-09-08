import { Button } from 'react-bootstrap';
import styles from './RetrySuggestion.module.css';

const RetrySuggestion = ({ onClickRetry, props }) => (
    <div className={styles.sugBlock} {...props}>
        <div className={`display-5 mb-4 ${styles.sugText}`}>
            Не удалось загрузить валюты.<br />Проверьте Ваше подключение к интернету и попробуйте снова.
        </div>
        <Button
            variant="outline-primary"
            className={styles.retryButton}
            onClick={onClickRetry}>Попробовать снова
        </Button>
    </div>
);

export default RetrySuggestion;