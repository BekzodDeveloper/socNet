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
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="Email">Email: </label>
                <Field name="email" validate={required} component={Input} type="text" placeholder="Email"/>
            </div>
            <div>
                <label htmlFor="Password">Password: </label>
                <Field name="password" validate={required} component={Input} type="password" placeholder="Password"/>
            </div>
            {props.error &&
            <div className={styles.formSummaryError}>
                {props.error}
            </div>}

            <button className={styles.loginBtn} type="submit">Login</button>
        </form>

    );
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password)
    }

    const navigate = useNavigate();
    React.useEffect(() => {
        if (props.isAuth) {
            navigate('/profile');
        }
    });

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

// HOC reduxForm for LoginForm
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);