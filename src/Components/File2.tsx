import React from 'react'

type Props = {
    value:{
        name:String,
        work:String,
    }
}

const File2 = (props: Props) => {
  return (
    <div>
        <div>{props.value.name}</div>
        <div>{props.value.work}</div>
    </div>
  )
}

export default File2