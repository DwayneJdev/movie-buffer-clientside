import React, { Component, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';
import ReviewCreate from './ReviewCreate';
import ReviewDisplay from './ReviewDisplay'


interface ReviewProps {
    username: string,
    reviews: any[],
    setReviews: ( []) => void,
    sessionToken: string | null,
    revTitle: string
    content: string
    setRevTitle: (e: string) => void
    setContent:(e: string) => void
    id: string
}
interface ReviewState {
    sessionToken: string | null
}

class ReviewIndex extends Component<ReviewProps, ReviewState> {
    constructor(props: ReviewProps) {
        super(props)
        // this.state ={
        //     sessionToken: this.props.sessionToken
        // }
    }

    fetchReviews = () => {
        fetch(`${APIURL}/review/:${this.props.id}`, {
            method: 'Get',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                this.props.setReviews(data)
            })
            .catch(error => {
                console.error(error)
            })
            
    }
componentDidMount(){
    
        this.fetchReviews();
        console.log(this.props.setReviews)
    }

    
   

render(): React.ReactNode{
    
    console.log(this.props.sessionToken);

    return (
        <Container>
            <Row>
                <Col>
                    <ReviewCreate revTitle={this.props.revTitle} content={this.props.content} sessionToken={this.props.sessionToken} setRevTitle={this.props.setRevTitle}
                    setContent={this.props.setContent} fetchReviews={this.fetchReviews} />
                </Col>
                <Col>
                    <ReviewDisplay fetchReviews={this.fetchReviews} reviews={this.props.reviews} />
                </Col>

            </Row>
        </Container>
    )
}
}

export default ReviewIndex;