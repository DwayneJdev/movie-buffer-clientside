import React, { Component, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReviewCreate from './ReviewCreate'

interface ReviewProps {
    username: string,
    reviews: any[],
    setReviews: ( []) => void,
    sessionToken: string,
    
}

class ReviewIndex extends Component<ReviewProps, {}> {
    constructor(props: ReviewProps) {
        super(props)

    }

    fetchReviews = () => {
        fetch(`http://localhost:3000/review/:${this.props.username}`, {
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
}
render(): React.ReactNode{



    return (
        <Container>
            <Row>
                <Col>
                    <ReviewCreate title={this.props.title} content={this.props.content} sessionToken={sessionToken} />
                </Col>
                <Col>

                </Col>

            </Row>
        </Container>
    )
}
}

export default ReviewIndex;