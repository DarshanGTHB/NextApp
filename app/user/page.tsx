import React from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        {cache: 'no-store'});
        // {next: {revalidate: 100}});
    const users: User[] = await res.json();
    

  return (
    <>
        <h1>User Page</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map( user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UserPage
