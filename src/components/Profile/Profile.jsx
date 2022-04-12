import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {compose} from "redux";
import {useParams} from "react-router";
import Preloader from "../common/Preloader";
import styles from "./Profile.module.css";


class Profile extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) userId = 1;
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.profileData) {
            return <Preloader/>
        }
        const user = this.props.profileData;
        return <div>
            <div className={styles.userItem} key={user.id}>
                <div className={styles.userImg}><img src={user.avatar} alt=""/></div>
                <h1>{user.first_name} {user.last_name}</h1>
                <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
    }
}
const withParams = (Component) => props => <Component {...props} params={useParams()}/>;

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withParams)(Profile);