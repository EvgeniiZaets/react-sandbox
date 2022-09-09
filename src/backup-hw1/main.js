import React from 'react';
import ReactDom from 'react-dom/client';

import UserCard from "./UserCard";
import Counter from "./Counter";

const root = ReactDom.createRoot(document.querySelector('.app'));
root.render(
    <div>
        <div>Hello, world</div>
        <UserCard name="John" text="Hi, there!"/>
        <Counter min={2} max={5}/>
    </div>
);