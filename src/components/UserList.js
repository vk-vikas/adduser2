import React from 'react'
import './UserList.css';

const UserList = ({arr}) => {
  return (
    <div className='userlist'>
        {arr.map((i) => {
            return (
                <h3>{i.name} ( {i.age} yrs)</h3>
            )
        })}
    </div>
  )
}

export default UserList