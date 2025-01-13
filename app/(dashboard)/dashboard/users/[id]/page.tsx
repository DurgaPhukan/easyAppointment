import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
    const { id } = params
    return (
        <div>
            <h1>User Details Page</h1>
            <p>This is user {id}</p>
        </div>
    )
}
// if i want to get this information such as this ID elsewhere and not within an next js page
// you can use a client component hook called use params that let read routes Dynamic parameters 
// filled in by the current URL

export default Page