import React from "react";
import {connect} from "react-redux";
import {getUsers} from "../../redux/usersReducer";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";


class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <div>
                <div className={styles.offer}>
                    <h1>Welcome to Cool.Community!</h1>
                    <h2 className={styles.offerSubTitle}>There are many regular users.</h2>
                    <p className={styles.offerSubTitle}>JOIN US!</p>
                </div>
                <div className={styles.usersList}>
                    {this.props.users.map(user =>
                        <div className={styles.userItem} key={user.id}>
                            <div className={styles.userImg}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.avatar} alt=""/>
                                </NavLink>
                            </div>
                            <h2 >{user.first_name}</h2>
                            <NavLink className={styles.navLink} to={`/profile/${user.id}`}>View profile</NavLink>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

export default connect(mapStateToProps, {getUsers})(Users);