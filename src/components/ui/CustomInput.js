import { Typeahead } from 'react-bootstrap-typeahead';
import { useState } from 'react';

const CustomInput = (props) => {

    const [selected, setSelected] = useState([]);

    return (

        <Typeahead
            className={`customInput mt-3 mb-3`}
            id="searchCoins"
            options={[
                'John',
                'Miles',
                'Charles',
                'Herbie',
            ]}
            placeholder="Поиск криптовалют..."
            selected={selected}
            onChange={setSelected}
        />
    )
}

export default CustomInput;