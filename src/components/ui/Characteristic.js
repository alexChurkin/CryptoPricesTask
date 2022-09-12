import styles from './Characteristic.module.css';

const Characteristic = ({ name, spacesCount, value, isGood = null }) => {

    let spaces = [];

    for (let i = 0; i < spacesCount; i++)
        spaces.push(<>&nbsp;</>);

    let color;

    if (isGood === null) color = null;
    else if (isGood) color = styles.green;
    else color = styles.red;

    return (
        <>
            <span className={`text-start mb-2`}><span className={styles.clrPrimary}>➤ </span>
                {name}:{spaces}
                <span className={`text-nowrap ${(color !== null) ? color : ''}`}>
                    {value}
                </span>
            </span>
        </>
    );
}

export default Characteristic;