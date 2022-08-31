import {
    Container,
    Row, Col,
} from 'react-bootstrap';

import styles from './MasterView.module.css';

const MasterView = () => (
    <Container className={`${styles.text} px-3 py-3`}>
        Master view
    </Container>
)

export default MasterView;