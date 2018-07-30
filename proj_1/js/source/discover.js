'use strict';
import Logo from './components/Logo';
import Button from './components/Button';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div style={{padding: '20px'}}>
        <h1>Component discoverer</h1>
        <h2>Logo</h2>
        <div style={{display: 'inline-block', background: 'purple'}}>
            <Logo/>
        </div>
        <h2>Buttons</h2>
        <div>Button with onClick: <Button onClick={() => alert('ouch')}>Click me</Button></div>
        <div>A link: <Button href="http://reactjs.com">Follow me</Button></div>
        <div>Custom class name: <Button className="custom">I do nothing</Button></div>
        {/* 可以在此放置更多的组件示例 */}
    </div>,
    document.getElementById('app')
);