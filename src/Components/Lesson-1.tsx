import React from 'react'
import File1 from './File1'
import File2 from './File2'
import File3List from './File3List'
import File4Union from './File4Union'

type Props = {

}
const nameObject = [
    {
        name:"bimlendra",
        work:"dev",
    },
    {
        name:"almighty",
        work:"blog",
    }
]

const Lesson1 = (props: Props) => {
    const objectValue= {
        name:"vilen",
        work:"Developer"
    }
  return (
    <div>
        <File1 name={"Bimlendra"}/>
        <File2 value={objectValue}/>
        <File3List nameList={nameObject}/>
        <File4Union status='Loading'/>
    </div>
  )
}

export default Lesson1