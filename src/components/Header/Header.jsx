import React from 'react';
import Box from '@mui/material/Box';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import "./../../styles/active-links.css"
import {connect} from "react-redux";
import {getAuthUserProfile} from "../../redux/authReducer";

class Header extends React.Component {
    componentDidMount() {

    }


    render() {
        const authUserData = this.props.auth.authUserData;
        const authorizedUserId = authUserData.userId;

        return (
            <header className={styles.header}>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                    <div>
                        <NavLink className={styles.logo} to="/">Cool.Community</NavLink>
                    </div>
                    <ul className={styles.menuList}>
                        <MenuItems isAuth={this.props.auth.isAuth}/>
                    </ul>
                    <div> {authorizedUserId && <div className={styles.profileInfo}>
                        <p className={styles.userLogin}>{authUserData.first_name} {authUserData.last_name}</p>
                        <img className={styles.userImg} src={authUserData.avatar} alt="avatar"/>
                    </div>}
                        {!authUserData.userId && <div className={styles.account}>
                            <NavLink className={styles.loginLink} to={"/login"}>Login </NavLink>
                            <NavLink className={styles.regLink} to={"/register"}>Registration</NavLink>
                        </div>
                        }</div>
                </Box>
            </header>
        );
    }
}

export const MenuItems = (props) => {
    return (<>
            <li>
                <NavLink className={styles.itemLink + ' item-link'} to='/'>
                    <div className={styles.itemText}>Home</div>
                </NavLink>
            </li>
            {props.isAuth &&
            <li>
                <NavLink className={styles.itemLink + ' item-link'} to='/profile'>
                    <div className={styles.itemText}>Profile</div>
                </NavLink>
            </li>}
        </>


    )
}
const mapStateToProps = (state) => ({
    auth: state.auth,
})
export default connect(mapStateToProps, {getAuthUserProfile})(Header);
