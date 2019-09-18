import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, changeHandler } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details"/>
                    <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange= {changeHandler('city')}
                        defaultValue = {values.city}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Country"
                        floatingLabelText="Country"
                        onChange= {changeHandler('country')}
                        defaultValue = {values.country}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Bio"
                        floatingLabelText="Enter Bio"
                        onChange= {changeHandler('bio')}
                        defaultValue = {values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label = "Continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />
                    <RaisedButton
                        label = "Previous"
                        primary = {false}
                        onClick = {this.previous}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 12
    }
}

export default FormPersonalDetails
