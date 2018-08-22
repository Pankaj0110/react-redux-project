

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SignupForm from '../../forms/signup.form'; 

class Signup extends React.Component{
    constuctor(){
    } 
    render(){
        return(
            <div id="signup-form">
                <SignupForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }

    handleSubmit(data){
        this.props.dispatcher.signup(data);
    }
}


export default Signup;
           

