import React from 'react';

function SimplePage(props) {
    const text = props.page ? props.page.text : "";
    return(
        <div className="container page">
            {text}
        </div>
    );
}

export default SimplePage;