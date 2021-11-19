import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishComments extends Component{
    render(){
        const display = this.props.dish.comments.map((comm)=>{

            return(
                <div key={comm.id}>
                    <p>{comm.comment}</p>
                    <p>---{comm.author}</p>
                </div>
            )
        })
        return(
            <div>
                <Card>
                        <CardBody>
                            <h4>Comments</h4>
                            <hr />
                            {display}
                        </CardBody>
                </Card>
            </div>
        )
    }
}

export default DishComments;