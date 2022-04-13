import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <span className={styles.formsControls + " " + (hasError ? styles.error : "")}>
        {hasError && <span className={styles.errorText}>{meta.error}</span>}
        <div>{props.children}</div>
    </span>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}
