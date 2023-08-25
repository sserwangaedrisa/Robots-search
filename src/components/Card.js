import React from 'react'

const Card=({id, name, email})=>{

    return(
        <div className='tc bg-light-green ma2 dib br3 mr pa3 grow '>
            <img alt='robot-image' src={`https://robohash.org/${id}`}/>
            <div className=''>
                <h1 className=''>{name}</h1>
                <p>{email}</p>
                </div>
        </div>
    )
}
export default Card;
