import { Metadata } from 'next';
import React from 'react';
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";

export const metadata: Metadata = {
    title: "Precautions",
    description: 'precautions page',
};

export default function Precautions(): JSX.Element {
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
                <h1 className='text-2xl md:text-3xl font-bold pl-4'>Precautions</h1>
            </div>

            <div className="w-full h-full mt-20 px-4 md:px-40 pb-10 animate-slice-appear">

            <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">⚠️ Précaution avec le CDS</h3>

            <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 px-10 py-8 rounded">
            
            <p className="text-justify">
                ⚠️ Il faut éviter d&apos;inhaler les émanations toxiques du CDS susceptibles de provoquer des lésions pulmonaires.
                Il faut soit le préparer en plein air, dehors, soit sous une hotte d&apos;aération.
            </p>

            <h3 className="text-xl font-serif text-red-400 my-4">Les aliments à éviter :</h3>

            <div className="flex-none md:flex md:flex-row md:items-center md:justify-around w-full bg-slate-300/10 p-4 shadow-out rounded">

                <div>
                <li className="ml-4">
                    <p>L&apos;alcool</p>
                </li>

                <li className="ml-4">
                    <p>Le café</p>
                </li>

                <li className="ml-4">
                    <p>Le chocolat</p>
                </li>

                <li className="ml-4">
                    <p>Les produits laitier</p>
                </li>

                <li className="ml-4">
                    <p>La vitamine C</p>
                </li>

                <li className="ml-4">
                    <p>Les anti-oxydants</p>
                </li>
                </div>

                <div>
                <li className="ml-4">
                    <p>Les œufs</p>
                </li>

                <li className="ml-4">
                    <p>Les viandes rouge</p>
                </li>

                <li className="ml-4">
                    <p>Les huiles végétales</p>
                </li>

                <li className="ml-4">
                    <p>Le Thé</p>
                </li>

                <li className="ml-4">
                    <p>Le Miel</p>
                </li>

                <li className="ml-4">
                    <p>Le sucre raffiné</p>
                </li>

                <li className="ml-4">
                    <p>Les boissons industrielles sucrées</p>
                </li>
                </div>

            </div>

            <p className="text-sm italic text-justify mt-8">
                Sinon, pour consommer l&apos;un des produits figurant ci-dessus, respecter un interval d&apos; 1 heure avec les prises de CDS.
            </p>

            </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>


            </div>

        </main>
    )
}