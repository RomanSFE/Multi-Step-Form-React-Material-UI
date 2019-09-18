import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success'

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        country: '',
        bio: ''
    }
// Next step method
nextStep = () => {
    const { step } = this.state
    this.setState({
        step: step + 1
    })
}
// Previous step method
prevStep = () => {
    const { step } = this.state
    this.setState({
        step: step - 1
    })
}
// Change handle methot for change input
changeHandler = input => e => {
    this.setState({[input]: e.target.value})
}
    render() {
        const { step } = this.state
        const { firstName, lastName, email, city, country, bio } = this.state
        const values = { firstName, lastName, email, city, country, bio }
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep = {this.nextStep}
                        changeHandler = {this.changeHandler}
                        values = {values}
                    />
                );
            case 2:
                    return (
                        <FormPersonalDetails 
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            changeHandler = {this.changeHandler}
                            values = {values}
                        />
                    );
            case 3:
                return (
                    <Confirm 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    />
                );
                     
            case 4:
                return <Success />;
                    
        }
    }
}

export default UserForm
