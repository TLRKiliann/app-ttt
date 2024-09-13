import { Metadata } from 'next';
import React from 'react';
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";
import EmailComp from './email-comp';

export const metadata: Metadata = {
    title: "Contact",
    description: 'contact page',
};

export default function Contact(): JSX.Element {
    return (
        <main className="w-full min-h-screen">

            <div className="fixed -z-10 w-full h-full">
                <Image 
                    src={imgBg} 
                    width={1920} 
                    height={1076} 
                    alt="no img bg" 
                    className="w-full h-full opacity-30 object-cover"
                />
            </div>

            <div className='pt-20'>
                <h1 className='text-2xl md:text-3xl font-bold pl-4'>Contact</h1>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-[80vh] text-lg'>
                
                <EmailComp />

            </div>
        </main>
    )
}
