import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useState } from 'react';

const CustomInput = ({isLoading, onSearch, hints,...props}) => {

    const [selected, setSelected] = useState([]);

    console.log("redraw!");
    console.log("hints:");
    console.log(hints);

    return (
        <AsyncTypeahead
            id="asyncSearchCoins"
            className={`customInput mt-3 mb-3`}
            isLoading={isLoading}
            onSearch={onSearch}
            options={hints}
            useCache
            {...props}
        />
    )
}

export default CustomInput;