import React, { Component } from 'react'
import { Container,Row,Col,Image} from 'react-bootstrap';
import SectionTitle from './SectionTitle';

export class About extends Component {
    state = {
        title : "Dolor tempor culpa aute esse ipsum cupidatat nulla. Mollit officia id ullamco occaecat Lorem adipisicing labore. Amet fugiat quis commodo minim aliqua. Tempor amet Lorem culpa reprehenderit. Labore ipsum nulla veniam minim deserunt sit excepteur officia aliqua id.",
        detail : "Voluptate ea et minim voluptate excepteur magna magna mollit sint excepteur. Cupidatat quis sint anim aliqua irure proident pariatur dolor fugiat veniam laborum. Nulla eiusmod eiusmod aliquip aliqua voluptate aute voluptate.",
        image : 'https://picsum.photos/id/'+Math.floor(Math.random()*500)+'/200/200/'
    }
    
    shouldComponentUpdate(nextProps, nextState){
        return false;
      }
    render() {
        return (
            <section>
                <Container>
                    <SectionTitle title="Event Detail" />
                    <Row className="align-items-center">
                        <Col sm={2}>
                            <Image src={this.state.image} thumbnail className="w-100" />
                        </Col>
                        <Col className="px-3 px-md-5">
                            <h3>
                                {this.state.title}
                            </h3>
                            <p>{this.state.detail}</p>
                        </Col>
                        <Col sm={1}>
                            <a className="arrow-cricle text-hide" href="."> Page link </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default About
