import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClassNameProvider from './Context/ClassNameProvider';
import NoteItemProvider from './Context/NoteItemProvider';
import DataProvider from './Context/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider>
    <NoteItemProvider>
    <ClassNameProvider>
    <App/>
    </ClassNameProvider>
    </NoteItemProvider>
    </DataProvider>
);

