import {
    Navbar,
    NavbarBrand
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cryptosChangePageAction } from '../../store/reducers/coinsReducer';
import { useNavigate } from 'react-router-dom';

import styles from './TopTitle.module.css';

const TopTitle = ({ text, ...props }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <Navbar {...props}>
            <NavbarBrand className="mx-auto">
                <div className={styles.textStyle} onClick={() => {
                    dispatch(cryptosChangePageAction(1));
                    navigate("");
                }}>{text}</div>
            </NavbarBrand>
        </Navbar>
    )
}

export default TopTitle;