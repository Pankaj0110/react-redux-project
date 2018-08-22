
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignupForm = props => {
    console.log(props)
    const { handleSubmit } = props;
    
        return(
            <div className="container single-form-container">
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-5">
                            <h4 className="title-text center">Register</h4>
                    </div>
                </div>
           
            <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">User Name</label>
                        <div className="col-sm-8">
                            <Field id="name"  component="input" name="name" className="form-control"  type="text" placeholder="enter username"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-8">
                            <Field id="mail"  component="input" name="mail" className="form-control" type="email" placeholder="enter email id"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Phone Number</label>
                        <div className="col-sm-8">
                            <Field id="number"  component="input" name="number" className="form-control" type="tel" placeholder="enter phone number"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Password</label>
                        <div className="col-sm-8">
                            <Field id="pwd"  component="input" name="pwd" className="form-control" type="password" placeholder="enter password for account"/>
                        </div>
                    </div>  
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Confirm Password</label>
                        <div className="col-sm-8">
                            <Field id="cpwd"   component="input" name="cpwd" className="form-control"  type="password" placeholder="confirm password"/>
                        </div>
                    </div>
    
                    <div className="form-group">
                        <div className="col-sm-2 col-sm-offset-5">
                                <button className="form-control btn btn-primary center" type="submit">Register</button> 
                        </div>
                    </div>
            </form>
        </div>)
}
    

export default reduxForm({
    form: 'signup' // a unique identifier for this form
})(SignupForm)