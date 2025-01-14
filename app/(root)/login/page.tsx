import Login from '@/app/components/login'
import React from 'react'

const Page = () => {
    return (
        <div className=' flex justify-center md:mt-36'>
            <div className='sm:flex max-w-6xl rounded-4xl shadow-lg'>
                <div className="flex h-[450px] flex-col justify-center px-8 rounded-l-2xl bg-[url('https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                    <div className='w-96 backdrop-blur-md rounded-l-2xl bg-primary/30 dark:bg-bg-dark/70 p-8'>
                        <h1 className='text-4xl font-semibold text-center dark:text-custom-white text-bg-dark'>Easy Appointment</h1>
                    </div>
                </div>
                <Login />
            </div>
        </div>
    )
}

export default Page