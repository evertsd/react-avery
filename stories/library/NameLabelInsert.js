import React from 'react';

const NameInsert = ({ name }) => {
    console.info('LabelInsert.redraw'); // eslint-disable-line
    let i = 0;
    while (i < 11000000) {
        i += 1;
    }
    return (
        <div className="flex tc h-100 items-center ph3">
            <span style={{ margin: '0 auto', fontFamily: `'Gochi Hand', cursive` }}>{name}</span>
        </div>
    );
};

export default NameInsert;
