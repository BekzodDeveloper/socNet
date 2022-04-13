import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {useNavigate} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    return (
        <form className={styles.formBox} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="Email">Email<span>* </span></label>
                <Field name="email" validate={required} component={Input} type="email" placeholder="Email"/>

            </div>
            <div>
                <label htmlFor="Password">Password<span>* </span></label>
                <Field name="password" validate={required} component={Input} type="password"
                       placeholder="Password"/>

            </div>


            <button className={styles.loginBtn} type="submit">Sign In</button>
        </form>

    );
}

const Login = (props) => {
    const login = (formData) => {
        props.login(formData.email, formData.password)
    }

    const navigate = useNavigate();
    React.useEffect(() => {
        if (props.isAuth) {
            navigate('/profile');
        }
    });

    return (
        <div className={styles.formSection}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={login}/>
        </div>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);