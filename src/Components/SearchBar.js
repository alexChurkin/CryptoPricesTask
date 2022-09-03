import {
    Container,
    Row, Col,
} from 'react-bootstrap';

import styles from './SearchBar.module.css';

const SearchBar = () => (
    <div className="pb-3">
        <input type="text" className={`form-control ${styles.formControl}`} placeholder="Поиск криптовалют..." />
    </div>
)

export default SearchBar;