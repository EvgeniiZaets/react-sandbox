import React from 'react';

export default function({ name, text }) {
    return (
        <>
            <hr/>
            <div className="card">
                User Card
                <div>{ name } { text }</div>
            </div>
        </>
    );
}