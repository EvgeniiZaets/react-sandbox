import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.querySelector('.app'));
root.render(
    <div>
        <div>Hello, world</div>
        <UserCard name="John" text="Hi, there!"/>
    </div>
);

function UserCard(props) {
    return <div className="card">
        User Card
        <div>{props.name} {props.text}</div>
    </div>
}