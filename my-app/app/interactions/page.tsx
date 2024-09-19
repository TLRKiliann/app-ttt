import { Metadata } from 'next';
import React from 'react';
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";

export const metadata: Metadata = {
    title: "Interactions",
    description: 'interactions page',
};

export default function Interactions(): JSX.Element {
    return (
        <main className="w-full min-h-screen text-slate-100/70">

            <div className="fixed -z-10 w-full h-full">
                <Image 
                    src={imgBg} 
                    width={1920} 
                    height={1076} 
                    alt="no img bg" 
                    className="w-full h-full opacity-30 object-cover"
                />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-[100vh] px-4 md:px-40 animate-slice-appear">

                <h3 className="w-full text-xl md:text-2xl font-bold mb-4">⚠️ Contre indications ⚠️</h3>

                <div className="w-full bg-gradient-to-r from-sky-500/30 to-red-500/30 px-10 py-8 rounded">

                    <li className="list-decimal text-orange-400 ml-4 mb-1">
                        <a>La pilule.</a>
                    </li>

                    <p className="text-justify my-4">
                        Certaines informations semblent dire que le CDS et la pilule contraceptive ne font pas bon ménage. 
                        L&apos;action de cette dernière pourrait être annulée.
                    </p>

                    <li className="list-decimal text-orange-400 ml-4 mb-1">
                        <a>Les corticoïdes.</a>
                    </li>

                    <li className="list-decimal text-orange-400 ml-4 mb-1">
                        <a>Les autres médicaments.</a>
                    </li>

                    <p className="text-justify my-4">
                        Il n&apos;y a pas d&apos;interaction connue avec la plupart des médicaments. On maintiendra un interval 
                        d&apos;une heure entre CDS et médicaments.
                    </p>
                    
                    <p className="text-justify mb-6">Addresse utile pour toutes questions se rapportant aux interactions médicamenteuses avec le CDS :</p>

                    <div className="max-w-fit bg-gradient-to-r from-yellow-500 to-red-500 m-auto xl:m-0 p-[1px] rounded">
                        <p className="max-w-fit text-sm md:text-base text-sky-400 bg-cyan-900 px-3 py-2 rounded">info@andreaskalcker.com</p>
                    </div>

                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>


            </div>

        </main>
    )
}