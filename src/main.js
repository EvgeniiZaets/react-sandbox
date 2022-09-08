import React from 'react';
import ReactDom from 'react-dom/client';

import UserCard from "./UserCard";

const root = ReactDom.createRoot(document.querySelector('.app'));
root.render(
    <div>
        <div>Hello, world</div>
        <UserCard name="John" text="Hi, there!"/>
    </div>
);