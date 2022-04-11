import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <div className="app-body">
            <Routes>
                <Route index element={<Page title="Home"/>}/>
                <Route path='/' element={<Page title="Home"/>}/>

                <Route exact path='/profile'
                       element={<Page title="Profile"/>}>
                </Route>
                <Route path='/login' element={<Page title="Login"/>}/>
            </Routes>
        </div>
    </div>
  );
}
const Page = (props) => {
    return (<h1>{props.title}</h1>)
}

export default App;
