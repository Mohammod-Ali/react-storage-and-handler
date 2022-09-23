import React from 'react';
import { add } from '../../utilities/calculate';
;

const Cosmetics = () => {
    const first = 44;
    const second = 55;
    const total = add(first, second)
    return (
        <div>
            <h1>Welcome t my cosmetics store</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;