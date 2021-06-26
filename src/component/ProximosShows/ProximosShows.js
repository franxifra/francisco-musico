import React from 'react'

const ProximosShows = ({shows}) => {
    return (
        <div className='shows-container'>
            {shows.forEach((show) => {
                <div className='show'>
                    <div>{show.location}</div>
                    <div>{show.date}</div>
                </div>

            })}
            
        </div>
    )
}

export default ProximosShows
