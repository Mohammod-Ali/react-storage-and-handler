import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 5;
    const second = 5;
    const result = multiply(first, second)

    const total = add(first, second)
    return (
        <div>
            <h3>This is shoes Compo</h3>
            <p>Result: {result}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Shoes;