import React, { Component } from 'react'
import {Card} from 'react-bootstrap';

interface ReviewDisplayProps{
    fetchReviews: () => void,
    reviews: any[]
}


class ReviewDisplay extends Component<ReviewDisplayProps,{}>{
    constructor(props:ReviewDisplayProps){
        super(props)
    }
    

    mapReviews= () => {
        return  this.props.reviews.map((m:any) => {
            console.log(m.revTitle)
            return(
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <br/>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            )
        })
    }


render(): React.ReactNode{

    return(
       <div> 

        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title></Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <br/>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<div>
    
</div>

</div>

    )
}

}

export default ReviewDisplay