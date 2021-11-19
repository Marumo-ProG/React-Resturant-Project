import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';



class Menu extends Component{
    constructor(props){
        super(props);

        // defining the state of the object which contains all the dishes information
        this.state = {
            dishes: null
        }
    }
    
   
    

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={this.props.onClick(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return(
            <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.state.selectedDish)}
                
              </div>
              <div  className="col-12 col-md-5 m-1">
                {this.renderComments(this.state.selectedDish)}
                
              </div>
            </div>
        </div>
        );
    }
}

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

export default Menu;