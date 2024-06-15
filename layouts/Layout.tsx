import Head from 'next/head'
import Header from './Header'
import AppContext from '../components/AppContext'
import { ReactNode } from 'react';
import React, { useState } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isLogin, setLogn] = useState(false)
    
 
    const subscribe : React.ChangeEventHandler = (e : 
        React.ChangeEvent<HTMLInputElement>) : void  => {
            e.preventDefault()
             setLogn(true)
            
        }

    return (
        <AppContext.Provider value='App'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen mx-auto max-w-8xl px-0 pt-0 pb-16">
                <div className="flex-grow">
                    <div   className="h-20">
                        <Header subscribe={subscribe} ></Header>
                    </div>
                    {isLogin ? 
                    <div >
                        <main className="my-0 py-3">{children}</main>
                    </div>:<div >Please signed </div>
                    }
                </div>
            </div>
        </AppContext.Provider>
    )
}
export default Layout;