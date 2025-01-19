// pages/index.tsx
import Image from "next/image";
import React from "react";
import homedoctors from '@/public/homeDoctors.png'

const Page: React.FC = () => {
    return (
        <div className="flex h-screen">
            <div className={`w-full md:w-3/5 relative md:flex-1`}>
                <Image className="md:absolute bottom-0 z-10" src={homedoctors} alt="Doctors Image"></Image>
            </div>
            <div className="md:absolute w-1/2 h-screen bg-primary flex flex-col ">
                <h1 className="text-4xl font-bold text-center my-16 text-custom-white">Easy Appointment</h1>
                <Image className="w-full" src={homedoctors} alt="bg-svg"></Image>
            </div>

            <div className="w-1/2">
                <div className="bg-white p-6 md:p-12 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome back</h2>
                        <p className="text-gray-600 mb-6">
                            New to Musaki? <a href="#" className="text-blue-600 underline">Sign up</a>
                        </p>

                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-600" />
                                        <span className="ml-2 text-gray-700">Remember me</span>
                                    </label>
                                </div>
                                <a href="#" className="text-blue-600 text-sm underline">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                Log in
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600 mb-4">Or log in with</p>
                            <div className="flex justify-center gap-4">
                                <button className="p-2 bg-gray-100 rounded-md">
                                    <img
                                        src="/icons/google.svg"
                                        alt="Google"
                                        className="w-6 h-6"
                                    />
                                </button>
                                <button className="p-2 bg-gray-100 rounded-md">
                                    <img
                                        src="/icons/facebook.svg"
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                </button>
                                <button className="p-2 bg-gray-100 rounded-md">
                                    <img
                                        src="/icons/apple.svg"
                                        alt="Apple"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
