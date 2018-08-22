import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <div className="container single-form-container">
        <div className="row">
            <div className="col-sm-2 col-sm-offset-5">
                    <h4 className="title-text center">Login</h4>
            </div>
        </div>
   
    <form className="form-horizontal" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="col-sm-3 control-label">User Name</label>
                <div className="col-sm-8">
                    <Field className="form-control" type="text" component="input" name='name' id="name" placeholder="enter username"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-3 control-label">Password</label>
                <div className="col-sm-8">
                    <Field className="form-control" type="password" component="input" name="pwd" id="password" placeholder="password"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-2 col-sm-offset-5">
                        <button className="form-control btn btn-primary center" type="submit">Login</button> 
                </div>
            </div>
    </form>        
    </div>
    )
}

export default reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm)