import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.randomNumber = Math.round(Math.random()*100)
    }

    handleInputChange(e){
        
        const{name, value} = e.target;
        const{form} = this.state;


        this.setState({
            form: {
                ...form,
                [name]: value
            }
            /*
            same as:
            form:{
               email: form.email,
               password: form.password
               password: 'a'
           }
         */
        });
    }

    handleSignIn(e){
        e.preventDefault();
        console.log('Random Number:', this.randomNumber);
        console.log('Handle Sign In called', this.state.form);
        this.randomNumber = Math.round(Math.random()*100)
        this.setState({
            form: {
                email: '',
                password: ''
            }
        })
      // console.log( this.randomNumber = Math.round(Math.random()*100))
    }

    render() {

        const { email, password } = this.state.form;


        return (
            <form onSubmit={this.handleSignIn.bind(this)}>
                <h1>{this.props.title}</h1>
                <div>
                    <label>Email</label>
                    <input onChange={this.handleInputChange} value={email} name='email' type="text" autoComplete='off'/>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={this.handleInputChange} value={password} name='password' type="password" autoComplete='off'/>
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </form>
        )
    }
}

export default SignIn;