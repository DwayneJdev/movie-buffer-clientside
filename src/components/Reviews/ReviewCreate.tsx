import React, {Component} from "react";
import {Container, Row, Col} from 'reactstrap';

interface ReviewProps{
    title: string
    content: string
    sessionToken: string
}

class ReviewCreate extends Component <ReviewProps,{}> {
    constructor(props:any) {
        super(props)
    
        
    }


    handleSubmit = (e:any) => {
        e.preventDefaault();

        fetch("http://localhost:3000/review/", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            }),
            body: JSON.stringify({review:{title:this.props.title, content:this.props.content}})
        })
    }

    render(): React.ReactNode{
        return(
            <div>

            </div>
        )
    }
}

export default ReviewCreate