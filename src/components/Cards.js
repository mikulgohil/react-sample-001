import React, { Component } from 'react';
import { Container,Row} from 'react-bootstrap';
import CardItem from './CardItem';
import SectionTitle from './SectionTitle';
import axios from 'axios';


export class Cards extends Component {
    state = {
        listData : []
    }
    componentDidMount(){
        axios.get('https://api.mocki.io/v1/13f44462')
        .then((res) => {
            this.setState({
                listData : res.data
            })
        });


    }
    render() {
        let {listData} = this.state;
        let items = [];
        Object.keys(listData).forEach(function(i,y){
            items.push(
                <CardItem title={listData[i].title} description={listData[i].description} key={y}  />
            )
        })
        return (
            <section className="background-gradient__half">
                <Container>
                    <SectionTitle theme="text-light" title="Events" />
                <Row>
                    {items}    
                </Row>               
                </Container> 
            </section>
        )
    }
}

export default Cards
