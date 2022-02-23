import React, { Component } from "react";
import {
    Button,
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Nav,
    NavLink
} from 'reactstrap';
import {Route,Link, Switch} from 'react-router-dom';
import ReviewIndex from './Reviews/ReviewIndex'


interface NavbarProps{
    clearToken: () => void,

    username: string,
    reviews: any[],
    setReviews: ( []) => void,
    sessionToken: string,
    revTitle: string
    content: string
    setRevTitle: (e: string) => void
    setContent:(e: string) => void

}

 interface NavbarState  {
isOpen: boolean | undefined,
setIsOpen:(e: boolean) => void ,
}


class Sitebar extends Component <NavbarProps, NavbarState> {
    constructor(props:any) {
        super(props)
        this.state = {
            isOpen: false,
            setIsOpen: (e) => { 
                this.setState({
                    isOpen: e 
                })
            }
        
        }
    }

    toggle =() => {
        let newIsOpen = !this.state.isOpen;
        this.state.setIsOpen(newIsOpen);
    }

    render(): React.ReactNode{

        
        return(
            <Navbar>
                {/* <NavbarBrand href="/">Home</NavbarBrand> */}
            {/* <NavbarToggler onClick={this.toggle} /> */}
            {/* <Collapse isOpen={this.state.isOpen} navbar> */}
                {/* <Nav > */}
                    <NavItem>
                        <Button onClick={this.props.clearToken}>Logout</Button>
                    </NavItem>
                    <NavItem>
                        <NavLink >Reviews</NavLink>

                    </NavItem>
                {/* </Nav> */}
            {/* </Collapse> */}
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Reviews'>Reviews</Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
               
            </ul>
            <Switch>
                <Route exact path='/Reviews'><ReviewIndex 
                username={this.props.username} reviews={this.props.reviews}
                setReviews={this.props.setReviews} sessionToken={this.props.sessionToken}
                revTitle={this.props.revTitle} content={this.props.content}
                setRevTitle={this.props.setRevTitle} setContent={this.props.setContent}/></Route>
            </Switch>

            </Navbar>
        )
    }
}

export default Sitebar