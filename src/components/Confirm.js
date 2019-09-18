import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, email, city, country, bio } } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Details"/>
                    <List>
                        <ListItem
                            primaryText= "First Name"
                            secondaryText= { firstName }
                        />
                        <ListItem
                            primaryText= "Last Name"
                            secondaryText= { lastName }
                        />
                        <ListItem
                            primaryText= "Enter Email"
                            secondaryText= { email }
                        />
                        <ListItem
                            primaryText= "Enter City"
                            secondaryText= { city }
                        />
                        <ListItem
                            primaryText= "Enter Country"
                            secondaryText= { country }
                        />
                        <ListItem
                            primaryText= "Enter Bio"
                            secondaryText= { bio }
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label = "Confirm & Continue"
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

export default Confirm
