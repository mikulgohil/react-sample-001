import React, { Component } from 'react'

export class SectionTitle extends Component {
    
    render() {
        return (
            <div className={`section-title ${this.props.theme}`} >
                    <h2>{this.props.title} </h2>
            </div>
        )
    }
}

export default SectionTitle
