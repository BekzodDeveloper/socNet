import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router";
import {getUsers} from "./redux/usersReducer";
import {connect} from "react-redux";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";

class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <div className="app-body">
                    <div className="container">
                        <Routes>
                            <Route index element={<Users/>}/>

                            <Route exact path='/profile'
                                   element={<Profile/>}>
                                <Route path=':userId'
                                       element={<Profile/>}/>
                            </Route>

                            <Route path='/login' element={<Page title="Login"/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;


const Page = (props) => {
    return (<h1>{props.title}</h1>)
}