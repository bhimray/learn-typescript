import React from 'react'
import {Name} from './UnionTypesContainer'

type Props = {
    nameList:Name[]
}

const File3List = (props: Props) => {
  return (
    <div>
        {props.nameList.map((value)=>{
            return <div>{value.name} and {value.work}</div>
        })}
    </div>
  )
}

export default File3List