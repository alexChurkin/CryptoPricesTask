import {
    Navbar,
    NavbarBrand
} from 'react-bootstrap';

import styles from './TopTitle.module.css';

const TopTitle = ({ text }) => (
    <Navbar>
        <NavbarBrand className="mx-auto">
            <span className={styles.textStyle}>{text}</span>
        </NavbarBrand>
    </Navbar>
)

export default TopTitle;