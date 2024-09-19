import { Metadata } from 'next';
import React from 'react';
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";

export const metadata: Metadata = {
    title: "3 règles d'or",
    description: 'les 3 règles',
};

export default function Regledor(): JSX.Element {
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

            <div className="flex flex-col items-center justify-center w-full h-[100vh] text-yellow-500 px-4 md:px-40 animate-slice-appear">

                <h3 className="w-full text-xl md:text-2xl font-bold mb-4">Les 3 règles d&apos;or</h3>

                <div className="w-full bg-gradient-to-r from-sky-500/30 to-red-500/30 px-10 py-8 rounded">

                    <li className="list-decimal font-bold text-justify ml-4 mb-1">
                        <p>Ça va mieux ?&nbsp;<span className='text-base font-normal text-slate-100/70'>Ne changez rien. Continuer ce que vous faites.</span></p>
                    </li>

                    <li className="list-decimal font-bold text-justify ml-4 mb-1">
                        <p>Ça va plus mal ?&nbsp;<span className='text-base font-normal text-slate-100/70'>Réduisez votre consommation de CDS de 50%.</span></p>
                    </li>

                    <li className="list-decimal font-bold text-justify ml-4 mb-1">
                        <p>Ça ne s&apos;améliore pas ?&nbsp;
                            <span className='text-base font-normal text-slate-100/70'>
                                Si il n&apos;y pas d&apos;amélioration vous pouvez augmenter les doses dans la fourchette recommandée par le protocol.
                            </span>
                        </p>
                    </li>

                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>

            </div>

        </main>
    )
}