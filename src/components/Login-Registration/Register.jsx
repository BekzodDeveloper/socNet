import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import { register} from "../../redux/authReducer";
import styles from "../common/FormsControls/FormsControls.module.css";

const RegisterForm = (props) => {
    return (
        <form className={styles.formBox} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="Email">Email<span>* </span></label>
                <Field name="email" validate={required} component={Input} type="email" placeholder="Email"/>
            </div>
            <div>
                <label htmlFor="Password">Password<span>* </span></label>
                <Field name="password" validate={required} component={Input} type="password" placeholder="Password"/>
            </div>


            <button className={styles.loginBtn} type="submit">Sign Up</button>
        </form>

    );
}

const Register = (props) => {
    const register = (formData) => {
        props.register(formData.email, formData.password);
    }

    return (
        <div className={styles.formSection}>
            <h1>Registration</h1>
            <RegisterReduxForm onSubmit={register}/>
            <div>{props.isRegistered &&
            <div className={styles.regSuccess}>
                Congratulations! <br/>
                Now you are part of our Cool.Community!
            </div>}
            </div>
        </div>
    );
}

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm);

const mapStateToProps = (state) => ({
    isRegistered: state.auth.isRegistered
})
export default connect(mapStateToProps, {register})(Register);