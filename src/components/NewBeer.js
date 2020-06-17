import React, { Component } from 'react'

class NewBeer extends Component{

    state={
    name:String,
    tagline :String,
    description :String,
    first_brewed :String,
    brewers_tips :String,
    attenuation_level : Number, 
    contributed_by :String,
    }

    handleFormChange = (event) =>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div>
                <form >
                    <label for ="name">Name</label>
                    <input type="text"  onChange={this.handleFormChange} name="name">
                    
                    </input>
                    <label for ="tagline">Tagline</label>
                    <input  type="text" onChange={this.handleFormChange}  name="tagline">
                    
                    </input>                    
                    <label for ="description">Description</label>
                    <input  type="text" onChange={this.handleFormChange}  name="description">
                    
                    </input>
                    <label for ="firstBrewed">First Brewed</label>
                    <input  type="text" onChange={this.handleFormChange}  name="firstBrewed">
                    
                    </input>                    
                    <label for ="attenuationLevel">Attenuation Level</label>
                    <input  type="number" onChange={this.handleFormChange} name="attenuationLevel">
                    
                    </input>                 
                    <label for ="contributedBy">Contributed By</label>
                    <input  type="text" onChange={this.handleFormChange} name="contributedBy">
                    
                    </input>                                                                                
                </form>
            </div>
        )
    }
}

export default NewBeer