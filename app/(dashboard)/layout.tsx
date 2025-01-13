import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h2 className='text-xl'>Route Group Dashboad Navbar </h2>
            {children}
        </div>
    )
}

export default Layout