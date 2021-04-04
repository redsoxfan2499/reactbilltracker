import React from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './components/AddCategory';
import AddBill from './components/AddBill';
import NavBar from './components/NavBar';
import BillsTable from './components/BillsTable';
import Chart from './components/Chart';

import "./styles.css";

function App() {
    return (
        <div className="App">
            <h1>Ney Now</h1>
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);