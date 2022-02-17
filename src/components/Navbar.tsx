import React, { Component } from "react";
import {
    Button,
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Nav
} from 'reactstrap';

interface NavbarProps{
    clearToken: () => void
}

 interface NavbarState  {
isOpen: Boolean,
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
                <NavbarBrand href="/">Movie Buffer</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={this.props.clearToken}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>

            </Navbar>
        )
    }
}

export default Sitebar