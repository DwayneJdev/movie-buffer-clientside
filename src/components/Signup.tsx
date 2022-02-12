import React, { Component, useState } from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import * as Yup from "yup";

interface SignupProps {
email: string,
username: string,
password: string,
setEmail: (e:string)=> void,
setUsername: (e:string) => void,
setPassword: (e:string) => void,
updateToken: (newToken:any) => void


    



                                //props, state
class Signup extends Component <SignupProps,{}> {  
    constructor(props: any) {
        super(props)
        
        const [role, setRole] = useState('member')

        
    }
    handleSubmit = (e:any) => {
       e.preventDefault();

       fetch("http://localhost:5000/user/signup", {
           method: 'POST',
           headers: new Headers({
               'Content-Type': 'application/json'
           }),
           body: JSON.stringify({user:{email:this.props.email, username:this.props.username ,password: this.props.password, 
                                    role:'member'}}),
       }).then(
           (response) => response.json()
       ).then((data) => { 
           this.props.updateToken(data.sessionToken)    

       })
       .catch(err =>
           console.log(err))
   }

    render(): React.ReactNode {
        return (
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                    
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => this.props.setUsername(e.target.value)} name="username" value={this.props.username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => this.props.setEmail(e.target.value)} name="email" value={this.props.username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => this.props.setPassword(e.target.value)} name="password" value={this.props.password} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="role">Role</Label>
                    <Input type="select" name='role' value={role} onChange={(e) => setRole(e.target.value)}  >
                        <option value="member">membership</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Sign Up</Button>

                </Form>

            </div>
        )
    }
}

export default Signup;