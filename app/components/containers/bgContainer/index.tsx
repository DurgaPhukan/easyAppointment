import React, { ReactNode } from 'react'

const BgContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative md:px-32 xs:px-4">
            <div className="" >{children}</div>
        </div >
    )
}

export default BgContainer