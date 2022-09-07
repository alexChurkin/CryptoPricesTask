import Pagination from 'react-bootstrap/Pagination';

import styles from './PageSwitch.module.css';

const PageSwitch = () => (
    <Pagination className={`${styles.primaryColored} justify-content-center my-3`}>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
    </Pagination>
);

export default PageSwitch;