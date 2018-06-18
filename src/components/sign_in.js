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



    render(){
        return (
            <form>
                <div>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text"/>
                </div>
                <button>Sign In </button>
            </form>
        )
    
    }
}

export default SignIn;