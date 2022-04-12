import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
);