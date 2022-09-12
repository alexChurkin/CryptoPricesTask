import {
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap';

import styles from './CurrencySwitch.module.css';

const CurrencySwitch = ({defaultValue, onChange, ...props}) => (
    <ToggleButtonGroup
        type="radio"
        exclusive="true"
        name="currency-switch"
        defaultValue={defaultValue}
        onChange={onChange}
        {...props}>

        <ToggleButton id="btn-rub" variant="outline-primary" size="lg"
            className={styles.navButton} value='rub'>
            <span className={styles.navButtonText}>₽</span>
        </ToggleButton>

        <ToggleButton id="btn-usd" variant="outline-primary" size="lg"
            className={styles.navButton} value='usd'>
            <span className={styles.navButtonText}>$</span>
        </ToggleButton>

        <ToggleButton id="btn-eur" variant="outline-primary" size="lg"
            className={styles.navButton} value='eur'>
            <span className={styles.navButtonText}>€</span>
        </ToggleButton>

        <ToggleButton id="btn-cny" variant="outline-primary" size="lg"
            className={styles.navButton} value='cny'>
            <span className={styles.navButtonText}>Ұ</span>
        </ToggleButton>

        <ToggleButton id="btn-gbp" variant="outline-primary" size="lg"
            className={styles.navButton} value='gbp'>
            <span className={styles.navButtonText}>£</span>
        </ToggleButton>
    </ToggleButtonGroup>
)

export default CurrencySwitch;