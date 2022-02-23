import React, { Component, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';
import ReviewCreate from './ReviewCreate'

interface ReviewProps {
    username: string,
    reviews: any[],
    setReviews: ( []) => void,
    sessionToken: string,
    revTitle: string
    content: string
    setRevTitle: (e: string) => void
    setContent:(e: string) => void
}

class ReviewIndex extends Component<ReviewProps, {}> {
    constructor(props: ReviewProps) {
        super(props)

    }

    fetchReviews = () => {
        fetch(`${APIURL}/review/:${this.props.username}`, {
            method: 'Get',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => res.json())
            .then((data) => {
                this.props.setReviews(data)
            })
    }
componentDidMount(){
    
        this.fetchReviews();
    }

render(): React.ReactNode{



    return (
        <Container>
            <Row>
                <Col>
                    <ReviewCreate title={this.props.revTitle} content={this.props.content} sessionToken={this.props.sessionToken} setTitle={this.props.setRevTitle}
                    setContent={this.props.setContent} fetchReviews={this.fetchReviews} />
                </Col>
                <Col>

                </Col>

            </Row>
        </Container>
    )
}
}

export default ReviewIndex;