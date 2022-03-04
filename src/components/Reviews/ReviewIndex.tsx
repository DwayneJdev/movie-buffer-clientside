import React, { Component, useEffect } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import {Card} from 'react-bootstrap';
import APIURL from '../../helpers/environment';
import ReviewCreate from './ReviewCreate';
import ReviewDisplay from './ReviewUpdate'


interface ReviewProps {
    username: string,
    setReviews: ( []) => void,
    sessionToken: string | null,
    reviews: any[],
    revTitle: string
    content: string
    setRevTitle: (e: string) => void
    setContent:(e: string) => void
    id: any
    reviewId: string
    reviewToUpdate: {}
}
interface ReviewState {
    // sessionToken: string | null
    reviews: any[]
    updateActive: boolean
    reviewToUpdate: {}

}

class ReviewIndex extends Component<ReviewProps, ReviewState> {
    constructor(props: ReviewProps) {
        super(props)
        this.state ={
            reviews: [],
            updateActive: false,
            reviewToUpdate: {}
        }
    }

    componentDidMount() {
       fetch(`${APIURL}/review/all`, {
            method: 'Get',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                // this.props.setReviews(data)
                // this.displayReview();
                this.setState({
                    reviews: data
                    
                })
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            
    }

    deleteReview = (review:any) => {
        fetch(`${APIURL}/review/delete/${review.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${this.props.sessionToken}`
            })
        }).then(() => this.componentDidMount())
        console.log(review.id)
    }
// componentDidMount(){
    
//         this.fetchReviews();
//         console.log(this.props.setReviews)
//     }
    
//      displayReview () {
//     this.props.reviews.map((m:any) => {
//         console.log(m.title)
//         return(
//             <>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Body>
//                   <Card.Title></Card.Title>
                  
//                   <Card.Text>
//                     Some example text to build on the card title and make up the bulk of
//                     the card's content.
//                   </Card.Text>
                 
                  
//                 </Card.Body>
//               </Card>
//             </>
//         )
//     })

// }

        editReview = (reviews:any) => {
            this.setState({reviewToUpdate: this.state.reviews})
            console.log(this.state.reviews)
        }

        updateOn = () => {
            this.setState({updateActive: true})
        }

        updateOff = () => {
            this.setState({updateActive: false})
        }
   

render(): React.ReactNode{
    const {reviews} = this.state;
    
    console.log(this.props.sessionToken);

    return (
        <Container>
            <Row>
                <Col>
                    <ReviewCreate revTitle={this.props.revTitle} content={this.props.content} sessionToken={this.props.sessionToken} setRevTitle={this.props.setRevTitle}
                    setContent={this.props.setContent}/>
                </Col>
                <Col>
                   { this.state.updateActive ? <ReviewDisplay reviews={this.props.reviews} revTitle={this.props.revTitle} content={this.props.content} updateOff={this.updateOff} sessionToken={this.props.sessionToken} id={this.props.id}
                   reviewToUpdate={this.props.reviewToUpdate} reviewId={this.props.reviewId}/> : <></>}
                </Col>
                <Col>
                {reviews.map(reviews => (
                         <Card style={{ width: '18rem' }}>
                         <Card.Body key={reviews.id}>
                             
                           <Card.Title>{reviews.title}</Card.Title>
                           
                           <Card.Text>
                            {reviews.content}
                           </Card.Text>
                            <Button onClick={() => {this.editReview(reviews); this.updateOn()}}>update</Button>
                           <br/>
                           <Button color="danger" onClick={() => {this.deleteReview(reviews)}}>Delete</Button>
                         </Card.Body>
                       </Card>
                ))}
                </Col>

            </Row>
        </Container>
    )
}
}

export default ReviewIndex;