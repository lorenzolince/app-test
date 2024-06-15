import React, { useState } from 'react';

export default function Page() {
    const [nameUser, setNameUser] = useState("")
    const setUser = async (e: any, username: string) => {
        e.preventDefault() // prevents page reload
        setNameUser(username)
    }
    return <>  <ul>
        <li>
            <h3>User 1</h3>
            <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r px-2 py-0'
                type='button'
                onClick={(e) => setUser(e, "User2")}
            >add user 1</button>
        </li>
        <li>
            <h3>User 2</h3>
            <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r px-2 py-0'
                type='button'
                onClick={(e) => setUser(e, "User1")}
            >add user 1</button>
        </li>
    </ul>
        <br />
        <br />
        <label>{nameUser}</label></>
}