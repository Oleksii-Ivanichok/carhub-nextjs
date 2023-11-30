"use client"
import type {Metadata} from 'next'
import './globals.css'
import {Footer, Navbar} from "@components";
import {Provider} from "react-redux";
import {store} from "@store/store";



export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="relative">
        <Provider store={store}>
            <Navbar/>
            {children}
            <Footer/>
        </Provider>
        </body>
        </html>
    )
}
