import React from 'react'
import { fetchData } from '../api'

export default ({resource}) => {    
  const avatars = resource.avatars.read();
  
  console.log('rendering...')

  return (
      <React.Fragment>
          {avatars.results.map(user => (
              <div key={user.id.value}>                  
                <img src={user.picture.large} alt={user.email}/>
                <p>{Object.values(user.name).join(' ')}</p>
                <small>{user.gender}</small>
              </div>
          ))}
      </React.Fragment>
  )
}