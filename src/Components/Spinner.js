import React, { Component } from 'react'
import Loader from '../Loader.gif'
class Spinner extends Component{
    render(){
        return(
            <div className='text-center'>
                <img src={Loader} alt={Loader} ></img>

            </div>
        )
    }
}
export default Spinner;