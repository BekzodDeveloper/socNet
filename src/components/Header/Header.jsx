import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from './Header.module.css';

const Header = () => {
    const [value, setValue] = React.useState('Home');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <header className={styles.header}>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor='primary'
                    indicatorColor="primary"
                    aria-label="Menu"
                >
                    <Tab value="Home" label="Home"/>
                    <Tab value="Profile" label="Profile"/>
                </Tabs>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined">Login</Button>
                    <Button variant="contained">Register</Button>
                </Stack>
            </Box>
        </header>
    );
}
export default Header;
