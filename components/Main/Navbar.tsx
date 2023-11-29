"use client"
import Image from 'next/image'
import Link from 'next/link'

import CustomButton from '../UI/CustomButton'
import {Cart} from "@components";
import {useState} from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <div className="flex gap-3">
                    <CustomButton
                        title="Cart"
                        btnType="button"
                        containerStyles="text-white rounded-full bg-primary-blue min-w[130px]"
                        handleClick={() => setIsOpen(true)}
                    />
                    <Cart isOpen={isOpen} closeModal={() => setIsOpen(false)} />

                    <CustomButton
                        title="Contacts"
                        btnType="button"
                        containerStyles="text-white rounded-full bg-primary-blue min-w[130px]"
                    />
                    <CustomButton
                        title="Sign In"
                        btnType="button"
                        containerStyles="text-white rounded-full bg-primary-blue min-w[130px]"
                    />

                </div>

            </nav>
        </header>
    )
}

export default Navbar