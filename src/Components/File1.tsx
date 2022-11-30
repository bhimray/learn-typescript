import React from 'react'

type Props = {
    name:String
}

const File1 = (props: Props) => {
  return (
    <div>
        {props.name}
    </div>
  )
}

export default File1