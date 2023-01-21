import React from 'react'

const UserList = ({arr}) => {
  return (
    <div>
        {arr.map((i) => {
            return (
                <h3>Name is {i.name} and age is {i.age}</h3>
            )
        })}
    </div>
  )
}

export default UserList