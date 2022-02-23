import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from "../../helpers/environment";

interface ReviewProps{
    revTitle: string
    content: string
    sessionToken: string | null
    setRevTitle: (e: string) => void
    setContent:(e: string) => void
    fetchReviews: () => void

}

class ReviewCreate extends Component <ReviewProps,{}> {
    constructor(props:any) {
        super(props)
    
        
    }


    handleSubmit = (e:any) => {
        e.preventDefault();

        fetch(`${APIURL}/review/`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                 'Authorization': `${this.props.sessionToken}`
            }),
            body: JSON.stringify({review:{title:this.props.revTitle, content:this.props.content}})
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.props.setRevTitle('');
            this.props.setContent('');

        })
        .catch(error => {
            console.error(error)
        })

    }

    // componentDidMount(){
    //     this.handleSubmit()
    // }

    render(): React.ReactNode{
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label htmlFor="title"> title</Label>
                <Input name="title" value={this.props.revTitle} onChange={(e:any) => this.props.setRevTitle(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="title">review</Label>
                <Input name="content" value={this.props.content} onChange={(e:any) => this.props.setContent(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to post review</Button>
            </Form>
        )
    }
}

export default ReviewCreate