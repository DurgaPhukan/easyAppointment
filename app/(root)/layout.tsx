import React from 'react'
import LoaderLinear from '../components/loader'
import Login from '../components/login'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>

    )
}

export default Layout