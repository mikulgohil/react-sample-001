import React, { Component } from 'react'
import { Col,Image} from 'react-bootstrap';

export class CardItem extends Component {
    state = {
        title : 'This is Fallback',
        description : 'This is fallback description',
        image : 'https://picsum.photos/id/'+Math.floor(Math.random()*500)+'/350/200/'
    }
    shouldComponentUpdate(nextProps, nextState){
        return false;
      }
    render() {
        return (
            <React.Fragment>
                <Col sm={12} md={4}>
                 <div className="card mb-4" >
                        <Image src={this.state.image} className="card-img-top" alt="..."  />
                        <div className="card-body">
                            <h3 className="card-title">{this.props.title || this.state.title}</h3>
                            <p className="card-text">{this.props.description || this.state.description}</p>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        )
    }
}

export default CardItem
