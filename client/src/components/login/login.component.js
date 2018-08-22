
import React from 'react';
import LoginForm from '../../forms/login.form';
export default class LoginComponent extends React.Component {

    render(){
        return(
            <div>
                <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }

    handleSubmit(data){
        this.props.dispatcher.login(data);
    }

}