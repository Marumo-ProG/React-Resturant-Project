import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Details extends Component{
    render(){
        return(
            <div>
                <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                </Card>
            </div>
        )
    }
}

export default Details;