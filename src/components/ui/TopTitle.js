import {
    Navbar,
    NavbarBrand
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import styles from './TopTitle.module.css';

const TopTitle = ({ text }) => {
    const navigate = useNavigate();

    return (
        <Navbar>
            <NavbarBrand className="mx-auto">
                <span className={styles.textStyle} onClick={() => { navigate(""); }}>{text}</span>
            </NavbarBrand>
        </Navbar>
    )
}

export default TopTitle;