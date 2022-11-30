import React from 'react'
import Private from './Private'
import {Profile} from './Profile'

type Props = {
    
}
const Index = (props: Props) => {
  return (
    <div>
        <Private isLoggedIn={true} component={Profile}/>
    </div>
  )
}

export default Index