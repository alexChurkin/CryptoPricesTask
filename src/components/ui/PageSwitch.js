import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';

import styles from './PageSwitch.module.css';

/* PageSwitch for minimum 3 pages */
const PageSwitch = (
    {
        count = 100,
        currentPage = 1,
        onPageSelected,
        visible,
        ...props
    }
) => {
    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [enabled, setEnabled] = useState([false, false, true, true, true, true, true]);
    const [active, setActive] = useState([true, false, false]);

    const onClickFirst = () => {
        const newNumbers = [1, 2, 3];
        setNumbers(newNumbers);
        setEnabled([false, false, true, true, true, true, true]);
        setActive([true, false, false]);

        onPageSelected(1);
    }

    const onClickPrev = () => {
        if (active[2] && numbers[2] === count)
            onClick2();
        else
            onClick1();
    }

    const onClick1 = () => {
        if (active[0]) return;

        //Start reached
        if (numbers[0] === 1) {
            setEnabled([false, false, true, true, true, true, true]);
            setActive([true, false, false]);

            onPageSelected(numbers[0]);
        }
        //Moving left (down)
        else {
            const newNumbers = [numbers[0] - 1, numbers[1] - 1, numbers[2] - 1];
            setNumbers(newNumbers);
            setEnabled([true, true, true, true, true, true, true]);
            setActive([false, true, false]);

            onPageSelected(newNumbers[1]);
        }
    }

    const onClick2 = () => {
        if (active[1]) return;

        setEnabled([true, true, true, true, true, true, true]);
        setActive([false, true, false]);

        onPageSelected(numbers[1]);
    }

    const onClick3 = () => {
        if (active[3]) return;

        //End reached
        if (numbers[2] === count) {
            setEnabled([true, true, true, true, true, false, false]);
            setActive([false, false, true]);

            onPageSelected(numbers[2]);
        }
        //Moving right (up)
        else {
            const newNumbers = [numbers[0] + 1, numbers[1] + 1, numbers[2] + 1];
            setNumbers(newNumbers);
            setEnabled([true, true, true, true, true, true, true]);
            setActive([false, true, false]);

            onPageSelected(newNumbers[1]);
        }
    }

    const onClickNext = () => {
        if (active[0] && numbers[0] === 1)
            onClick2();
        else
            onClick3();
    }

    const onClickLast = () => {
        const newNumbers = [count - 2, count - 1, count];
        setNumbers(newNumbers);
        setEnabled([true, true, true, true, true, false, false]);
        setActive([false, false, true]);

        onPageSelected(count);
    }

    useEffect(() => {
        if (currentPage > 1 && currentPage < count) {
            setNumbers([currentPage - 1, currentPage, currentPage + 1]);
            setEnabled([true, true, true, true, true, true, true]);
            setActive([false, true, false]);
        }
        else if (currentPage === 1) {
            setNumbers([1, 2, 3]);
            setEnabled([false, false, true, true, true, true, true]);
            setActive([true, false, false]);
        }
        else if (currentPage === count) {
            setNumbers([count - 2, count - 1, count]);
            setEnabled([true, true, true, true, true, false, false]);
            setActive([false, false, true]);
        }
    }, [currentPage]);

    return (
        <Pagination
            className={`${styles.primaryColored} ${visible ? '' : 'd-none'} justify-content-center my-3`} {...props}>
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