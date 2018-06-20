import React, {Component} from 'react';
//import { format } from 'path';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleChange(e){
        const {name, value} = e.target;
        const {form} = this.state;
        this.setState({form: {...form, [name]: value}})
    }
    handleFormSubmit(e){
        e.preventDefault();
        console.log(this.state.form)

    }

    render(){
        const {email, password} = this.state.form;
        return (
            <form onSubmit={(e)=>{this.handleFormSubmit}}>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} name='email' onChange={(e)=>this.handleChange(e)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" value={password} name='password' onChange={(e)=>this.handleChange(e)}/>
                </div>
                <button>Sign In </button>
            </form>
        )
    
    }
}

export default SignIn;