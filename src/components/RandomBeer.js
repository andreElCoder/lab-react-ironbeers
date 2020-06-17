import React, { Component } from "react"
import SingleBeer from './SingleBeer'
import axios from 'axios'

class RandomBeer extends SingleBeer {

state={
    _id:"random"
}
componentDidMount(){
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(response =>{
        console.log(response)
        const {name,image_url,tagline,first_brewed,attenuation_level,description,contributed_by,_id} = response.data
        this.setState({
        name,image_url,tagline,first_brewed,attenuation_level,description,contributed_by,_id
     })

    })
}
}

export default RandomBeer