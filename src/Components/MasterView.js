import {
    Container,
    Row, Col,
} from 'react-bootstrap';

import SearchBar from './SearchBar';

import styles from './MasterView.module.css';

const MasterView = () => (
    <Container className={`${styles.text} ${styles.masterViewContainer} px-0 py-3`}>
        <SearchBar/>
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" data-toggle="list">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" data-toggle="list">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" data-toggle="list">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
        </div>
    </Container>
)

export default MasterView;