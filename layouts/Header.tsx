import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


interface Header {
    subscribe: any;
}

const Header: React.FC<Header> = ({ subscribe }: Header) => {
    const [isLoginNow, setLognNow] = useState(false)
    const subscribeHedear = async (e: any) => {
        e.preventDefault() // prevents page reload
        setLognNow(true)
        await subscribe(e)
    }

    return (
        <header className="flex flex-col gap-3 bg-blue-950 shadow-xl">
            <div className="py-0 flex items-center h-20">
                <div style={{ marginLeft: '5.5%' }} className="columns-4xl">
                    <Link className="h-auto" href="/">
                        <Image src="/aca.png" alt="ACA Service" width={150} height={60} />
                    </Link>
                </div>
                {
                    isLoginNow ?
                        <>
                            <div className="columns-2">
                                <Link className="text-white hover:bg-gray-700 rounded" href="/">home</Link>
                            </div>
                            <div className="columns-2">
                                <Link className="text-white hover:bg-gray-700 rounded" href="/users">admin</Link>
                            </div>
                            <div className="columns-2">
                                <Link className="text-white hover:bg-gray-700 rounded" href="/dashboard">dashboard</Link>
                            </div>
                            <div className="columns-2">
                                <Link className="text-white hover:bg-gray-700 rounded" href="/paises">paises</Link>
                            </div>
                        </> : ""
                }

                {
                    !isLoginNow ?
                        <>
                            <div className="columns-1">
                                <div className='p-8 justify-center items-center h-screen flex'>
                                    <form className='flex'>
                                        <input style={{ width: '150px' }} className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 px-2 py-0' id='email' type='email' aria-label='email address' placeholder='Enter your email' />
                                        <label htmlFor="">|   |</label>
                                        <input style={{ width: '150px' }} className="bg-gray-200 shadow-inner rounded-l p-2 flex-1 px-2 py-0" name="password" id="password" type="password" placeholder='my password' ></input>
                                       <label htmlFor="">|   |</label>
                                        <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r px-2 py-0' type='submit' onClick={subscribeHedear}>
                                            Sign Up
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </> : ""
                }
            </div>

        </header>
    );
}

export default Header;