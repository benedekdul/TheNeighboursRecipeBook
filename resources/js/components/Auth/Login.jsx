import React, { Component } from "react";
import {
    Box, 
    Button,
    Container,
    TextField,
    CssBaseline,
    Typography
} from "@mui/material";

import user from "./User";

/**
 * This class represents the log in component.
 */

class Login extends Component{
    /**
     * Gets called when the user submits the Log In form.
     * 
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
    
        const loginCredentials = {
            email: formData.get('email'),
            password: formData.get('password')
        }
    
        window.axios.post('/login', loginCredentials).then((response) => {
            console.log('Logged successfully!')
            user.authenticated(response.data);
            this.props.actionHandler("init");
        })
    }

    render(){

        return (
            <Container maxWidth={"xs"}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Typography component={"h1"} variant={"h5"}>
                        Login
                    </Typography>
                    <Box component={"form"} onSubmit={this.handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            fullWidth
                            variant={"outlined"}
                            type={"submit"}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Button
                            fullWidth
                            onClick={()=>{this.props.actionHandler("register")}}
                            variant={"outlined"}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create an account
                        </Button>
                    </Box>
                </Box>
            </Container>
        )
    }
}




export default Login