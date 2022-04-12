import React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {NavLink} from "react-router-dom";

import styles from './Header.module.css';
import axios from "axios";

const Header = () => {
    const email = 'tobias.funke@reqres.in',
        password = 'passa';

    const menuItems = [
        {id: 1, path: "/", menuText: "Home"},
        {id: 2, path: "/profile", menuText: "Profile"}
    ];

    const login = () => {
        axios.post('https://reqres.in/api/login', {email, password}).then(response => {

            })
    }
    const register = () => {
        axios.post('https://reqres.in/api/register', {email, password}).then(response => {

            })
    }

    const menuItemsEl = menuItems.map(m => <MenuItem path={m.path} menuText={m.menuText} key={m.id}/>);

    return (
        <header className={styles.header}>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                <div>
                    <NavLink className={styles.logo} to="/">Cool.Community</NavLink>
                </div>
                <ul className={styles.menuList}>
                    {menuItemsEl}
                </ul>
                <div>
                    <NavLink to={"/login"}>Login  </NavLink>
                    <NavLink to={"/register"}>Register</NavLink>
                </div>
                <Stack spacing={2} direction="row">
                    <Button onClick={login} variant="outlined">Login</Button>
                    <Button onClick={register} variant="contained">Registration</Button>
                </Stack>
            </Box>
        </header>
    );
}

const MenuItem = (props) => {
    return (

        <li className={styles.item}>
            <NavLink className={styles.itemLink + ' item-link'} to={props.path}>
                <div className={styles.itemText}>{props.menuText}</div>
            </NavLink>
        </li>


    )
}

export default Header;
