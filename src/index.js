import React from 'react';
import ReactDOM from 'react-dom/client';
import Flexbox from './basic/flexbox';
import DemoUI from "./practice/flex-UI";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Flexbox />*/}
    <DemoUI/>
  </React.StrictMode>
);

