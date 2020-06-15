import React, { Component } from "react"
import {NavLink} from "react-router-dom"


class Beer extends Component{

    state ={
        name:this.props.name,
        image:this.props.image,
        tagline:this.props.tagline,
        first_brewed:this.props.first_brewed,
        attenuation_level:this.props.attenuation_level,
        description:this.props.description,
        contributed_by:this.props.contributed_by,
        _id:this.props._id
    }
    

    render(){
        return(
            <div>
                <img src={this.state.image}/>
                <h2>{this.state.name}</h2>
                <h3>{this.state.tagline}</h3>
                <h3>{this.state.tagline}</h3>
                <h4>{this.state.description}</h4>
                <NavLink to={`/beers/${this.props._id}`}>detail</NavLink>

            </div>
        )

    }
}

export default Beer