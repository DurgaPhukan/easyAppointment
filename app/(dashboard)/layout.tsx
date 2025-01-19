import React from 'react'
import Header from '../components/header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-bg-light'>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout