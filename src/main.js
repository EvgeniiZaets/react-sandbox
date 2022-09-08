import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.querySelector('.app'));
root.render(
    <div>
        <div>Hello, world</div>
        <UserCard name="John" text="Hi, there!"/>
    </div>
);

function UserCard({ name, text }) {
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