import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formsControls + " " + (hasError ? styles.error : "")}>
        {hasError && <div className={styles.errorText}>{meta.error}</div>}
        {props.children}
    </div>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}
