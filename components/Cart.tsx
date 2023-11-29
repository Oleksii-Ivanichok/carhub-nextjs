"use client";

import Image from 'next/image'
import {Fragment, useState} from 'react'

import {Dialog, Transition} from "@headlessui/react";
import {CartProps} from "@types";
import {generateCarImageUrl} from "@utils";
import {CarCard, CustomButton, ShowMore} from "@components";
import RentDateSelector from "@components/CardDetails/RentDateSelector";

const Cart = ({isOpen, closeModal, rentedCars}: CartProps) => {

    const isCartEmpty = !Array.isArray(rentedCars) || rentedCars.length < 1 || !rentedCars;

    
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button type="button" onClick={closeModal}
                                            className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full">
                                        <Image src="/close.svg" alt="close" width={20} height={20}
                                               className="object-contain"/>
                                    </button>

                                    {!isCartEmpty ? (
                                        <section>
                                            <div className="home__cars-wrapper">
                                                {rentedCars?.map((car) => (
                                                    <CarCard car={car}/>
                                                ))}
                                            </div>
                                            
                                        </section>
                                    ) : (
                                        <div className="home__error-container">
                                            <h2 className="text-black text-xl font-bold">
                                                Your cart is empty
                                            </h2>
                                            <p>{rentedCars?.message}</p>
                                        </div>
                                    )}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Cart