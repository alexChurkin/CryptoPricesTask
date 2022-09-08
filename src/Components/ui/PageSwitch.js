import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

import styles from './PageSwitch.module.css';

/* PageSwitch for minimum 3 pages */
const PageSwitch = ({ count = 10, currentPage = 1, onPageSelected, ...props }) => {

    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [enabled, setEnabled] = useState([false, false, true, true, true, true, true]);
    const [active, setActive] = useState([true, false, false]);

    const onClickFirst = () => {
        setNumbers([1, 2, 3]);
        setEnabled([false, false, true, true, true, true, true]);
        setActive([true, false, false]);

        //onPageSelected(1);
    }

    const onClickPrev = () => {
        if (active[2] && numbers[2] === count)
            onClick2();
        else
            onClick1();
    }

    const onClick1 = () => {
        //Start reached
        if (numbers[0] === 1) {
            setEnabled([false, false, true, true, true, true, true]);
            setActive([true, false, false]);
        }
        //Moving left (down)
        else {
            setEnabled([true, true, true, true, true, true, true]);
            setNumbers([numbers[0] - 1, numbers[1] - 1, numbers[2] - 1]);
            setActive([false, true, false]);
        }
    }

    const onClick2 = () => {
        setEnabled([true, true, true, true, true, true, true]);
        setActive([false, true, false]);
        //onPageSelected(numbers[1]);
    }

    const onClick3 = () => {
        //End reached
        if (numbers[2] === count) {
            setActive([false, false, true]);
            setEnabled([true, true, true, true, true, false, false]);
        }
        //Moving right (up)
        else {
            setEnabled([true, true, true, true, true, true, true]);
            setNumbers([numbers[0] + 1, numbers[1] + 1, numbers[2] + 1]);
            setActive([false, true, false]);
        }
    }

    const onClickNext = () => {
        if (active[0] && numbers[0] === 1)
            onClick2();
        else
            onClick3();
    }

    const onClickLast = () => {
        setNumbers([count - 2, count - 1, count]);
        setEnabled([true, true, true, true, true, false, false]);
        setActive([false, false, true]);
        //onPageSelected(count);
    }

    return (
        <Pagination className={`${styles.primaryColored} justify-content-center my-3`} {...props}>
            <Pagination.First onClick={onClickFirst} disabled={!enabled[0]} />
            <Pagination.Prev onClick={onClickPrev} disabled={!enabled[1]} />
            <Pagination.Item onClick={onClick1} active={active[0]} disabled={!enabled[2]}>{numbers[0]}</Pagination.Item>
            <Pagination.Item onClick={onClick2} active={active[1]} disabled={!enabled[3]}>{numbers[1]}</Pagination.Item>
            <Pagination.Item onClick={onClick3} active={active[2]} disabled={!enabled[4]}>{numbers[2]}</Pagination.Item>
            <Pagination.Next onClick={onClickNext} disabled={!enabled[5]} />
            <Pagination.Last onClick={onClickLast} disabled={!enabled[6]} />
        </Pagination>
    );
}

export default PageSwitch;