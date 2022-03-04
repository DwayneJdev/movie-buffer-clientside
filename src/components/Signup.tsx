import React, { Component } from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import * as Yup from "yup";
import APIURL from "../helpers/environment";

interface SignupProps {
email: string,
username: string,
password: string,
setEmail: (e:string)=> void,
setUsername: (e:string) => void,
setPassword: (e:string) => void,
updateToken: (newToken:any) => void

}
    



                                //props, state
class Signup extends Component <SignupProps,{}> {  
    constructor(props: any) {
        super(props)
        
      

        
    }


    handleSignup = (e:any) => {
       e.preventDefault();

       fetch(`${APIURL}/user/signup`, {
           method: 'POST',
           headers: new Headers({
               'Content-Type': 'application/json'
           }),
           body: JSON.stringify({email:this.props.email, username:this.props.username ,password: this.props.password, 
                                    }),
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
            <div className="signup">
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSignup}>
                    
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => this.props.setUsername(e.target.value)} name="username" value={this.props.username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => this.props.setEmail(e.target.value)} name="email" value={this.props.email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => this.props.setPassword(e.target.value)} name="password" value={this.props.password} />
                </FormGroup>
               
                <Button type="submit">Sign Up</Button>

                </Form>

            </div>
        )
    }
}

export default Signup;