'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import SearchIcon from '@/public/searchIcon.png'
import dropDownIcon from '@/public/dropdownButton.svg'
import easyAppointmentLogo from '@/public/EAlogo.png'


const Header: React.FC = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setShowHeader(false);
            } else {
                // Scrolling up
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`fixed top-0 w-full bg-bg-light dark:bg-bg-dark shadow-md z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-full flex justify-between px-2 md:px-6">
                <div className="flex items-center bg-bg-light dark:bg-bg-dark">
                    <div>
                        <Image src={easyAppointmentLogo} alt="Easy Appointment Logo" className="w-[72px] h-16 md:h-18 pt-2" />
                    </div>
                </div>
                <div className="hidden md:flex justify-between gap-12 py-6">
                    <div>
                        <h1 className="header-text">Home</h1>
                    </div>
                    <div>
                        <h1 className="header-text">About</h1>
                    </div>
                    <div>
                        <h1 className="header-text">Find Doctor</h1>
                    </div>
                    <div>
                        <h1 className="header-text">Blog</h1>
                    </div>
                    <div>
                        <h1 className="header-text">Pages</h1>
                    </div>
                    <div>
                        <h1 className="header-text">Content</h1>
                    </div>

                </div>
                <div className="flex gap-4 md:gap-8 py-6 pr-2">
                    <div>
                        <h1>
                            <Image src={SearchIcon} alt="Search Icons" className="icon-style fill-bg-light" />
                        </h1>
                    </div>
                    <div>
                        <h1>
                            <Image src={dropDownIcon} alt="Drop down Button" className="icon-style" />
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
