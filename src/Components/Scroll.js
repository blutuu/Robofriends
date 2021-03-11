import React from 'react';

const Scroll = (props) => {
    return (
        <div className="ba bw2" style={{ height: '500px', overflow: 'scroll' }}> 
            {props.children}
        </div>
    );
}

export default Scroll;