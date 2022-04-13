import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import Register from "./components/Login-Registration/Register";
import Login from "./components/Login-Registration/Login";

class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <div className="app-body">
                    <div className="container">
                        <Routes>
                            <Route index element={<Users/>}/>
                            <Route path='/' element={<Users/>}/>

                            <Route exact path='/profile'
                                   element={<Profile/>}>
                                <Route path=':userId'
                                       element={<Profile/>}/>
                            </Route>

                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
