import React from 'react'

export type ProfileProps = {
    name:String
}

export const Profile = ({name}: ProfileProps) => {
  return (
    <div>{name}</div>
  )
}

