import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import homeDoctors from '@/public/homeDoctors.png'
import playSvg from '@/public/play.svg'

const Page = () => {
    return (
        <div>
            <div className={`pt-20 bg-[url('@/public/homebgBlue.png')] h-screen bg-cover relative px-20`}>
                <div className='max-w-[667px] px-10 pt-20'>
                    <h1 className='font-bold text-secondary text-6xl gap-24 leading-tight'>
                        Your Partner in <br /> Health and Wellness
                    </h1>
                    <p className='font-light text-secondary text-xl py-4 tracking-wider'>
                        We are committed to providing you with the best medical
                        and healthcare services to help you live healthier and
                        happier.
                    </p>
                    <button>
                        <div className='flex gap-4 py-10 align-middle'>

                            <Image src={playSvg} alt='play svg' />
                            <div className='flex align-middle'>
                                <h1 className='font-light text-secondary text-xl py-4 tracking-wide'>See how we work</h1>
                            </div>
                        </div>
                    </button>
                </div>
                <Image src={homeDoctors} alt='Doctors Hero' className='w-[968px] h-[844px] absolute right-0 bottom-0 z-0' />
                <div className='absolute h-52 -bottom-28 left-0 z-10 w-full px-20'>
                    <div className='rounded-xl bg-primary h-full flex p-8'>
                        <div className='bg-primary'>
                            <div>Logo</div>
                            <div>
                                <h3>Hotline</h3>
                                <p>123-456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-20 pt-32'>
                <h1 className='font-bold text-secondary text-6xl gap-24 leading-tight text-center'>
                    Our Values
                </h1>
            </div>
        </div>
    )
}

export default Page