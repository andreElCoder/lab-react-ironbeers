import React, { Component } from "react"
import {NavLink} from "react-router-dom"
import axios from "axios"
import Beer from "./Beer"

class ListOfBeers extends Component{

    state ={
        beers:[]
    }

    componentDidMount(){
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response =>{
            console.log(response.data)
            this.setState({beers:response.data})
        })
        .catch(e=>console.log(e))
    }

    render(){
        return(
            <div>
                {this.state.beers.map((beer)=>{
                    return(
                    <Beer
                    key={beer._id}
                    name={beer.name}
                    image={beer.image_url}
                    _id={beer._id}/>
                    )
                 })}
            </div>
        )
    }
}

export default ListOfBeers