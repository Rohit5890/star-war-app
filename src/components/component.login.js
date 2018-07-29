import React from 'react';
import {Redirect} from 'react-router-dom';

import Input from './component.input';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.password='';
        this.state={
            redirectToLogin:false,
            password:'',
            username:'',
            auth:false
        }
    }
    handleSubmit(){
        if(this.state.password && (this.password === this.state.password)){
            this.setState({
                auth: true
            })
        }else{
            alert('Invalid Password');
        }
    }
    blurHandler(){
        let URL =  "https://swapi.co/api/people/?" + encodeURI(this.state.username);
        if(this.state.username){
            fetch(URL)
            .then((response)=>{
                if (!response.ok) {
                    alert('Enter valid Username')
                }
                return response;
            })
            .then((response)=>{
                return response.json();
            })
            .then((response)=>{
                this.password = response.results[0].birth_year;
            }).catch(()=>{
                alert('Something went wron while Login');
            })
        }
    }
    changeHandler(e){
        this.setState({
            [e.target.name]:e.target.value 
        })
    }
    render(){
        const { from } = { from: { pathname: "/planets" } };
        if(this.state.auth){
            this.props.updateUser(this.state.username, this.state.auth);
            return <Redirect to={from}/>
        }
        return (
            <div className='login-widget'>
                <h1>Login </h1>
                <Input type="text" onblur={()=>{this.blurHandler()}} onchange={(e)=>{this.changeHandler(e)}} name={`username`}placeholder={`Username`} className="login-input" value={this.state.username}/>
                <Input type="password"onchange={(e)=>{this.changeHandler(e)}} name={`password`}placeholder={`Date of birth`} className="login-input" value={this.state.password}/>
                <button onClick={()=>{this.handleSubmit()}}>Login</button>
            </div>
        )
    }
}

export default Login;