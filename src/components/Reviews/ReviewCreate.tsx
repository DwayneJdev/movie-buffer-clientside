import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from "../../helpers/environment";

interface ReviewProps{
    title: string
    content: string
    sessionToken: string
    setTitle: (e: string) => void
    setContent:(e: string) => void
    fetchReviews: () => void

}

class ReviewCreate extends Component <ReviewProps,{}> {
    constructor(props:any) {
        super(props)
    
        
    }


    handleSubmit = (e:any) => {
        e.preventDefaault();

        fetch(`${APIURL}/review/`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            }),
            body: JSON.stringify({review:{title:this.props.title, content:this.props.content}})
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.props.setTitle('');
            this.props.setContent('');

        })
    }

    render(): React.ReactNode{
        return(
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor="title" />
                <Input name="title" value={this.props.title} />

            </Form>
        )
    }
}

export default ReviewCreate