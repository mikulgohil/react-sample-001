import React,{Component} from 'react';
import {Container, Row,Col,Form } from 'react-bootstrap';



class Navbar extends  Component{
    constructor() {
        super();
        this.state = {
          theme: true,
          img1: 'https://picsum.photos/id/'+Math.floor(Math.random()*200)+'/100/30/',
          img2: 'https://picsum.photos/id/'+Math.floor(Math.random()*200)+'/400/40/'
        };
        this.themeChange = this.themeChange.bind(this);
      }
         
      themeChange() {
        this.setState({theme: !this.state.theme});
        this.props.handleInput(this.state.theme);
      }
         
      
      render(){
        return (
            <Container fluid className="text-center">
                <Row className="justify-content-between align-items-center">
                    <Col sm={1} className="">
                             <img src={this.state.img1} alt="" />
                    </Col>
                    <Col className="p-4 border-right border-left d-none d-md-block">
                             <img src={this.state.img2} alt="" />
                             
                    </Col>
                    <Col sm={2}>

                    <Form>
                         <Form.Check 
                             type="switch"
                             id="custom-switch"
                             label="Theme change"
                             onClick={this.themeChange}
                         />
                     </Form>
                    </Col>
                </Row>
            </Container>
         );
}
}
    
  
  export default Navbar;
  

