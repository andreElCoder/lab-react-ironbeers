import React, { Component } from "react"
import {NavLink} from "react-router-dom"
import axios from 'axios'

class SingleBeer extends Component{


    state ={
        name:"",
        image_url:"",
        tagline:"",
        first_brewed:"",
        attenuation_level:"",
        description:"",
        contributed_by:"",
        _id:""
    }

    componentDidMount(){
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(response =>{
            console.log(response)
            const {name,image_url,tagline,first_brewed,attenuation_level,description,contributed_by,_id} = response.data
            this.setState({
            name,image_url,tagline,first_brewed,attenuation_level,description,contributed_by,_id
         })

        })
    }
    render(){   
        return(
            <div>
                <img src={this.state.image_url}/>
                <h2>{this.state.name}</h2>
                <h3>{this.state.tagline}</h3>
                <h3>{this.state.first_brewed}</h3>
                <h3>{this.attenuation_level}</h3>
                <h4>{this.state.description}</h4>
                <NavLink to='/beers'>Back to list of Beers</NavLink>

            </div>
        )

    }
}

export default SingleBeer