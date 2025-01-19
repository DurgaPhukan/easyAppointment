import React from 'react'

const Signup = () => {
    return (
        <div className="gap-4 rounded-r-2xl w-full bg-[url('https://img.freepik.com/premium-photo/group-smiling-doctors-green-scrubs-standing-together-white-background_923894-22457.jpg')] bg-cover bg-center">
            <div className='w-full h-full backdrop-blur-md rounded-r-2xl bg-custom-white/30 dark:bg-bg-dark/70 p-8'>
                <form className='w-[400px] flex flex-col rounded-r-xl'>
                    <div>
                        <h2 className='text-5xl font-semibold text-center text-primary'>Sign Up</h2>
                    </div>
                    < div className=' gap-4 p-2 '>
                        <h6 className='heading3'>user name</h6>
                        <input className='inputlogin' type="text" placeholder='Enter username' />
                        <h6 className='heading3'>password</h6>
                        <input className='inputlogin' type="text" placeholder='Enter your password' />
                        <button className='font-semibold text-center px-4 py-2 text-custom-white dark:text-secondary rounded-lg text-xl mt-6 bg-bg-dark dark:bg-custom-white'>Submit</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Signup