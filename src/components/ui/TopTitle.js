import {
    Navbar,
    NavbarBrand
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cryptosChangePageAction } from '../../store/reducers/cryptosReducer';
import { useNavigate } from 'react-router-dom';

import styles from './TopTitle.module.css';

const TopTitle = ({ text }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <Navbar>
            <NavbarBrand className="mx-auto">
                <span className={styles.textStyle} onClick={() => {
                    dispatch(cryptosChangePageAction(1));
                    navigate("");
                }}>{text}</span>
            </NavbarBrand>
        </Navbar>
    )
}

export default TopTitle;