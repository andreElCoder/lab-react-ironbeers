import React from "react"
import {NavLink} from "react-router-dom"

function Home(){

    return(
        <div>
            <NavLink to ="/beers">Beers</NavLink>
            <NavLink to ="/beers/random">Random-beer</NavLink>
            <NavLink to ="/new-beer">New-beer</NavLink>
        </div>
    )

}

export default Home