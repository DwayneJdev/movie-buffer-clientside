import React, { Component } from 'react'
import {Button, Form, FormGroup, Label , Modal, ModalHeader, ModalBody, Input} from 'reactstrap';
import APIURL from '../../helpers/environment';

interface ReviewDisplayProps{
    // fetchReviews: () => void,
    reviews: any[]
    revTitle: string | any
    content: string
    // reviewToUpdate: {}
    updateOff: () => void
    sessionToken: string | null
    id: any
    reviewToUpdate: {}
    reviewId: string
}

interface ReviewUpdateState{
editTitle: string
editContent: string
cancel: boolean
id: any

}


class ReviewDisplay extends Component<ReviewDisplayProps,ReviewUpdateState>{
    constructor(props:ReviewDisplayProps){
        super(props)

        this.state = { 
          editTitle: this.props.revTitle,
          editContent: this.props.content,
          cancel: false,
          id: this.props.reviewId
        }
    }

    handleUpdate = (review:any) => {
        review.preventDefault()
        fetch(`${APIURL}/review/update/${review.id}`, {
          method: 'PUT',
          body: JSON.stringify({review: {title: this.state.editTitle, content: this.state.editContent}}),
          headers: new Headers({
            'Content-Type': 'application/json',
                 'Authorization': `${this.props.sessionToken}`
          })
        }).then((res) => {
          console.log(res)
          console.log(review.id)
          this.props.updateOff()
        })
    }
    



render(): React.ReactNode{

    return(
     <Modal isOpen={true}>
       <ModalHeader>Review Edit</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleUpdate}>
                <FormGroup>
                  <Label htmlFor='title'>Title</Label>
                  <Input name='title' value={this.state.editTitle} onChange={(e:any) => this.setState({editTitle: e.target.value }) }/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='content'>Review</Label>
                  <Input name='content' value={this.state.editContent} onChange={(e:any) => this.setState({editContent: e.target.value})}/>
                </FormGroup>
                <Button type='submit'>Update Review</Button>
              </Form>
            </ModalBody>

     </Modal>

    )
}

}

export default ReviewDisplay