import {
    Navbar,
    NavbarBrand
} from 'react-bootstrap';

import styles from './TopTitle.module.css';

const TopTitle = ({ text, onClick, ...props }) => (
    <Navbar {...props}>
        <NavbarBrand className="mx-auto">
            <div className={styles.textStyle} onClick={onClick}>{text}</div>
        </NavbarBrand>
    </Navbar>
)

export default TopTitle;