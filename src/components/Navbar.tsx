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
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import ReviewIndex from './Reviews/ReviewIndex'
import {appProps} from '../App'


interface NavbarProps{
    clearToken: () => void,

    username: string,
    reviews: any[],
    setReviews: ( []) => void,
    sessionToken: appProps['sessionToken'],
    //sessionToken: string | null,
    revTitle: string
    content: string
    setRevTitle: (e: string) => void
    setContent:(e: string) => void
    id: string
    reviewId: string
    reviewToUpdate: {}

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
// console.log(this.props.sessionToken)
        
        return(
            <Router>
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
                {/* <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li> */}
               
            </ul>
            <Switch>
                <Route exact path='/Reviews'><ReviewIndex 
                username={this.props.username} reviews={this.props.reviews}
                setReviews={this.props.setReviews} sessionToken={this.props.sessionToken}
                revTitle={this.props.revTitle} content={this.props.content}
                setRevTitle={this.props.setRevTitle} setContent={this.props.setContent} id= {this.props.id} reviewId={this.props.reviewId}
                reviewToUpdate={this.props.reviewToUpdate}/></Route>
            </Switch>

            </Navbar>
                </Router>
        )
    }
}

export default Sitebar