import React, { Component } from 'react'

import { Image,Container,Row,Col} from 'react-bootstrap';

export class Mainbanner extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return false;
      }
    render() {
        return (
            
                <section className="main-banner text-light background-gradient__full">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <Container >
                                <Row className="align-items-center">
                                    <Col lg={6} className="order-1 order-md-0">
                                        <div className="main-banner-content">
                                            <h3>17-18th Nov 2019</h3>
                                            
                                            <h1>ADDATHLON</h1>
                                            <h3>Abu Dhabi</h3>
                                            <p>Minim aliqua consequat commodo aliquip quis adipisicing occaecat voluptate officia magna. Laborum tempor anim aliqua dolor sunt pariatur ex elit duis sit magna do. Est occaecat ipsum ad sunt non quis. Aute incididunt ex mollit enim labore sit aliqua.</p>
                                            <button type="button" className="btn btn-outline-light btn-lg button-cricle">Register Now</button>
                                        </div>
                                    </Col>
                                <Col lg={6} className="order-0 order-md-1 mb-4">
                                    <div className="animate-banner-image">
                                    <Image src={'https://picsum.photos/id/'+Math.floor(Math.random()*500)+'/350/200/'} thumbnail className="card-img-top" alt="..."  />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    </div>


                    </section>
        )
    }
}

export default Mainbanner
