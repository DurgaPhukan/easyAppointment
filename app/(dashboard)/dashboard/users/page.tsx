import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import homeDoctors from '@/public/homeDoctors.png'
import playSvg from '@/public/play.svg'
import hotline from '@/public/hotline.svg'
import ambulance from '@/public/ambulance.svg'
import location from '@/public/location.svg'
import bookNow from '@/public/bookNow.svg'
import compassion from '@/public/compassion.svg'
import excellence from '@/public/excellence.svg'
import integrity from '@/public/integrity.svg'

const instantServce = [
    {
        id: 1,
        icon: '',
        title: 'Hotline',
        number: '123-456-7890',
        image: hotline
    },
    {
        id: 2,
        title: 'Ambulance',
        number: '123-456-7890',
        image: ambulance
    },
    {
        id: 3,
        title: 'location',
        number: '123-456-7890',
        image: location
    },

]

const motoValues = [
    {
        id: 1,
        title: 'Compassion',
        icon: compassion,
        description: 'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and everyone.'
    },
    {
        id: 2,
        title: 'Excellence',
        icon: excellence,
        description: 'We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.'
    },
    {
        id: 3,
        title: 'Integrity',
        icon: integrity,
        description: "We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution."
    },
    {
        id: 4,
        title: 'Respect',
        icon: compassion,
        description: 'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.'
    },
    {
        id: 5,
        title: 'Teamwork',
        icon: compassion,
        description: 'We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.'
    }
]

const Page = () => {
    return (
        <div>
            <div className={`pt-6 md:pt-20 bg-[url('@/public/homebgBlue.png')] h-screen bg-cover relative px-6 md:px-20`}>
                <div className='max-w-[667px] md:px-10 pt-20'>
                    <h1 className='font-bold text-secondary text-3xl md:text-6xl gap-24 leading-tight'>
                        Your Partner in <br /> Health and Wellness
                    </h1>
                    <p className='font-light text-secondary text-lg md:text-xl py-4 tracking-wider'>
                        We are committed to providing you with the best medical
                        and healthcare services to help you live healthier and
                        happier.
                    </p>
                    <button>
                        <div className='flex gap-4 py-4 md:py-10 align-middle'>
                            <Image className='w-8 h-8' src={playSvg} alt='play svg' />
                            <div className='flex align-middle'>
                                <h1 className='font-light text-secondary text-xl md:py-4 tracking-wide'>See how we work</h1>
                            </div>
                        </div>
                    </button>
                </div>
                <Image src={homeDoctors} alt='Doctors Hero' className='md:w-[968px] md:h-[844px] absolute right-0 bottom-0 z-0' />
                <div className='absolute h-40 md:h-56 -bottom-28 md:-bottom-28 left-0 z-10 w-full px-2 md:px-20'>
                    <div className='rounded-md md:rounded-xl bg-bg-light md:h-full h-auto flex items-center justify-between py-8 px-4 md:px-12 gap-4 shadow-lg overflow-x-auto'>
                        {
                            instantServce.map((service) => (
                                <div key={service.id + 'service'} className={`min-w-40 flex flex-nowrap gap-2 md:gap-4 ${service.id == 1 ? 'md:pl-6' : ''}`}>
                                    < div className='flex items-center'>
                                        <Image className='w-10 md:w-16 h-10 md:h-16' src={service.image} alt={service.title} />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h3 className='text-secondary md:text-xl'>{service.title}</h3>
                                        <p className='text-secondary opacity-50 md:text-lg'>{service.number}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div key='bookBtn' className='flex justify-end'>
                            <button className='min-w-20'>
                                <Image className='dark:border-2 bg-cover md:bg-contain' src={bookNow} alt='Book Now' />
                            </button>
                        </div>
                    </div>
                </div>
            </div >

            <div className='px-4 md:px-20 pt-28 md:pt-64 pb-80'>
                <h1 className='font-bold text-secondary text-4xl md:text-6xl gap-24 leading-tight text-center'>
                    Our Values
                </h1>
                <div className='pt:12 md:pt-32'>
                    <div className='relative flex gap:6 md:gap-12 justify-center flex-wrap'>
                        {motoValues.map((moto) => (
                            <div className={`md:w-1/4 mt-4`} key={moto.id}>
                                <div className={`h-72 shadow-xl rounded-xl  ${moto.id === 2 ? 'md:absolute md:-top-16 md:w-1/4' : ''} p-6 `}>
                                    <div className='relative flex gap-4 justify-center py-3 items-center'>
                                        <Image src={moto.icon} alt={moto.title} />
                                        <h1 className='font-bold text-secondary text-2xl leading-tight'>{moto.title}</h1>
                                    </div>
                                    <p className='para-text'>{moto.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page