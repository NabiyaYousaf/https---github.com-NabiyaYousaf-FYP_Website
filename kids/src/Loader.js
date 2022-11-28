import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
const Loader = (props) => {
  return (
    
    <div className='center'>
        <PacmanLoader color='#f12711'
        loading={props.loading} 
        size={150} />
    </div>
    
  )
}

export default Loader
