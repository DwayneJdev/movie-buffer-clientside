import React, {Component} from "react";
import {Container, Row, Col} from 'reactstrap';

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

        fetch("http://localhost:3000/review/", {
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
            <div>

            </div>
        )
    }
}

export default ReviewCreate